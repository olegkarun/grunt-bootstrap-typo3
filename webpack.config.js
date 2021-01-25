// import plugins
const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const ExcludeEntry = require("webpack-exclude-entry");
const {post} = require('jquery');


/**
 * Base webpack configuration
 *
 * @param env -> env parameters
 * @param argv -> CLI arguments, 'argv.mode' is the current webpack mode (development | production)
 * @returns object
 */
module.exports = (env, argv) => {
    let isDevMode = (argv.mode !== 'production');

    const cssLoaders = [
        {
            loader: MiniCssExtractPlugin.loader
        },

        {
            // translates CSS into CommonJS modules
            loader: 'css-loader',
            options: {
                url: true,
                sourceMap: true
            },
        },

        {
            // compiles Sass to CSS
            loader: 'sass-loader',
            options: {
                sourceMap: true,
            },
        }
    ];

    const postCssLoader = {
        // Run postcss 
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: [
                    [
                        "postcss-preset-env",
                        {
                            // Options browser support
                            browsers: ["ie > 9", "last 2 versions"],
                            stage: 2,
                            autoprefixer: {
                                grid: "autoplace"
                            }
                        },
                    ],
                ],
            },
            sourceMap: true,
        }
    };

    const entries = {
      "app": "./js/app.js",
      "svg": "./js/svg.js",
    }

    if (!isDevMode) {
      cssLoaders.splice(2, 0, postCssLoader);
      entries["rte"] = "./scss/rte.scss";
    }

    let config = {
        // enable development source maps
        // * will be overwritten by 'source-maps' in production mode
        devtool: isDevMode ? 'inline-source-map' : false,

        mode: isDevMode ? 'development' : 'production',

        stats: {
            warnings:false
        },
        

        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        },

        // absolute path to the base directory
        context: path.resolve(__dirname, "src"),

        // development server with hot-reload
        devServer: {
            // if not set use from output settings
            publicPath: '/dist/',
            watchContentBase: true,
            compress: true,
            hot: true,
            historyApiFallback: {index: 'index.html'},
            contentBase: path.join(__dirname, 'dist')
        },

        // entry files to compile (relative to the base dir)
        entry: entries,

        // path to store compiled JS bundle
        output: {
            // bundle relative name
            filename: "js/[name].js",
            // base build directory
            path: path.resolve(__dirname, "dist"),
            // path to build relative asset links
            publicPath: "/dist/"
                    // works with html-plugin for prefix resources path ?
        },

        // plugins configurations
        plugins: [
            new RemoveEmptyScriptsPlugin(),

            //save compiled SCSS into separated CSS file
            new MiniCssExtractPlugin({
                filename: "css/[name].build.css",
                ignoreOrder: false, // Enable to remove warnings about conflicting order
            }),

            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: '../index.html',
                title: "Project Name",
                inject: "body",
                excludeChunks: ['svg']    // also we need to get rid of the injected svg.js in the index.html file
            }),

            // we need to get rid of the generated svg.js file in dist because we use extract: true for SVG sprite
            new ExcludeEntry([/svg\.js/]),

            new SpriteLoaderPlugin(),

            // copy static assets directory
            new CopyPlugin({
                patterns: [
                    {from: "static", to: "static", noErrorOnMissing: true},
                ],
            }),

            // provide jQuery and Popper.js dependencies
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            }),
        ],

        // production mode optimization
        optimization: {
            minimize: isDevMode ? false : true,
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: false
                }),
                // new CssMinimizerPlugin(),
                new OptimizeCSSAssetsPlugin({
                    cssProcessorPluginOptions: {
                        preset: ['default', {discardComments: {removeAll: true}}],
                    }
                })
            ],
        },

        // custom loaders configuration
        module: {
            rules: [
                // styles loader
                {
                    test: /\.(sa|sc|c)ss$/,
                    exclude: /node_modules/,

                    use: cssLoaders
                },


                // js loader
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {targets: "defaults"}]
                            ],
                            plugins: ['@babel/plugin-transform-runtime']
                        }
                    }
                },

                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'svg-sprite-loader',
                            options: {
                                // add sprite file for JS injection src/js/services/svginject.js
                                extract: true,
                                spriteFilename: './img/icons.svg'
                            }
                        },
                        'svg-transform-loader',
                        'svgo-loader'
                    ]
                },

                // images loader
                {
                    test: /\.(png|jpe?g|gif)$/,
                    rules: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]",
                                outputPath: "./img/",
                                emitFile: true,
                                esModule: false
                            }
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                disable: isDevMode,
                                mozjpeg: {
                                    progressive: true,
                                    quality: 65
                                },
                                pngquant: {
                                    quality: '65-90',
                                    speed: 4
                                },
                                optipng: {enabled: false},
                                gifsicle: {interlaced: false},
                                webp: {quality: 75}
                            }
                        },
                    ],
                },

                // fonts loader @dont work
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]",
                                outputPath: "./fonts/",
                                emitFile: true,
                                esModule: false
                           }
                        },
                    ],
                },
            ]
        },
    };

    // PRODUCTION ONLY configuration
    if (!isDevMode) {
        config.plugins.push(
                // clean 'dist' directory
                new CleanWebpackPlugin(),
                );
    }

    return config;
};
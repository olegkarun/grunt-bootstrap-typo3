// import plugins
const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const CopyPlugin = require('copy-webpack-plugin');

/**
 * Base webpack configuration
 *
 * @param env -> env parameters
 * @param argv -> CLI arguments, 'argv.mode' is the current webpack mode (development | production)
 * @returns object
 */
module.exports = (env, argv) => {
    let isProduction = (argv.mode === 'production');

    let config = {
        // absolute path to the base directory
        context: path.resolve(__dirname, "src"),

        // development server with hot-reload
        devServer: {
            publicPath: '/dist', // если не указать использует эту же настройку из output
            watchContentBase: true,
            compress: true,
            historyApiFallback: {index: 'index.html'},
            contentBase: path.join(__dirname, 'dist')
        },

        // entry files to compile (relative to the base dir)
        entry: [
            "./js/app.js",
            "./js/svg.js",
            "./scss/rte.scss"
        ],

        // enable development source maps
        // * will be overwritten by 'source-maps' in production mode
        devtool: "eval-cheap-source-map",

        // path to store compiled JS bundle
        output: {
            // bundle relative name
            filename: "js/app.js",
            // base build directory
            path: path.resolve(__dirname, "dist"),
            // path to build relative asset links
            publicPath: "/dist"                         // работает в связке с html-плагином для добавления префикса в пути до ресурсов
        },

        // plugins configurations
        plugins: [
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
            minimize: true, // swicher for prod                                                  
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
                    use: [
                        // MiniCssExtractPlugin.loader,
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'css/[name].build.css',

                            }
                        },
                        {
                            loader: 'extract-loader'
                        },
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            // Run postcss actions
                            loader: 'postcss-loader',
                            options: {
                                // `postcssOptions` is needed for postcss 8.x;
                                // if you use postcss 7.x skip the key
                                postcssOptions: {
                                    // postcss plugins, can be exported to postcss.config.js
                                    plugins: function () {
                                        return [
                                            require('autoprefixer')
                                        ];
                                    }
                                }
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true            // добавляет в соурсмапы импорты scss-файлов в фалы стилей
                            }
                        }
                    ],
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
                        {loader: 'svg-sprite-loader', options: {extract: true, spriteFilename: "sprite.html"}
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
                                name: "img/[name].[ext]"
                            }
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                disable: !isProduction,
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
                // fonts loader
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "fonts/[name].[ext]"
                            }
                        },
                    ],
                },
            ]
        },
    };

    // PRODUCTION ONLY configuration
    if (isProduction) {
        config.plugins.push(
                // clean 'dist' directory
                new CleanWebpackPlugin()
                );
    }

    return config;
};
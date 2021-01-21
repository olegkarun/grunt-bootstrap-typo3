`https://github.com/manchenkoff/webpack-bootstrap`

# Webpack Bootstrap 4 template

### Description

This project contains preconfigured Webpack 5 to work with the following tasks:

- Compile `SCSS` to `CSS`
- Optimize images (`*.png`, `*.jpeg`, `*.gif`)
- Create SVG Sprite (js or html file)
- Fonts loader
- Automatic copy `static` directory to the `dist` directory
- Production optimization (styles, JavaScript, images)
- Build source maps

This build need copy to `public/typo3conf/ext/theme/Resources/Public/assets` and work as normal from this directory
Backend will be include assets from this folder

### Includes

- Bootstrap 4 (SCSS, JS)
- jQuery 
- Popper

#### Custom Includes
- img.lazyload @todo
- lightbox @todo
- aos.next (css3 animation) @todo

### Installation

- Execute a command from the root directory
```
npm install
```
- Use '`index.html`' as home page
- Write Your own JavaScript in the file: `src/js/app.js`
- Also Your styles may be placed in the SCSS file: `src/scss/app.scss`
- Then run the following command to build `dev` bundle:
```
npm run build
``` 

### Project structure

- **src**: Project sources root
    - **img**: Images and icons used in your styles
    - **js**: JavaScript code-base for your application
    - **scss**: Styles sources (may contain structure what you like)
    - **svg**: Drop svg icon here to get in svg sprite `<svg><use xlink:href="#icon-%filename%"></use></svg>`
    - **static**: Images and media-files which uses statically (will be copied to the `dist` directory), ex: uses in the HTML

### Usage
```
npm install
npm run build
npm run start
```

### Tasks

- Build sources - ```npm run build```
- Create an html sprite for SVG - ```npm run sprite```
- Start file watcher for recompiling - ```npm run watch```
- Start webpack dev server - ```npm run start```
- Build sources for production (**with optimization**) - ```npm run production```
- Clean '`dist`' folder - ```npm run clear```



### Configs

-  `webpack.config.js` - main config
-  `webpack.config(2).js` - temporal example - to run ```webpack --mode=development --progress --config='./webpack.config('2').js```


### JS Components
- LazySizes - [https://github.com/aFarkas/lazysizes]
- animate.style + AOS [https://michalsnik.github.io/aos/,https://animate.style/]

For customization please use `src/sass/_components` and `src/js/services`
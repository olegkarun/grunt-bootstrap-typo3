/*
 * Description logic
 * Steps:
 * 1. 'svgstore' task will create sprite icons.svg
 * 2. 'svginjector' task will build from sprite.svg icons.js
 * 3. 'uglify' task will minify and move icons.js to /dist/js/icons.min.js
 */

module.exports = {
    icons: {
        files: {
            '<%= global.distPath %>/js/sprite.min.js': ['<%= global.distPath %>/svg/sprite.svg']
        },
        options: {
            container: '#svg-icons'
        }
    }
};

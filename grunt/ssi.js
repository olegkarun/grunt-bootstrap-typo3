/*
 * Parse very basic server-side includes to generate HTML https://github.com/leegee/grunt-ssi
 * When 'npm run server'
 * files from './html' fodler will be builded in './dist' folder
 * Open http://localhost/dist/ to look and work
 * 
 */

(function () {
    module.exports = {
        server: {
            options: {
                cache: 'all',
                ext: '.html',
                baseDir: './html'
            },
            
            files: [{
                    expand: true,
                    cwd: 'html',
                    src: ['*.html'],
                    dest: 'dist'
            }]
        }
    };
}
)(); 
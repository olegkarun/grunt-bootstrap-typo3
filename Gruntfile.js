(function () {
    module.exports = function (grunt) {
        
        const sass = require('node-sass');
        require('time-grunt')(grunt);
        
        global.distPath = './dist';
        global.srcPath = './src';
        
        require('load-grunt-config')(grunt, {
            jitGrunt: true,
            staticMappings: {
                copy: 'grunt-contrib-copy'
            } 
        });
    };
}
)(); 

//https://www.learnwithjason.dev/blog/learn-rollup-js/
//https://lazamar.github.io/up-and-running-with-rollup-js-in-gulp-grunt-and-native-js-api/
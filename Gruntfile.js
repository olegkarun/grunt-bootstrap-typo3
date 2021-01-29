(function () {
    module.exports = function (grunt) {
        
        const sass = require('node-sass');
        require('time-grunt')(grunt);
        
        require('load-grunt-config')(grunt, {
            jitGrunt: true
        });
    };
}
)(); 
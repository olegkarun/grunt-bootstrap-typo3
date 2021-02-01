

(function () {
    'use strict';

    var listfiles = {
        '<%= global.distPath %>/js/app.min.js': [
            '<%= global.distPath %>/js/app.min.js'
        ],
        '<%= global.distPath %>/js/sprite.min.js': [
           '<%= global.distPath %>/js/sprite.min.js'
        ]        
    };

    module.exports = {
        prod: {
            options: {
                beautify: false,
                sourceMap: false
            },

            files: [listfiles]
        }
    };
}
)(); 
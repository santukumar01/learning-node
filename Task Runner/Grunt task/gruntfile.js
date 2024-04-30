const { file } = require("grunt");

module.exports = function (grunt) {

    // config tasK
    grunt.initConfig({
        // specify task
        uglify: {
            target: {
                files: {
                    "desc/js/main.min.js": ["src/js/*.js"] //all files inside js folder is input
                    // "desc/js/main.min.js" : ["src/js/index.js"]  //hardconded value
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/css', // source directory
                    src: ['*.css', '!*.min.css'], // source files
                    dest: 'desc/css', // destination directory
                    ext: '.min.css' // extension for minified files
                }]
            }
        }

    })


    //    load libarries  // for connnection the plgins to this file
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // setting up the default Taks
    // The name "default" is special in Grunt, as it represents the default task that is executed when you run Grunt without specifying any task name.
    grunt.registerTask('default', ['uglify', "cssmin"])

}
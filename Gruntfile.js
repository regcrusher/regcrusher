module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bower_concat: {
            all: {
                dest: 'dist/js/bower.js',
                exclude: ['animate.css'],
                dependencies: {
                    'underscore': 'jquery'
                }
            }
        },

        jshint: {
            all: ['Gruntfile.js', 'js/regcrusher.js', 'js/controller.js']
        },

        uglify: {
            build: {
                files: [{
                    'dist/js/functions.min.js': 'js/functions.js',
                    'dist/js/directives.min.js': 'js/directives.js',
                    'dist/js/regcrusher.min.js': 'js/regcrusher.js',
                    'dist/js/controller.min.js': 'js/controller.js',
                    'dist/js/bower.min.js': 'dist/js/bower.js'
                }],


                options: {


                    mangle: true,
                    beautify: false,
                    sourceMap: true,
                    compress: true
                }
            }
        },

        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },

        // sass: {
        //     dist: {
        //         files: [{
        //             expand: true,
        //             cwd: 'scss',
        //             src: ['*.scss'],
        //             dest: 'css',
        //             ext: '.css'
        //         }],
        //         sourcemap: true,
        //         compass: true,


        //     }
        // },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'img/build/'
                }]
            }
        },

        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['jshint', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['scss/*.scss'],
                tasks: ['compass'],
                options: {
                    spawn: false,
                }
            }
        }

    });

    // grunt.loadNpmTasks('grunt-bower');
    // grunt.loadNpmTasks('grunt-bower-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-compass');
    // grunt.loadNpmTasks('grunt-contrib-imagemin');
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-watch');


    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['jshint', 'uglify', 'compass', 'imagemin', 'watch']);

};
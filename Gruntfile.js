module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            default: {
                expand: true,
                flatten: true,
                src: ['bower_components/bootstrap/dist/css/bootstrap.min.css', 'bower_components/font-awesome/css/font-awesome.min.css'],
                dest: 'css/',
                filter: 'isFile'
            },
        },
        sass: { // Task
            dev: { // Target
                options: { // Target options
                    style: 'expanded'
                },
                files: {
                    "css/regcrusher.css": "scss/regcrusher.scss",
                }
            },
            dist: { // Target
                options: { // Target options
                    style: 'compressed'
                },
                files: {
                    "css/regcrusher.min.css": "scss/regcrusher.scss",
                }
            }
        },
        postcss: {
            options: {
                map: {
                    inline: false
                },
                processors: [
                    require('autoprefixer-core')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'css/*.css'
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true,
                    force: true
                }
            }
        },
        uglify: {
            dev: {
                files: {
                    'js/regcrusher.min.js': ['js/regcrusher.js'],
                },
                options: {
                    sourceMap: true,
                    mangle: false,
                }
            },

        },
        watch: {
            scripts: {
                files: ['js/src/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                },
            },
            styles: {
                files: ['scss/*.scss', /*'less/*.less',*/ /*'css/redford.css', 'css/redford.min.css'*/ ],
                tasks: ['sass:dev', /*'less',*/ 'postcss'],
                options: {
                    spawn: true
                }
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['copy', 'jshint', 'uglify', 'sass', 'postcss', 'watch']);

};
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            src: ['src/js/**/*.js',
    '!src/js/_bower.js']
        },
        bower_concat: {
            all: {
                dest: {
                    'js': 'src/js/_bower.js',
                    'css': 'src/scss/_bower.scss'
                },
                mainFiles: {
                    bootstrap: [
                        'dist/js/bootstrap.js',
                        'dist/css/bootstrap.css'
                    ],
                    "ui.bootstrap": [
                      'src/typeahead/typeahead.js',
                      'src/typeahead/typeahead.css',              
                    ]
                },
                dependencies: {
                    bootstrap: ["jquery"]
                }
            },
        },
        sass: {
            expanded: {
                options: {
                    outputStyle: 'expanded'
                },
                files: {
                    'public/css/app.css': 'src/scss/app.scss'
                }
            },
            compressed: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'public/css/app.min.css': 'src/scss/app.scss'
                }
            }
        },
        concat: {
            dist: {
                src: ['src/js/_bower.js','src/js/app.js', 'src/js/**/*.js'],
                dest: 'public/js/app.js'
            }
        },
        uglify: {
            'public/js/app.min.js': 'public/js/app.js'
        },
        watch: {
            configFiles: {
                files: ['Gruntfile.js', 'package.json'],
                options: {
                    reload: true
                }
            },
            scss: {
                files: ['src/scss/**/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['jshint', 'concat', 'uglify'],
                options: {
                    livereload: true
                }
            },
            index: {
                files: ['public/index.html'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-concat');

    grunt.registerTask('default', ['jshint', 'bower_concat', 'sass', 'concat', 'uglify', 'watch']);
};

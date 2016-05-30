module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });
  grunt.registerTask('default', []);
};

grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  jshint: {
    src: ['src/js/**/*.js']
  },
});

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.registerTask('default', ['jshint']);

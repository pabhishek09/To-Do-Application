module.exports = function(grunt) {


  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

      jshint: {
      options: {
        reporter: require('jshint-stylish') 
      },
      build: ['Grunfile.js', 'js/**/*.js']
      },

      connect: {
        dev: {
          port: 9000
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-connect');
  
  grunt.registerTask('default', ['jshint', 'connect']);

};

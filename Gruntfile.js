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
      },

      karma: {  
        unit: {
          options: {
            frameworks: ['jasmine'],
            singleRun: true,
            browsers: ['PhantomJS'],
            files: [
              'bower_components/angular/angular.js',
              'bower_components/angular-mocks/angular-mock.js',
              'src/test/*.spec.js'
            ]
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-connect');  

  grunt.registerTask('default', ['jshint', 'connect']);
  grunt.registerTask('test', [  'jshint','karma']);

};

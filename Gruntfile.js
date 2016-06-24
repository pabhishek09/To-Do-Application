module.exports = function(grunt) {


  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

      jshint: {
      options: {
        reporter: require('jshint-stylish') 
      },
      build: ['Grunfile.js', 'src/js/*.js']
      },

      connect: {
        dev: {
          port: 9000
        }
      },

      includeSource: ({
          options: {
              basePath: 'src',
              baseUrl: 'src/'
          },
          dev: {
              files: {
                  'index.html' : 'index.html'
              }
          }
      }),

      karma: {  
        unit: {
          options: {
            frameworks: ['jasmine'],
            singleRun: true,
            browsers: ['PhantomJS'],
            files: [
              'bower_components/angular/angular.js',
              'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
              'bower_components/angular-mocks/angular-mocks.js',
              'bower_components/angular-route/angular-route.js',
              'bower_components/jquery/dist/jquery.js',
              'bower_components/bootstrap/dist/js/bootstrap.js',
              'src/js/*.js',
              'src/test/*.spec.js'
            ]
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-connect');  
  grunt.loadNpmTasks('grunt-include-source');

  grunt.registerTask('default', ['includeSource', 'connect']);
  grunt.registerTask('test', ['jshint','karma']);

};

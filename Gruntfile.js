module.exports = function(grunt) {


  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

      jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      build: ['Grunfile.js', 'dist/js/*.js']
      },

      connect: {
        dev: {
          port: 9000,
          base: 'dist'
        }
      },

      karma: {
        unit: {
          options: {
            frameworks: ['jasmine'],
            singleRun: true,
            browsers: ['PhantomJS'],
            files: [
              'dist/bower_components/angular/angular.js',
              'dist/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
              'dist/bower_components/angular-mocks/angular-mocks.js',
              'dist/bower_components/angular-route/angular-route.js',
              'dist/bower_components/jquery/dist/jquery.js',
              'dist/bower_components/bootstrap/dist/js/bootstrap.js',
              'dist/js/*.js',
              'dist/test/*.spec.js'
            ]
          }
        }
      },

    copy: {
      main: {
        expand: true,
        cwd: 'src',
        src: '**',
        dest: 'dist/',
      },
    }

  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-connect');

  grunt.registerTask('default', ['copy', 'connect']);
  grunt.registerTask('test', ['jshint','karma']);
};

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
    },

    uglify: {
      dev: {
        files: {
          'dist/js/main.min.js': ['src/js/app.js', 'src/js/controllers.js', 'src/js/services.js', 'src/js/directives.js', 'src/js/constants.js']
        }
      },
      tpls: {
        files: {
          'dist/js/bootstrap-tpls.min.js': ['dist/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js']
        }
      }
    }


  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['copy', 'connect']);
  grunt.registerTask('prod', ['copy', 'uglify', 'connect']);

  grunt.registerTask('test', ['jshint','karma']);
};

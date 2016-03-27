module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      temp: [
        'dist/js/libs.js',
        'dist/js/libs.min.js',
        'dist/js/scripts.js',
        'dist/js/scripts.min.js'
        ],
      all: ['dist/']
    },
    eslint: {
      dist: {
        src: ['js/**/*.js']
      }
    },
    concat: {
      scripts: {
        src: ['js/**/*.js', 'lib/angular/angular-locale_pt-br.js'],
        dest: 'dist/js/scripts.js'
      },
      libs: {
        src: [
          'lib/angular/angular.min.js',
          'lib/angular/angular-messages.min.js',
          'lib/angular/angular-route.min.js'
        ],
        dest: 'dist/js/libs.min.js'
      },
      all: {
        src: ['dist/js/libs.min.js', 'dist/js/scripts.min.js'],
        dest: 'dist/js/all.min.js'
      }
    },
    uglify: {
      scripts: {
        src: ['dist/js/scripts.js'],
        dest: 'dist/js/scripts.min.js'
      }
    },
    cssmin: {
      all: {
        src: ['lib/bootstrap/css/bootstrap.min.css', 'css/**/*.css'],
        dest: 'dist/css/styles.min.css'
      }
    },
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      views: {
        expand: true,
        cwd: 'view',
        src: ['*.htm'],
        dest: 'dist/view'
      }
    },
    copy: {
      all: {
        src: 'index-prod.htm',
        dest: 'dist/index.htm'
      }
    }

  })

  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['clean:all', 'eslint', 'concat:scripts', 'concat:libs', 'uglify', 'concat:all', 'cssmin', 'htmlmin', 'copy', 'clean:temp'])

}
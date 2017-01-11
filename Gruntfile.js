module.exports = function(grunt) {
  grunt.initConfig({

    less: {
      development: {
        files: {
          'dev/css/style.css': 'dev/less/style.less'
        }
      }
    },
    watch: {
      css: {
        files: 'dev/less/*.less',
        tasks: ['less'],
        options: {
          livereload: true,
        },
      },
    }
  });

  
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Default task(s).
  grunt.registerTask('default', ['less', 'watch']);

};
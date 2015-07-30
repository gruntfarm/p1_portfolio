module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            width: '480',
            suffix: '_small',
            quality: 50
          },{
            name: 'medium',
            width: '680',
            suffix: '_medium',
            quality: 65
          },{
            name: 'large',
            width: '1200',
            suffix: '_large',
            quality: 75
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img_src/',
          dest: 'img/'
        }]
      }
    },

    clean: {
      dev: {
        src: ['img'],
      },
    },

    mkdir: {
      dev: {
        options: {
          create: ['img'],
        },
      },
    },

    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'img_src/fixed/*.{gif,jpg,png}',
          dest: 'img/'
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
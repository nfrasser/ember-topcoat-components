module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= config.paths.demo %>',
      dest: '<%= config.paths.site %>',
      src: [
        '*.{ico,txt,png}',
        '.htaccess',
        'images/{,*/}*.{webp,gif}',
        'styles/fonts/*'
      ]
    }, {
      expand: true,
      cwd: 'vendor',
      dest: '<%= config.paths.site %>/vendor',
      src: [
        'topcoat/css/*.min.css',
        'topcoat/font/*.otf',
        'topcoat/img/*.svg'
      ]
    }]
  }
};

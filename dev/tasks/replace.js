module.exports = {
  demo: {
    options: {
      variables: {
        ember: 'vendor/ember/ember.js'
      }
    },
    files: [{
      src: '<%= config.paths.demo %>/index.html',
      dest: '.tmp/index.html'
    }]
  },
  site: {
    options: {
      variables: {
        ember: 'vendor/ember/ember.prod.js'
      }
    },
    files: [{
      src: '<%= config.paths.demo %>/index.html',
      dest: '.tmp/index.html'
    }]
  }
};

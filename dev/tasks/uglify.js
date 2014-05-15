module.exports = {
  min: {
    options: {
      banner: '<%= banner %>'
    },
    files: {
      '<%= config.paths.dist %>/scripts/ember-topcoat-components.min.js': [
        '.tmp/scripts/app-templates.js',
        '.tmp/scripts/app-scripts.js'
      ]
    }
  },
  max: {
    options: {
      banner: '<%= banner %>',
      beautify: true
    },
    files: {
      '<%= config.paths.dist %>/scripts/ember-topcoat-components.js': [
        '.tmp/scripts/app-templates.js',
        '.tmp/scripts/app-scripts.js'
      ]
    }
  }
};

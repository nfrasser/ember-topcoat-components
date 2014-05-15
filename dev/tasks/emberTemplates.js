module.exports = {
  app: {
    options: {
      templateBasePath: '<%= config.paths.app %>/templates/',
      preprocess: function (source) {
        return source.replace(/\s+/g, ' ');
      }
    },
    files: {
      '.tmp/scripts/app-templates.js': '<%= config.paths.app %>/templates/{,*/}*.hbs'
    }
  },
  demo: {
    options: {
      templateBasePath: '<%= config.paths.demo %>/templates/',
    },
    files: {
      '.tmp/scripts/demo-templates.js': '<%= config.paths.demo %>/templates/{,*/}*.hbs'
    }
  }
};

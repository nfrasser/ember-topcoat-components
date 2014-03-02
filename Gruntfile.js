// Generated on 2014-01-13 using generator-ember 0.8.0
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({
  port: LIVERELOAD_PORT
});
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // show elapsed time at the end
require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // configurable paths
  var appConfig = {
    app: 'src',
    demo: 'demo',
    docs: 'docs',
    dist: 'dist',
    site: '.tmp/dist'
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    config: appConfig,
    banner: [
      '/**',
      ' *  <%= pkg.title || pkg.name %> v<%= pkg.version %>',
      ' *  <%= pkg.description %>',
      ' *  <%= pkg.homepage %>',
      ' *  Made by <%= pkg.author %>',
      ' */\n'
    ].join('\n'),

    watch: {
      templates: {
        files: '<%= config.app %>/templates/**/*.hbs',
        tasks: ['emberTemplates:app']
      },
      scripts: {
        files: ['<%= config.app %>/scripts/{,*/}*.js'],
        tasks: ['neuter:app']
      },
      demoTemplates: {
        files: '<%= config.demo %>/templates/**/*.hbs',
        tasks: ['emberTemplates:demo']
      },
      demoStyles: {
        files: ['<%= config.demo %>/styles/{,*/}*.{scss,sass,css}'],
        tasks: ['compass:demo']
      },
      demoScripts: {
        files: ['<%= config.demo %>/scripts/{,*/}*.js'],
        tasks: ['neuter:demo']
      },
      demoReplace: {
        files: ['<%= config.demo %>/*.html'],
        tasks: ['replace:demo']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '.tmp/scripts/*.js',
          '.tmp/*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= config.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },

      demo: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, '.tmp'),
              mountFolder(connect, '.'),
              mountFolder(connect, appConfig.demo)
            ];
          }
        }
      },

      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              mountFolder(connect, 'test'),
              mountFolder(connect, '.tmp')
            ];
          }
        }
      },

      site: {
        options: {
          port: 9002,
          middleware: function (connect) {
            return [
              mountFolder(connect, appConfig.site)
            ];
          }
        }
      },


    },

    open: {
      demo: {
        path: 'http://localhost:<%= connect.demo.options.port %>',
         app: 'Google Chrome'
      },
      test: {
        path: 'http://localhost:<%= connect.test.options.port %>',
         app: 'Google Chrome'
      }
    },

    clean: {
      main: {
        files: [{
          dot: true,
          src: [
            '.tmp/**'
          ]
        }]
      },
      publish: {
        files: [{
          dot: true,
          src: [
            '.grunt/**'
          ]
        }]
      }
    },

    symlink: {
      demo: {
        src: 'vendor',
        dest: '.tmp/vendor'
      },
      test: {
        src: 'vendor',
        dest: 'test/vendor'
      }
    },


    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '{<%= config.app %>,<%= config.demo %>}/scripts/{,*/}*.js',
        '!{<%= config.app %>,<%= config.demo %>}/scripts/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },

    qunit: {
      all: {
        options: {
          urls: [
            'http://localhost:<%= connect.test.options.port %>/index.html'
          ]
        }
      }
    },

    compass: {
      options: {
        sassDir: '<%= config.demo %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= config.demo %>/images',
        javascriptsDir: '<%= config.demo %>/scripts',
        fontsDir: '<%= config.demo %>/styles/fonts',
        importPath: 'vendor',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        //sourcemap: true
      },
      dist: {
        options: {
          environment: 'production',
          //sourcemap: false,
          debugInfo: false

        }
      },
      demo: {
        options: {
          debugInfo: true
        }
      }
    },
    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
      dist: {}
    },*/

    // Uglify for dist
    uglify: {
      min: {
        options: {
          banner: '<%= banner %>'
        },
        files: {
          '<%= config.dist %>/scripts/ember-topcoat-components.min.js': [
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
          '<%= config.dist %>/scripts/ember-topcoat-components.js': [
            '.tmp/scripts/app-templates.js',
            '.tmp/scripts/app-scripts.js'
          ]
        }
      }
    },

    rev: {
      site: {
        files: {
          src: [
            '<%= config.site %>/scripts/{,*/}*.js',
            '<%= config.site %>/styles/{,*/}*.css',
            '<%= config.site %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
            '<%= config.site %>/styles/fonts/*'
          ]
        }
      }
    },

    useminPrepare: {
      html: '.tmp/index.html',
      options: {
        dest: '<%= config.site %>'
      }
    },

    usemin: {
      html: ['<%= config.site %>/{,*/}*.html'],
      css: ['<%= config.site %>/styles/{,*/}*.css'],
      options: {
        dirs: [
          '<%= config.site %>'
        ],
        assetDirs: [
          'vendor'
        ]
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.demo %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= config.site %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.demo %>/images',
          src: '{,*/}*.svg',
          dest: '<%= config.site %>/images'
        }]
      }
    },
    cssmin: {
      dist: {
        files: {
          '<%= config.site %>/styles/main.css': [
            '.tmp/styles/{,*/}*.css',
            '<%= config.demo %>/styles/{,*/}*.css'
          ]
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
          // https://github.com/config/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%= config.demo %>',
          src: '*.html',
          dest: '<%= config.site %>'
        }]
      }
    },

    replace: {
      demo: {
        options: {
          variables: {
            ember: 'vendor/ember/ember.js'
          }
        },
        files: [{
          src: '<%= config.demo %>/index.html',
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
          src: '<%= config.demo %>/index.html',
          dest: '.tmp/index.html'
        }]
      }
    },

    // Put files not handled in other tasks here
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.demo %>',
          dest: '<%= config.site %>',
          src: [
            '*.{ico,txt}',
            '.htaccess',
            'images/{,*/}*.{webp,gif}',
            'styles/fonts/*'
          ]
        }, {
          expand: true,
          cwd: 'vendor',
          dest: '<%= config.site %>/vendor',
          src: [
            'topcoat/css/*.min.css',
            'topcoat/font/*.otf',
            'topcoat/img/*.svg'
          ]
        }]
      }
    },

    concurrent: {
      demo: [
        'emberTemplates',
        'compass:demo'
      ],
      test: [
        'emberTemplates:app'
      ],
      dist: [
        'emberTemplates',
        'compass:dist',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },

    emberTemplates: {
      options: {
        templateName: function (sourceFile) {
          // Get rid of '{subfolder}/templates/' at the beginning
          return sourceFile.replace(/[^\.]*\/templates\//, '');
        },
        templateRegistration: function (name, contents) {
          contents = contents.replace(/[\t]+/g, ' ');
          return 'Em.TEMPLATES[\'' + name + '\'] = ' + contents + ';';
        },
      },
      app: {
        files: {
          '.tmp/scripts/app-templates.js': '<%= config.app %>/templates/{,*/}*.hbs'
        }
      },
      demo: {
        files: {
          '.tmp/scripts/demo-templates.js': '<%= config.demo %>/templates/{,*/}*.hbs'
        }
      }
    },
    neuter: {
      app: {
        src: '<%= config.app %>/scripts/tc.js',
        dest: '.tmp/scripts/app-scripts.js'
      },

      demo: {
        src: '<%= config.demo %>/scripts/app.js',
        dest: '.tmp/scripts/demo-scripts.js'
      }
    },

    'gh-pages': {
      options: {
        base: '.tmp/dist'
      },
      src: ['**']
    }

  });

  // Currently only the targets 'demo' and 'test' are supported
  grunt.registerTask('server', function (target) {

    var tasks = [];

    target = target || 'demo';

    tasks.push(
      'clean:main',
      'replace:demo',
      'concurrent:' + target,
      'neuter:app'
    );

    if (target === 'demo') {
      tasks.push('neuter:demo');
    }

    tasks.push(
      'symlink:' + target,
      'connect:' + target,
      'open:' + target,
      'watch'
    );

    grunt.task.run(tasks);

  });

  grunt.registerTask('test', [
    'clean:main',
    'replace',
    'concurrent:test',
    'neuter:app',
    'connect:test',
    'qunit'
  ]);

  grunt.registerTask('build', [
    'clean:main',
    'symlink:demo',
    'replace',
    'useminPrepare',
    'concurrent:dist',
    'neuter',
    'concat',
    'cssmin',
    'uglify',
    'copy',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('publish', [
    'clean:main',
    'build',
    'gh-pages',
    'clean:publish'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};

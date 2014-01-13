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
		app: 'app',
		demo: '.tmp/demo',
		docs: 'docs',
		dist: 'dist'
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
			emberTemplates: {
				files: '<%= config.app %>/templates/**/*.hbs',
				tasks: ['emberTemplates']
			},
			compass: {
				files: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
				tasks: ['compass:server']
			},
			neuter: {
				files: ['<%= config.app %>/scripts/{,*/}*.js'],
				tasks: ['neuter:app']
			},
			replace: {
				files: ['<%= config.app %>/*.html'],
				tasks: ['replace:app']
			},
			livereload: {
				options: {
					livereload: LIVERELOAD_PORT
				},
				files: [
					'.tmp/scripts/*.js',
					'.tmp/*.html',
					'{.tmp,<%= config.app %>}/styles/{,*/}*.css',
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
			livereload: {
				options: {
					middleware: function (connect) {
						return [
							lrSnippet,
							mountFolder(connect, '.tmp'),
							mountFolder(connect, appConfig.app)
						];
					}
				}
			},
			test: {
				options: {
					middleware: function (connect) {
						return [
							mountFolder(connect, '.tmp'),
							mountFolder(connect, 'test')
						];
					}
				}
			},
			demo: {
				options: {
					middleware: function (connect) {
						return [
							mountFolder(connect, appConfig.demo)
						];
					}
				}
			}
		},

		open: {
			server: {
				path: 'http://localhost:<%= connect.options.port %>',
				 app: 'Google Chrome'
			}
		},

		clean: {
			main: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'!<%= config.dist %>/.git*',
						'!<%= config.demo %>/.git*'
					]
				}]
			},
			server: '.tmp'
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: [
				'Gruntfile.js',
				'<%= config.app %>/scripts/{,*/}*.js',
				'!<%= config.app %>/scripts/vendor/*',
				'test/spec/{,*/}*.js'
			]
		},
		mocha: {
			all: {
				options: {
					run: true,
					urls: ['http://localhost:<%= connect.options.port %>/index.html']
				}
			}
		},
		compass: {
			options: {
				sassDir: '<%= config.app %>/styles',
				cssDir: '.tmp/styles',
				generatedImagesDir: '.tmp/images/generated',
				imagesDir: '<%= config.app %>/images',
				javascriptsDir: '<%= config.app %>/scripts',
				fontsDir: '<%= config.app %>/styles/fonts',
				importPath: 'app/vendor',
				httpImagesPath: '/images',
				httpGeneratedImagesPath: '/images/generated',
				httpFontsPath: '/styles/fonts',
				relativeAssets: false
			},
			dist: {},
			server: {
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
					'<%= config.dist %>/ember-topcoat-components.min.js': [
						'.tmp/scripts/compiled-templates.js',
						'.tmp/scripts/combined-scripts.js'
					]
				}
			},
			max: {
				options: {
					banner: '<%= banner %>',
					beautify: true
				},
				files: {
					'<%= config.dist %>/ember-topcoat-components.js': [
						'.tmp/scripts/compiled-templates.js',
						'.tmp/scripts/combined-scripts.js'
					]
				}
			}
		},

		rev: {
			dist: {
				files: {
					src: [
						'<%= config.dist %>/scripts/{,*/}*.js',
						'<%= config.dist %>/styles/{,*/}*.css',
						'<%= config.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
						'<%= config.dist %>/styles/fonts/*'
					]
				}
			}
		},
		useminPrepare: {
			html: '.tmp/index.html',
			options: {
				dest: '<%= config.demo %>'
			}
		},
		usemin: {
			html: ['<%= config.demo %>/{,*/}*.html'],
			css: ['<%= config.demo %>/styles/{,*/}*.css'],
			options: {
				dirs: ['<%= config.demo %>']
			}
		},
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= config.app %>/images',
					src: '{,*/}*.{png,jpg,jpeg}',
					dest: '<%= config.demo %>/images'
				}]
			}
		},
		svgmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= config.app %>/images',
					src: '{,*/}*.svg',
					dest: '<%= config.demo %>/images'
				}]
			}
		},
		cssmin: {
			dist: {
				files: {
					'<%= config.dist %>/styles/main.css': [
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
					cwd: '<%= config.app %>',
					src: '*.html',
					dest: '<%= config.demo %>'
				}]
			}
		},

		replace: {
			app: {
				options: {
					variables: {
						ember: 'vendor/ember/ember.js',
						ember_data: 'vendor/ember-data-shim/ember-data.js'
					}
				},
				files: [{
					src: '<%= config.app %>/index.html',
					dest: '.tmp/index.html'
				}]
			},
			dist: {
				options: {
					variables: {
						ember: 'vendor/ember/ember.prod.js',
						ember_data: 'vendor/ember-data-shim/ember-data.prod.js'
					}
				},
				files: [{
					src: '<%= config.app %>/index.html',
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
					cwd: '<%= config.app %>',
					dest: '<%= config.dist %>',
					src: [
						'*.{ico,txt}',
						'.htaccess',
						'images/{,*/}*.{webp,gif}',
						'styles/fonts/*'
					]
				}]
			}
		},
		concurrent: {
			server: [
				'emberTemplates',
				'compass:server'
			],
			test: [
				'emberTemplates',
				'compass'
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
					var templatePath = appConfig.app + '/templates/';
					return sourceFile.replace(templatePath, '');
				},
				templateRegistration: function (name, contents) {
					contents = contents.replace(/[\t]+/g, ' ');
					return 'Ember.TEMPLATES[\'' + name + '\'] = ' + contents + ';';
				},
			},
			dist: {
				files: {
					'.tmp/scripts/compiled-templates.js': '<%= config.app %>/templates/{,*/}*.hbs'
				}
			}
		},
		neuter: {
			app: {
				options: {
					filepathTransform: function (filepath) {
						return 'app/' + filepath;
					}
				},
				src: '<%= config.app %>/scripts/tc.js',
				dest: '.tmp/scripts/combined-scripts.js'
			}
		}
	});

	grunt.registerTask('server', function (target) {
		if (target === 'demo') {
			return grunt.task.run(['build', 'open', 'connect:demo:keepalive']);
		}

		grunt.task.run([
			'clean:server',
			'replace:app',
			'concurrent:server',
			'neuter:app',
			'connect:livereload',
			'open',
			'watch'
		]);
	});

	grunt.registerTask('test', [
		'clean:server',
		'replace:app',
		'concurrent:test',
		'connect:test',
		'neuter:app',
		'mocha'
	]);

	grunt.registerTask('build', [
		'clean:main',
		'replace:dist',
		'useminPrepare',
		'concurrent:dist',
		'neuter:app',
		'concat',
		'cssmin',
		'uglify',
		'copy',
		'rev',
		'usemin'
	]);

	grunt.registerTask('default', [
		'jshint',
		'test',
		'build'
	]);
};

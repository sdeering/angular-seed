/*
 * CleverStack.io
 * https://github.com/clevertech/cleverstack-angular-seed/
 *
 * Copyright (c) 2013 CleverTech.biz
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Grunt helpers
  require('time-grunt')(grunt);
  require('autostrip-json-comments');

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Settings
  var appSettings = require('./config/application.conf.json');

  // grunt.config.init({
  grunt.initConfig({

    // Set the application settings
    settings: appSettings,

    // Server config
    connect: {
      options: {
        hostname: '<%= settings.dev.hostname %>',
        port: '<%= settings.dev.port %>',
        livereload: '<%= settings.dev.liveReloadPort %>'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= settings.dev.dir %>'
          ]
        }
      },
      test: {
        options: {
          port: '<%= settings.test.port %>',
          livereload: false,
          base: [
            '.tmp',
            'test',
            '<%= settings.dev.dir %>'
          ]
        }
      },
      dist: {
        options: {
          port: '<%= settings.dist.port %>',
          base: '<%= settings.dist.dir %>',
          livereload: false,
          keepalive: true,
          middleware: function(connect, options) {
            var middlewares = [];
            var directory = options.directory || options.base[options.base.length - 1];
            if (!Array.isArray(options.base)) {
              options.base = [options.base];
            }
            options.base.forEach(function(base) {
              // Serve static files.
              middlewares.push(connect.static(base));
            });
            // Make directory browse-able.
            middlewares.push(connect.directory(directory));
            return middlewares;
          }
        }
      },
      coverage: {
        options: {
          base: '<%= settings.test.coverage.dir %>',
          directory: '<%= settings.test.coverage.dir %>',
          port: '<%= settings.test.coverage.port %>',
          keepalive: true,
          livereload: false
        }
      }
    },

    // Watch config
    watch: {
      js: {
        files: [
          '{.tmp,<%= settings.dev.dir %>}/scripts/**/*.js',
          '<%= settings.dev.dir %>/bower_components/sass-bootstrap/js/**/*.js'
        ],
        tasks: ['newer:jshint:all']
      },
      compass: {
        files: [
          '<%= settings.dev.dir %>/styles/**/*.{scss,sass}',
          '<%= settings.dev.dir %>/bower_components/sass-bootstrap/lib/**/*.{scss,sass}'
        ],
        tasks: ['compass:server', 'autoprefixer']
      },
      styles: {
        files: ['<%= settings.dev.dir %>/styles/**/*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          // '<%= watch.js.files %>',
          '<%= settings.dev.dir %>/**/*.html',
          '.tmp/styles/**/*.css',
          '<%= settings.dev.dir %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      gruntfile: {
        files: ['Gruntfile.js']
        // tasks: ['default']
      },
      jsUnitTest: {
        files: ['test/spec-unit/**/*.js']
        // tasks: ['newer:jshint:test', 'karma']
        // tasks: ['karma:unit']
      },
      protractor: {
        // files: ['<%= settings.dev.dir %>/scripts/**/*.js','test/spec-e2e/**/*.js'],
        files: ['test/spec-e2e/**/*.js'],
        tasks: ['protractor:singlerun']
      }
    },

    // jsHint config
    jshint: {
      options: {
        jshintrc: __dirname + '/.jshintrc',
        reporter: require('jshint-stylish'),
        force: true
      },
      all: [
        // 'Gruntfile.js',
        '<%= settings.dev.dir %>/scripts/**/*.js'
      ],
      test: {
        options: {
          jshintrc: __dirname + '/.jshintrc'
        },
        src: ['<%= settings.test.dir %>/**/*.js']
      }
    },

    // Vendor prefix config
    autoprefixer: {
      options: {
        browsers: ['last 1 version'] /* https://github.com/ai/autoprefixer#browsers */
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '**/*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // COMPASS config
    compass: {
      options: {
        sassDir: '<%= settings.dev.dir %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= settings.dev.dir %>/images',
        javascriptsDir: '<%= settings.dev.dir %>/scripts',
        fontsDir: '<%= settings.dev.dir %>/fonts',
        importPath: '<%= settings.dev.dir %>/bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/fonts',
        relativeAssets: false,
        assetCacheBuster: false
      },
      dist: {
        options: {
          generatedImagesDir: '<%= settings.dist.dir %>/images/generated'
        }
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    },

    // Clean config
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= settings.dist.dir %>/*',
            '!<%= settings.dist.dir %>/.git*'
          ]
        }]
      },
      server: '.tmp',
      docs: '<%= settings.docs.dir %>',
      coverage: '<%= settings.test.coverage.dir %>'
    },

    // Copy config
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= settings.dev.dir %>',
          dest: '<%= settings.dist.dir %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'bower_components/**/*',
            'images/**/*.{webp}',
            'fonts/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= settings.dist.dir %>/images',
          src: [
            'generated/*'
          ]
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= settings.dev.dir %>/styles',
        dest: '.tmp/styles/',
        src: '**/*.css'
      }
    },

    // Build config - REV (rename)
    rev: {
      dist: {
        files: {
          src: [
            '<%= settings.dist.dir %>/scripts/**/*.js',
            '<%= settings.dist.dir %>/styles/**/*.css',
            '<%= settings.dist.dir %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= settings.dist.dir %>/fonts/*'
          ]
        }
      }
    },

    // Build config - usemin
    useminPrepare: {
      html: '<%= settings.dev.dir %>/index.html',
      options: {
        dest: '<%= settings.dist.dir %>'
      }
    },
    usemin: {
      html: ['<%= settings.dist.dir %>/**/*.html'],
      css: ['<%= settings.dist.dir %>/styles/**/*.css'],
      options: {
        assetsDirs: ['<%= settings.dist.dir %>']
      }
    },

    // Build config - imagemin
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= settings.dev.dir %>/images',
          src: '**/*.{png,jpg,jpeg,gif}',
          dest: '<%= settings.dist.dir %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= settings.dev.dir %>/images',
          src: '**/*.svg',
          dest: '<%= settings.dist.dir %>/images'
        }]
      }
    },

    // Build config - htmlmin
    htmlmin: {
      dist: {
        options: {
          // Optional configurations that you can uncomment to use
          // removeCommentsFromCDATA: true,
          // collapseBooleanAttributes: true,
          // removeAttributeQuotes: true,
          // removeRedundantAttributes: true,
          // useShortDoctype: true,
          // removeEmptyAttributes: true,
          // removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%= settings.dev.dir %>',
          src: ['*.html', 'views/*.html', 'views/**/partials/*.html'],
          dest: '<%= settings.dist.dir %>'
        }]
      }
    },

    // Build config - Allow the use of non-minsafe AngularJS files.
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Build config - Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= settings.dist.dir %>/*.html']
      }
    },

    // Documentation config.
    docular: {
        docular_webapp_target: '<%= settings.docs.dir %>',
        showDocularDocs: '<%= settings.docs.showDocularDocs %>',
        showAngularDocs: '<%= settings.docs.showAngularDocs %>',
        groups: [
        {
            groupTitle: 'CleverStack Angular',
            groupId: 'cleverstack',
            groupIcon: 'icon-book',
            sections: [
                {
                    id: "api",
                    title: "API",
                    showSource: true,
                    docs: [
                        "api.doc"
                    ],
                    scripts: [
                      "app/scripts/"
                    ]
                }
            ]
        }
        ]
    },
    'docular-server': {
        port: '<%= settings.docs.port %>'
    },

    // unit testing config
    karma: {
      unit: {
        configFile: './config/spec-unit.conf.js',
        autoWatch: false,
        singleRun: true
      },
      unitAuto: {
        configFile: './config/spec-unit.conf.js',
        autoWatch: true,
        singleRun: false
      },
      unitCoverage: {
        configFile: './config/spec-unit.conf.js',
        autoWatch: false,
        singleRun: true,
        reporters: ['progress', 'coverage'],
        preprocessors: {
          'app/scripts/**/*.js': ['coverage'],
          'app/views/**/*.html': ['ng-html2js']
        },
        coverageReporter: {
          type : 'html',
          dir : '<%= settings.test.coverage.dir %>'
        }
      },
      travis: {
        configFile: './config/spec-unit.conf.js',
        autoWatch: false,
        singleRun: true,
        browsers: ['PhantomJS']
      }
    },

    // e2e protractor testing config
    protractor: {
      options: {
        configFile: "./config/spec-e2e.conf.js"
      },
      singlerun: {
        keepAlive: false
      },
      auto: {
        keepAlive: true,
        options: {
          args: {
            seleniumPort: 4444
          }
        }
      }
    },

    // Open config
    open: {
      dev: {
        path: 'http://<%= settings.dev.hostname %>:<%= settings.dev.port %>'
      },
      prod: {
        path: 'http://<%= settings.dev.hostname %>:<%= settings.dist.port %>'
      },
      docs: {
        path: 'http://<%= settings.dev.hostname %>:<%= settings.docs.port %>'
      },
      coverage: {
        path: 'http://<%= settings.dev.hostname %>:<%= settings.test.coverage.port %>'
      }
    },

    // Concurrent servers config
    concurrent: {
      servers: {
        tasks: [
          'server:dev',
          'server:dist',
          'server:docs',
          'server:test:unit',
          // 'server:test:e2e',
          'server:coverage'
        ],
        options: {
            logConcurrentOutput: true
        }
      },
      dev: [
        'watch:js',
        'watch:compass',
        'watch:styles',
        'watch:livereload',
        'watch:gruntfile'
      ],
      test: [
        'compass',
        'copy:styles'
      ],
      dist: [
        'compass:dist',
        'copy:styles',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },

    // Shell commands
    shell: {
      options: {
        stdout: true,
        async: false
      },
      // Install locally dev dependencies in package.json (node_modules/*)
      npm_install: {
        command: 'npm install'
      },
      // Install locally bower components (app/bower_components/*)
      bower_install: {
        command: 'bower install'
      },
      // Download latest version of selenium server
      // https://code.google.com/p/selenium/downloads/list
      // ALL -> http://selenium.googlecode.com/files/selenium-server-2.39.0.zip
      // JAR -> http://selenium.googlecode.com/files/selenium-server-standalone-2.39.0.jar
      selenium_install: {
        // todo: download selenium 2 .jar file based on environment
        command: ''
        // execOptions: {
        //   cwd: './test/selenium/'
        // }
      },
      // Download latest chrome driver
      // http://chromedriver.storage.googleapis.com/index.html
      // Win32 -> http://chromedriver.storage.googleapis.com/2.8/chromedriver_win32.zip
      // Linux32 -> http://chromedriver.storage.googleapis.com/2.8/chromedriver_linux32.zip
      // Linux64 -> http://chromedriver.storage.googleapis.com/2.8/chromedriver_linux64.zip
      // Mac32 -> http://chromedriver.storage.googleapis.com/2.8/chromedriver_mac32.zip
      chromedriver_install: {
        // todo: download chrome driver .exe based on environment
        command: ''
      },
      // Download latest version of phantomjs
      // http://phantomjs.org/download.html
      // Win -> https://phantomjs.googlecode.com/files/phantomjs-1.9.2-windows.zip
      // Mac -> https://phantomjs.googlecode.com/files/phantomjs-1.9.2-macosx.zip
      // Linux32 -> https://phantomjs.googlecode.com/files/phantomjs-1.9.2-linux-i686.tar.bz2
      // Linux64 -> https://phantomjs.googlecode.com/files/phantomjs-1.9.2-linux-x86_64.tar.bz2
      phantomjs_manual_install: {
        // todo: download phantomjs .exe based on environment
        command: ''
      },
      // Download latest version of protractor
      // You need to apply this patch to fix a known bug: https://github.com/angular/protractor/issues/85
      // https://github.com/vrtdev/protractor/commit/2f18b01378e4f054331df23ce536e4081ee1ccf0
      protractor_install: {
        // todo: apply patch to latest version of protractor
        command: ''
      },
      // Install ruby and compass
      // https://github.com/sdeering/cleverstack-angular-seed/blob/master/README.md#installing-ruby--compass
      compass_install: {
        // todo: install ruby and compass based on environment
        command: ''
      }
    }

  });


  /* -- SERVER TASKS ----------------------------------------------- */

  grunt.registerTask('server', 'Start up all servers.', [
    'concurrent:servers'
  ]);

  grunt.registerTask('server:dev', 'Start up the development live reload server.', [
    'clean:server',
    'compass:server',
    'copy:styles',
    'autoprefixer',
    'connect:livereload',
    // 'concurrent:dev'
    'watch'
  ]);

  grunt.registerTask('server:test:unit', 'Start up the auto unit test server.', [
    'autotest:unit'
  ]);

  grunt.registerTask('server:coverage', 'Start up the unit test code coverage server.', [
    'connect:coverage'
  ]);

  grunt.registerTask('server:test:e2e', 'Start up the auto unit test server.', [
    'autotest:e2e'
  ]);

  grunt.registerTask('server:dist', 'Start up the production app preview server.', [
    'connect:dist',
    'open:dist'
  ]);

  grunt.registerTask('server:docs', 'Start up the api documentation server.', [
    'docular-server'
  ]);



  /* -- TEST TASKS ------------------------------------------------ */

  grunt.registerTask('test', 'Start up the auto unit test server.', [
    'autotest:unit'
  ]);

  grunt.registerTask('test:prepare', 'Prepare files for tests.', [
    'clean:server',
    'concurrent:test',
    'autoprefixer'
  ]);

  grunt.registerTask('test:unit', 'Single run of unit tests.', [
    'test:prepare',
    'karma:unit'
  ]);

  grunt.registerTask('autotest:unit', 'Start up the auto unit test server.', [
    // 'test:prepare',
    'karma:unitAuto',
    'watch:jsUnitTest'
  ]);

  grunt.registerTask('test:coverage', 'Run a test coverage report.', [
    // 'test:prepare',
    'karma:unitCoverage',
    'open:coverage',
    'connect:coverage'
  ]);

  grunt.registerTask('test:e2e', 'Single run of end to end (e2e) tests using protractor.', [
    'connect:livereload',
    'protractor:singlerun'
  ]);

  grunt.registerTask('autotest:e2e', 'Start up the auto end to end (e2e) test server using protractor.', [
    'protractor:auto',
    'watch:protractor'
  ]);

  grunt.registerTask('test:travis', 'Single run of unit tests for Travis CI.', [
    'test:prepare',
    'karma:travis'
  ]);

  /* -- BUILD TASKS ----------------------------------------------- */

  grunt.registerTask('build', 'Build a production ready app.', [
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngmin',
    'copy:dist',
    // 'cdnify',
    'cssmin',
    'uglify',
    'rev',
    'usemin'
  ]);


  /* -- DOCS TASKS ----------------------------------------------- */

  grunt.registerTask('docs:build', 'Build the api documentation.', [
    'clean:docs',
    'docular'
  ]);
  grunt.registerTask('docs', 'Build the docs and start the docs server.', [
    'docs:build',
    'server:docs'
  ]);


  /* -- INSTALL TASKS -------------------------------------------- */

  grunt.registerTask('install', 'Install stuff that is required for development servers.', [
    "shell:npm_install",
    "shell:bower_install",
    "shell:selenium_install",
    "shell:chromedriver_install",
    "shell:phantomjs_manual_install",
    "shell:protractor_install",
    "shell:compass_install",
    "build",
    "docs:build",
    "karma:unitCoverage"
  ]);


  /* -- DEFAULT TASK --------------------------------------------- */

  grunt.registerTask('default', 'Run all servers.', [
    'server'
  ]);

};

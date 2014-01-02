CleverStack Angular Seed [![Build Status](https://secure.travis-ci.org/sdeering/cleverstack-angular-seed.png?branch=master)](https://travis-ci.org/sdeering/cleverstack-angular-seed) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
====================



![CleverStack Angular Seed"](app/images/cleverstack-angular.png "CleverStack Angular Seed")


<blockquote>
CleverStack Angular Seed provides you with a cutting edge AngularJS development workflow. It's been designed to provide you with a super fast test driven front-end development lifecycle. Everything you need should be just one command away, if it's not please open an issue or fork and submit a pull request.
</blockquote>



## Features

These are the main features provided by this front-end development workflow:

* **Development Server** - Live Reload with jsHint, COMPASS, SASS support
* **Unit Testing Server** - Run fully automated unit tests with Karma and Jasmine support.
* **E2E Testing Server** - Run fully automated E2E tests with Selenuim WebDriver & Protractor.
* **Browserless Testing** - Perform tests without using a browser with PhantomJS.
* **Code Coverage Reports** - Generate code coverage reports to see what code needs tests written.
* **API Documentation Server** - Generate AngularJS API documentation with Docular.
* **Production Preview Server** - Quickly view your latest production build.

### Coming soon

* LESS, CoffeeScript support.
* Mocha support.
* Sourcemaps support.
* HTML5 push state.
* More configurations to your default development server.


It uses the following web technologies:

* [Grunt](http://gruntjs.com/) - for task automation.
* [Bower](http://bower.io/) - for JS dependency management.
* [Node/NPM](https://npmjs.org/) - for JS package management.

It also includes out of the box:

* [Bootstrap 3](http://getbootstrap.com/) - the most popular front-end framework.
* [COMPASS](http://compass-style.org/) - the most feature full CSS framework.

## Install

To install the angular app run the following commands:

1. `$ git clone https://github.com/clevertech/cleverstack-angular-seed.git my-angular-app`
2. `$ cd my-angular-app`
3. `$ grunt install`
4. `$ grunt server`

If you get stuck with your installation check out the trobleshooting section below.


## Prerequisites

1. [NodeJS & NPM](http://nodejs.org) (v0.8+)

The following should be installed when you run the `$ grunt install` command.
* [Ruby & COMPASS](https://github.com/sdeering/cleverstack-angular-seed/blob/master/README.md#installing-ruby--compass)
* [Bower](https://github.com/sdeering/cleverstack-angular-seed/blob/master/README.md#installing-bower)
* [Selenium WebDriver & Protractor](https://github.com/sdeering/cleverstack-angular-seed/blob/master/README.md#installing-bower)


## Commands

Run these commands from your favourite terminal:

`$ grunt server` - start dev server, docs server, prod preview server & auto unit testing server. Use this when doing everyday developing while auto testing alongside

`$ grunt server:dev` - start only the dev server

`$ grunt server:test` - start only the auto unit test server

`$ grunt server:dist` - start only the prod preview server

`$ grunt server:docs` - start only the docs server

`$ grunt test` - start the auto unit test server, alias for 'grunt autotest:unit'

`$ grunt test:unit` - single run on unit tests

`$ grunt test:coverage` - run a unit test coverage report

`$ grunt test:e2e` - single run of e2e tests

`$ grunt autotest:e2e` - start the auto e2e unit test server

`$ grunt build` - build a production ready app

`$ grunt docs` - build the docs and start the docs server

`$ grunt docs:build` - build the api documentation



## Configuration

This is a list of the files which are configurable:

`config/application.conf.json` - settings for setting application

`config/environment.conf.json` - settings for setting up your environment

`config/spec-unit.conf.json` - settings for your unit tests

`config/spec-e2e.conf.json` - settings for your e2e tests

`Gruntfile.js` - core grunt task runner be sure you know what your doing when changing this!

`bower.json` - add JavaScript dependencies

`package.json` - add NPM package dependencies



## Directory

This is the main directory structure.

<pre>
├── app/                // app folder contains your angular app development files
│
├── config/             // config folder contains all configs for your app
│
├── dist/               // dist folder contains the latest production build of your app
│
├── test/               // test folder contains all your app test specs
│
├── .bowerrc            // stores bower appPath
├── .gitignore          // files to be ignored by git
├──  .jshintrc          // settings for your jshint checks
├── .travis.yml         // app CI build status
├── api.doc             // used solely for api doc generation
├── bower.json          // app javascript dependencies
├── Gruntfile.js        // master grunt configuration for running tasks
├── package.json        // app dependencies / npm packages
├── LICENSE             // app license
├── README.md           // app readme
</pre>


## Servers

### Development Server
Runs on default port: `9000`

This provides you with a nicely automated workflow with AngularJS. On save it provides live page reload, jshint code syntax checking, source maps support, SASS file compilation & autoprefixing of css styles for legacy browsers. You can also view your Bootstrap 3 UI on this page with live reload `:9000/ui.html`.

### API Documentation Server
Runs on default port: `9999`

This provides API documentation for your AngularJS app.

### Unit Testing Server
Runs on default port: `9090`

This provides automated unit testing for AngularJS using Karma test runner. You can also run unit tests for Bootstrap 3 `bower_components/sass-bootstrap/js/tests/`.

### Unit Testing Code Coverage Server
Runs on default port: `5555`

This provides code coverage reports for unit tests which are served off port 5555.

### End-to-end Testing Server
Runs on default port: `9000`

This uses Selenuim WebDriver & AngularJS Protractor Framework to automate actual browser e2e testing.

### Production Preview Server
Runs on default port: `9009`

This provides a quick way to view your latest production build.



## API Documentation

### Building Your Documentation
You can build the API documentation for your app by running the `grunt docs:build` command. You can then instantly view the `/docs` using the API Documentation Server on port `9999`. The documentation is built using [Docular](http://grunt-docular.com/).


## Code Coverage Reports

### Running Unit Testing Code Coverage Reports
You can build unit test coverage reports for the browsers specified in your `config/spec-unit.conf.js` by running the 'grunt test:coverage' command. This will generate the reports in the `/test/coverage` directory. You can then instantly view the reports using the Code Coverage Server on port `5555`. The test coverage report is built using [Karma](http://karma-runner.github.io/) and [Istanbul](https://npmjs.org/package/istanbul).


## Deployment

### Building A Production Ready Application
You can build a production ready version of your app in seconds by running the `grunt build` command. This will process any abstractions your using such as coffeescript, minify all your assets, provide image compression and place everything into the `/dist` directory. This can then instantly view the app using the production preview server on port `9009`. You can take this dist folder and serve it anywhere as normal.


## Development Tips

* Change your core application Bootstrap 3 styles & scripts here:

   `app/bower_components/sass-bootstrap/js/*.js`

   `app/bower_components/sass-bootstrap/lib/*.scss`


* Add additional styles here:

   `app/styles/*.scss`


* Write unit tests for every piece of code you write and have the unit test server running in the background to automatically test your code. As a developer it is your responsiblity to test the code you write. And this way you can prove it works!

* Only write e2e tests for things that truely need it. If you are unsure what to e2e for then read up on some AngularJS testing techniques.


## Troubleshooting

### Installing NodeJS & NPM

If your having problems installing NodeJS we recommend taking a look at the following:

* http://www.joyent.com/blog/installing-node-and-npm
* https://gist.github.com/isaacs/579814


### Installing Bower

You can install bower using NPM as follows:

`$ npm install -g bower`

Then install your dependencies like so:

`$ bower install`

The path the dependencies are installed to is specified in `.bowerrc`. We recommend not changing this as it will alter settings your development server and build process.


### Installing Ruby & COMPASS

The easiest way to install COMPASS is through Ruby Gem using RVM.

Using RVM:

<pre>
$ curl -L https://get.rvm.io | bash -s stable --rails --autolibs=enabled --ruby=1.9.3
$ . ~/.profile
$ source /etc/profile.d/rvm.sh
$ rvm install 2.0.0
$ rvm use 2.0.0
$ ruby -v
</pre>

**Linux/Debian** you can run this to install ruby:

<pre>
$ sudo apt-get install ruby
$ ruby -v
</pre>

**Windows** users can opt to use the one click installer: http://rubyforge.org/projects/rubyinstaller/

Then install COMPASS through ruby gem:

<pre>
$ gem update --system
$ gem install compass
</pre>


### Installing Selenium, WebDriver & Protractor

The easiest way is to install Selenium Server using the [Protractor NPM package](https://github.com/angular/protractor):

`$ npm install -g protractor`

**Note:** You may need to update the [latest Chrome Driver](http://chromedriver.storage.googleapis.com/index.html) location in `config/spec-e2e.conf.json` depending on the OS your running. When you download it, extract and rename ending in .exe so will be an application.

<pre>
chromeDriver: './test/selenium/chromedriver-win32' // Windows
chromeDriver: './test/selenium/chromedriver-mac32' // Mac
chromeDriver: './test/selenium/chromedriver-linux32' // Linux
</pre>


The latest version of Selenium 2 comes with web driver. It's faster if you have the Selenium Server running in a sepereate terminal (optional) you can do this running this command:

`$ cd <project dir>`
`$ webdriver-manager start`

Then you can run the following in your main terminal to get the automated e2e testing running.

`$ grunt autotest:e2e`


**OR install them manually**

You can manually download the [latest Selenium Server .jar](https://code.google.com/p/selenium/downloads/list) file and the [latest Chrome Driver](http://chromedriver.storage.googleapis.com/index.html). Put the files into `/test/selenium/` and update your `config/spec-e2e.conf.json` with the following:

<pre>
seleniumServerJar: '../test/selenium/selenium-server-standalone-2.39.0.jar',   //absolute path or relative to project.
chromeDriver: '../test/selenium/chromedriver'
</pre>


## FAQ - Grunt

**Where do I add new grunt tasks?**

At the moment you will need to extend the Gruntfile.js. You can add options in the config/*.conf.js files to make life easier when developing.

**Does grunt support HTTPS?**

Yes but you will need to make some modifications to the server options in the Gruntfile.js file. See here for details: https://github.com/gruntjs/grunt-contrib-connect


## FAQ - Unit & E2E Testing

**When I click E2E test from homepage it's blank**

This page has been included to show you the Selenium Server Hub you'll need the [webdriver manager running in a seperate console](https://github.com/sdeering/cleverstack-angular-seed#installing-selenium-webdriver--protractor) to see it in action. of The selenium webdriver & protractor E2E testing is constantly improving so expect this to evolve over the coming months.

**Does grunt support HTTPS?**

Yes but you will need to make some modifications to the server options in the Gruntfile.js file. See here for details: https://github.com/gruntjs/grunt-contrib-connect

**When running karma unit tests I'm getting an error from the browser, how can I debug it?**

Go to the captured browser and click the "DEBUG" button (or open http://localhost:9876/debug.html) and use the web inspector to see what's going on. (You may need to refresh the debug.html page for it to kick in once the web inspector is open.)

**Can karma run qunit, jasmine, mocha/chai out of the box or are additional grunt plugins required?**

Karma is test framework/syntax agnostic. We use jasmine as default but then are all supported.
links: http://karma-runner.github.io/0.10/intro/faq.html, https://github.com/karma-runner/karma/tree/master/test/e2e

**Why did you choose mocha as default unit testing framework?**

We could have chosen any of them as a matter of preference such as jamine or qunit. We chose Mocha because we want to keep it consistent with testing our front-end AngularJS and back-end NodeJS. Mocha is the "new kid on the block" and lots of new projects are starting to use it. Karma does support jasmine quite well. Join the debate https://github.com/yeoman/yeoman/issues/117 And if Paul Irish says it's good then I trust in my idols! :D "The reasons you give for dropping jasmine are sound.Let's do it". - Paul Irish

**Why both Karma and Protractor? When do I use which?**

Karma is a great tool for unit testing, and Protractor is intended for end to end or integration testing. This means that small tests for the logic of your individual controllers, directives, and services should be run using Karma. Big tests in which you have a running instance of your entire application should be run using Protractor. Protractor is intended to run tests from a user's point of view - if your test could be written down as instructions for a human interacting with your application, it should be an end to end test written with Protractor. Source: [Protractor Docs FAQ](https://github.com/angular/protractor/blob/23f84b77c5f1842923302e39cadfef06da0517b0/docs/faq.md)


## FAQ - SASS & Boostrap 3

**Does it support normal CSS as well as SASS?**

Yes. And it uses autoprofixer so you don't need to worry about adding legacy browser prefixes. It does this all for you - browsers controlled in the config.

**How do I ensure my changes to Bootstrap 3 components persist through Git?**

If you want to make changes to Boostrap Source files you can add this line to the .gitignore file so your changes persist through Git for the project.

** Why did you choose SASS over say LESS?**

SASS is better than LESS for many different reasons. If you would like to know more see [SASS vs LESS](http://css-tricks.com/sass-vs-less/).


<pre>
!app/bower_components/sass-bootstrap
</pre>


## FAQ - Bower

**Is bower_components required in my dist directory?**

Currently yes. We are looking at removing it in the future to make the dist directory leaner.


## FAQ - Misc

**What is .editorconfig used for?**

This file is used to specify consistent coding styles between the developers on your project. Read more at http://editorconfig.org



## License

CleverStack is copyright of [Clevertech](http://clevertech.biz) and is licensed under the MIT License.

-----
I'm documentation! Sometimes I fail. If you see this please fix me and submit a pull request =).

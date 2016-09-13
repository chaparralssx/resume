# Resume Project

This is a Node.js, Hapi.js, and Angular based resume.

## Getting Started

The following software must be installed for development. Assumes you already have Git installed.

- Install Node.js and the npm package manager. After installation, run the following command to install the packages for this project.

```bash
$ npm install
```

- Install the [Bower Package Manager](http://bower.io/) by using npm. Bower is used to manage frontend packages and javascript.

```bash
$ npm install -g bower
```

- Install the [Gulp](http://gulpjs.com/) build system by using npm. Gulp is used for automating the development process.

```bash
$ npm install -g gulp
```

- (optional) Install the Typescript definition manager for intellisense in your code editor, then run `typings install` to download the definitions for this project.

```bash
$ npm install -g typings
$ typings install
```
##  Running the Application

Once you've installed the prerequisites and cloned the repository using `git`, you're ready to get started.

To install the node modules and bower packages, run the following command from the directory of your local copy of the repository.

```bash
$ npm install
```

After the install process is complete, you will be able to run the application using Gulp.

```bash
$ gulp serve
```

Your application will run on port 3100 in development. Open a browser window to [http://localhost:3100](http://localhost:3100) to see the results.
The gulp `serve` task will first compile the application before starting the server.

If you want to build the application without running it, you can execute the following command.

```bash
$ gulp build
```

### File Changes

Gulp will monitor all files for changes and recompile whenever a change is detected.

## Javascript Testing

This project uses Jasmine as a testing framework and executes the front end tests using Karma.

### Api Testing

To start the tests for the api javascript code you must have jasmine installed globally.

```bash
$ npm install -g jasmine
```

Execute the tests for the REST api with the following command.

```bash
$ npm run testapi
```

Tests do not make real HTTP calls to backend services. To enable real HTTP calls, run the following command.

```bash
$ NOCK_OFF=true npm run testapi
```

### Angular Testing

Install the [Karma](http://karma-runner.github.io/0.13/index.html) test runner for automated javascript testing.

```bash
$ npm install -g karma-cli
```

To start the Karma test runner for front end javascript code, execute the following command.

```bash
$ npm run testng 
or 
$ karma start spec/app/karma.conf.js
```

Karma will launch a browser window and begin tracking all test files for changes. Whenever a spec changes, Karma will rerun the tests. To see the test results, click on the *debug* button in the test browser window. Leave this window open during javascript development. To exit Karma, use `ctrl-c` in the bash window you are running Karma from.

Karma will also produce test coverage reports in the `./coverage` directory.

### End to End Testing

The end to end tests are run using Protractor and Browserstack.

Install the protractor test runner for angular. 

```bash
$ npm install -g protractor@2.5.1
```

Protractor uses a selenium instance to run it's E2E UI Tests. To initialize a selenium server, you must first configure the webdriver.

```bash
$ webdriver-manager update --ignore_ssl
```
This script downloads the files required to run Selenium itself and build a start script and a directory with them.

Running the tests requires 2 bash/console windows to be open.

- 1st window: `$ gulp serve` to serve the website 
- 2nd window: `$ npm run teste2e` or `$ protractor spec/e2e/protractor_dev.js`  to run the tests
    * To run a single test file: `$ protractor spec/e2e/protractor_dev.js --specs spec/e2e/ole/[filename].spec.js`

Protractor will open the Firefox browser and begin running tests.

#### Running e2e against SauceLabs browsers

To run against a particular browser/os you can edit the `spec/e2e/protractor_dev_saucelabs.js` file to target.

```bash
$ protractor spec/e2e/protractor_dev_saucelabs.js
```
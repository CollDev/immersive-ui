module.exports = function() {
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({devDependencies: true})['js'];
    var bower = {
        json: require('./bower.json'),
        directory: './bower_components/',
        ignorePath: '../..'
    };
    var client= './';
    var clientApp = client + 'app/';
    var here = __dirname + '/';
    var temp = './.tmp/';
    var karmaFiles = bowerFiles.concat(
        bower.directory + 'angular/angular.min.js',
        bower.directory + 'angular-mocks/angular-mocks.js',
        bower.directory + 'bardjs/dist/bard.js',
        client + 'test-helpers/*.js',
        clientApp + '**/*.module.js',
        clientApp + '**/*.js',
        temp + 'templates.js',
        client + 'tests/server-integration/**/*.spec.js'
    );
    var report = './report/';
    var root = './';
    var specRunnerFile = 'specs.html';

    var config = {
        allcss: client + 'scss/*.css',
        alljs: clientApp + '**/*.js',
        bower: bower,
        build: './dist/',
        client: client,
        clientApp: clientApp,
        css: temp + '*.css',
        fonts: bower.directory + 'bootstrap/dist/fonts/*.*',
        html: clientApp + '**/*.html',
        images: client + 'images/**/*.*',
        index: client + 'index.html',
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js',
            '!' + client + 'test-helpers/*.js',
            '!' + client + 'tests/**/*.spec.js'
        ],
        karma: {
            files: karmaFiles,
            exclude: [],
            configFile: here + 'karma.conf.js'
        },
        optimized: {
            app: 'app.js',
            lib: 'lib.js'
        },
        report: report,
        root: root,
        scss: client + 'scss/*.scss',
        serverIntegrationSpecs: [client + 'tests/server-integration/**/*.spec.js'],
        specHelpers: [client + 'test-helpers/*.js'],
        specRunner: client + specRunnerFile,
        specRunnerFile: specRunnerFile,
        specs: clientApp + '**/*.spec.js',
        temp: temp,
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app.core',
                standAlone: false,
                root: 'app/'
            }
        },
        testlibraries: [
            'node_modules/mocha/mocha.js',
            'node_modules/chai/chai.js',
            'node_modules/mocha-clean/index.js',
            'node_modules/sinon-chai/lib/sinon-chai.js'
        ]
    };

    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };

        return options;
    };

    return config;
};
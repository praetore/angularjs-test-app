import {Config} from "karma";

module.exports = (config: Config) =>
    config.set({
        basePath: './app',
        files: [
            'core/**/*.ts',
            'view*/**/*.ts'
        ],
        autoWatch: true,
        frameworks: [
            "jasmine",
            "karma-typescript"
        ],
        browsers: ['Chrome'],
        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
        ],
        reporters: [
            "progress",
            "karma-typescript"
        ],
    });
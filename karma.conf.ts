import {Config} from "karma";
import "karma-typescript";

const karmaConfig = {
    basePath: './app',
    preprocessors: {
        'core/**/*.ts': ["karma-typescript"],
        'view/**/*.ts': ["karma-typescript"],
    },
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
        'karma-jasmine',
        'karma-typescript'
    ],
    karmaTypescriptConfig: {
        tsconfig: "../tsconfig.json"
    },
    reporters: [
        "progress",
        "karma-typescript"
    ],
};

module.exports = (config: Config) => config.set(karmaConfig);
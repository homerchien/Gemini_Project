module.exports = {
    rootUrl: 'http://yandex.com',
    gridUrl: 'http://127.0.0.1:4444/wd/hub',

    system: {
        plugins: {
            'html-reporter/gemini': {
                enabled: true,
                path: 'gemini-reports',
                defaultView: 'all',
                baseHost: 'test.com'
            }
        }
    },
    browsers: {
        chrome: {
            compositeImage: true,
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    }
};
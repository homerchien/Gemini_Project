gemini.suite('yandex-search', (suite) => {
    suite.setUrl('/')
        .setCaptureElements('tbody')
        .capture('plain');
});

gemini.suite('button', function(suite) {
    suite
        .setUrl('/')
        .setCaptureElements('a[href="//yandex.com/images/"]')
        .before(function(actions, find) {
            this.button = find('a[href="//yandex.com/images/"]');
        })
        .capture('plain')
        .capture('hovered', function(actions, find) {
            // actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find) {
            actions.mouseDown(this.button);
        })
        .capture('abc');
        // .capture('clicked', function(actions, find) {
        //     actions.mouseUp(this.button);
        // });
});
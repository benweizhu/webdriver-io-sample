var webdriverio = require('webdriverio');

caps = {browserName: 'chrome'};

var options = {
    desiredCapabilities: caps
};

webdriverio
    .remote(options)
    .init()
    .url('http://www.amazon.com/')
    .title(function(err, res) {
        console.log('Title was: ' + res.value);
    })
    .end();

class Config {
    constructor(app) {
        app.set('view engine', 'html');
        app.engine('html', require('ejs').renderFile);
        app.set('views', __dirname + '/../views');
        app.use(
            require('express').static(require('path').join('clientAngularjs'))
        );
    }
}
module.exports = Config;

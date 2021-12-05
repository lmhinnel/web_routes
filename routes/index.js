const studentRouter = require('./StdController.js');
const fallBackRouter = require('./FallbackController.js');

function route(app) {
    app.use('/students', studentRouter);
    app.use('/*', fallBackRouter);
}

module.exports = route;
module.exports = function(app, db) {
    app.route('/')
        .get((req, res) => {
            res.render(process.cwd() + '/views/pug/index', {
                title: 'Hello',

            });
        });



    app.use((req, res, next) => {
        res.status(404)
            .type('text')
            .send('Not Found');
    });
}
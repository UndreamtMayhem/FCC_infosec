module.exports = function(app, db) {

    app.route('/api')
        .get((req, res) => {
            res.render(process.cwd() + '/views/pug/pages/api', {
                title: 'API',
            });
        });




}
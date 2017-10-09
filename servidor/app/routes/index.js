var api = require('../api'),
    path = require('path');

    module.exports = function(app){
        app.route('/esteeumtestedeurl/lista')
        .get(api.lista);


        app.all('/*', function(req, res){
            res.sendFile(path.join(app.get('clientPath'), 'index.html'));
        });
    };
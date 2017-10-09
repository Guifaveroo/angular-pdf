var banco = require('../../config/database');
var api = {};
var Firebird = require('node-firebird');

api.lista = function(req, resp){

    db = Firebird.pool(5, banco);

        db.get(function(err, res){
            if(err){
                console.log("Erro: " + err);
                throw err;
            }
            
            res.query('select first 200 * from nfe where status = 100', function(err, result) {
                resp.json(result);
                res.detach();
            });
            db.destroy();
        });
};

module.exports = api;
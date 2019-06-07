var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var server = require('../myApp'); /** import the Express app **/

var chaiHttp = require('chai-http'); /** require the chai-http plugin **/
chai.use(chaiHttp); /** use the chai-http plugin **/


suite('API Temperature routes', function() {

    // ### INDEX ### 
    suite('Api Temperature', function() {
        test('/ftoc', function(done) {
            chai.request(server)
                .post('/ftoc')
                .type('form')
                .send({
                    '_method': 'put',
                    'password': '123',
                    'confirmPassword': '123'
                })
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res).to.not.redirect;
                    expect(res).to.be.json;
                    done();
                });
        });

    });



});
process.env.NODE_ENV = 'test';
var chai = require('chai');
var assert = chai.assert;
var Length = require('../lib/length');
var length = new Length();

describe('Length conversion meterTofeet', function() {

    describe('testing zero value', function() {
        it('using single value e.g 0 should return 0 mph', function() {
            assert.equal(length.meterTofeet(0), 0, ' 0 m = 0 feet ');
        });
        it('using to 2 decimal places e.g 0.00 should return 0 feet', function() {
            assert.equal(length.meterTofeet(0.00), 0, ' 0 m = 0 feet ');
        });
        it('using to 3 decimal places e.g 0.000 should return 0 feet', function() {
            assert.equal(length.meterTofeet(0.000), 0, ' 0 m = 0 feet ');
        });
    });

});
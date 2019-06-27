process.env.NODE_ENV = 'test';
var chai = require('chai');
var assert = chai.assert;
var Length = require('../lib/length');
var length = new Length();

describe('Length conversion meterTofeet', function() {

    describe('testing zero value', function() {
        it('using single value e.g 0 should return 0 feet', function() {
            assert.equal(length.meterTofeet(0), 0, ' 0 m = 0 feet ');
        });
        it('using to 2 decimal places e.g 0.00 should return 0 feet', function() {
            assert.equal(length.meterTofeet(0.00), 0, ' 0 m = 0 feet ');
        });
        it('using to 3 decimal places e.g 0.000 should return 0 feet', function() {
            assert.equal(length.meterTofeet(0.000), 0, ' 0 m = 0 feet ');
        });
    });

    describe('testing decimal precision', function() {
        it('using single value e.g 1 should return 3.28 feet', function() {
            assert.equal(length.meterTofeet(1), 3.28, ' 1 m = 3.28 feet ');
        });
        it('using to 2 decimal places e.g 1.00 should return 3.28 feet', function() {
            assert.equal(length.meterTofeet(1.00), 3.28, ' 1 m = 3.28 feet ');
        });
        it('using to 3 decimal places e.g 1.000 should return 3.28 feet', function() {
            assert.equal(length.meterTofeet(1.000), 3.28, ' 1 m = 3.28 feet ');
        });
    });

    describe('testing negative decimal precision', function() {
        it('using single value e.g -1 should return 3.28 feet', function() {
            assert.equal(length.meterTofeet(-1), -3.28, ' 1 m = 3.28 feet ');
        });
        it('using to 2 decimal places e.g -1.00 should return 3.28 feet', function() {
            assert.equal(length.meterTofeet(-1.00), -3.28, ' 1 m = 3.28 feet ');
        });
        it('using to 3 decimal places e.g -1.000 should return 3.28 feet', function() {
            assert.equal(length.meterTofeet(-1.000), -3.28, ' 1 m = 3.28 feet ');
        });
    });

    describe('testing correctness', function() {

        var testValues = length.meterTofeetTestValues();

        for (var i in testValues) {
            it(`kph ${i}  = ${testValues[i]}`, function() {
                assert.equal(length.meterTofeet(i), testValues[i], 'incorrect conversion ');
            });
        }
    });


});
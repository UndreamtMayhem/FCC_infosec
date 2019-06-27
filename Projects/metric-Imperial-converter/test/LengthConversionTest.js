process.env.NODE_ENV = 'test';
var chai = require('chai');
var assert = chai.assert;
var Length = require('../lib/length');
var length = new Length();

describe('Length conversion meterTofeet', function() {
    console.log(length.meterTofeet(1));


});
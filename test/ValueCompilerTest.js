import valueCompiler from "../src/valueCompiler.js";
import { propertyAliasCompiler } from "../src/static/propertyAliasCompiler.js";
import assert from 'assert';

// var assert = require('assert');
describe('ValueCompiler', function () {
  describe('valueCompiler()', function () {
    it('should return "1px solid rgba(000,000,000,0.5)" when the value is 1px-s-0000000000d5', function () {
      assert.equal(valueCompiler('b1px-s-0000000000d5',propertyAliasCompiler['border'], '1px-s-0000000000d5',{}), "1px solid rgba(000,000,000,0.5)" );
    });
  });

  describe('valueCompiler() with custom value', function () {
    it('should return "1px solid red" when the value is 1px-s-boco', function () {
      assert.equal(valueCompiler('b1px-s-boco',propertyAliasCompiler['border'], '1px-s-boco',{'color':{boco:'red'}}), "1px solid red" );
    });
  });

  describe('valueCompiler() for filter', function () {
    it('should return "blur(60px)" when the value is blur60px', function () {
      assert.equal(valueCompiler('filter-blur60px',propertyAliasCompiler['filter'], 'blur60px',{'color':{boco:'red'}}), "blur( 60px )" );
    });
  });
});
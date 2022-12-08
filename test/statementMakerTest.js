import { statementMaker } from "../src/statementMaker.js";
import assert from 'assert';

// var assert = require('assert');
describe('StatementMaker', function () {
  describe('statementMaker.make()', function () {
    it('should return .df{display: flex ;} when the value is df', function () {
      assert.equal(statementMaker.make('df'), ".df{display: flex ;}");
    });
  });
  describe('statementMaker.make()', function () {
    it('should return .hover:df{color: red ;} when the value is -h-c-red', function () {
      assert.equal(statementMaker.make('-h-c-red'), ".-h-c-red:hover{color:red ;}");
    });
  });
});

import keyframes from "../src/keyframes.js";
import assert from 'assert';

describe('keyframes Function', function(){
    describe('keyframes(classname, custon, events) without percentage', function(){
        it('should return{0% {margin-left:30px;}100% {margin-right:30px;}} when  value is ml30px__mr30px ', function (){
            assert.equal(keyframes('ml30px__mr30px'),'{\n0% {margin-left:30px;}\n 100% {margin-right:30px;}\n }');
        })
    })

    describe('keyframes(classname, custon, events) with percentage', function(){
        it('should return{20% {margin-left:30px;}80% {margin-right:30px;}} when  value is 20p-ml30px__80p-mr30px ', function (){
            assert.equal(keyframes('20p-ml30px__80p-mr30px'),'{\n20%  {margin-left:30px;}\n 80%  {margin-right:30px;}\n }');
        })
    })
    describe('keyframes(classname, custon, events) with percentage multiple css', function(){
        it('should return{20% {margin-left:30px;padding:30px;}80% {margin-right:30px;padding:0px;}} when  value is 20p-ml30px---p30px__80p-mr30px---p0px ', function (){
            assert.equal(keyframes('20p-ml30px---p30px__80p-mr30px---p0px'),'{\n20%  {margin-left:30px;padding:30px;}\n 80%  {margin-right:30px;padding:0px;}\n }');
        })
    })
})
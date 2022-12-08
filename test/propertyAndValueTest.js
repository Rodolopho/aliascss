import propertyAndValue from "../src/provertyAndValue.js";
import assert from 'assert';

describe('propertyAndValue Function', function(){
    describe('propertyAndValue(classname, custon, events) without custom classname', function(){
        it('should return margin:40px when  value is m40px ', function (){
            assert.equal(propertyAndValue('m40px'),'margin:40px');
        })
    })

    describe('propertyAndValue(classname, custon, events) without custom classname', function(){
        it('should return filter:blur(40px) when  value is filter-blur40px ', function (){
            assert.equal(propertyAndValue('filter-blur40px'),'filter:blur( 40px )');
        })
    })
})
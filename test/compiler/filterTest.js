import filter from '../../src/compilers/filter.js';

import assert from 'assert';
// console.log('---------------------------filter------------',filter('blur','10px'));
describe('Filter',function(){
    it('should return filter:blur(10px), when blur20px is supplied', function(){
        assert.equal(filter('blur10px'),'blur( 10px )')
    })
})
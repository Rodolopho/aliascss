import border from '../../compilers/border'

describe('Border Test',()=>{
    test('Border style only',()=>{
        expect(border('-1px-s-red',{})).toEqual('1px solid red');
    })
    test('Border style only',()=>{
        expect(border('-solid',{})).toEqual('solid');
    })
    test('Border style only',()=>{
        expect(border('-1px-solid',{})).toEqual('1px solid');
    })
    test('Border style only',()=>{
        expect(border('-1px-db',{})).toEqual('1px double');
    })
})
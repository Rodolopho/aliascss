import timingFunction from '../../compilers/timingFunction';
describe('Timing Function',()=>{
    test('Timing Function static',(()=>{
             expect(timingFunction('-eio',{})).toBe('ease-in-out')
    }))
    test('Timing Function static multi',(()=>{
             expect(timingFunction('-linear__eio',{})).toBe('linear, ease-in-out')
    }))

    test('Timing Function cubic-bezier',(()=>{
             expect(timingFunction('-cb-0d5-0-0-0d2',{})).toBe('cubic-bezier(0.5, 0, 0, 0.2)')
    }))

    test('Timing Function cubic-bezier',(()=>{
             expect(timingFunction('-cb-0d5--2-0-0d2',{})).toBe('cubic-bezier(0.5, -2, 0, 0.2)')
    }))
})
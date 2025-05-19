import transition from '../../compilers/transition'
describe('Transition Test',()=>{
    test('transition Test',()=>{
         expect(transition('-margin-0d35s-eio')).toBe('margin 0.35s ease-in-out');
    })
    test('transition Test with .',()=>{
     expect(transition('-margin-0.35s')).toBe('margin 0.35s');
})
    test('transition Test',()=>{
         expect(transition('-all-0d35s')).toBe('all 0.35s');
    })

    test('transition Test',()=>{
         expect(transition('-all-0d35s__margin-0d35s-ease-in-out')).toBe('all 0.35s,margin 0.35s ease-in-out');
    })
})
import filter from '../../compilers/filter'

describe('Filter Test',()=>{
    test('Test filter function css-far ',()=>{
         expect(filter('-drop-shadow--shadow-sm',{})).toBe('drop-shadow(var(--shadow-sm))')
    })
    test('Test multiple filter',()=>{
         expect(filter('-drop-shadow--3px--3px-red__sepia--100p__drop-shadow--3px--3px-blue',{})).toBe('drop-shadow(-3px -3px red) sepia(-100%) drop-shadow(-3px -3px blue)')
    })

    test('Test multiple filter with signed value',()=>{
         expect(filter('-drop-shadow-3px-3px-red__sepia-100p__drop-shadow--3px--3px-blue',{})).toBe('drop-shadow(3px 3px red) sepia(100%) drop-shadow(-3px -3px blue)')
    })
})
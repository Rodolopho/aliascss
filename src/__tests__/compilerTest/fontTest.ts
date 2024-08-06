import font from '../../compilers/font'

describe('Font Test',()=>{
    test('Font Test',()=>{
         expect(font('_serif',{})).toBe('serif')
    })
    test('Font Test',()=>{
         expect(font('-san-serif',{})).toBe('san-serif')
    })
    test('Font Test',()=>{
         expect(font('-Gill_Sans_Extrabold__sans-serif',{})).toBe('"Gill Sans Extrabold", sans-serif')
    })
    test('Font Test',()=>{
         expect(font('-goudy__sans-serif',{
            font:{
                goudy:`"Goudy Bookletter 1911"`
            }
         })).toBe('"Goudy Bookletter 1911", sans-serif')
    })
})

const ref=`
font-family: "Gill Sans Extrabold", sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;

`
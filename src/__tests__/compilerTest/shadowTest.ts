import shadow from '../../compilers/shadow'
describe("Shadow Test",()=>{
    test('Shadow color first',()=>{
         expect(shadow('inset-red-10px-0-10px-10px',{colors:{}})).toBe('inset 10px 0px 10px 10px red')
    })
    test('Shadow color ring ',()=>{
         expect(shadow('0-0-0-2px-red__0-0-0-10px--red',{colors:{}})).toBe('0px 0px 0px 2px red , 0px 0px 0px 10px var(--red)')
    })
     test('Shadow color ring ',()=>{
         expect(shadow('inset-red-0-0-0-2px',{colors:{}})).toBe('inset 0px 0px 0px 2px red')
    })
    test('Shadow color last',()=>{
         expect(shadow('inset-10px--20px-10px-10px-red',{colors:{}})).toBe('inset 10px -20px 10px 10px red')
    })
    test('Shadow color with var ',()=>{
         expect(shadow('inset-10px--20px-10px-10px--red-color',{colors:{}})).toBe('inset 10px -20px 10px 10px var(--red-color)')
    })
    test('Shadow color with var ',()=>{
         expect(shadow('inset--red-color-10px--20px-10px-10px',{colors:{}})).toBe('inset 10px -20px 10px 10px var(--red-color)')
    })
    test('Shadow color with var ',()=>{
         expect(shadow('inset--red-color-10px--20px-10px-10px__--10px-20px-4px-5px-000000000',{colors:{}})).toBe('inset 10px -20px 10px 10px var(--red-color) , -10px 20px 4px 5px rgb(000,000,000)')
    })
     test('Shadow color rgba code',()=>{
         expect(shadow('inset-000000000-10px-0-10px-10px',{colors:{}})).toBe('inset 10px 0px 10px 10px rgb(000,000,000)')
    })
    test('Shadow color rgba code',()=>{
         expect(shadow('inset-0000000000d5-10px-0-10px-10px',{colors:{}})).toBe('inset 10px 0px 10px 10px rgba(000,000,000,0.5)')
    })
    test('Shadow color rgba code',()=>{
         expect(shadow('inset-40p40p40p40p-10px-0-10px-10px',{colors:{}})).toBe('inset 10px 0px 10px 10px rgba(40%,40%,40%,40%)')
    })
     test('Shadow color rgba code',()=>{
         expect(shadow('inset-32150p40p0d5-10px-0-10px-10px',{colors:{}})).toBe('inset 10px 0px 10px 10px hsla(321,50%,40%,0.5)')
    })
})
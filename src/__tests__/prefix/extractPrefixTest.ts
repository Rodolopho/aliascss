import extractPrefix from '../../prefix/extractPrefix'
describe("Extract Prefix Test",()=>{
    test("Extract Prefix hover",()=>{
         expect(JSON.stringify(extractPrefix('--hover-bg-red'))).toBe(JSON.stringify([":hover",'-bg-red']));
    })
    test("Extract Prefix div:hover",()=>{
         expect(JSON.stringify(extractPrefix('_div--hover-bg-red'))).toBe(JSON.stringify([" div:hover",'-bg-red']));
    })
    test("Extract Prefix [attribute]",()=>{
         expect(JSON.stringify(extractPrefix('[data-state=open]--hover-bg-red'))).toEqual(JSON.stringify(['[data-state="open"]:hover','-bg-red']));
    })
    test("Extract Prefix __div[attribute]",()=>{
         expect(JSON.stringify(extractPrefix('__div[data-state=open]--hover-bg-red'))).toEqual(JSON.stringify([' > div[data-state="open"]:hover','-bg-red']));
    })
    test("Extract Prefix div:hover",()=>{
         expect(JSON.stringify(extractPrefix('__div__[data-state=open]--hover-bg-red'))).toEqual(JSON.stringify([' > div >[data-state="open"]:hover','-bg-red']));
    })
     test("Extract Prefix class",()=>{
         expect(JSON.stringify(extractPrefix('__.div__[data-state=open]--hover-bg-red'))).toEqual(JSON.stringify([' > .div >[data-state="open"]:hover','-bg-red']));
    })
    test("Extract Prefix class",()=>{
         expect(JSON.stringify(extractPrefix('__.div_.class_[data-state=open]--hover-bg-red'))).toEqual(JSON.stringify([' > .div .class[data-state="open"]:hover','-bg-red']));
    })
})
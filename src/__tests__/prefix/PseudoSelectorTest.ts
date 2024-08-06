import pseudoE from "../../prefix/pseudoSelectorNew";
describe('Pseudo Selector',()=>{

    
      test('css func()',()=>{
         expect(JSON.stringify(pseudoE('--not(_div)-bgc-red'))).toBe(JSON.stringify(['-bgc-red', ':not( div)']));
    })
     test('css func( func())',()=>{
         expect(JSON.stringify(pseudoE('-n(--not(_div))-bgc-red'))).toBe(JSON.stringify(['-bgc-red', ':not(:not( div))']));
    })
     test('css func( func())',()=>{
         expect(JSON.stringify(pseudoE('-n(_section--not(_div))-bgc-red'))).toBe(JSON.stringify(['-bgc-red', ':not( section:not( div))']));
    })
  
     test('css func( func())',()=>{
         expect(JSON.stringify(pseudoE('-nc(2n-1)-bgc-red'))).toBe(JSON.stringify(['-bgc-red', ':nth-child(2n-1)']));
    })


    test('Pseudo --hover',()=>{
         expect(JSON.stringify(pseudoE('--hover-bgc-red'))).toBe(JSON.stringify(['-bgc-red', ':hover']));
    })
    test('Pseudo --Hover',()=>{
         expect(JSON.stringify(pseudoE('--Hover-bgc-red'))).toBe(JSON.stringify(null));
    })

    test('nth-child',()=>{
         expect(JSON.stringify(pseudoE('--nth-child-2n-bgc-red'))).toBe(JSON.stringify(['-bgc-red', ':nth-child(2n)']));
    })
    test('nc',()=>{
         expect(JSON.stringify(pseudoE('-nc-2n-bgc-red'))).toBe(JSON.stringify(['-bgc-red', ':nth-child(2n)']));
    })

    test('lang',()=>{
         expect(JSON.stringify(pseudoE('--lang-en-bgc-red'))).toBe(JSON.stringify(['-bgc-red', ':lang(en)']));
    })
    test('not',()=>{
         expect(JSON.stringify(pseudoE('--not-.class-bgc-red'))).toBe(JSON.stringify(['-bgc-red', ':not(.class)']));
    })
    test('is',()=>{
         expect(JSON.stringify(pseudoE('--is-.class-bgc-red'))).toBe(JSON.stringify(['-bgc-red', ':is(.class)']));
    })
    test('has',()=>{
         expect(JSON.stringify(pseudoE('--has-.class-bgc-red'))).toBe(JSON.stringify(['-bgc-red', ':has(.class)']));
    })
     test('where',()=>{
         expect(JSON.stringify(pseudoE('--where-.class-bgc-red'))).toBe(JSON.stringify(['-bgc-red', ':where(.class)']));
    })
    
    test('n',()=>{
         expect(JSON.stringify(pseudoE('-n-div-bgc-red'))).toBe(JSON.stringify(['-bgc-red', ':not(div)']));
    })
     test('w',()=>{
         expect(JSON.stringify(pseudoE('-w-div-bgc-red'))).toBe(JSON.stringify(['-bgc-red', ':where(div)']));
    })
     test('-is',()=>{
         expect(JSON.stringify(pseudoE('-is-div-bgc-red'))).toBe(JSON.stringify(['-bgc-red', ':is(div)']));
    })
     test('hs',()=>{
         expect(JSON.stringify(pseudoE('-hs-div-bgc-red'))).toBe(JSON.stringify(['-bgc-red', ':has(div)']));
    })
    test('pseudo test -afh',()=>{
         expect(JSON.stringify(pseudoE('-afh-bgc-red'))).toBe(JSON.stringify(['-bgc-red', '::after:hover']));
    })
    test('pseudo test -afh',()=>{
         expect(JSON.stringify(pseudoE('--after-hover-bgc-red'))).toBe(JSON.stringify(['-bgc-red', '::after:hover']));
    })
        
})
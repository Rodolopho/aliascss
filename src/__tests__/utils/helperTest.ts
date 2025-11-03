import color from '../../compilers/color';
import {customColors} from '../../static/customColors';
import {cssVarWithDefault} from '../../utils/helper'
describe("CSS VAR WITH DEFAULT",()=>{
    test('cssVar()',()=>{
    
         expect(cssVarWithDefault('--red:primary900',color,{colors:customColors})).toBe('var(--red, var(--primary900,#42307D))')
    })
    test('cssVar()',()=>{
    
         expect(cssVarWithDefault('--red:200p')).toBe('var(--red, 200%)')
    })
    
   
})

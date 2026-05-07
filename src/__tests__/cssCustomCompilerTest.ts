import {describe, test, expect} from '@jest/globals';

import cssCustomCompilers from '../custom-css-compilers';
// import { customStaticClassNames } from "./static/customStaticClassNames.js";
const c=cssCustomCompilers['Color'].compiler|| function(){};
const Space=cssCustomCompilers['Space'].compiler|| function(){};
const c2=cssCustomCompilers['theme'].compiler|| function(){};
const col=cssCustomCompilers['x-col'].compiler|| function(){};

describe('Custom Compiler Test',()=>{
    test('Color',()=>{
         expect(c('(red,blue,orange)',{})).toBe('color:red;background-color:blue;border-color:orange;')
         expect(c('(red,--red,orange)',{})).toBe('color:red;background-color:var(--red);border-color:orange;')
    })
    test('Color',()=>{
         expect(c('(red,blue,orange)',{})).toBe('color:red;background-color:blue;border-color:orange;')
         expect(c('(,--red,orange)',{})).toBe('background-color:var(--red);border-color:orange;')
    })
    test('theme',()=>{
         expect(c2('(color,--red,orange)',{})).toBe('color:light-dark(var(--red),orange)')
    })
    test('x-col',()=>{
         expect(col('-200px',{})).toBe('--x-col-width:200px;padding-left:calc(var(--x-row-gap,16px) * 0.5);padding-right:calc(var(--x-row-gap,16px) * 0.5);box-sizing:border-box;flex:0 0 var(--x-col-width,200px);max-width:var(--x-col-width,200px);')
    })
     test('Space',()=>{
         expect(Space('(10px,20px,30px)',{})).toBe('padding:10px;margin:20px;gap:30px;')

    })
    test('Space',()=>{
  
         expect(Space('(10px)',{})).toBe('padding:10px;')
        
    })
    test('Space',()=>{
        
         expect(Space('(,10px)',{})).toBe('margin:10px;')
         expect(Space('(,10px-10px)',{})).toBe('margin:10px 10px;')

    })
    test('Space',()=>{
         
         expect(Space('(10px,--margin-xl,30px)',{})).toBe('padding:10px;margin:var(--margin-xl);gap:30px;')
    })
})
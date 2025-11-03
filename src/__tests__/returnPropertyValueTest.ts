import {createCompilerObj, extractProperty} from "../utils/createCompilerObj";
import cssProps from '../css-properties-all';
import cssCustomCompilers from "../custom-css-compilers";
import getPropertyAndValue from '../returnPropertyAndValue'
import config from "../config";
import {customColors as customColors1} from '../static/customColors'
import {customColors as customColors2} from '../static/customColors2'

const [ staticClassNames, compilerObj]=createCompilerObj({...cssCustomCompilers,...cssProps},config.globalValues);
const customColors={...customColors1,...customColors2}

describe('Return property and value test',()=>{
    test('getProperty and Value Test',()=>{
        expect(getPropertyAndValue('bgc-grayDark-400',compilerObj,staticClassNames,{colors:customColors},extractProperty)).toBe('background-color:var(--grayDark-400,#94969C)')
    })
    test('getProperty and Value Test',()=>{
        expect(getPropertyAndValue('bgc-grayDark400',compilerObj,staticClassNames,{colors:customColors},extractProperty)).toBe('background-color:var(--grayDark400,#94969C)')
    })
    test('define CSS Var token',()=>{
        expect(getPropertyAndValue('--bgc-gray:200p',compilerObj,staticClassNames,{colors:customColors},extractProperty)).toBe('--bgc-gray:200%')
    })
    test('define CSS Var token with css-vars',()=>{
        expect(getPropertyAndValue('--bgc-gray:--gray-200px',compilerObj,staticClassNames,{colors:customColors},extractProperty)).toBe('--bgc-gray: var(--gray-200px)')
    })
    test('getProperty and Value Test',()=>{
        expect(getPropertyAndValue('bgc-gray400',compilerObj,staticClassNames,{colors:customColors},extractProperty)).toBe('background-color:var(--gray400,#98A2B3)')
    })
    test('getProperty and Value Test',()=>{
        expect(getPropertyAndValue('c-grayDark400',compilerObj,staticClassNames,{colors:customColors},extractProperty)).toBe('color:var(--grayDark400,#94969C)')
    })
    test('getProperty and Value Test with "."',()=>{
        expect(getPropertyAndValue('margin-1.5rem',compilerObj,staticClassNames,{},extractProperty)).toBe('margin:1.5rem')
    })
    test('getProperty and Value Test with "."',()=>{
        expect(getPropertyAndValue('margin-10%-10px--20%--30p',compilerObj,staticClassNames,{},extractProperty)).toBe('margin: 10% 10px -20% -30%')
    })
     test('getProperty and Value Test',()=>{
        expect(getPropertyAndValue('bgc--bg-theme',compilerObj,staticClassNames,{},extractProperty)).toBe('background-color: var(--bg-theme)')
    })
    test('getProperty and Value Test return array when true is passed',()=>{
        expect(getPropertyAndValue('bgc-red',compilerObj,staticClassNames,{},extractProperty,true)?.toString()).toBe(['background-color','red'].toString())
    })
    test('getProperty and Value  css-var Test return array when true is passed',()=>{
        expect(getPropertyAndValue('bgc--red',compilerObj,staticClassNames,{},extractProperty,true)?.toString()).toBe(['background-color','var(--red)'].toString())
    })
    // test('getProperty and Value  css-var Test return array when true is passed',()=>{
    //     expect(getPropertyAndValue('ring--red',compilerObj,staticClassNames,{},extractProperty,true)?.toString()).toBe(['background-color','var(--red)'].toString())
    // })
})
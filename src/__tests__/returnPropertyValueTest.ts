import {createCompilerObj, extractProperty} from "../utils/createCompilerObj";
import cssProps from '../css-properties-all';
import getPropertyAndValue from '../returnPropertyAndValue'
import config from "../config";

const [ staticClassNames, compilerObj]=createCompilerObj(cssProps,config.globalValues);

describe('Return property and value test',()=>{
    test('getProperty and Value Test',()=>{
        expect(getPropertyAndValue('bgc-red',compilerObj,staticClassNames,{},extractProperty)).toBe('background-color:red')
    })
    test('getProperty and Value Test with "."',()=>{
        expect(getPropertyAndValue('margin-1.5rem',compilerObj,staticClassNames,{},extractProperty)).toBe('margin: 1.5rem')
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
})
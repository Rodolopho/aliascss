import { main, styleJSX, staticClassNames as sc, extend } from "../index";
// import { customStaticClassNames } from "./static/customStaticClassNames.js";
describe('Main Index Test',()=>{
    test('Index Test',()=>{
         expect(styleJSX('bgc-red fs-12px').toString()).toBe({"backgroundColor": "red",  "fontSize": " 12px",}.toString())
    })

    test('Index Test',()=>{
         expect(main.make('dib').toString()).toBe('.dib{display: inline-block}')
    })
    test('Index Test',()=>{
         expect(sc.dib).toBe('display: inline-block')
    })
})
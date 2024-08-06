 import Creator ,{staticValueCompiler, generateStaticClassNames, createCompilerObj} from '../../utils/createCompilerObj'
 import config from '../../config'

 const compiler={
        'background-origin':{
        alias:'bgo',
        values:['padding-box:pb:pb2','border-box:bb','content-box:cb'],
    },
    'font-size':{
        alias:'fs',
        compiler:(value:string)=>value,
    },
    'shadows':{
            property:'box-shadow',
            compiler:(value:string)=>value
        }
 }
 
 test('CreateCompilerObjectCustom',()=>{
    expect(JSON.stringify(Creator('shadows', compiler['shadows']))).toEqual(JSON.stringify([
        {
         'shadows':{
            property:'box-shadow',
            compiler:(value:string)=>value
        }
        },
        {}
    ]))
    }
 )


 test('CreateCompilerObjectOnlyCompiler',()=>{
    expect(JSON.stringify(Creator('font-size', compiler['font-size']))).toEqual(JSON.stringify([
        {
         "font-size":{
           "compiler": (value:string)=>value,
           "property": "font-size",
         },
         "fs":{
           "compiler": (value:string)=>value,
           "property": "font-size",
         },
        },
        {}
    ]))
    }
 )

test('CreateCompilerObjectOnlyStatic',()=>{
    expect(Creator('background-origin', compiler['background-origin'])).toEqual([
        {},
         {
            "background-origin-bb": "background-origin:border-box",
             "background-origin-border-box": "background-origin:border-box",
              "background-origin-cb": "background-origin:content-box",
               "background-origin-content-box": "background-origin:content-box",
                "background-origin-padding-box": "background-origin:padding-box",
                 "background-origin-pb": "background-origin:padding-box", 
                 "background-origin-pb2": "background-origin:padding-box", 
                 "bgo-bb":"background-origin:border-box",
                  "bgo-border-box": "background-origin:border-box",
                   "bgo-cb": "background-origin:content-box",
                    "bgo-content-box": "background-origin:content-box",
                     "bgo-padding-box": "background-origin:padding-box",
                      "bgo-pb": "background-origin:padding-box",
                      "bgo-pb2": "background-origin:padding-box"
                    }])
})

describe("Test Static Value Compiler",()=>{
    test('Static Value Test',()=>{
         expect(staticValueCompiler('background','bg',['none:n']).toString())
         .toBe({
            'background-none':'background:none',
            'background-n':'background:none',
            'bg-none':'background:none',
            'bg-n':'background:none',
        }.toString())
    })
})

describe("Test generateStaticClassNames ",()=>{
    test('generateStaticClassNames',()=>{
         expect(JSON.stringify(generateStaticClassNames(compiler,config.globalValues)).toString())
         .toContain('background-origin-revert')
    })
})
describe("Test createCompileObj ",()=>{
    test('generateStaticClassNames',()=>{
         expect(JSON.stringify(createCompilerObj(compiler,config.globalValues)).toString())
         .toContain('background-origin-revert')
    })
})
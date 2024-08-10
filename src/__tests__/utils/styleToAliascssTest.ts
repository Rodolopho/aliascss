import styleToAliascss, {process, processJSX} from '../../utils/stylesToAliascss'

describe('Convert Html To AliasCSS Style',()=>{
    test("Process ",()=>{
        const[m,s]=`<div style="width: 24px; height: 24px; position: relative"></div>`.match(/(?<=[\s])style=["]([^']*)["]/) ||['',''];
        expect(process(m,s,false))
        .toBe(`class="width-24px height-24px position-relative " style=""`)
    })
     test("Process JSX",()=>{
        const[m,s]=` <div className="XClose" style={{width: 24, height: 24, position: 'relative'}}></div>`.match(/(?<=[\s])style=[\{][\{]([^}]*)[\}][\}]/) ||['',''];
        expect(processJSX(m,s))
        .toBe(`className="width-24 height-24 position-relative " style={{}}`)
    })
    test("JSXto AliasCSS Html",()=>{
        expect(styleToAliascss(`<div className="Icon" style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', border: '2px #98A2B3 solid'}}></div>`,{JSX:true}))
        .toBe(`<div className="Icon" className="width-12 height-12 left-6 top-6 position-absolute border-2px-98A2B3-solid " style={{}}></div>`)
    })
    test("Html to AliasCSS Html double quotes",()=>{
        expect(styleToAliascss(`<div style="width: 24px; height: 24px; position: relative"></div>`))
        .toBe(`<div class="width-24px height-24px position-relative " style=""></div>`)
    })
    test("Html to AliasCSS Html Single quotes",()=>{
        expect(styleToAliascss(`<div style='width: 24px; height: 24px; position: relative'></div>`))
        .toBe(`<div class="width-24px height-24px position-relative " style=''></div>`)
    })
})
import {compiler as statement} from '../returnStatement';
import { createCompilerObj } from '../utils/createCompilerObj';
const config={
    media:{
        prefix:{
            'hd':'@media(max-width:4000px)'
        },
        
        },
        extend:{
            shadow:{
                property:'box-shadow',
            }
    },
    groups:{
     container:'xs-w333px'
    },

}
statement.mediaSelector={...config.media.prefix,...statement.mediaSelector}
const [s,c]=createCompilerObj(config.extend)
statement.extend(config.extend);


describe("Test Return statement",()=>{

     //StatementMaker.methods
     console.log(statement.make('container'))
     test('statement from obj',()=>{
         expect(statement.groupForJs('c-red').toString()).toBe({"color": "red"}.toString());
     })
     test('statement from group inline-group [acss,acss]',()=>{
         expect(statement.make('--h-[data-hello=sello][bgc-red,df]')).toBe(`.--h-\\[data-hello\\=sello\\]\\[bgc-red\\,df\\]:hover[data-hello="sello"]{background-color:red} 
.--h-\\[data-hello\\=sello\\]\\[bgc-red\\,df\\]:hover[data-hello="sello"]{display: flex} 
`);
     })
     test('statement from obj',()=>{
         expect(statement.groupForJs('--c:red').toString()).toBe({"--cu": "red"}.toString());
     })
     // ---------new Test &-----------
     test("Return statement &",()=>{
         expect(statement.make('--hover&-bgc-primary600')).toBe(':hover .--hover\\&-bgc-primary600{background-color:var(--primary600,#7F56D9)}')
     })

     test("Return statement &",()=>{
         expect(statement.make('--is(_html[class~=dark])&-bgc-red')).toBe(':is( html[class~=\"dark\"]) .--is\\(_html\\[class\\~\\=dark\\]\\)\\&-bgc-red{background-color:red}')
     })
     test("Return statement &",()=>{
         expect(statement.make('__.error&-bgc-red')).toBe(' .error  > .__\\.error\\&-bgc-red{background-color:red}')
     })
     //----------------
    test("Return statement",()=>{
         expect(statement.make('bgc-primary600')).toBe('.bgc-primary600{background-color:var(--primary600,#7F56D9)}')
    })
    test("Return statement define cvars",()=>{
         expect(statement.make('--bgc:primary600')).toBe('.--bgc\\:primary600{--bgc:primary600}')
    })
    test("Return statement",()=>{
         expect(statement.make('m-1.5rem-40%--20px')).toBe('.m-1\\.5rem-40\\%--20px{margin: 1.5rem 40% -20px}')
    })
    test("Return statement media",()=>{
         expect(statement.make('xs-bgc-red')).toBe('@media (max-width : 576px){.xs-bgc-red{background-color:red}}')
    })
    test("Return statement hover",()=>{
         expect(statement.make('--h-bgc-red')).toBe('.--h-bgc-red:hover{background-color:red}')
    })
    test("Return statement custom config media",()=>{
         expect(statement.make('hd-bgc-red')).toBe('@media(max-width:4000px){.hd-bgc-red{background-color:red}}')
    })
    test("Return statement  custom compiler extend",()=>{
         expect(statement.make('shadow--shadow-xs')).toBe('.shadow--shadow-xs{box-shadow: var(--shadow-xs)}');
    })
    test("Return statement custom className",()=>{
         expect(statement.make('shadow-xs')).toBe('.shadow-xs{box-shadow:var(--shadow-xs, 0px 1px 2px rgba(16, 24, 40, 0.05))}');
    })
    test("Return statement custom className",()=>{
         expect(statement.make('shadow-xs','small-shadow')).toBe('.small-shadow{box-shadow:var(--shadow-xs, 0px 1px 2px rgba(16, 24, 40, 0.05))}');
    })
    test("Return statement custom className",()=>{
         expect(statement.make('shadow-xs','small-shadow',true)).toBe('box-shadow:var(--shadow-xs, 0px 1px 2px rgba(16, 24, 40, 0.05))');
    })

    test("Return statement custom className",()=>{
         expect(statement.make('shadow-xs',undefined,true)).toBe('box-shadow:var(--shadow-xs, 0px 1px 2px rgba(16, 24, 40, 0.05))');
    })
})
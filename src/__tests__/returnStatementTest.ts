import {compiler as statement} from '../returnStatement';
import { createCompilerObj } from '../utils/createCompilerObj';
import { describe, test, expect } from '@jest/globals';
const config={
    media:{
        prefix:{
            'hd':'@media(max-width:4000px)'
        },
        
        },
        extend:{
            hadow:{
                property:'box-shadow',
            },
            'Fsh':{
               property:'flex-shrink',
               compiler:(v:string)=> v.replace(/^-/,'')
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
     // console.log(statement.make('container'))
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
      test('statement from obj for flex-shrink',()=>{
         expect(statement.make('Fsh-10px')).toBe('.Fsh-10px{flex-shrink:10px}');

     })
     
     // ---------new Test &-----------
     test("Return statement &",()=>{
         expect(statement.make('--hover&-bgc-primary600')).toBe(':hover .--hover\\&-bgc-primary600{background-color:var(--primary600,#7F56D9)}')
     })

     test("Return statement &",()=>{
         expect(statement.make('--is(_html[class~=dark])&-bgc-red')).toBe(' :is( html[class~=\"dark\"]) .--is\\(_html\\[class\\~\\=dark\\]\\)\\&-bgc-red{background-color:red}')
     })
     test("Return statement &",()=>{
         expect(statement.make('__.error&-bgc-red')).toBe(' .error  > .__\\.error\\&-bgc-red{background-color:red}')
     })
     //----------------
    test("Return statement",()=>{
         expect(statement.make('bgc-primary600')).toBe('.bgc-primary600{background-color:var(--primary600,#7F56D9)}')
    })
    test("Return statement define cvars",()=>{
         expect(statement.make('--bgc:primary600')).toBe('.--bgc\\:primary600{--bgc:var(--primary600,#7F56D9)}')
    })
    test("Return statement",()=>{
         expect(statement.make('m-1.5rem-40%--20px')).toBe('.m-1\\.5rem-40\\%--20px{margin: 1.5rem 40% -20px}')
    })
    test("Return statement media",()=>{
         expect(statement.make('xs-bgc-red')).toBe('@layer xs{ @media (max-width: 575.99px) {.xs-bgc-red{background-color:red}}}')
    })
    test("Return statement media with as",()=>{
         expect(statement.make('xs-bgc-red--as-Grid')).toBe('@layer xs{ @media (max-width: 575.99px) {.Grid{background-color:red}}} \n')
    })
    test("Return statement media nested single",()=>{
         expect(statement.make('@[xs]-bgc-red')).toBe('@layer xs{ @media (max-width: 575.99px) {.\\@\\[xs\\]-bgc-red{background-color:red}}}')
    })
    test("Return statement Nested media",()=>{
         expect(statement.make('@[base,xs]-bgc-red')).toBe('@layer base{ @layer xs{ @media (max-width: 575.99px) {.\\@\\[base\\,xs\\]-bgc-red{background-color:red}}}}')
    })
    test("Return statement hover",()=>{
         expect(statement.make('--h-bgc-red')).toBe('.--h-bgc-red:hover{background-color:red}')
    })
    test("Return statement custom config media",()=>{
         expect(statement.make('hd-bgc-red')).toBe('@media(max-width:4000px){ .hd-bgc-red{background-color:red}}')
    })
    test("Return statement  custom compiler extend",()=>{
         expect(statement.make('box-shadow--shadow-xs')).toBe('.box-shadow--shadow-xs{box-shadow: var(--shadow-xs)}');
    })
     test("Return statement  custom compiler extend",()=>{
         expect(statement.make('bg(radial-gradient(circle_at_20%_30%,rgba(127,86,217,0.45),transparent_65%))_')).toBe('.bg\\(radial-gradient\\(circle_at_20\\%_30\\%\\,rgba\\(127\\,86\\,217\\,0\\.45\\)\\,transparent_65\\%\\)\\)_{background:radial-gradient(circle at 20% 30%, rgba(127, 86, 217, 0.45), transparent 65%)}');
    })
//     test('Retuen Stataement property() wuth  Function value _ by space ',()=>{
//             expect(statement.make('bg(radial-gradient(circle_at_20%_30%,rgba(127,86,217,0.45),transparent_65%))_')?.toString()).toBe(['background','radial-gradient(circle at 20% 30%, rgba(127, 86, 217, 0.45), transparent 65%)'].toString())
//         })
//     test("Return statement custom className",()=>{
//          expect(statement.make('x-shadow-xs')).toBe('.x-shadow-xs{box-shadow:var(--x-shadow-xs, 0px 1px 2px rgba(16, 24, 40, 0.05))}');
//     })
//     test("Return statement custom className",()=>{
//          expect(statement.make('x-shadow-sm','small-shadow')).toBe('.small-shadow{box-shadow:var(--x-shadow-xs, 0px 1px 2px rgba(16, 24, 40, 0.05))}');
//     })
//     test("Return statement custom className",()=>{
//          expect(statement.make('x-shadow-xs','small-shadow',true)).toBe('box-shadow:var(--x-shadow-xs, 0px 1px 2px rgba(16, 24, 40, 0.05))');
//     })

//     test("Return statement custom className",()=>{
//          expect(statement.make('x-shadow-xs',undefined,true)).toBe('box-shadow:var(--x-shadow-xs, 0px 1px 2px rgba(16, 24, 40, 0.05))');
//     })
    test("Return statement ring className",()=>{
         expect(statement.make('ring--red',undefined,true)).toBe('box-shadow:0 0 0 var(--ring-width,2px) var(--red)');
    })
    test("Return statement lightDark className",()=>{
         expect(statement.make('theme(color,red,blue)',undefined,true)).toBe('color:light-dark(red,blue)');
    })
//     ----New 
    
})
/// <reference types="jest" />
import color from '../../compilers/color'
import { customColors } from '../../static/customColors';
import { customColorsRa as c2 } from '../../static/customColorsRA';
//import { customColors as c2 } from '../../static/customColors2';
import { customColorsRadixUi as c3} from '../../static/customColorsRadix';
describe('Color Compiler Test',()=>{
    test('Color by name',()=>{
         expect(color('--bg-color',{colors:{...customColors,...c2,...c3}})).toBe('var(--bg-color)');
    })
    test('Color by name',()=>{
         expect(color('--bg-color/7',{colors:{...customColors,...c2,...c3}})).toBe('oklch(from var(--bg-color) l c h/0.7 )');
    })
     test('Color by name',()=>{
         expect(color('-grayThemeA10',{colors:{...customColors,...c2,...c3}})).toBe('light-dark(#0000007c,#ffffff72)');
    })
    test('Color by name',()=>{
         expect(color('-yellowThemeA11',{colors:{...customColors,...c2,...c3}})).toBe('light-dark(#9e6c00,#fee949f5)');
    })
    test('Color by name',()=>{
         expect(color('-whiteThemeA10',{colors:{...customColors,...c2,...c3}})).toBe('light-dark(rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.8))');
    })
    test('Color by name',()=>{
         expect(color('-red',{colors:{...customColors,...c2,...c3}})).toBe('red');
    })
     test('Color by name',()=>{
         expect(color('-red/1',{colors:{...customColors,...c2,...c3}})).toBe('oklch(from red l c h/0.1 )');
    })
     test('Color by cusomName',()=>{
         expect(color('-gray12/6',{colors:{...customColors,...c2,...c3}})).toBe('oklch(from #202020 l c h/0.6 )');
    })
    test('Color by cusomName',()=>{
         expect(color('-primary600/6',{colors:{...customColors,...c2,...c3}})).toBe('oklch(from var(--primary600,#7F56D9) l c h/0.6 )');
    })
    test('Color by hex',()=>{
         expect(color('-efefef',{})).toBe('#efefef');
    })
    test('Color by hex',()=>{
         expect(color('-efefef/9',{})).toBe('oklch(from #efefef l c h/0.9 )');
    })
    test('Color by hex alpha',()=>{
         expect(color('-efefef00',{})).toBe('#efefef00');
    })
    test('Color by func var',()=>{
         expect(color('-rgb--color-bg',{})).toBe('rgb(var(--color-bg))');
         expect(color('-rgba--color-bg',{})).toBe('rgba(var(--color-bg))');
         expect(color('-hsl--color-bg',{})).toBe('hsl(var(--color-bg))');
         expect(color('-hsla--color-bg',{})).toBe('hsla(var(--color-bg))');
    })

    test('Color by digitByFunc',()=>{
         expect(color('-000000000',{})).toBe('rgb(000,000,000)');
         expect(color('-30p60p70p',{})).toBe('rgb(30%,60%,70%)');
         expect(color('-23560p70p',{})).toBe('hsl(235,60%,70%)');
    })

    test('Color by func and r-g-b values',()=>{
         expect(color('-rgb-30-49-50',{})).toBe('rgb(30 49 50)');
         expect(color('-rgba-30-60-70-50p',{})).toBe('rgba(30 60 70 / 50%)');
         expect(color('-23560p70p',{})).toBe('hsl(235,60%,70%)');
    })
    
})
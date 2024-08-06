import color from '../../compilers/color'

describe('Color Compiler Test',()=>{
    test('Color by name',()=>{
         expect(color('-red',{})).toBe('red');
    })
    test('Color by hex',()=>{
         expect(color('-efefef',{})).toBe('#efefef');
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
         expect(color('-rgb-30-49-50',{})).toBe('rgb(30,49,50)');
         expect(color('-rgba-30-60-70-50',{})).toBe('rgba(30,60,70,50)');
         expect(color('-23560p70p',{})).toBe('hsl(235,60%,70%)');
    })
    
})
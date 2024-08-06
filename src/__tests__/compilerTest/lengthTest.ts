import length ,{ lenByNumPer}from '../../compilers/length';

describe('Length',()=>{
    test('Length positive',()=>{
         expect(length('-10px')).toBe(' 10px');
    })
    test('Length negative',()=>{
         expect(length('--10px')).toBe(' -10px');
    })
     test('Length positive multi',()=>{
         expect(length('-10px-10p-30px')).toBe(' 10px 10% 30px');
    })
    test('Length negative',()=>{
         expect(length('--10px--20px--40ch')).toBe(' -10px -20px -40ch');
    })
    test('Length negative positive mix',()=>{
         expect(length('-10px--20px-40ch--89rem')).toBe(' 10px -20px 40ch -89rem');
    })
    test('Length fit-content-func',()=>{
         expect(length('-fit-content-40px')).toBe(' fit-content( 40px )');
    })

    test('Length fit-content-func',()=>{
         expect(length('-fit-content-40px--40px-fit-content-60px')).toBe(' fit-content( 40px ) -40px fit-content( 60px )');
    })

    test('Length by-span-number',()=>{
         expect(lenByNumPer('-auto-flow-by-1fr-1fr-1fr')).toBe(' auto-flow / 1fr 1fr 1fr');
    })

    test('Length by-span-number',()=>{
         expect(lenByNumPer('-auto-flow-dense-by-1fr-1fr-1fr')).toBe(' auto-flow dense / 1fr 1fr 1fr');
    })
    test('Length by-span-number',()=>{
         expect(lenByNumPer('-1fr-1fr-by-auto-flow')).toBe(' 1fr 1fr / auto-flow');
    })
    test('Length by-span-number',()=>{
         expect(lenByNumPer('-1fr-1fr-by-300px-400px-50px')).toBe(' 1fr 1fr / 300px 400px 50px');
    })
})
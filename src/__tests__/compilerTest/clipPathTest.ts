import clip from '../../compilers/clipPath'

describe("Clip-path Test",()=>{
    test("Clip-path Test",()=>{
         expect(clip('-c-30p',{})).toBe('circle(30% )');
    })

    test("Clip-path Test",()=>{
         expect(clip('-c-50px-at-0-100px',{})).toBe('circle(50px  at 0 100px )');
    })

    test("Clip-path Test",()=>{
         expect(clip('-p-50p-60p_70p-80p_10p-20p',{})).toBe('polygon(50% 60% , 70% 80% , 10% 20% )');
    })

    test("Clip-path Test",()=>{
         expect(clip('-xywh-0-5px-100p-7d5p-round-15p-0',{})).toBe('xywh(0 5px 100% 7.5%  round 15% 0)');
    })

    test("Clip-path Test CSS Var",()=>{
         expect(clip('-path--path-orange',{})).toBe('path(var(--path-orange))');
    })
    test("Clip-path Test CSS Var",()=>{
         expect(clip('-url--svg-one',{})).toBe('url(var(--svg-one))');
    })
    test("Clip-path Test CSS Var",()=>{
         expect(clip('-url-some-id',{})).toBe('url(#some-id)');
    })
})
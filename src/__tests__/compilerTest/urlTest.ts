import url from '../../compilers/url'

describe('Url test',()=>{
    test('Url test css-var',()=>{
         expect(url('-url--url-bg')).toBe('url(var(--url-bg))');
    })

    test('Url test css-var multiple',()=>{
         expect(url('-url--url-bg__--url2-bg')).toBe('url(var(--url-bg)),url(var(--url2-bg))');
    })

    test('Url test with folder',()=>{
         expect(url('-url3-images-bg-card-png')).toBe("url('../../../images/bg/card.png')");
    })
    test('Url test with folder',()=>{
         expect(url('-url3-images-bg-card-png__url1-images-vendor-ok-svg')).toBe("url('../../../images/bg/card.png'),url('../images/vendor/ok.svg')");
    })
    test('Url test normal multi',()=>{
         expect(url('-url-3-images-bg-card-png__url-1-images-vendor-ok-svg')).toBe("url('3/images/bg/card.png'),url('1/images/vendor/ok.svg')");
    })
})
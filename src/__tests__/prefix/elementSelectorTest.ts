import element from '../../prefix/element-selector'

describe('Element Selector',()=>{
    test('Element Selector __',()=>{
        expect(element.process('__div-')).toEqual(['-',' > div'])
    })

    test('Element Selector multi __',()=>{
        expect(element.process('__div__p_a--hover-bg-red')).toEqual(['--hover-bg-red',' > div > p a'])
    })
    test('Element Selector class ',()=>{
        expect(element.process('__dotClass__p_a--hover-bg-red')).toEqual(['--hover-bg-red',' > .dotClass > p a'])
    })

    test('Element Selector class ',()=>{
        expect(element.process('__.class__p_a--hover-bg-red')).toEqual(['--hover-bg-red',' > .class > p a'])
    })
})
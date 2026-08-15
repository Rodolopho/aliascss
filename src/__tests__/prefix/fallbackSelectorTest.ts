/// <reference types="jest" />
import fallbackSelector from '../../prefix/fallback-selector';
describe('Fallback Selector Test',()=>{
    test('Fallback Selector ',()=>{
        expect(fallbackSelector.process('@selector(.class-name)-bgc-red')).toEqual(['-bgc-red',".class-name"])
    })
    test('Fallback Selector ',()=>{
        expect(fallbackSelector.process('_@selector(.class-name)-bgc-red')).toEqual(['-bgc-red'," .class-name"])
    })
     test('Fallback Selector ',()=>{
        expect(fallbackSelector.process('@(:-moz-drag-over)-bgc-red')).toEqual(['-bgc-red',":-moz-drag-over"])
    })
})
import attribute from '../../prefix/attribute-selector'
describe('Attribute Selector Test',()=>{
    test('Attribute Selector ',()=>{
        expect(attribute.process('[data]-bgc-red')).toEqual(['-bgc-red',"[data]"])
    })
    test('Attribute Selector ',()=>{
        expect(attribute.process('-[data]-bgc-red')).toEqual(['-bgc-red',"[data]"])
    })
    test('Attribute Selector ',()=>{
        expect(attribute.process('-[data-state=open]-bgc-red')).toEqual(['-bgc-red','[data-state="open"]'])
    })
})
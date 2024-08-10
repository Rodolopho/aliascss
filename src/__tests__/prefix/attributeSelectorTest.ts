import attribute from '../../prefix/attribute-selector'
describe('Attribute Selector Test',()=>{
    test('Attribute Selector ',()=>{
        expect(attribute.process('[data]-bgc-red')).toEqual(['-bgc-red',"[data]"])
    })
    test('Attribute -eql- for = ',()=>{
        expect(attribute.process('[data-size-eql-xs]-bgc-red')).toEqual(['-bgc-red','[data-size="xs"]'])
    })
    test('Attribute Selector ',()=>{
        expect(attribute.process('-[data]-bgc-red')).toEqual(['-bgc-red',"[data]"])
    })
    test('Attribute Selector ',()=>{
        expect(attribute.process('-[data-state=open]-bgc-red')).toEqual(['-bgc-red','[data-state="open"]'])
    })
    test('Attribute Selector ":" ',()=>{
        expect(attribute.process('-[data:xs-state=open]-bgc-red')).toEqual(['-bgc-red','[data\\:xs-state="open"]'])
    })
})
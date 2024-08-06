import transform from '../../compilers/transform'

 describe("Transfom Compipler Test",()=>{
    test('transform compiler single',()=>{
        expect(transform('rotate-45deg')).toEqual('rotate(45deg)')
    })

    test('transform compiler Multiple',()=>{
        expect(transform('rotate-45deg__scale-2-2')).toEqual('rotate(45deg) scale(2, 2)')
    })

    test('transform compiler Multiple minus',()=>{
        expect(transform('rotate--45deg__scale-2-2')).toEqual('rotate(-45deg) scale(2, 2)')
    })

    test('transform compiler matrix3d',()=>{
        expect(transform('-matrix3d-1-0-0-0-0-1-0-0-0-0-1-0-0-0-0-1')).toEqual('matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)')
    })

    test('transform compiler func alias',()=>{
        expect(transform('-m3d-1-0-0-0-0-1-0-0-0-0-1-0-0-0-0-1')).toEqual('matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)')
    })
    test('transform compiler cssVar',()=>{
        expect(transform('-t--translate')).toEqual('translate(var(--translate))')
    })

    test('transform compiler cssVar',()=>{
        expect(transform('-r--rotate-sm__s--scale-md')).toEqual('rotate(var(--rotate-sm)) scale(var(--scale-md))')
    })
 })


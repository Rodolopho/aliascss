import content, {string } from '../../compilers/stringAndContent';

describe("String test",()=>{
    test("String test",()=>{
         expect(string("hello_there",{})).toBe('hello_there')
    })

    test("String test",()=>{
         expect(string("hello__there",{})).toBe('hello, there')
    })
})

describe(" Content Test",()=>{
    test("content attr test",()=>{
         expect(content("-attr-data-content")).toBe('attr(data-content)')
    })

    test("content counter test",()=>{
         expect(content("counter-1")).toBe('counter(1)')
    })
    test("content string test",()=>{
         expect(content("Hello_World")).toBe('\"Hello World\"')
    })
    test("content css entities test",()=>{
         expect(content("_0034")).toBe("' \\0034'")
    })
})
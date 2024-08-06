
import {repeat} from '../../utils/cssFunc'
describe("CSS Function ",()=>{
    test('repeat()',()=>{
         expect(repeat('repeat-auto-fill-20px-30px')).toBe('repeat(auto-fill, 20px 30px)');
    })
     test('repeat()',()=>{
         expect(repeat('repeat-auto-fill-250px')).toBe('repeat(auto-fill, 250px)');
    })
    test('repeat()',()=>{
         expect(repeat('repeat-2-minmax-min-content-max-content')).toBe('repeat(2,  minmax(min-content , max-content ) )');
    })
    test('repeat()',()=>{
         expect(repeat('repeat-2-400px-minmax-min-content-max-content')).toBe('repeat(2, 400px minmax(min-content , max-content ) )');
    })
    test('repeat()',()=>{
         expect(repeat('-200px-repeat-auto-fill-100px-300px_100px')).toBe(' 200px repeat(auto-fill, 100px 300px) 100px');
    })
     test('repeat()',()=>{
         expect(repeat('-200px-repeat-auto-fill-100px-300px')).toBe(' 200px repeat(auto-fill, 100px 300px)');
    })
    test('repeat()',()=>{
         expect(repeat('-200px-repeat-auto-fill-20px-30px-repeat-auto-fill-100px-300px')).toBe(' 200px repeat(auto-fill, 20px 30px) repeat(auto-fill, 100px 300px)');
    })
    test('repeat()',()=>{
         expect(repeat('-200px-repeat-auto-fill-100px_300px')).toBe(' 200px repeat(auto-fill, 100px) 300px');
    })
})

import prefix, {createRegexForPseudo} from '../../prefix/PseudoPrefixNew'
const match=createRegexForPseudo(prefix);
//console.log('--nth-child-2n-bgc-red'.match(match),match);
describe("Pseudo Create Regex Test",()=>{
    test("Create Pseudo Regex",()=>{
         expect('--hover-bgc-red'.match(match)?.toString()).toEqual(['--hover','--hover'].toString())
    })
    test("Create Pseudo Regex",()=>{
         expect('--h-bgc-red'.match(match)?.toString()).toEqual(['--h','--h'].toString())
    })
    test("Create Pseudo Regex",()=>{
        let pf='--h-bgc-red'.match(match)?.[1]||'xyz'
         expect(prefix[pf]).toEqual(':hover')
    })

    test("Create Pseudo Regex",()=>{
         expect('--nth-child-2n-bgc-red'.match(match)?.toString()).toEqual(['--nth-child','--nth-child'].toString())
    })
    test("Create Pseudo Regex",()=>{
         expect('--nth-child-2n-bgc-red'.match(match)?.toString()).toEqual(['--nth-child','--nth-child'].toString())
    })
})
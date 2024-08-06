import media, {createRegexForMedia} from '../../prefix/responsive'

describe("Media Test Create media Regex",()=>{
    test("Create Media Regex",()=>{
         expect(createRegexForMedia(media.target)).toEqual(/^(print|xs|sm|md|lg|xl|xxl|2xl|-xs|-sm|-md|-lg|-xl|-xxl|-2xl)(?=[-|_])/)
    })
})
import media, {createRegexForMedia} from '../../prefix/responsive'

describe("Media Test Create media Regex",()=>{
    test("Create Media Regex",()=>{
         expect(createRegexForMedia(media.target)).toEqual(/^(print|@print|xs|@xs|sm|@sm|md|@md|lg|@lg|xl|@xl|xxl|@xxl|2xl|-xs|-@xs|-@sm|-sm|-@md|-md|-@lg|-lg|-@xl|-xl|-@xxl|-xxl|-@2xl|-2xl|dark|@dark|light|@light|@theme|@base|@components|@comps|@utils|@utilities)(?=[-|_])/)
    })
})
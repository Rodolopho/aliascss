import media, {createRegexForMedia} from '../../prefix/responsive'

describe("Media Test Create media Regex",()=>{
    test("Create Media Regex",()=>{
         expect(createRegexForMedia(media.target)).toEqual(/^(print|@hover|@print|@landscape|@portrait|@container-xs|@container-sm|@container-md|@container-lg|@container-xl|@container-2xl|xs|@xs|sm|@sm|md|@md|lg|@lg|xl|@xl|@2xl|2xl|-xs|-@xs|-@sm|-sm|-@md|-md|-@lg|-lg|-@xl|-xl|-@2xl|-2xl|dark|@dark|light|@light|@theme|@base|@components|@comps|@utils|@utilities|@starting-style|@ss)(?=[-|_])/)
    })
})
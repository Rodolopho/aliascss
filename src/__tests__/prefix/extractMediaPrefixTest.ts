import {describe, test, expect} from '@jest/globals';

import extractMediaPrefix from '../../prefix/extractMediaPrefix'
import media, {createRegexForMedia} from '../../prefix/responsive'
describe("Extract Media Prefix",()=>{
    test('Media Prefix Extractor',()=>{
         expect(extractMediaPrefix('xs--hover-bgc-red',media.target,createRegexForMedia(media.target))?.toString()).toBe(['@media (max-width: 575.99px)::::xs','--hover-bgc-red'].toString())
    })
})
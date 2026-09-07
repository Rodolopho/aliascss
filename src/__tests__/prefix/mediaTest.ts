import {describe, test, expect} from '@jest/globals';

import media, {createRegexForMedia} from '../../prefix/responsive'

describe("Media Test Create media Regex",()=>{
    test("Create Media Regex",()=>{
         expect(createRegexForMedia(media.target)).toEqual(/^(print|@print|@hover-capable|@landscape|@portrait|@container-xs|@container-sm|@container-md|@container-lg|@container-xl|@container-xxl|@forced-color-active|@fca|@standalone|@browser|@short-height|@xsh|@p3|@motion-reduce|@mouse|@touch|@resolution-lg|@resolution-xl|@contrast-more|@data-reduce|xs|@xs|sm|@sm|md|@md|lg|@lg|xl|@xl|xxl|@xxl|dark|@dark|light|@light|@theme|@base|@reset|@rs|@components|@comps|@utils|@utilities|@starting-style|@ss)(?=[-|_])/)
    })
})
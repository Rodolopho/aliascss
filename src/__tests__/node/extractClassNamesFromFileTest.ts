import * as fs from 'fs';
import * as path from 'path';
import fg from 'fast-glob';

import extractClassNamesFromFile from '../../node/extractClassNamesFromFile'
import config from '../../config'

// console.log(fg.sync('./src/**/*.*'));
describe("Test node",()=>{
    config.useExtractorFunction=true;
    config.createExtractorRegex('x');
    test('Test ',()=>{
        console.log(extractClassNamesFromFile(path.resolve(__dirname,'extractClassNameFromFileTestDate.html'),config))
        expect(extractClassNamesFromFile(path.resolve(__dirname,'extractClassNameFromFileTestDate.html'),config).toString()).toBe([["shadow-xxl", "tf-r-45deg", "bgc-red", "fs-12px", "bgc-primary800", "xs-fs-34px", "bgc-green", "lg-fs-12px"], {"demo-class": "df jcc aic c-blue --hover-dib --hover-text-xl --hover-b1px-s-red --hover-c-green"}, {"pop-down": "@[10,40,60]-bgc-red @50-dn @[90,40]-tf-r-s45deg", "pop-up": "@[10,40,60]-bgc-red @50-dn @[90,40]-tf-r-s45deg"}].toString())
    })
})
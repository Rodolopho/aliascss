const config:{
    prefix:string|null,
    matchExtractorFunction:RegExp|null,
    matchRegExp:RegExp,
    matchRegExpWithColon:RegExp,
    matchRegExpKeyFrame:RegExp,
    matchRegExpWithColonKeyFrame:RegExp
    useColon:boolean,
    ignore:string[],
    createExtractorRegex:(a:string)=>RegExp,
    createCSSModuleRegex:(a:string)=>RegExp,
    useExtractorFunction:boolean,
    useCSSModule:boolean,
    matchCSSModuleFunction:RegExp,
    globalValues:string[]
    styles:string[]
    widths:string[]
    modes:string[]
}={ 
    prefix:null,
    useColon:false,
    ignore:[],
    useExtractorFunction:false, // (?<=x(`|\(['"]))([\s\w-\(\)]+)[^`"']
    matchExtractorFunction:new RegExp('(?:'+'x|@'+')' + "[\\s*]?(`|\\(["+`"'])`+ "([^)`]+)" + "(`|" + `["']` + "\\))"),

    useCSSModule:false,
    matchCSSModuleFunction:new RegExp('(?:'+'x|@'+')' + "[\\s*]?(`|\\(["+`"'])`+ "([^)`]+)" + "(`|" + `["']` + "\\))"),
    
    // matchRegExp:/(?:(class|className|class[-_][\w-\[\]=_]+))=[\s*]?(?:["']\W+\s*(?:\w+)\()?["']([^'"]+)['"]/,
    matchRegExp:/(?:(class|className|class[-_][\w-\[\]=_&:\(\)\~\*\$\^\|]+))=[\s*]?(?:["']\W+\s*(?:\w+)\()?["']([^'"]+)['"]/,
    matchRegExpWithColon:/(?:(class|className|class[-_:][\w-\[\]=_&:\(\)\~\*\$\^\|]+))=[\s*]?(?:["']\W+\s*(?:\w+)\()?["']([^'"]+)['"]/,

    matchRegExpKeyFrame:/[\s](?:(keyframes[-_][\w-]+))=[\s*]?(?:["']\W+\s*(?:\w+)\()?["']([^'"]+)['"]/,
    matchRegExpWithColonKeyFrame:/[\s](?:(keyframes[-_:][\w-]+))=[\s*]?(?:["']\W+\s*(?:\w+)\()?["']([^'"]+)['"]/,
    
    createExtractorRegex:(fname:string)=>new RegExp('(?:'+fname+')' + "[\\s*]?(`|\\(["+`"'])`+ "([^'`"+'"]+)' + "(`|" + `["']` + "\\))"),
    createCSSModuleRegex:(fname:string)=>new RegExp("(?:"+fname+")\\[[`'"+'"]([^`"'+"']+)(?:[`'"+'"]\\])'),

    globalValues:['initial:ini','inherit:in','unset:un', 'revert:re','revert-layer:rl'],


    styles:['dotted:d','dashed:da','solid:s','double:db','groove:g','ridge:ri','inset:i','outset:o','none:n','hidden:h'],


    widths:['medium:m','thin:t','thick:th:t2'],


    modes:['normal:nl','multiply:m','screen:s','overlay:o','darken:d','lighten:l','color-dodge:cd','color-burn:cb','hard-light:hl',
    'soft-light:sl','difference:di:d2','exclusion:e','hue:h','saturation:sa:s2','color:c','luminosity:lu:l2'],

}
export default config;



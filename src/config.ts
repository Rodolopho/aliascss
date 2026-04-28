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
    globalValues:string[],
    styles:string[],
    remUnits:string[],
    remUnitsNegative:string[],
    widths:string[],
    modes:string[],
    makeStaticGlobalValues?:(a:string,b:string)=>string[],
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

    // makeStaticGlobalValues:(property:string,alias?:string)=>{
        
    // },


    styles:['dotted:d','dashed:da','solid:s','double:db','groove:g','ridge:ri','inset:i','outset:o','none:n','hidden:h'],


    widths:['medium:m','thin:t','thick:th:t2'],

    remUnits:[`var(--space-1,${1/4}rem):1`,
        `var(--space-2,${2/4}rem):2`,
        `var(--space-3,${3/4}rem):3`,
        `var(--space-4,${4/4}rem):4`,
        `var(--space-5,${5/4}rem):5`,
        `var(--space-6,${6/4}rem):6`,
        `var(--space-7,${7/4}rem):7`,
        `var(--space-8,${8/4}rem):8`,
        `var(--space-9,${9/4}rem):9`,
        `var(--space-10,${10/4}rem):10`,
        `var(--space-12,${12/4}rem):12`,
        `var(--space-16,${16/4}rem):16`,
        `var(--space-20,${20/4}rem):20`,
        `var(--space-24,${24/4}rem):24`,
        `var(--space-32,${32/4}rem):32`,
    ],

       remUnitsNegative:[`calc( -1 * var(--space-1,${2/4}rem)):-1`,// calc( -1 * var(--mt))
        `calc( -1 * var(--space-2,${2/4}rem)):-2`,
        `calc( -1 * var(--space-3,${3/4}rem)):-3`,
        `calc( -1 * var(--space-4,${4/4}rem)):-4`,
        `calc( -1 * var(--space-5,${5/4}rem)):-5`,
        `calc( -1 * var(--space-6,${6/4}rem)):-6`,
        `calc( -1 * var(--space-7,${7/4}rem)):-7`,
        `calc( -1 * var(--space-8,${8/4}rem)):-8`,
        `calc( -1 * var(--space-9,${9/4}rem)):-9`,
        `calc( -1 * var(--space-10,${10/4}rem)):-10`,
        `calc( -1 * var(--space-12,${12/4}rem)):-12`,
        `calc( -1 * var(--space-16,${16/4}rem)):-16`,
        `calc( -1 * var(--space-20,${20/4}rem)):-20`,
        `calc( -1 * var(--space-24,${24/4}rem)):-24`,
        `calc( -1 * var(--space-32,${32/4}rem)):-32`,
    ],


    modes:['normal:nl','multiply:m','screen:s','overlay:o','darken:d','lighten:l','color-dodge:cd','color-burn:cb','hard-light:hl',
    'soft-light:sl','difference:di:d2','exclusion:e','hue:h','saturation:sa:s2','color:c','luminosity:lu:l2'],

}
export default config;



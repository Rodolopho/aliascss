import config from './config.js';
import length , {lenByNumPer} from './compilers/length.js';
import color from './compilers/color.js';
import timingFunction from './compilers/timingFunction.js';
import content, { string } from './compilers/stringAndContent.js';
import border from './compilers/border.js';
import gradient from './compilers/gradient.js';
import url from './compilers/url.js';
import clipPath from './compilers/clipPath.js';
import shadow from './compilers/shadow.js';
import filter from './compilers/filter.js';
import transform from './compilers/transform.js';
import transition from './compilers/transition.js';
import font from './compilers/font.js';
import { repeat } from './utils/cssFunc.js';

const style=config.styles; // ['dotted:d','dashed:da:d2','solid:s','double:db:d3','groove:g','ridge:ri:r','inset:i','outset:o','none:n','hidden:h']; 
const width=config.widths; // ['medium:m','thin:t','thick:th:t2'];
const mode=config.modes; // ['normal:ml','multiply:m','screen:s','overlay:o','darken:d','lighten:l','color-dodge:cd','color-burn:cb','hard-light:hl','soft-light:sl','difference:di:d2','exclusion:e','hue:h','saturation:sa:s2','color:c','luminosity:lu:l2'];





type Property = {
    alias?:string,
    property?: string,
    test?:RegExp,
    type?:string,
    values?:string[],
    compiler?:(a:string, b:{ [key: string]: { [key: string]: string}})=>any,

}



const cssProps:{
    [key:string]:Property
}={ 
    //  type:s=static,d=dynamic
   //  -----------------xc----------------
'width-grow':{
    alias:'',
    property:'--width-grow',
    type:'d',
    compiler:length,
    values:[],
}, 
'width-shrink':{
    alias:'',
    property:'--width-shrink',
    type:'d',
    compiler:length,
    values:[],
}, 
'height-grow':{
    alias:'',
    property:'--height-grow',
    type:'d',
    compiler:length,
    values:[],
}, 
'height-shrink':{
    alias:'',
    property:'--height-shrink',
    type:'d',
    compiler:length,
    values:[],
}, 
//  ----------xc-end
'accent-color':{// no alias, checked
    alias:'accent',
    type:'d',
    compiler:color,
    values:[],
},
'align-content':{ // checked
    alias:'ac',
    type:'s',
    compiler:(value:string)=>value.replace(/^-/,'').replace(/-(safe|unsafe|first|last|baseline)/g,' $1'),
    values:['stretch:s','center:c','flex-start:fs','flex-end:fe','space-between:sb','space-around:sa','space-evenly:se'],
},
'align-items':{// checked
    alias:'ai',
    type:'s',
    compiler:(value:string)=>value.replace(/^-/,'').replace(/-(safe|unsafe|first|last|baseline)/g,' $1'),
    values:['normal:n','anchor-center:ac','stretch:st:s2','center:c','start:s','end:e','flex-start:fs','flex-end:fe','baseline:b'],
},
'align-self':{// checked
    alias:'as',
    type:'s',
     compiler:(value:string)=>value.replace(/^-/,'').replace(/-(safe|unsafe|first|last|baseline)/g,' $1'),
    values:['auto:a','anchor-center:ac','stretch:s','center:c','flex-start:fs','flex-end:fe','baseline:b'],
},
'all':{// checked // comes under global static definition applied to all property like [unset, initial]
    alias:'',
    type:'s',
    // compiler:'',
    values:[],
},
'anchor-name':{
    alias:'',
    type:'d',
    compiler:(value:string)=>"-"+value.replace(/__/g, ', --'),
    values:['none:n']
},
'animation':{// name with '-' not allowed
    alias:'a',
    type:'d',
    compiler:(value:string)=>{
        let result=''
        value.split(/__/).forEach((val)=>result+=(val.replace(/-/g,' ').replace(/(ease[\s]in|ease[\s]out|ease[\s]in[\s]out|linear|step[\s]start|step[\s]end)/,(m,e)=>m.replace(/\s/g,'-'))+', '))
       return result.replace(/(,\s)$/,'');
    },   
    values:[],
},
'animation-composition':{
    'alias':'anc',
    compiler:(value:string)=>value.replace(/[-_]/g,', ')

},
'animation-delay':{// checked
    alias:'adl',
    type:'dynamic',
    compiler:length,
    values:[],
},
'animation-direction':{// checked
    alias:'ad',
    type:'s',
    // compiler:'',
    values:['normal:n','reverse:r','alternate:a','alternate-reverse:ar'],
},
'animation-duration':{// checked
    alias:'adu',
    type:'d',
    compiler:length,
    values:[''],
},
'animation-fill-mode':{// checked
    alias:'afm',
    type:'s',
    // compiler:'',
    values:['none:n','forwards:f','backwards:b','both:bo:b2'],
},
'animation-iteration-count':{// checked  aic-i not align-item:center !important
    alias:'aic',
    type:'d',
    compiler:(value:string)=>value.replace(/[d]/, '.').replace('-',""),
    values:['infinite:i'],
},
'animation-name':{// checked
    alias:'an',
    type:'d',
    compiler:string,
    values:['none:n'],
},
'animation-play-state':{// checked
    alias:'aps',
    type:'s',
    // compiler:'',
    values:['paused:p','running:r'],
},
'animation-timing-function':{ // checked // accepts-multiple-value
    alias:'atf',
    type:'d',
    compiler:timingFunction,
    values:['linear:l','ease:e','ease-in:ei','ease-out:eo','ease-in-out:eio','step-start:ss','step-end:se'],
},
'animation-timeline':{
    alias:'at',
    type:'d',
    compiler:(values:string)=>{
        let result='';
        values.split(/__/).forEach((value)=>{
            if(value.match(/^-(scroll|view|s|v)-/)){
            result+=/^-s/.test(value)?'scroll(':'view(';
            value=value.replace(/^-(scroll|view|s|v)-/,'');
            if(value) result+=value.replace(/-/g,' ')
                .replace(/(\d)[p][\s]/g,'$1% ')
            .replace(/(\d)p$/,'$1%')
            .replace(/(\d)d(\d)/g,'$1.$2')+"), ";
        }else{
            
            result+= (value.match(/^-/)?("-"+value):('--'+value)).replace(/--none/,'none ')+', ';
        }
        })
        
        return result.replace(/,[\s]$/,'');
    },
    values:['auto:a','none:n','view():view:v','scroll():scroll:s',]
},
'animation-range':{
    'alias':'ar2',
    compiler:(value:string)=>value.replace(/-/g,' ').replace(/([\d])[p][\s]/,'$1% ').replace(/([\d])[p]$/,'$1%'),
},
'animation-range-end':{
    'alias':'are',
    compiler:(value:string)=>value.replace(/-/g,' ').replace(/([\d])[p][\s]/,'$1% ').replace(/([\d])[p]$/,'$1%'),
    values:['normal:nl','cover','contain:']
},
'animation-range-start':{
    'alias':'ars',
    compiler:(value:string)=>value.replace(/-/g,' ').replace(/([\d])[p][\s]/,'$1% ').replace(/([\d])[p]$/,'$1%'),
},

'appearance':{// checked // need update 
    alias:'a2',
    type:'s',
    compiler:(value:string)=>value.replace(/^-/,'').replace(/moz/,'-moz'),
    values:['none:n','auto:a','menulist-button:mb','textfield:t:tf'],
},
'aspect-ratio':{// checked// values example 1, 1 /1, auto, auto 1/4, 1/5 auto
    alias:'ar',
    type:'d',
    compiler:(value:string)=>value.replace(/^-/,'').replace(/(-by-)/,'/').replace(/([\d])d([\d])/g,'$1.$2').replace("-"," "),
    values:['auto:a'],
},


//  ----------B--------'
'backdrop-filter':{// checked
    alias:'bf',
    type:'d',
    compiler:filter,
    values:['none:n','invert():invert:i','sepia():sepia:se','grayscale():grayscale:gs'],
},
'backface-visibility':{// checked
    alias:'bv',
    type:'s',
    // compiler:'',
    values:['visible:v','hidden:h'],
},
'background':{// checked
    alias:'bg',
    type:'d',
    compiler:(value:string,custom:{})=>{
        if(value.match(/^[-]?url/)){
            return url(value)
        }else if(value.match(/[-]?(((repeating-)?(conic|linear|radial)-gradient)|(rrg|rg|lg|rcg|cg|rcg|rlg))([\w_-]+)/)){
            return gradient(value,custom)
        }else{
            return color(value, custom)
        }
    },
    values:[],
},
'background-attachment':{// checked
    alias:'bga',
    type:'s',
     compiler:(value:string)=>value.replace(/^-/,'').replace(/-/g,', '),
    values:['scroll:s','fixed:f','local:l'],
},
'background-blend-mode':{// checked
    alias:'bgbm',
    type:'s',
    compiler:(value:string)=>value.replace(/^-/,'').replace(/(-|__)/g,', ').replace(/color,[\s]dodge/g,'color-dodge'),
    values:['normal:nl','multiply:m','screen:s','overlay:o','darken:d','lighten:l','color-dodge:cd','saturation:sa|s2','color:c','luminosity:lu:l2'],
},
'background-clip':{
    alias:'bgc2',
    type:'s',
    compiler:(value:string)=>value.replace(/^-/,'').replace(/(-|__)/g,', ').replace(/,[\s]b/g,'-b'),
    values:['border-box:bb','padding-box:pb','content-box:cb'],
},
'background-color':{
    alias:'bgc',
    type:'d',
    compiler:color,
    values:['none:n'],
},
'background-image':{
    alias:'bgi',
    type:'d',
    compiler:(value:string,custom:{})=>{
        if(value.match(/^[-]?url/)){
            return url(value,)
        }else if(value.match(/[-]?(((repeating-)?(conic|linear|radial)-gradient)|(rrg|rg|lg|rcg|cg|rcg|rlg))([\w_-]+)/)){
            return gradient(value,custom)
        }else{
            return null
        }
    },
    values:['none:n'],
},
'background-origin':{
    alias:'bgo',
    type:'s',
    // compiler:'',
    values:['padding-box:pb','border-box:bb','content-box:cb'],
},
'background-position':{// checked
    alias:'bgp',
    type:'d',
    // compiler:length,
    compiler:(value)=>value.replace(/-/g,' ').replace(/(\d)d(\d)/g,'$1.$2').replace(/__/g,', ').replace(/([\d])p([\s,])/g,"$1%$2 ").replace(/([\d])p$/,"$1%"),
    values:['bottom:b','bottom center:bc','bottom left:bl','bottom right:br','center:c','center bottom:cb','center center:cc','center top:ct','left:l','left bottom:lb','left center:lc','left top:lt','right:r','right bottom:rb','right center:rc','right top:rt','top:t','top center:tc','top left:tl','top right:tr'],
},  
'background-position-x':{// checked
    alias:'bgpx',
    type:'d',
     compiler:(value)=>value.replace(/-/g,' ').replace(/(\d)d(\d)/g,'$1.$2').replace(/__/g,', ').replace(/([\d])p([\s,])/g,"$1%$2 ").replace(/([\d])p$/,"$1%"),
    values:['right:r','left:l','center:c'],
},
'background-position-y':{// checked
    alias:'bgpy',
    type:'d',
     compiler:(value)=>value.replace(/-/g,' ').replace(/(\d)d(\d)/g,'$1.$2').replace(/__/g,', ').replace(/([\d])p([\s,])/g,"$1%$2 ").replace(/([\d])p$/,"$1%"),
    values:['top:t','center:c','bottom:b'],
},
'background-repeat':{
    alias:'bgr',
    type:'s',
    // compiler:'',
    compiler:(value:string)=>value.replace(/^-/,'').replace(/__/g,' '),
    values:['repeat:r','repeat-x:rx','repeat-y:ry','round:ro','space:s','no-repeat:nr',
        'repeat repeat:rr','repeat space:rs','repeat round:rro','repeat no-repeat:rnr',
        'space repeat:sr','space space:ss','space round:sro','space no-repeat:snr',
        'round repeat:ror','round space:ros','round round:roro','round no-repeat:ronr',
        'no-repeat repeat:nrr','no-repeat space:nrs','no-repeat round:nrro','no-repeat no-repeat:nrnr'
    ],
},
'background-size':{
    alias:'bgs',
    type:'d',
    // compiler:length,
    compiler:(value:string)=>{
        let result='';
        value.split('__').forEach((val:string)=>{
            result+=length(val).replace(/-(contain|cover|auto)/g," $1")+", "
        })
        return result.replace(/[,][\s]$/,'');
    },
    values:['auto:a','contain:c','cover:co'],
},
// 'bleed':{},
'block-overflow':{
    alias:'',
    type:'d',
    compiler:(value:string)=>value.replace(/^-/,''),
    values:['clip:c','ellipsis:e']
},
'block-size':{// checked need update on fit-content(15px)
    alias:'',// border-spacing-bs
    type:'d',
    compiler:length,
    values:['auto:a','max-content:xc','min-content:mc','fit-content:fc'],
},
'border':{// checked only width-style-color format works i.e border-1px-solid-red
    alias:'b',
    type:'d',
    compiler:border,
    values:['none:n'],
},
'border-block':{
    alias:'',
    type:'d',
    compiler:border,
    values:[''],
},
'border-block-color':{
    alias:'',
    type:'d',
    compiler:color,
    values:[''],
},
'border-block-end-color':{
    alias:'bbec',
    type:'d',
    compiler:color,
    values:[''],
},
'border-block-end-style':{
    alias:'bbes',
    type:'s',
    // compiler:'',
    values:style,
},
'border-block-end-width':{
    alias:'bbew',
    type:'d',
    compiler:length,
    values:width,
},
'border-block-start-color':{
    alias:'bbsc',
    type:'d',
    compiler:color,
    values:[''],
},
'border-block-start-style':{
    alias:'bbss',
    type:'s',
    // compiler:'',
    values:style,
},
'border-block-start-width':{
    alias:'bbsw',
    type:'d',
    compiler:length,
    values:width,
},
'border-block-style':{
    alias:'',
    type:'s',
    // compiler:'',
    values:style,
},
'border-block-width':{
    alias:'',
    type:'d',
    compiler:length,
    values:width,
},
'border-bottom':{
    alias:'bb',
    type:'d',
    compiler:border,
    values:[''],
},
'border-bottom-color':{
    alias:'bbc',
    type:'d',
    compiler:color,
    values:[''],
},
'border-bottom-left-radius':{
    alias:'bblr',
    type:'d',
    compiler:length,
    values:[''],
},
'border-bottom-right-radius':{
    alias:'bbrr',
    type:'d',
    compiler:length,
    values:[''],
},
'border-bottom-style':{
    alias:'bbs',
    type:'s',
    // compiler:'',
    values:style,
},
'border-bottom-width':{
    alias:'bbw',
    type:'d',
    compiler:length,
    values:width,
},
'border-boundary':{
    alias:'',
    type:'s',
    'values':['none:n','patent:p','display:d']
},
'border-collapse':{
    alias:'',
    type:'s',
    // compiler:'',
    values:['separate:s','collapse:c'],
},
'border-color':{
    alias:'bc',
    type:'d',
    compiler:color,
    values:[''],
},
'border-end-end-radius':{
    alias:'beer',
    type:'d',
    compiler:length,
    values:[''],
},
'border-end-start-radius':{
    alias:'besr',
    type:'d',
    compiler:length,
    values:[''],
},
'border-image':{ // -- need work 
    alias:'',// taken by border-inline
    type:'',
    compiler:(value:string,custom:{})=>{
        if(value.match(/^[-]?url/)){
            return url(value,)
        }else if(value.match(/[-]?(((repeating-)?(conic|linear|radial)-gradient)|(rrg|rg|lg|rcg|cg|rcg|rlg))([\w_-]+)/)){
            return gradient(value,custom)
        }else{
            return null
        }
    },
    values:[''],
},
'border-image-outset':{
    alias:'',
    type:'d',
    compiler:length,
    values:[''],
},
'border-image-repeat':{
    alias:'bir',
    type:'s',
    // compiler:'',
    values:['stretch:s','repeat:r','round:ro|r2','space:sp|s2'],
},
'border-image-slice':{
    alias:'',
    type:'d',
    compiler:length,
    values:[''],
},
'border-image-source':{
    alias:'',
    type:'',
    compiler:(value:string,custom:{})=>{
        if(value.match(/^[-]?url/)){
            return url(value,)
        }else if(value.match(/[-]?(((repeating-)?(conic|linear|radial)-gradient)|(rrg|rg|lg|rcg|cg|rcg|rlg))([\w_-]+)/)){
            return gradient(value,custom)
        }else{
            return null
        }
    },
    values:['none:n'],
},
'border-image-width':{
    alias:'',
    type:'d',
    compiler:length,
    values:[''],
},
'border-inline':{
    alias:'bi',
    type:'d',
    compiler:border,
    values:[''],
},
'border-inline-color':{ 
    alias:'bic',
    type:'d',
    compiler:color,
    values:[''],
},
'border-inline-end-color':{
    alias:'biec',
    type:'d',
    compiler:color,
    values:[''],
},
'border-inline-end-style':{
    alias:'bies',
    type:'s',
    // compiler:'',
    values:style,
},
'border-inline-end-width':{
    alias:'biew',
    type:'d',
    compiler:length,
    values:width,
},
'border-inline-start-color':{
    alias:'bisc',
    type:'d',
    compiler:color,
    values:[''],
},
'border-inline-start-style':{
    alias:'biss',
    type:'s',
    // compiler:'',
    values:style,
},
'border-inline-start-width':{
    alias:'bisw',
    type:'d',
    compiler:length,
    values:width,
},
'border-inline-style':{
    alias:'bis',
    type:'s',
    // compiler:'',
    values:style,
},
'border-inline-width':{
    alias:'biw',
    type:'d',
    compiler:length,
    values:width,
},
'border-left':{
    alias:'bl',
    type:'d',
    compiler:border,
    values:[''],
},
'border-left-color':{
    alias:'blc',
    type:'d',
    compiler:color,
    values:[''],
},
'border-left-style':{
    alias:'bls',
    type:'s',
    // compiler:'',
    values:style,
},
'border-left-width':{
    alias:'blw',
    type:'d',
    compiler:length,
    values:width,
},
'border-radius':{
    alias:'br',
    type:'d',
    compiler:length,
    values:[''],
},
'border-right':{
    alias:'brt',
    type:'d',
    compiler:border,
    values:[''],
},
'border-right-color':{
    alias:'brc',
    type:'d',
    compiler:color,
    values:[''],
},
'border-right-style':{
    alias:'brs',
    type:'s',
    // compiler:'',
    values:style,
},
'border-right-width':{
    alias:'brw',
    type:'d',
    compiler:length,
    values:width,
},
'border-spacing':{
    alias:'',
    type:'d',
    compiler:length,
    values:[''],
},
'border-start-end-radius':{
    alias:'bser',
    type:'d',
    compiler:length,
    values:[''],
},
'border-start-star-radius':{
    alias:'bssr',
    type:'d',
    compiler:length,
    values:[''],
},
'border-style':{
    alias:'bs',// ------
    type:'s',
    // compiler:'',
    values:style,
},
'border-top':{
    alias:'bt',
    type:'d',
    compiler:border,
    values:[''],
},
'border-top-color':{
    alias:'btc',
    type:'d',
    compiler:color,
    values:[''],
},
'border-top-left-radius':{
    alias:'btlr',
    type:'d',
    compiler:length,
    values:[''],
},
'border-top-right-radius':{
    alias:'btrr',
    type:'d',
    compiler:length,
    values:[''],
},
'border-top-style':{
    alias:'bts',
    type:'s',
    // compiler:'',
    values:style,
},
'border-top-width':{
    alias:'btw',
    type:'d',
    compiler:length,
    values:width,
},
'border-width':{
    alias:'bw',
    type:'d',
    compiler:length,
    values:width,
},
'bottom':{
    alias:'btm',
    type:'d',
    compiler:length,
    values:[''],
},
'box-decoration-break':{
    alias:'bdb',
    type:'',
    // compiler:'',
    values:['slice:s','clone:c'],
},
'box-reflect':{// --- gradient
    alias:'bxr',
    type:'d',
    compiler:length,
    values:['none:n','below:b','above:a','left:l','right:r'],
},
'box-shadow':{// --require -webkit-box-reflect
    alias:'bxs',
    type:'d',
    compiler:shadow, 
    values:['none:n'],
},
'box-sizing':{
    alias:'',
    type:'s',
    // compiler:'',
    values:['content-box:cb', 'border-box:bb'],
},
'break-after':{
    alias:'ba',
    type:'s',
    // compiler:'',
    values:['auto:au','all','always:al','avoid:av','avoid-column:ac','avoid-page:ap','avoid-region:ar','column:c','left:l','page:p','recto:rec','region:reg','right:r','verso:v'],
},
'break-before':{
    alias:'',
    type:'s',
    // compiler:'',
    values:['auto:au','all','always:al','avoid:av','avoid-column:ac','avoid-page:ap','avoid-region:ar','column:c','left:l','page:p','recto:rec','region:reg','right:r','verso:v'],
},
'break-inside':{
    alias:'',// ----
    type:'s',
    // compiler:'',
    values:['auto:au','all','always:al','avoid:av','avoid-column:ac','avoid-page:ap','avoid-region:ar','column:c','left:l','page:p','recto:rec','region:reg','right:r','verso:v'],
},

// ----------C--------
'caption-side':{
    alias:'',
    type:'s',
    // compiler:'',
    values:['top:t','bottom:b'],
},
'caret-color':{
    alias:'',// ---
    type:'d',
    compiler:color,
    values:[],
},
'clear':{
    alias:'cl',// --
    type:'',
    // compiler:'',
    values:['none:n','left:l','right:r','both:b'],
},
'clip-path':{
    alias:'cp',
    type:'d',
    compiler:clipPath,
    values:['none:n','margin-box:mb','border-box:bb','padding-box:pb','content-box:cb','fill-box:fb','stroke-box:sb','view-box:vb'],

    
},
'color':{
    alias:'c',
    type:'d',
    compiler:color,
    values:[''],
},
'color-interpolation':{
    alias:'',
    type:'s',
    // compiler:'',
    values:['auto:a','sRGB','linerRGB']
},
'color-scheme':{
    alias:'',
    type:'s',
    // compiler:'',
    values:['normal:n','dark:d','light dark:light-dark:ld','only light:only-light:ol']
},
'column-count':{
    alias:'cc',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'column-fill':{
    alias:'cf',
    type:'s',
    // compiler:'',
    values:['auto:a','balance:b'],
},
'column-gap':{
    alias:'cg',
    type:'d',
    compiler:length,
    values:['normal:n'],
},
'column-rule':{
    alias:'cr',
    type:'d',
    compiler:border,
    values:[''],
},
'column-rule-color':{
    alias:'crc',
    type:'d',
    compiler:color,
    values:[''],
},
'column-rule-style':{
    alias:'crs',
    type:'s',
    // compiler:'',
    values:style,
},
'column-rule-width':{
    alias:'crw',
    type:'d',
    compiler:length,
    values:width,
},
'column-span':{
    alias:'cs',
    type:'s',
    // compiler:'',
    values:['all:a','none:n'],
},
'column-width':{
    alias:'cw',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'columns':{
    alias:'cols',
    type:'d',
    compiler:length,
    values:[''],
},
'contain':{
    alias:'',
    type:'d',
    compiler:(value:string)=>value.replace(/^-/,'').replace(/_[_]?/g,' '),
    values:['none:n','strict:st','content:c','size:si','inline-size:is','layout:l','style:sty','paint:P']
},
'contain-intrinsic-block-size':{
    alias:'',
    type:'d',
    compiler:length,
    values:['none:n','auto:a']
},
'contain-intrinsic-height':{
    alias:'',
    type:'d',
    compiler:length,
    values:['none:n','auto:a']
},
'contain-intrinsic-inline-size':{
    alias:'',
    type:'d',
    compiler:length,
    values:['none:n','auto:a']
},
'contain-intrinsic-size':{
    alias:'',
    type:'d',
    compiler:length,
    values:['none:n','auto:a']
},'contain-intrinsic-width':{
    alias:'',
    type:'d',
    compiler:length,
    values:['none:n','auto:a']
},
'container':{
     alias:'',
    type:'d',
    compiler:(value:string)=>value.replace(/^-/,'').replace(/-by-/,' / '),
    values:['none']
},
'container-name':{
     alias:'',
    type:'d',
    compiler:(value:string)=>value.replace(/^-/,'').replace(/__/,' '),
    values:[]
},
'container-type':{
    alias:'',
    type:'s',
    // compiler:'',
    values:['normal','size','inline-size']
},
'content':{
    alias:'cont',
    type:'d',
    compiler:content,
    values:['normal:nl','none:n','open-quote:oq','close-quote:cq','no-open-quote:noq','no-close-quote:ncq'],
},
'content-visibility':{
    alias:'cv',
    type:'s',
    values:['visible:v','hidden:h','auto:a']
},
'counter-increment':{
    alias:'ci',
    type:'d',
    compiler:(value:string)=>value.replace(/^-/,'').replace(/[-]([-]?[\d])[-]?/g,' $1 '),
    values:['none'],
},
'counter-reset':{
    alias:'',
    type:'d',
    compiler:(value:string)=>value.replace(/^-/,'').replace(/[-]([-]?[\d])[-]?/g,' $1 '),
    values:['none:n'],
},
'counter-set':{
    alias:'',
    type:'d',
    compiler:(value:string)=>value.replace(/^-/,'').replace(/[-]([-]?[\d])[-]?/g,' $1 '),
    values:['none:n'],
},
'cursor':{
    alias:'cu',
    type:'',
    // compiler:'',
    values:['alias:al','all-scroll:as','auto:a','cell:c','col-resize:cr','context-menu:cm','copy:cp',
  'crosshair:ch','default:d','e-resize:er', 'ew-resize:ewr','help:h','move:mo','n-resize:nr','ne-resize:ner','nesw-resize:neswr',
  'no-drop:nd','none:n','not-allowed:na','ns-resize:nsr','nw-resize:nwr','nwse-resize:nwser',
  'pointer:p','progress:pr','row-resize:rr','s-resize:sr','se-resize:ser','sw-resize:swr',
  'text:t','vertical-text:vt','w-resize:wr','wait:w','zoom-in:zi','zoom-out:zo'],
},
 
// ----------D--------
'direction':{
    alias:'dir',// --
    type:'s',
    // compiler:'',
    values:['ltr:l','rtl:r'],
},
'display':{// display-i doesn't work as -i is for important
    alias:'d',
    type:'s',
    // compiler:'',
    values:['block:b','compact:cp','container:c','flex:f','grid:g', 'inline:i','inline-block:ib',
  'inline-flex:if','inline-grid:ig', 'inline-table:it',
  'list-item:li','none:n','run-in:ri','table:t','table-caption:tcap','table-cell:tcl','table-column:tc',
  'table-column-group:tcg','table-footer-group:tfg','table-header-group:thg','table-row:tr','table-row-group:trg'],
},

// ----------E--------
'empty-cells':{
    alias:'ec',
    type:'s',
    // compiler:'',
    values:['hide:h','show:s'],
},

// ----------F--------
'field-sizing':{
    alias:'',
    type:'s',
    // compiler:'',
    values:['content:c','fixed:f'],
},
'filter':{
    alias:'fl',
    type:'d',
    compiler:filter,
    values:['none:n','invert():invert:i','sepia():sepia:se','grayscale():grayscale:gs'],
},
'flex':{
    alias:'',
    type:'d',
    compiler:length,
    values:[''],
},
'flex-basis':{
    alias:'fb',
    type:'d',
    compiler:length,
    values:[''],
},
'flex-direction':{
    alias:'fd',
    type:'s',
    // compiler:'',
    values:['row:r','row-reverse:rr','column:c','column-reverse:cr'],
},
'flex-flow':{// --incomplete
    alias:'',
    type:'d',
    compiler:(value:string)=>value.replace(/[-](w|n)/," $1"),
    values:[''],
},
'flex-grow':{
    alias:'fg',
    type:'d',
    compiler:length,
    values:[''],
},
'flex-shrink':{
    alias:'',
    type:'d',
    compiler:length,
    values:[''],
},
'flex-wrap':{
    alias:'',
    type:'s',
    // compiler:'',
    values:['nowrap:nw:n','wrap:w','wrap-reverse:wr'],
},
'float':{
    alias:'f',// ----
    type:'s',
    // compiler:'',
    values:['none:n','left:l','right:r',''],
},
 'font':{// --
     alias:'',
     type:'d',
     compiler:length,
     values:[''],
 },

'font-family':{
    alias:'ff',
    type:'d',
    compiler:font,
    values:[''],
},
'font-feature-settings':{
    alias:'ffs',
    type:'',
    compiler:(value:string)=>value.replace(/--/g, ', ').replace(/(\w{4})/g, '"$1" ') .replace('-', ' '),
    values:[''],
    
},
'font-kerning':{
    alias:'fk',
    type:'s',
    // compiler:'',
    values:['auto:a','normal:nl|n2','none:n'],
},
'font-language-override':{
    alias:'flo',
    type:'d',
    compiler:(value:string)=>value.replace(/(\w+)/,'"$1"'),
    values:['normal|nl'],
},
'font-size':{
    alias:'fs',
    type:'d',
    compiler:length,
    values:['medium:m:md','xx-small:xxs','x-small:xs','small:sm:s','large:lg:l','x-large:xl','xx-large:xxl','smaller:smr','larger:lgr'],
},
'font-size-adjust':{
    alias:'fsa',
    type:'d',
    compiler:length,
    values:['none:n'],
},
'font-stretch':{
    alias:'',// --
    type:'s',
    // compiler:'',
    values:['ultra-condensed:uc','extra-condensed:ec','condensed:c','semi-condensed:sc','normal:nl','semi-expanded:se','expanded:e','extra-expanded:ee','ultra-expanded:ue'],
},
'font-style':{
    alias:'',// --
    type:'s',
    // compiler:'',
    values:['normal:nl','italic:i','oblique:o'],
},
'font-synthesis':{// --need work
    alias:'',
    type:'d',
    compiler:length,
    values:['none:n','weight:w',],
},
'font-variant':{// --need work
    alias:'fv',
    type:'s',
    // compiler:'',
    values:['normal:nl','small-caps:sc'],
},
'font-variant-alternates':{// --need work
    alias:'fva',
    type:'',
    // compiler:'',
    values:[''],
},
'font-variant-caps':{
    alias:'fvc',
    type:'s',
    // compiler:'',
    values:['normal:nl','small-caps:sc','all-small-caps:asc','petite-caps:pc','all-petite-caps:apc','unicase:u','titling-caps:tc'],
},
'font-variant-east-asian':{// --
    alias:'fvea',
    type:'',
    // compiler:'',
    values:[''],
},
'font-variant-ligatures':{
    alias:'fvl',
    type:'s',
    // compiler:'',
    values:['normal:nl','none:n','common-ligatures:cl','no-common-ligatures:ncl','discretionary-ligatures:dl','no-discretionary-ligatures:ndl','historical-ligatures:hl','no-historical-ligatures:nhl','contextual:c','no-contextual:nc'],
},
'font-variant-numeric':{
    alias:'fvn',
    type:'s',
    // compiler:'',
    values:['normal:nl','ordinal:o','slashed-zero:sz','lining-nums:ln', 'oldstyle-nums:on', 'proportional-nums:pn', 'tabular-nums:yn', 'diagonal-fractions:df', 'stacked-fractions:sf'],
},

'font-variant-position':{
    alias:'fvp',
    type:'s',
    // compiler:'',
    values:['normal:nl','sub:s','super:su:s2'],
},
'font-variant-emoji':{
    alias:'fve',
    type:'s',
    // compiler:'',
    values:['normal:nl','text:t','emoji:e','unicode:u'],
},
'font-weight':{
    alias:'fw',
    type:'s',
    // compiler:'',
    values:['bolder:b2:blr','lighter:l:ltr','100:1','200:2','300:3','400:4:normal:nl','500:5','600:6','700:7:bold:b','800:8','900:9'],
},

// ----------G--------
'gap':{
    alias:'g',
    type:'d',
    compiler:length,
    values:[''],
},
'grid':{// ---need work
    alias:'gd',
    type:'d',
    compiler:(value:string)=>repeat(value).replace(/[-]?(minmax)-(min-content|max-content|auto|\w+)-(min-content|max-content|auto|\w+)/g," $1($2 , $3 ) ")
            .replace(/[-]?(fit-content)[-]([\w]+)/g, "$1( $2 ) ")
            .replace(/-([\d|a|a|m|f])/g,' $1')
            .replace(/([\d])d([\d])/g,'$1.$2').replace(/auto-flow-dense/g,'auto-flow dense').replace(/auto flow/,'auto-flow')
            .replace(/([\d])p([\s])/g,"$1% ").replace(/p$/,"%").replace(/-by[-\s]/g,' / '),
    values:['none:n'],
},
'grid-area':{
    alias:'ga',
    type:'d',
    // compiler:lenByNumPer,
    compiler:(value:string)=>value.replace(/--([\d])/g,'-Minus$1').replace(/^-/,'').replace(/-by-/g," / ").replace(/[-]?(span|[-]?[\d]+)[-]?/g,' $1 ').replace(/[-]?Minus[\s]*/g,'-'),
    values:[''],
},
'grid-auto-columns':{
    alias:'gac',
    type:'d',
    compiler:(value:string)=>{
        //  if(/^fit-content-/.test(value:string)){
        //      return value.replace(/(fit-content)[-]([\w]+)/,"$1( $2 )") // fit-content-50px
        //  .replace(/([\d])d([\d])/,'$1.$2').replace(/([\d])p([\s])/,"$1% ");
        //  }
        //  if(/^minmax-/.text(value:string)){
            return value.replace(/[-]?(minmax)-(min-content|max-content|auto|\w+)-(min-content|max-content|auto|\w+)/g," $1($2 , $3 ) ")
            .replace(/[-]?(fit-content)[-]([\w]+)/g, "$1( $2 ) ")
            .replace(/-([\d|a|a|f|m])/g,' $1')
            .replace(/([\d])d([\d])/g,'$1.$2')
            .replace(/([\d])p([\s])/g,"$1% ").replace(/p$/,"%");

        // } 

    },
    values:['max-content:xc','min-content:mc','auto:a'],
},
'grid-auto-flow':{
    alias:'gaf',
    type:'s',
    // compiler:'',
    values:['row:r','column:c','dense:d','row dense:row-dense:rd','column dense:column-dense:cd'],
},
'grid-auto-rows':{
    alias:'gar',
    type:'d',
    compiler:(value:string)=>{
        //  if(/^fit-content-/.test(value:string)){
        //      return value.replace(/(fit-content)[-]([\w]+)/,"$1( $2 )") // fit-content-50px
        //  .replace(/([\d])d([\d])/,'$1.$2').replace(/([\d])p([\s])/,"$1% ");
        //  }
        //  if(/^minmax-/.text(value:string)){
            return value.replace(/[-]?(minmax)-(min-content|max-content|auto|\w+)-(min-content|max-content|auto|\w+)/g," $1($2 , $3 ) ")
            .replace(/[-]?(fit-content)[-]([\w]+)/g, "$1( $2 ) ")
            .replace(/-([\d|a|a|f|m])/g,' $1')
            .replace(/([\d])d([\d])/g,'$1.$2')
            .replace(/([\d])p([\s])/g,"$1% ").replace(/p$/,"%");

        // } 

    },
    values:['max-content:xc','min-content:mc','auto:a'],
},
'grid-column':{
    alias:'gc',
    type:'d',
    // compiler:lenByNumPer,
    compiler:(value:string)=>value.replace(/--([\d])/g,'-Minus$1').replace(/^-/,'').replace(/-by-/g," / ").replace(/[-]?(span|[-]?[\d]+)[-]?/g,' $1 ').replace(/[-]?Minus[\s]*/g,'-'),
    values:[],
},
'grid-column-end':{
    alias:'gce',
    type:'d',
    // compiler:lenByNumPer,
    compiler:(value:string)=>value.replace(/--([\d])/g,'-Minus$1').replace(/^-/,'').replace(/-by-/g," / ").replace(/[-]?(span|[-]?[\d]+)[-]?/g,' $1 ').replace(/[-]?Minus[\s]*/g,'-'),
  
    values:['auto'],
},
'grid-column-gap':{
    alias:'gcg',
    type:'d',
    compiler:length,
    values:[],
},
'grid-column-start':{
    alias:'gcs',
    type:'d',
    // compiler:length,
    compiler:(value:string)=>value.replace(/--([\d])/g,'-Minus$1').replace(/^-/,'').replace(/-by-/g," / ").replace(/[-]?(span|[-]?[\d]+)[-]?/g,' $1 ').replace(/[-]?Minus[\s]*/g,'-'),
  

    values:['auto:a'],
},
'grid-gap':{
    alias:'gg',
    type:'d',
    compiler:lenByNumPer,
    values:[],
},
'grid-row':{
    alias:'gr',
    type:'d',
    // compiler:lenByNumPer,
    compiler:(value:string)=>value.replace(/--([\d])/g,'-Minus$1').replace(/^-/,'').replace(/-by-/g," / ").replace(/[-]?(span|[-]?[\d]+)[-]?/g,' $1 ').replace(/[-]?Minus[\s]*/g,'-'),

    values:['auto:a','auto / auto:auto-auto'],
},
'grid-row-end':{
    alias:'gre',
    type:'d',
    // compiler:lenByNumPer,
    compiler:(value:string)=>value.replace(/--([\d])/g,'-Minus$1').replace(/^-/,'').replace(/-by-/g," / ").replace(/[-]?(span|[-]?[\d]+)[-]?/g,' $1 ').replace(/[-]?Minus[\s]*/g,'-'),
  
    values:['auto:a'],
},
'grid-row-gap':{
    alias:'grg',
    type:'d',
    compiler:length,
    values:[],
},
'grid-row-start':{
    alias:'grs',
    type:'d',
    // compiler:lenByNumPer,
    compiler:(value:string)=>value.replace(/--([\d])/g,'-Minus$1').replace(/^-/,'').replace(/-by-/g," / ").replace(/[-]?(span|[-]?[\d]+)[-]?/g,' $1 ').replace(/[-]?Minus[\s]*/g,'-'),
  
    values:['auto:a'],
},
'grid-template':{// ----
    alias:'gt',
    type:'d',
    compiler:repeat,
    values:['none:n'],
},
'grid-template-areas':{
    alias:'gta',
    type:'d',
    compiler:(value:string)=>value.replace(/[-]?([\w]+)/g,"'$1' ").replace(/_/g," ").replace(/dot/g,'.'),
    values:['none'],
},
'grid-template-columns':{// --repeat
    alias:'gtc', 
    type:'d',
    compiler:repeat,
    // compiler:(value:string)=>{
    //     return value.replace(/[-]?(minmax)-(min-content|max-content|auto|\w+)-(min-content|max-content|auto|\w+)/g," $1($2 , $3 ) ")
    //         .replace(/[-]?(fit-content)[-]([\w]+)/g, "$1( $2 ) ")
    //         .replace(/-([\d|a|a|m|f])/g,' $1')
    //         .replace(/([\d])d([\d])/g,'$1.$2')
    //         .replace(/([\d])p([\s])/g,"$1% ").replace(/p$/,"%");
    // },
    values:['subgrid:sg:s','masonry:m','none:n'],
},
'grid-template-rows':{// --repeat
    alias:'gtr',
    type:'d',
    compiler:repeat,
    // compiler:(value:string)=>{
    //     return value.replace(/[-]?(minmax)-(min-content|max-content|auto|\w+)-(min-content|max-content|auto|\w+)/g," $1($2 , $3 ) ")
    //         .replace(/[-]?(fit-content)[-]([\w]+)/g, "$1( $2 ) ")
    //         .replace(/-([\d|a|a|f|m])/g,' $1')
    //         .replace(/([\d])d([\d])/g,'$1.$2')
    //         .replace(/([\d])p([\s])/g,"$1% ").replace(/p$/,"%");
    // },
    values:['subgrid:sg:s','masonry:m','none:n'],
},

// ----------H--------
'hanging-punctuation':{
    alias:'hp',
    type:'d',
    compiler:(value:string)=>value.replace(/-e/g,'E').replace(/-/g,' ').replace(/E/g,'-e'),
    values:['none:n','first:f','last:l','force-end:fe','allow-end:ae'],
},
'height':{
    alias:'h',// --
    type:'d',
    compiler:length,
    values:['auto:a','max-content:xc','min-content:mc'],
},
'hyphens':{
    alias:'',
    type:'s',
    // compiler:'',
    values:['auto:a','none:n','manual:m'],
},

// ----------I--------
'image-orientation':{
    alias:'io',
    type:'s',
    // compiler:'',
    values:['none:n','from-image:fi'],
},
'image-rendering':{
    alias:'ir',
    type:'s',
    // compiler:'',
    values:['auto:a','crisp-edges:ce','pixelated:p'],
},
'initial-letter':{
    'alias':'il',
    compiler:(value:string)=>value.replace(/^-/,'').replace(/(\d)d(\d)/,'$1.$2'),
    values:['normal:nl']
},
'inline-size':{
    alias:'is',
    type:'d',
    compiler:length,
    values:['auto:a','max-content:xc','min-content:mc'],
},
'inset':{
    alias:'i',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'inset-area':{
    alias:'ia',
    values:['none:n','top left:top-left:tl','start end:start-end:se','block-start center:block-start-center:bsc',
        'inline-start block-end:inline-start block-end:isbe','x-start y-end:x-start-y-end:xsye',
        'center y-self-end:center-y-self-end:cye','top span-left:top-span-left:tsl',
        'center span-start:center-span-start:css','inline-start span-block-end:inline-start-span-block-end:issbe',
        'y-start span-x-end:y-start-span-x-end:yssxe','top span-all:top-span-all:tsa','block-end span-all:block-end-span-all:besa',
        'x-self-start span-all:x-self-start-span-all:xsssa','top:t', 'inline-start:is', 'center:c', 'span-all:sa','end:e'
    ],
},
'inset-block':{
    alias:'ib',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'inset-block-end':{
    alias:'ibe',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'inset-block-start':{
    alias:'ibs',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'inset-inline':{
    alias:'ii',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'inset-inline-end':{
    alias:'iie',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'inset-inline-start':{
    alias:'iis',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'isolation':{
    alias:'',
    type:'s',
    // compiler:'',
    values:['auto:a','isolate:i'],
},

// ----------J--------
'justify-content':{
    alias:'jc',
    type:'s',
    // compiler:'',
    values:['flex-start:fs','flex-end:fe','center:c','space-around:sa','space-evenly:se','space-between:sb'],
},
'justify-items':{
    alias:'ji',
    type:'s',
    // compiler:'',
    values:['legacy:le|l2','stretch:st|s2','start:s','left:l','center:c','end:e','right:r','flex-start:fs','flex-end:fe',
    'normal:nl','baseline:b','first baseline:first-baseline:fb','last baseline:last-baseline:fl','self-start:ss','self-end:se',
    'unsafe:us','safe center:safe-center:sc','unsafe center:unsafe-center:uc','legacy right:legacy-right:lr',
    'legacy left:legacy-left:ll','legacy center:legacy-center:lc'],
},
'justify-self':{
    alias:'js',
    type:'s',
    // compiler:'',
    values:['auto:a','normal:nl','stretch:st:s2','center:c','start:s','end:e','flex-start:fs','flex-end:fe',
    'self-start:ss','self-end:se','left:l','right:r','baseline:b','first baseline:first-baseline:fb','last baseline:last-baseline:lb',
    'safe center:safe-center:sc','unsafe center:unsafe-center:uc'],
},

// ----------K--------


// ----------L--------
'left':{
    alias:'l',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'letter-spacing':{
    alias:'les',
    type:'d',
    compiler:length,
    values:['normal:nl'],
},
'line-break':{
    alias:'lb',
    type:'s',
    // compiler:'',
    values:['auto:a','loose:l','normal:nl','strict:s','anywhere:aw:a2'],
},
'line-clamp':{
    compiler:(value:string)=>value.replace(/^-/,''),
    values:['none:n']
},
'line-height':{
    alias:'lh',
    type:'d',
    compiler:length,
    values:['normal:nl'],
},
'list-style':{
    alias:'ls',// --
    type:'',
    // compiler:'',
    values:['armenian:a:ar','circle:c','cjk-ideographic:ci','hebrew:h','hiragana:hira:h2','hiragana-iroha:hi','katakana:k',
  'katakana-iroha:ki','decimal:d','decimal-leading-zero:dlz','disc:di:d2','georgian:g','lower-alpha:la',
  'lower-greek:lg','lower-latin:ll','lower-roman:lr','none:n','square:s','upper-alpha:ua','upper-latin:ul'],
},
'list-style-image':{
    alias:'lsi',
    type:'d',
    compiler:(value:string,custom:{})=>{
        if(value.match(/^[-]?url/)){
            return url(value,)
        }else if(value.match(/[-]?(((repeating-)?(conic|linear|radial)-gradient)|(rrg|rg|lg|rcg|cg|rcg|rlg))([\w_-]+)/)){
            return gradient(value,custom)
        }else{
            return null
        }
    },
    values:['none:n'],
},
'list-style-position':{
    alias:'lsp',
    type:'s',
    // compiler:'',
    values:['inside:i','outside:o'],
},
'list-style-type':{
    alias:'lst',
    type:'s',
    // compiler:'',
    values:['armenian:a:ar','circle:c','cjk-ideographic:ci','hebrew:h','hiragana:hira:h2','hiragana-iroha:hi','katakana:k',
  'katakana-iroha:ki','decimal:d','decimal-leading-zero:dlz','disc:di:d2','georgian:g','lower-alpha:la',
  'lower-greek:lg','lower-latin:ll','lower-roman:lr','none:n','square:s','upper-alpha:ua','upper-latin:ul',],
},

// ----------M--------
'margin':{
    alias:'m',
    type:'d',
    compiler:length,
    values:[],
},
'margin-block':{
    alias:'',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'margin-block-end':{
    alias:'mbe',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'margin-block-start':{
    alias:'mbs',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'margin-bottom':{
    alias:'mb',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'margin-inline':{
    alias:'mi',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'margin-inline-end':{
    alias:'mie',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'margin-inline-start':{
    alias:'mis',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'margin-left':{
    alias:'ml',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'margin-right':{
    alias:'mr',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'margin-top':{
    alias:'mt',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'mask':{
    alias:'',// --
    type:'',
    // compiler:'',
    values:['none:n'],
},
'mask-border':{},
'mask-clip':{
    alias:'',
    type:'',
    // compiler:'',
    values:['no-clip:nc','content-box:cb','padding-box:pb','border-box:bb','fill-box:fb','stroke-box:sb','view-box:vb'],
},
'mask-composite':{
    alias:'',
    type:'s',
    // compiler:'',
    values:['add:a','subtract:s','intersect:i','exclude:e'],
},
'mask-image':{
    alias:'',
    type:'d',
    compiler:(value:string,custom:{})=>{
        if(value.match(/^[-]?url/)){
            return url(value)
        }else if(value.match(/[-]?(((repeating-)?(conic|linear|radial)-gradient)|(rrg|rg|lg|rcg|cg|rcg|rlg))([\w_-]+)/)){
            return gradient(value,custom)
        }else{
            return null
        }
    },
    values:[''],
},
'mask-mode':{
    alias:'',
    type:'s',
    // compiler:'',
    values:['alpha:a','luminance:l','match-source:ms'],
},
'mask-origin':{
    alias:'',
    type:'s',
    // compiler:'',
    values:['content-box:cb','padding-box:pb','border-box:bb','fill-box:fb','stroke-box:sb','view-box:vb'],
},
'mask-position':{
    alias:'',
    type:'d',
    compiler:length,
    values:['top:t','right:r','bottom:b','left:l','center:c'],
},
'mask-repeat':{
    alias:'',
    type:'s',
    // compiler:'',
    values:['repeat-x:rx','repeat-y:ry','repeat:r','space:r','round:ro:r2','no-repeat:nr'],
},
'mask-size':{
    alias:'',
    type:'d',
    compiler:length,
    values:['cover:c','contain:con:c2','auto:a'],
},
'mask-type':{
    alias:'',
    type:'d',
    compiler:length,
    values:['alpha:a','luminance:l'],
},
'math-depth':{
    alias:'',
    type:'d',
    compiler:(value:string)=>value.replace(/^-/,'').replace(/add-([-]?[\d]+)/,'add($1)'),
    values:['auto-add:aa'],
},
'math-shift':{
    alias:'',
    type:'s',
    // compiler:'',
    values:['normal:nl','compact:c'],

},
'math-style':{
    alias:'',
    type:'d',
    // compiler:'',
    values:['normal:nl','compact:c'],

},
'max-height':{
    alias:'xh',
    type:'d',
    compiler:length,
    values:['max-content:xc','min-content:mc','none:n','fit-content:fc'],
},
'max-width':{
    alias:'xw',
    type:'d',
    compiler:length,
    values:['max-content:xc','min-content:mc','none:n','fit-content:fc'],
},
'max-block-size':{
    alias:'xbs',
    type:'d',
    compiler:length,
    values:['max-content:xc','min-content:mc','none:n'],
},
'max-inline-size':{
    alias:'xis',
    type:'d',
    compiler:length,
    values:['max-content:xc','min-content:mc','none:n'],
},
'min-block-size':{
    alias:'',
    type:'d',
    compiler:length,
    values:['max-content:xc','min-content:mc','none:n'],
},
'min-inline-size':{
    alias:'',
    type:'d',
    compiler:length,
    values:['max-content:xc','min-content:mc','none:n'],
},
'min-height':{
    alias:'mh',
    type:'d',
    compiler:length,
    values:['max-content:xc','min-content:mc','none:n','fit-content:fc'],
},
'min-width':{
    alias:'mw',
    type:'d',
    compiler:length,
    values:['max-content:xc','min-content:mc','none:n','fit-content:fc'],
},
'mix-blend-mode':{
    alias:'mbm',
    type:'s',
    // compiler:'',
    values:mode,
},

// ----------O--------
'object-fit':{
    alias:'',
    type:'s',
    // compiler:'',
    values:['contain:c','cover:co:c2','fill:f','none:n','scale-down:sd'],
},
'object-position':{
    alias:'',
    type:'d',
    compiler:length,
    values:['top:t','left:l','center:c','bottom:b','right:r'],
},
// 'offset':{// --
//     alias:'',
//     type:'',
//     // compiler:'',
//     values:[''],
// },
'offset-anchor':{
    alias:'ofa',
    type:'d',
    compiler:length,
    values:['top:t','left:l','center:c','bottom:b','right:r','auto:a'],
},
'offset-distance':{
    alias:'ofd',
    type:'s',
    compiler:length,
    values:[''],
},
'offset-path':{
    alias:'ofp',
    type:'d',
    compiler:clipPath,
    values:[''],
},
'offset-position':{
    alias:'ofpos',
    type:'d',
    compiler:length,
    values:[''],
},
'offset-rotate':{
    alias:'ofr',
    type:'d',
    compiler:length,
    values:['auto:a','reverse:r'],
},
'opacity':{
    alias:'o',
    type:'d',
    compiler:length,
    values:[''],
},
'order':{
    alias:'ord',
    type:'s',
    compiler:length,
    values:[''],
},
'orphans':{
    alias:'orp',
    type:'s',
    compiler:length,
    values:[''],
},
'outline':{
    alias:'ol',
    type:'s',
    compiler:border,
    values:['none:n','auto:a'],
},
'outline-color':{
    alias:'olc',
    type:'d',
    compiler:color,
    values:[''],
},
'outline-offset':{
    alias:'olo',
    type:'d',
    compiler:length,
    values:[''],
},
'outline-style':{
    alias:'ols',
    type:'s',
    // compiler:'',
    values:style,
},
'outline-width':{
    alias:'olw',
    type:'d',
    compiler:lenByNumPer,
    values:[''],
},
'overflow':{
    alias:'of',
    type:'s',
    // compiler:'',
    values:['visible:v','hidden:h','clip:c','scroll:s','auto:a',],
},
'overflow-clip-margin':{
    'alias':'ocm',
    compiler:length,
    values:['content-box:cb','padding-box:pb','border-box:bb']
},
'overflow-anchor':{
    alias:'oa',
    type:'s',
    // compiler:'',
    values:['auto:a','none:n'],
},
'overflow-wrap':{
    alias:'ow',
    type:'s',
    // compiler:'',
    values:['normal:nl','break-word:bw','anywhere:a:aw'],
},
'overflow-x':{
    alias:'ox',
    type:'s',
    // compiler:'',
    values:['visible:v','hidden:h','clip:c','scroll:s','auto:a',],
},
'overflow-y':{
    alias:'oy',
    type:'s',
    // compiler:'',
    values:['visible:v','hidden:h','clip:c','scroll:s','auto:a',],
},
'overlay':{
    alias:'olay',
    values:['auto:a','none:n']

},
'overscroll-behavior':{
    alias:'ob',
    type:'s',
    // compiler:'',
    values:['auto:a','contain:c','none:n'],
},
'overscroll-behavior-block':{
    alias:'obb',
    type:'s',
    // compiler:'',
    values:['auto:a','contain:c','none:n'],
},
'overscroll-behavior-inline':{
    alias:'obi',
    type:'s',
    // compiler:'',
    values:['auto:a','contain:c','none:n'],
},
'overscroll-behavior-x':{
    alias:'obx',
    type:'s',
    // compiler:'',
    values:['auto:a','contain:c','none:n'],
},
'overscroll-behavior-y':{
    alias:'oby',
    type:'s',
    // compiler:'',
    values:['auto:a','contain:c','none:n'],
},

// ----------P--------
'padding':{
    alias:'p',
    type:'d',
    compiler:length,
    values:['none:n'],
},
'padding-block':{
    alias:'',
    type:'s',
    compiler:length,
    values:['none:n'],
},
'padding-block-end':{
    alias:'pbe',
    type:'d',
    compiler:length,
    values:[''],
},
'padding-block-start':{
    alias:'pbs',
    type:'d',
    compiler:length,
    values:[''],
},
'padding-bottom':{
    alias:'pb',
    type:'d',
    compiler:length,
    values:[''],
},
'padding-inline':{
    alias:'pi',
    type:'d',
    compiler:length,
    values:[''],
},
'padding-inline-end':{
    alias:'pie',
    type:'d',
    compiler:length,
    values:[''],
},
'padding-inline-start':{
    alias:'pis',
    type:'d',
    compiler:length,
    values:[''],
},
'padding-left':{
    alias:'pl',
    type:'d',
    compiler:length,
    values:[''],
},
'padding-right':{
    alias:'pr',
    type:'d',
    compiler:length,
    values:[''],
},
'padding-top':{
    alias:'pt',
    type:'d',
    compiler:length,
    values:[''],
},
'page':{
    alias:'pg',
    type:'d',
    compiler:(value:string)=>value.replace(/^-/,''),
    values:['auto:a']
},

'page-break-after':{
    alias:'pba',
    type:'s',
    // compiler:'',
    values:['auto:a','always:al:a3','avoid:av:a2','left:l','right:r','recto:rc:r2','verso:v'],
},
'page-break-before':{
    alias:'pbb',
    type:'s',
    // compiler:'',
    values:['auto:a','always:al:a3','avoid:av:a2','left:l','right:r','recto:rc:r2','verso:v'],
},
'page-break-inside':{
    alias:'pbi',
    type:'s',
    // compiler:'',
    values:['auto:a','avoid:av:a2'],
},
'paint-order':{// --
    alias:'po',
    type:'s',
    // compiler:'',
    values:['fill:f','stroke:s','markers:m','normal:nl'],
},
'perspective':{
    alias:'pers',
    type:'d',
    compiler:length,
    values:['none:n'],
},
'perspective-origin':{
    alias:'perso',
    type:'s',
    compiler:length,
    values:[''],
},
'place-content':{
    alias:'pc',
    type:'d',
    compiler:(value:string)=>{
        const m=/[-]?(start|end|flex-start|flex-end|center|left|right|space-between|baseline|first|last|space-evenly|space-around|stretch|safe|unsafe)/g;
        return value.replace(m," $1")
    },
    values:[''],
},
'place-items':{
    alias:'',
    type:'d',
    compiler:(value:string)=>{
        const m=/[-]?(start|end|flex-start|flex-end|self-start|self-end|normal|center|baseline|first|last|auto|right|left|legacy|stretch|safe|unsafe)/g;
        return value.replace(m," $1")
    },
    values:[''],
},
'place-self':{
    alias:'ps',
    type:'d',
     compiler:(value:string)=>{
        const m=/[-]?(start|end|flex-start|flex-end|self-start|self-end|normal|center|baseline|first|last|auto|right|left|legacy|stretch|safe|unsafe)/g;
        return value.replace(m," $1")
    },
    values:[''],
},
'pointer-events':{
    alias:'pe',
    type:'s',
    // compiler:'',
    values:['auto:a','none:n','visiblePainted:vp','visibleFill:vf','visibleStroke:vs','visible:v','painted:p','fill:f','stroke:s','all']
},
'position':{
    alias:'pos',
    type:'s',
    // compiler:'',
    values:['static:st:s2','absolute:a','fixed:f','relative:r','sticky:s'],
},
'position-anchor':{
    alias:'pa',
    type:'d',
    compiler:(value:string)=>"-"+value,
    values:['none:n']
},

'print-color-adjust':{
    alias:'pca',
    type:'s',
    // compiler:'',
    values:['economy:e','exact:ex'],
},

// ----------Q--------
'quotes':{// --
    alias:'q',
    type:'',
    // compiler:'',
    values:['none:n','auto:a'],
},

// ----------R--------
'resize':{
    alias:'rs',
    type:'s',
    // compiler:'',
    values:['none:n','both:b','horizontal:h','vertical:v'],
},
'right':{
    alias:'r',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'rotate':{
    alias:'rt',
    type:'d',
    compiler:lenByNumPer,
    values:['none:n'],
},
'row-gap':{
    alias:'rg',
    type:'d',
    compiler:length,
    values:[''],
},

// ----------S--------
'scale':{
    alias:'s',
    type:'d',
    compiler:length,
    values:['none:n'],
},
'scroll-behavior':{
    alias:'sb',
    type:'s',
    // compiler:'',
    values:['auto:a','smooth:s'],
},
'scroll-margin':{
    alias:'sm',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-margin-block':{
    alias:'',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-margin-block-end':{
    alias:'smbe',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-margin-block-start':{
    alias:'smbs',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-margin-bottom':{
    alias:'smb',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-margin-inline':{
    alias:'smi',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-margin-inline-end':{
    alias:'smie',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-margin-inline-start':{
    alias:'smis',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-margin-left':{
    alias:'sml',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-margin-right':{
    alias:'smr',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-margin-top':{
    alias:'smt',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-padding':{
    alias:'sp',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-padding-block':{
    alias:'',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-padding-block-end':{
    alias:'spbe',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-padding-block-start':{
    alias:'spbs',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-padding-bottom':{
    alias:'spb',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-padding-inline':{
    alias:'spi',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-padding-inline-end':{
    alias:'spie',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-padding-inline-start':{
    alias:'spis',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-padding-left':{
    alias:'spl',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-padding-right':{
    alias:'spr',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-padding-top':{
    alias:'spt',
    type:'d',
    compiler:length,
    values:[''],
},
'scroll-snap-align':{
    alias:'ssa',
    type:'s',
    // compiler:'',
    values:['start:s','end:e','center:c'],
},
'scroll-snap-stop':{
    alias:'sss',
    type:'s',
    // compiler:'',
    values:['always:al:a','normal:nl'],
},
'scroll-snap-type':{
    alias:'sst',
    type:'s',
    // compiler:'',
    values:['x','y','block:b','inline:i','both:bo:b2',
        'x mandatory:x-mandatory:xm','y proximity:y-proximity:yp','both mandatory:both-mandatory:bm',
        'y mandatory:y-mandatory:ym','x proximity:x-proximity:xp','both proximity:both-proximity:bp',
    ],
},
'scroll-timeline':{
    'alias':'st',
    compiler:(value:string)=>('-'+value).replace(/-(block|inline|y|x)/," $1").replace(/^--none[\s]/,'none '),
    values:['none:n']
},
'scroll-timeline-axis':{
    'alias':'sta',
    // compiler:'',
    values:['none:n','block:b','inline:i','y','x']
},
'scroll-timeline-name':{
    'alias':'stn',
    compiler:(value:string)=>'-'+value,
    values:['none:n']
},
'scrollbar-color':{
    alias:'sbc',
    type:'d',
    compiler:color,
    values:[''],
},
'scrollbar-gutter':{
    alias:'sbg',
    type:'d',
    // compiler:'',
    values:['auto:a','stable:s','stable both-edges:stable-both-edges:sbe'],
},
'scrollbar-width':{
    alias:'sbw',
    type:'d',
    compiler:color,
    values:[''],
},
'shape-image-threshold':{
    alias:'sit',
    type:'d',
    compiler:length,
    values:[]
},// 0.7;'

'shape-margin':{
    alias:'',
    type:'d',
    compiler:length,
    values:[],
},

'shape-outside':{
    alias:'so',
    type:'d',
    compiler:clipPath,
    values:['none:n','margin-box:mb','border-box:bb','padding-box:pb','content-box:cb'],
},

// ----------T--------
'tab-size':{
    alias:'ts',
    type:'d',
    compiler:length,
    values:[''],
},
'table-layout':{
    alias:'tl',
    type:'s',
    // compiler:'',
    values:['auto:a','fixed:f'],
},
'text-align':{
    alias:'ta',
    type:'s',
    // compiler:'',
    values:['auto:a','left:l','right:r','center:c','justify:j','end:e','start:s'],
},
'text-align-last':{
    alias:'tal',
    type:'s',
    // compiler:'',
    values:['auto:a','left:l','right:r','center:c','justify:j','end:e','start:s'],
},
'text-combine-upright':{
    alias:'',
    type:'',
    // compiler:'',
    values:[''],
},
'text-decoration':{
    alias:'td',
    type:'s',
    // compiler:'',
    values:[...style,'underline:u','overline:ol:o2','line-through:lt'],
},
'text-decoration-color':{
    alias:'tdc',
    type:'d',
    compiler:color,
    values:[''],
},
'text-decoration-line':{
    alias:'tdln',
    type:'',
    // compiler:'',
    values:['none:n','underline:u','overline:o','line-through:lt'],
},
'text-decoration-style':{
    alias:'tds',
    type:'',
    // compiler:'',
    values:[...style,'wavy:w'],
},
'text-decoration-thickness':{
    alias:'tdt',
    type:'d',
    compiler:length,
    values:['auto:a','from-font:ff'],
},
'text-emphasis':{
    alias:'te',
    type:'s',
    // compiler:'',
    values:['none:n','open:o','filled:f','dot:d','circle:c','double-circle:dc','triangle:t','sesame'],
},
'text-indent':{
    alias:'ti',
    type:'d',
    compiler:length,
    values:[''],
},
'text-justify':{
    alias:'tj',
    type:'s',
    // compiler:'',
    values:['none:n','inter-word:iw','inter-character:ic','distribute:d','auto:a'],
},
'text-orientation':{
    alias:'',// --
    type:'',
    // compiler:'',
    values:['mixed:m','upright:u','sideways:s','sideways-right:sr','use-glyph-orientation:ugo'],
},
'text-overflow':{
    alias:'to',
    type:'s',
    // compiler:'',
    values:['clip:c','ellipsis:e',''],
},
'text-shadow':{
    alias:'txs',
    type:'d',
    compiler:shadow,
    values:[''],
},
'text-transform':{
    alias:'tt',
    type:'s',
    // compiler:'',
    values:['none:n','capitalize:c','uppercase:u:uc','lowercase:l:lc','full-width:fw','full-size-kana:fsk'],
},
'timeline-scope':{
    'alias':'tls',
    compiler:(value:string)=>'-'+value,
    values:['none:n']
},
'text-underline-position':{
    alias:'tup',
    type:'s',
    // compiler:'',
    values:['auto:a','under:u','left:l','right:r'],
},
'top':{
    alias:'t',
    type:'d',
    compiler:length,
    values:['auto:a'],
},
'transform':{
    alias:'tf',
    type:'d',
    compiler:transform,
    values:['none:n'],
},
'transform-box':{
    alias:'tfb',
    type:'s',
    // compiler:'',
    values:['content-box:cb','border-box:bb','fill-box:fb','stroke-box:sb','view-box:vb'],
},
'transform-origin':{
    alias:'tfo',
    type:'d',
    compiler:length,
    values:[''],
},
'transform-style':{
    alias:'tfs',
    type:'s',
    // compiler:'',
    values:['flat:f','preserve-3d:p:p3:p3d'],
},
'transition':{
    alias:'tn',
    type:'d',
    compiler:transition,
    values:[''],
},
'transition-behavior':{
    alias:'tb',
    
    values:['allow-discrete:ad','normal:nl'],
},
'transition-delay':{
    alias:'tdl',
    type:'d',
    compiler:length,
    values:[''],
},
'transition-duration':{
    alias:'tdu',
    type:'d',
    compiler:length,
    values:[''],
},
'transition-property':{
    alias:'tp',
    type:'d',
    compiler:(value:string)=>value.replace(/_[_]?/g, " , "),
    values:[''],
},
'transition-timing-function':{
    alias:'ttf',
    type:'d',
    compiler:timingFunction,
    values:[''],
},
'translate':{
    alias:'',
    type:'d',
    compiler:length,
    values:['none:n'],
},
'touch-action':{
    alias:'toa',
    values:['auto:a','none:n','pan-x:px','pan-left:pl','pan-right:pr','pan-y:py','pan-up:pu','pan-down:pd','pinch-zoom:pz','manipulation:m']
},

// ----------U--------
'unicode-bidi':{
    alias:'ub',
    type:'s',
    // compiler:'',
    values:['normal:nl','embed:e','isolate:i','bidi-override:bo','isolate-override:io','plaintext:p|pt'],
},
'user-select':{
    alias:'us',
    type:'s',
    // compiler:'',
    values:['none:n','auto:a','text:t','contain:c','all'],

},

// ----------V--------
'vertical-align':{
    alias:'va',
    type:'d',
    compiler:length,
    values:['baseline:bl:b2','sub:s','super:su:s2','text-top:tt','text-bottom:tb','middle:m','top:t','bottom:b'],
},
'visibility':{
    alias:'v',
    type:'s',
    // compiler:'',
    values:['visible:v','hidden:h','collapse:c'],

},
'view-timeline':{
    alias:'vt',
    compiler:(value:string)=>"-"+value.replace(/-(block|inline|x|y)/,' $1'),
    values:['none block:none-block','none inline:none-inline','none x:none-x','none y:none-y']
},
'view-timeline-name':{
    alias:'vtn',
    compiler:(value:string)=>"-"+value,
    'values':['none:n']
},

'view-timeline-axis':{
    alias:'vta',
    // compiler:'',
    values:['block:b','inline:i','y','x']
},
'view-timeline-inset':{
    alias:'vti',
    compiler:length,
    values:['auto:a']
},
'view-transition-name':{
    'alias':'vtn2',
    compiler:(value:string)=>value.replace(/^-/,''),
    'values':['none:n']
},


// ----------W--------
'white-space':{
    alias:'ws',
    type:'s',
    // compiler:'',
    values:['normal:nl','nowrap:nw','pre:p','pre-line:pl','pre-wrap:pw','break-spaces:bs'],
},
'white-space-collapse':{
    alias:'wsc',
    values:['collapse:c','preserve:p','preserve-breaks:pb','preserve-spaces:ps','break-spaces:bs']
},
'widows':{
    alias:'wid',
    type:'d',
    compiler:length,
    values:[''],
},
'width':{
    alias:'w',
    type:'d',
    compiler:length,
    values:['max-content:xc','min-content:mc','auto:a','fit-content:fc'],
},
'will-change':{
    alias:'wc',// --
    type:'s',
    compiler:(value:string)=>value.replace(/^-/,'').replace(/__/,', '),
    values:['auto:a','scroll-position:sc','contents:c','transform:tf','opacity:o','left:l','top:t'],
},
'word-break':{
    alias:'wb',
    type:'',
    // compiler:'',
    values:['break-all:ba','keep-all:ka','break-word:bw','normal:nl'],
},
'word-spacing':{
    alias:'wos',
    type:'d',
    compiler:length,
    values:['normal:nl'],
},
'word-wrap':{
    alias:'ww',
    type:'s',
    // compiler:'',
    values:['break-word:bw','normal:nl'],
},
'writing-mode':{
    alias:'wm',
    type:'s',
    // compiler:'',
    values:['horizontal-tb:ht','vertical-rl:vrl','vertical-lr:vlr'],
},

// ----------Z--------
'z-index':{
    alias:'zi',
    type:'d',
    compiler:(value:string)=>value.replace(/[-]([-]?)/,'$1'),
    values:['auto:a'],
},
'zoom':{
    alias:'zo',
    type:'d',
    compiler:length,
    values:['reset:re','normal:nl']
},

// ----------------SVG---
//  'alignment-baseline':{
//      alias:'',
//      type:'',
//      // compiler:'',
//      value:['']
//  },
'alignment-baseline':{
    alias:'ab',
    type:'s',
    // compiler:'',
    values:['auto','baseline','before-edge','text-before-edge',
    'middle','central','after-edge','text-after-edge','ideographic','alphabetic',
    'hanging','mathematical','top','center','bottom']
},
'stroke':{
    alias:'str',
    type:'d',
    compiler:color,
    values:[],
},
'fill':{
    alias:'',
    type:'d',
    compiler:color,
    values:['none:n','context-fill:cf','context-stroke:cs'],
},
'fill-opacity':{
    alias:'fo',
    type:'d',
    compiler:(value:string)=>value.replace(/^-/,'').replace(/(\d)d(\d)/,'$1.$2').replace(/([\d])p$/,'$1%'),
    values:[],
},
'fill-rule':{
    alias:'fr',
    type:'d',
    // compiler:'',
    values:['nonzero:nz','evenodd:eo'],
},


'stroke-dasharray':{
    alias:'sda',
    type:'d',
    compiler:length,
    values:[],
},
'stroke-dashoffset':{
    alias:'sdo',
    type:'d',
    compiler:length,
    values:[],
},
'stroke-width':{
    alias:'sw',
    type:'d',
    compiler:length,
    values:[],
},
'stroke-opacity':{
    alias:'so',
    type:'d',
    compiler:length,
    values:[],
},
'stroke-linecap':{
    alias:'slc',
    type:'s',
    // compiler:'',
    values:['butt','round','square'],
},
'stroke-linejoin':{
    alias:'slj',
    type:'s',
    // compiler:'',
    values:['arcs','bevel','iter','miter-clip','round'],
},
// -------------webkit---
'webkit-line-cramp':{
    alias:'',
    property:'-webkit-line-clamp',
    type:'d',
    compiler:(value:string)=>value.replace(/^-/,''),
    values:['none:n'],
},
'webkit-box-orient':{  // deprecated
    alias:'',
    property:'-webkit-box-orient',
    type:'s',
    // compiler:(value:string)=>value.replace(/^-/,''),
    values:['horizontal:h','vertical:v','inline-axis:ia','block-axis:ba'],
}

}

export default cssProps

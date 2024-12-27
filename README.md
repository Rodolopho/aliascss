# Introduction

**Welcome to Aliascss!**

AliasCSS or in short acss, is a post css processor/compiler means it lets you first define classnames in your html element then get processed to corresponding css declaration. 

[https:aliascss.com](Offical Documentation site)

## What it is?
With aliascss you can  style you webpages using class attribute with  post-define classname, for example
```html
<h1 class="color-red font-size-12px display-inline-block"> Hello world</h1>
```
OR, using shorthand
```html
<h1 class="c-red fs-12px dib"> Hello world</h1>
```
Here we have defined the color, font size, display properties of h1 element first,  then aliascss will compiles and defines the classname with the corresponding property and value/s  in the styles tag or stylesheets. Generally every aliascss classname hold single property  and value for it.

## Getting Started

### Install

### NPM
```sh copy
npm install --save-dev aliascss
```

### CDN
```html copy
<script defer src="https://cdn.jsdelivr.net/npm/aliascss@latest/dist/aliascss.js"></script>

```

# Documentation
 If you know CSS then your know already Aliascss. Aliascss let you to apply css directly in the html with the help of post define classname. Let's assume we need to style our h1 element
 ```
 <h1>Hello World!</h1>
 ```
 Normally , we will apply style as shown below
 ```
 h1{
    color:gray;
    font-size: 18px;
    }
```

Now , if we want same result using aliascss, then

```
<h1 class="c-gray fs-18px">Hello World!</h1>
    
```
Or by using full semantic classnames

```
<h1 class="color-gray font-size-18px">Hello World!</h1>
    
```
> Here if you look carefully the classnames is doing dual responsibility. one is defining classnames and second is also defining css declaration for itself. In AliasCSS ecosystem we first use classnames, then the compiler will define classnames and corresponding property and value in the stylesheet/style tag.  you don't have to use aliascss compiler  in production. 

### Here are few other examples of post define classnames:-
|Aliascss classnames|Short-hand |Corresponding style aplied|
|------------------|-------------|--------------------------:|
|`display-flex`|`df`|`display:flex`|
|`list-style-none`|`lsn`|`list-style:none`|
|`margin-left-20px`|`ml-20px`|`margin-left:20px`|
|`margin-top--20px`|`mt--20px`|`margin-top:-20px`|
|`border-1px-solid-ccc`|`b-1px-s-ccc`|`border:1px solid #ccc`|
|`backgound-color-10p20p30p`|`bgc-10p20p30p`|`background-color:rgb(10%, 20%, 30%)`|
|`opacity-1`|`o-1`|`opacity:1`|
|`opacity-0d5`|`o-0d5`|`opacity:0.5`|



```There are two ways to use class name,  either using shorhand e.g c-red m-20px  df p-20p-30px l-30px OR full semantic class name color-red display-flex padding-20px-30px left-30px```

## Selector and Pseudo [ hover: focus: active: ]
 We can also target pseudo selector / element  in your class name by using flags(-- ) e.g --hover or --h. For an example:-
 ```
 <div class="bgc-cccccc --hover-bgc-yellow> Hi! i will change background color on hover</div>
 ```
 Here by using --hover flag ( *can be used --h shorthand flag*) we are telling to use it in :hover state
 
 Flags:-
 
 | flags  |short-flag | corresponding css selector  |
 |-------------|---|---------:|
 |--active|--a or --ac|:active|   
  |--after|--af|::after| 
  |--after-hover|--afh|::after:hover|
  |--autofill|--atf|:-webkit-autofill|
  |--anylink|--al|:-webkit-anylink|
  |--backdrop|--bd|::backdrop|
  |--before|--bf|::before| 
  |--before-hover|--bfh|::before:hover| 
  |--blank|--bl|:blank| 
  |--checked|--ch|:checked| 
  |--cue|--cu|::cue| 
  |--current|--cur|:current| 
  |--default|--de|:default| 
  |--disabled|--di|:disabled| 
  |--empty|--em|:empty| 
  |--enabled|--en|:enabled| 
  |--first-child|--fc|:first-child| 
  |--first-letter|--fl|::first-letter|  
  |--first-line|--fln|::first-line| 
  |--first-of-type |--fot|:first-of-type| 
  |--focus| --f or --fo|:focus| 
  |--focus-within| --fw|:focus-within| 
  |--focus-visible| --fv|:focus-visible| 
  |--file-selector-button| --fsb |::file-selector-button| 
  |--fullscreen| --fs |::fullscreen| 
  |--hover|--h or --ho|:hover| 
  |--has|--hs|:has| 
  |--hover-after|--haf|:hover::after| 
  |--hover-before|--hbf|:hover::before| 
  |--hover-target|--htg|:hover:target| 
  |--in-range|--ir|:in-range| 
  |--indeterminate|--ind|:indeterminate| 
  |--invalid|--inv|:invalid| 
  |--is|--is|:is| 
  |--lang|--lan|:lang| 
  |--last-child|--lc|:last-child| 
  |--last-of-type|--lot|:last-of-type| 
  |--link|--ln or -l|:link| 
  |--not-|--n-|:not| 
  |--nth-child-|--nc-|:nth-child| 
  |--nth-last-child-|--nlc-|:nth-last-child| 
  |--nth-last-of-type-|--nlot-|:nth-last-of-type| 
  |--nth-of-type-|--nthot-|:nth-of-type| 
  |--marker|--m|:marker| 
  |--only-of-type |--oot|:only-of-type| 
  |--only-child|--oc|:only-child| 
  |--optional|--op|:optional|  
  |--out-of-range|--oor|:out-of-range| 
  |--placeholder|--ph|::placeholder| 
  |--placeholder-shadow|--phs|::placeholder-shadow| 
  |--popover-open|--po|:popover-open| 
  |--read-only |--ro|:read-only| 
  |--read-write|--rw|:read-write| 
  |--required|--rq|:required| 
  |--root|--rt|:root| 
  |--selection|--s|::selection| 
  |--scrollbar|--sb|::-webkit-scrollbar|
  |--webkit-scrollbar|--sb|::-webkit-scrollbar|
  |--scrollbar-track|--st|::-webkit-scrollbar-track|
  |--webkit-scrollbar-track|--st|::-webkit-scrollbar-track|
  |--scrollbar-thumb|--stm|::-webkit-scrollbar-thumb|
  |--webkit-scrollbar-thumb|--stm|::-webkit-scrollbar-thumb|
  |--spelling-error|--se|::spelling-error|
  |--target |--tg|:target| 
  |--user-invalid |--ui|:user-invalid| 
  |--valid|--va|:valid| 
  |--visited|--vi or- -v|:visited| 
  |--where|--w|:where| 
  
  **Examples**
  
 |  classname  |shorthand    | css                 |Remarks|
|----------- |-----------   |----------------------|------------|
|`--hover-display-flex`|`--h-df`|`:hover{display: flex ;}`|
|`--focus-list-style-none`|`--fo-lsn`|`:focus{list-style:none;}`|
|`--nth-child-2n-margin-left-20px`|`--nc-2n-ml-20px`|`:nth-child(2n){margin-left:20px ;}`|
 
 
 #### Similarly , we can also tell aliascss classname to use selector by using '_' at the begin-ing class name . eg:-
 ```
 <div class="_h3-c-white _p-fs-14px"" >
    <h3>Hello World</h3>
    <p> Welcome to AliasCSS </p>
 </div>\
 ```
 AliasCSS will compile above classnames as below:-
 ```
 ....
 
 ._h3-c-white h3{
    color:white ;
}
._p-fs14px p{
    font-size:14px ;
}
```

#### Selector Guide Table

|Aliascss Classsname| compiled|
|---|---|
|`_div-df`|`._div-df div{..}`|
|`__div-df`|`._div-df > div{..}`|
|`___div-df`|`._div-df + div{..}`|
|`____div-df`|`._div-df ~ div{..}`|
|`_all-c-red`|`._all-c-red *{..}`|


## Targeting Devices [ Making Responsive ]

To target Device  , we can simply add device prefix at the very begening of classname. for eg:-
```
<p class="xs-dn">This will not show in smaller device</p>
```
or using semantic classname
 ```
<p class="xs-display-none">This will not show in smaller devices</p>

```
#### Device Guide Table
|AliasCSS Device Prefix| CSS Selector|
|--|--|
|print|@media print|
|xs|@media (max-width : 576px) |
|sm|@media  (min-width : 576px) |
|md|@media  (min-width : 768px) |
|lg|@media  (min-width : 992px) |
|xl|@media  (min-width : 1200px)|
|xxl|@media  (min-width : 1408px) |
|-xs| @media (min-width : 576px) |
|-sm|@media  (max-width : 576px) |
|-md|@media  (max-width : 768px) |
|-lg|@media  (max-width : 992px) |
|-xl|@media  (max-width : 1200px)|
|-xxl|@media  (max-width : 1408px) |

>Any of the above prefix can be used, these prefix must be the at the begin-ing of the classnames.
Few examples:-
 
**Define**
```
<div class="xs-flex-direction-column">...</div>
//using shorthand <div class="xs-fdc">...</div>
```


**Compiled** 
```
@media (max-width : 768px) {
    .xs-flex-direction-column{
            flex-direction: column ;
        }
}
```
---
**Define**
```
<div class="xs_p-flex-direction-column">...</div>
//using shorthand <div class="xs_p-fdc">...</div>
```

**Compiled**
```
@media (max-width : 576px) { 
    .xs_p-flex-direction-column p{
        flex-direction: column ;
    }
}
```
**Define**
```
<div class="md-width500px">...</div>
//using shorthand <div class="md-w500p">...</div>
```

**Compiled**
```
@media (min-width : 768px){
    .md-width500px{
         width:500px ;
    }
}
```


# Classname Definition Guide
##### Rules for defining classnames
- In general every aliasCSS classnames are derived from css property and value we want to apply.i.e display-flex, color-red, width-100px, margin-left2rem etc, similarly short-hand classnames are also  derived for first letter of property followed by every first letter after '-'followed by first letter of value and every first letter after '-' if it has any.
For Example 
```
display:flex => df or display-flex
font-weight-bold=> fwb or font-weight-bold
animation-timing-function: ease-in-out => atfeio or animation-timing-function-ease-in-out
width:100px => w100px or width100px 
width:-100px => w-100px or width-100px
```
> if there is '-' in classname before length or numeric unit it will treated as  negative value. e.g  w100px => width:100px ,  w-100px =>width:100px , margin-100px=> margin:100px, margin--100px => margin:-110px, fs-12px => font-size:-12px; fs-12px=> font-size:12px; Be care full when using '-' before numeric value.
- Replace "." with d and "%" with p, note this only applicable to numeric and length unit . "d" must be between two numeric value. i.e d5 not != .5, use 0d5 => 0.5

 |Acss|shorthand|Css|
 |--|--|--|
 |`margin-0d75rem`|`m-0d75rem`|`margin:0.75rem`|
 |`margin--0d75rem`|`m--0d75rem`|`margin:-0.75rem`|
 |`width-50p`|` w-50p`|`width:50%`|
 |`opacity-0d5`|`o-0d5`|`opacity:0.5`|



## Length [property whose value are in length ]
`Syntax:- property[-]?[value]`

|  classname  |shorthand    | css                 |Remarks|
|----------- |-----------   |----------------------|------------|
|`margin-100px`|`m-100px`      |  `margin:100px`      |           |
|`margin-1em`  |`m-1em`        |`margin:1em`|
|`margin-50p`  |`m-50p`         |`margin:50%` | Use 'p' for %|
|`margin-0d5rem`|`m-0d5rem`       |`margin:0.5rem` | use 'd' for .|
|`margin-20px-30px-20px-40px`|`m-20px-30px-20px-40px`|` margin:20px 30px 20px 40px`|
|`margin--20px-30px--20px-40px`|`m--20px-30px--20px-40px`| `margin:-20px 30px -20px 40px`|
|`margin-left150px`|`ml150px`|`margin-left:150px`|
|`border-radius-15px`|`br-15px`|`border-radius:15px`|
|`max-width-500px`|`xw-500px`|`max-width:500px`|
|`min-width-300px`|`mw-300p`|`min-width:300px`|
---
## Color
### Color by name and Hexadecimal value
`Syntax:- [color|c] - [name| hexadecimal value without #]`

|classname|shorthand|css|Remarks|
|---------|---------|---|-------|
|`color-red`|`c-red`|`color:red`|
|`color-cccccc`|`c-cccccc`|`color:#cccccc`|
|`color-fff`|c-fff`|`color:#fff`|
|`border-color-yellow`|`bc-yellow`|`border-color:yellow`|
|`background-color-red`|`bgc-red`|`background-color:red`|

### Color by rgb/rgba
`syntax:[color|c]-[000-255][000-255][000-255]`

or,

`syntax:[color|c]-[0-100]p[0-100]p[00-100]p`
> RGB is represented by 3 digit [000-255] for each R G and B value, Incase of percentage 'p' should be used to represent '%'.
Alpha can be represent by either decimal or percentage value, 'd' should be used in place of ' . '.



|classname|shorthand|css|Remarks|
|---------|---------|---|-------|
|`color-000000000`|`c-000000000`|`color:rgb(000,000,000)`|
|`color-024245100`|`c-024245100`|`color:rgb(024,245,100)`|
|`color-1110230450d5`|`c-1110230450d5`|`color:rgba(111,023,045,0.4)`|
|`border-color-11122200050p`|`bc-11122200050p`|`border-color:rgba(111,222,000,50%)`|
|`background-color-30p40p60p`|`bgc-30p40p60p`|`background-color:rgb(30%,40%,60%)`|

### Color in HSL /HSLA
`Syntax [colcor|c]-[000-359][0-100]p[0-100]p`
> In `hsl()` first three digit represent Hue or h followed by percentge of 'saturation ' followed by percentage of light, optionally followed by alpha in percentage of decimal

|classname|shorthand|css|Remarks|
|---------|---------|---|-------|
|`color-25050p30p`|`c-25050p30p`|`color:hsl(250,50%,30%)`|
|`color-25050p30p50p`|`c-25050p30p50p`|`color:hsla(250,50%,30%,50%)`|
|`color-11150p0p0d5`|`c-1110230450d5`|`color:hsla(111,50%,0%,0.5)`|

---
## Border | Border-Radius| Box-Shadow
#### `border`
|classname|shorthand|css|Remarks|
|---------|---------|---|-------|
|`border-1px-solid-red`|`b-1px-s-red`|`border:1px solid red`|
|`border-1px-solid-30p40p50p`|`b-2px-s-30p40p50p`|`border:1px solid rgb(30%,40%,50%)`|
|`border-bottom-2px-dashed-cccccc`|`bb-2px-ds-cccccc`|`border-bottom:2px dashed #cccccc`|

#### `border-radius`

|classname|shorthand|css|Remarks|
|---------|---------|---|-------|
|`border-radius-5px`|`br-5px`|`border-radius:5px`|
|`border-radius-10px-5px`|`br-10px-5px`|`border-radius:10px 5px`|
|`border-radius-5px-10px-30px-4px`|`br-5px-10px-30px-4px`|`border-radius:4px 10px 30px 4px`|
|`border-bottom-left-radius-5px-60px`|`bblr-5px-60px`|` border-bottom-left-radius:5px 60px ;`|
|`border-top-right-radius-6p`|`btrr-6p`|` border-top-right-radius:6% ;`|

#### `box-shadow`

|classname|shorthand|css|Remarks|
|---------|---------|---|-------|
|`box-shadow-1px2px3px4px-pink`|`bxs-1px-2px-3px-4px-pink`|`box-shadow:1px 2px 3px 4px pink`|
|`box-shadow-0px-2px-000000000`|`bxs-0px-2px-000000000`|`box-shadow:0px 2px rgb(000,000,000)`|
|`box-shadow--2px--2px-cccccc`|`bxs--2px--2px-cccccc`|`box-shadow:-2px -2px #cccccc`|
|`box-shadow-0px-2px-0px-000000000__2px-5px-1px-red`|`bxs-0px-2px-0px-000000000__2px-5px-1px-red`|`box-shadow:0px 2px 0px rgb(000,000,000),2px 5px 1px red`|Multiple value for Box-shadow|
---
## Fonts
|classname|shorthand|css|Remarks|
|---------|---------|---|-------|
|`font-family-serif`|`ff-serif`|`font-family:serif`|
|`font-family-san-serif`|`ff-san-serif`|`font-family:san-serif`|
|`font-family-Times_New_Roman`|`ff-Times_New_Roman`|`font-family:"Times New Roman"`|Use'_' for space
|`font-family-Times_New_Roman--Times--serif`|`ff-Times_New_Roman--Times--serif`|`font-family:"Times New Roman" , Times , serif`|Multiple Fonts|


## Transform
|classname|shorthand|css|Remarks|
|---------|---------|---|-------|
|`transform-rotate-45deg`|`tf-r-45deg`|`transform:rotate(45deg)`|
|`transform-scale-2__rotate-25deg`|`tf-s2__r-25deg`|`transform:scale(2) rotate(25deg)`| Multiple value|
|`transform-rotate--45deg`|`tf-r--45deg`|`transform:rotate(-45deg)`|
|`transform-rotate3d-1--1-1-45deg`|`tf-r3d-1--1-1-45deg`|`transform:rotate3d(1, -1, 1, 45deg)`|
|`transform-matrix-0d8-0d7--0d8-0.866-0-0`|`tf-m-0d8-0d7--0d8-0.866-0-0`|`transform:matrix(0.8, 0.7, -0.8, 0.866, 0, 0)`||
|`transform-rotateX-45deg`|`tf-rx-45deg`|`transform:rotateX(45deg)`|
|`transform-rotate-45deg`|`tf-r-45deg`|`transform:rotate(45deg)`|
|`transform:-scaleX-2`|`tf-sx-2`|`transform:scaleX(2)`|
|`transform-skew-45deg--45deg`|`tf-sk-45deg--45deg`|`transform:skew(45deg, -45deg)`|
|`transform-translate-20px-10px`|`tf-t-20px-10px`|`transform:translate(20px, 10px)`|
|`transform-rotate-45deg`|`tf-r-45deg`|`transform:rotate(45deg)`|
|`transform-rotate-45deg`|`tf-r-45deg`|`transform:rotate(45deg)`|

## Transition 

|classname|shorthand|css|Remarks|
|---------|---------|---|-------|
|`transition-all-0d5s`|`tn-all-0d5s` |`transition:all 0.5s`|
|`transition-width-0d35s`|`tn-width-0d35s` |`transition:width 0.5s`|
|`transition-width-0d35s`|`tn-width-0d35s` |`transition:width 0.5s`| 
|`transition-transform-0d35s`|`tn-transform-0d35s`|`transition:transform 0.35s`|

## Filter

|classname|shorthand|css|Remarks|
|---------|---------|---|-------|
|`filter-blur-4px`|`fl-b-4px`|`filter:blur(4px)`||
|`filter-unset`|`flu`|`fliter:unset`||
|`filter-brightness-50p__blur-4px__invert-50p`|`fl-br-50p__b-4px__i-50p`|`filter:brightness( 50% ) blur( 4px ) invert( 50% )` |
|`filter-drop-shadow8px8px10px-gray`|`fl-ds8px8px10px-gray`|`filter:drop-shadow( 8px 8px 10px gray )`||
|`filter-hue-rotate-40deg`|`fl-hr-40deg`|`filter:hue-rotate( 40deg )`||

## Gradient 
|classname|shorthand|css|Remarks|
|---------|---------|---|-------|
|`background-linear-gradient-red-blue`|`bg-lg-red-blue `|`background:linear-gradient( red, blue ) `||
|`background-linear-gradient-red-10p-blue-90p`|`bg-lg-red-10p-blue-20p `|`background:linear-gradient( red 10%, blue 90% )`||
|`background-repeating-linear-gradient-red-10p-blue-90p`|`bg-rlg-red-10p-blue-20p `|`background:repeating-linear-gradient( red 10%, blue 90% )`||
|`background-linear-gradient-to-right-red-10p-blue-90p`|`bg-lg-tr-red-10p-blue-90p `|`background:linear-gradient(to right, red 10%, blue 90% )`||
|`background-linear-gradient45deg-red-10p-blue-90p`|`bg-lg45deg-red-10p-blue-90p `|`background:linear-gradient(45deg, red 10%, blue 90% )`||
|`background-radial-gradient-red-10p-blue-90p`|`bg-rg-red-10p-blue-90p `|`background:radial-gradient( red 10%, blue 90% )`||
|`background-repeating-radial-gradient-circle-blue-5p-skyblue-23p `|`bg-rrg-circle-blue-5p-skyblue-23p `|`background:repeating-radial-gradient( circle, blue 5%, skyblue 23% )`||
|`background-conic-gradient-red-blue`|`bg-cg-red-blue `|`background:conic-gradient( red, blue ) `||
|`background-linear-gradient-top-right-red-10p-blue-90p__radial-gradient-center-yellow-blue`|`bg-lg-tr-red-10p-blue-90p__rg-center-yellow-blue `|`background:linear-gradient(top right, red 10%, blue 90% ),radial-gradient( center, yellow, blue )`|multiple|

## CSS Variable 
|classname|shorthand|css|Remarks|
|---------|---------|---|-------|
|`color--var--name`|`c--var--name`|`color: var(--name)`|
|`color--name`|`c--name`|`color: var(--name)`|
|`width--side-bar-width`|`w--side-bar-width`| `width: var(--side-bar-width)`||


# NPM Guide
 
With `npm` version  there are lots of exrta front-end / workflow feature we can use out of the box.

`npm install --save-dev aliascss`


To Compiler folder from command line

`npx aliascss 'public/*.html' 'public/css/acss.css'`

> output css file must be there if not it should be created manully. 

>Guide-`npx aliascss 'input/glob-pattern/**.*' 'path/to/output/style.css'`

### Watch for files

`npx aliascss 'public/*.html' 'public/css/acss.ccc' --watch`

@package.json
```
....
 "scripts": {
    ...
    "aliascss-build": "aliascss 'public/*.html' 'public/css/aliascss.css'",
    "aliascss-watch": "aliascss-build --watch"
  }
  ...
  
  ```

## aliascss.config.js
`aliascss.config.js`  gives you more feature and power to the workflow.


Basic structure of aliascss.config.js file

```javascript copy  showLineNumbers filename="aliascss.config.js"
const config= {
    // input glob pattern or array of glob pattern
    input:['app/**/*.(tsx|jsx)', 'components/**/*.(tsx|jsx)','public/*.html'],

    // Output css file , file must exist or should be created manully if file doesnot exist
    output:{
        // path to main/master css file which include every compiled css declaration for given input
        location:'./public/css/acss.css',
        "--file":true// output css file for each file
    },

    //---------------Below this are all optional -------------------------
    // Customize media prefix selector
    media:{
        prefix:{
            xs:'@media (max-width : 600px)'
        }
    },
    // support for css Module
    '--module':true,
    
    // import module as i.e import x form 'page.module.css'
    importModuleAs:'x',

    // uncomment minify is true if you want main css file to be minified by cssnano

    // minify:true,

    // name of extractorFunction
    extractorFunction:"x",
     
     // prefix aliascss  ac-bgc-red ac--hover-color-red
    // prefix:'ac',

    //Truncate the css file , you should let it true unless you know what your are doing
    truncate:true,
    	
     //ADD Custom color Value
	custom:{
		colors:{
            //custom name for color value  must not have  "-" or "_" to work perfectly.
			'main':"rgb(12,23,45)",// now you can use bgc-main
			'theme':'#c6c6c6'

		}

	},
    // Create your own compiler 
     extend:{
        'font-size':{
            alias:'fs',
            values:["2rem:xl"],
            compiler:(value)=>{
                return value;
            }
        },
        'txt-color':{
            proerty:'color',  
            extend:'color' // now you can use txt-color in place color 
        },

        // Now you can use shadow as className property e.g shadow-xs 
        'shadow':{
            property:'box-shadow',
            compiler:(value)=>{
                value=value.slice(1);
                const values={
                    '3xl': ' 0px 32px 64px -12px var(--shadow-color)',
                    'xxxl': ' 0px 32px 64px -12px var(--shadow-color)',
                    '2xl': ' 0px 24px 48px -12px var(--shadow-color)',
                    'xxl': ' 0px 24px 48px -12px var(--shadow-color)',
                    'xl': ' 0px 20px 24px -4px var(--shadow-color)',
                    'lg': ' 0px 12px 16px -4px var(--shadow-color)',
                    'md': ' 0px 4px 8px -2px var(--shadow-color)',
                    'sm': ' 0px 1px 3px var(--shadow-color)',
                    'xs': ' 0px 1px 2px var(--shadow-color)',
                };
                if(values.hasOwnProperty(value)) return values[value];
            }
         
        }
    },
    // predefine className 
	prebuild:{

        'text-xl': 'font-size:20px;line-height:30px',
        'text-lg': 'font-size:18px;line-height:28px',
        'text-md': 'font-size:16px;line-height:24px',
        'text-sm': 'font-size:14px;line-height:20px',
        'text-xs': 'font-size:12px;line-height:18px',

        'radius-xs':'border-radius:4px',

        'flex-center':'display:flex;align-items:center;justify-content:center',
    },
    //Add some css statement in every compiled css file
	statement:`
        :root{
            --bg-dark-color:rgba(111,111,111,1) ;
            --bg-light-color:rgba(21,21,21,1) ;
            --outline-color:blue;
    
        }

        body{
            font-family:BlinkMacSystemFont , -apple-system , "Segoe UI"  ;
        }

	`,

	// pre group valid Aliascss classNames in single className
	group:{
		'container':' df fdc bsbb aic flex-shrink-1 flex-grow-1 ',
		'section':'flex-shrink0 bsbb'
	},
    // if some of the className collide with other CSS framework like bootstrap and tailwindcss
    // You wanna  tell aliascss to ignore it...
	ignore:['fs12px', 'c-red'],// these classnames will be ignored
}
export default config;
```

Now you can do,

`npx aliascss --config `

 ##### Watch

`npx aliascss --config --watch`

@package.json

```JSON
....
 "scripts": {
    ...
    "aliascss-build": "aliascss --config'",
    "aliascss-watch": "aliascss --config --watch"
  }
  ...
  
  ```

Visit for more..[https:aliascss.com](Offical Documentation site)






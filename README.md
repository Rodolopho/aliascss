# Introduction

**Welcome to Aliascss!**

AliasCSS or in short acss, is a post css processor/compiler means it lets you first define classnames in your html element then get processed to corresponig css declaration. 

## What it is?
With aliascss you can  style you webpages using class attribute with  post-define classname, for example
```html
<h1 class="color-red font-size12px display-inline-block"> Hello world</h1>
```
OR, using shorthand
```html
<h1 class="c-red fs12px dib"> Hello world</h1>
```
Here we have defined the color, font size, display properties of h1 element first,  then aliascss will compiles and defines the classname with the corresponing property and value/s  in the styles tag or stylesheets. Generally every aliascss classname hold single propery  and value for it.

## Getting Started

### Install

### NPM
```
npm install aliascss
```

### CDN

[https://cdn.jsdelivr.net/npm/aliascss@1.0.1/build/aliascss.js](https://cdn.jsdelivr.net/npm/aliascss@1.0.1/build/aliascss.js)

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
<h1 class="c-gray fs18px">Hello World!</h1>
    
```
Or by using full semantic classname

```
<h1 class="color-gray font-size18px">Hello World!</h1>
    
```
> Here if you look carefully the classname is doing dual responsibilty. one is defining classname and second is also defining css declaration for itself. In AliasCSS ecosystem we first use classname, then the compiler will define classname and corresponding property and value in the stylesheet/style tag.  you dont have to use aliascss compiler  in production. 

### Here are few other examples of post define classnames:-
|Aliascss classnames|Short-hand |Corresponding style aplied|
|------------------|-------------|--------------------------:|
|`display-flex`|`df`|`display:flex`|
|`list-style-none`|`lsn`|`list-style:none`|
|`margin-left20px`|`ml20px`|`margin-left:20px`|
|`margin-top-20px`|`mt-20px`|`margin-top:-20px`|
|`border1px-solid-ccc`|`b1px-s-ccc`|`border:1px solid #ccc`|
|`backgound-color-10p20p30p`|`bgc-10p20p30p`|`background-color:rgb(10%, 20%, 30%)`|
|`opacity1`|`o1`|`opacity:1`|
|`opacity0d5`|`o0d5`|`opacity:0.5`|



```There are two ways to use class name,  either using shorhand e.g c-red m20px  df p20p30px l-30px OR full semantic class name color-red display-flex padding20px30px left-30px```

## Selector and Psedu [ hover: focus: active: ]
 We can also target psedu selector / element  in your class name by using flags(-- or for shorhand -) e.g --hover or -h. For an example:-
 ```
 <div class="bgc-cccccc --hover-bgc-yellow> Hi! i will change background color on hover</div>
 ```
 Here by using --hover flag ( *can be used -h shorthand flag*) we are telling to use it in :hover state
 
 Flags:-
 
 | flags  |short-flag | corresponding css declaration  |
 |-------------|---|---------:|
 |--active|-a|:active|   
  |--after|-af|::after| 
  |--after-hover|-afh|::after:hover|
  |--before|-bf|::before| 
  |--before-hover|-bfh|::before:hover| 
  |--checked|-ch|:checked| 
  |--default|-de|:default| 
  |--disabled|-di|:disabled| 
  |--empty|-em|:empty| 
  |--enabled|-en|:enabled| 
  |--first-child|-fc|:first-child| 
  |--first-letter|-fl|::first-letter|  
  |--first-line|-fln|::first-line| 
  |--first-of-type |-fot|:first-of-type| 
  |--focus| -fo|:focus| 
  |--hover|-h|:hover| 
  |--hover-after|-haf|:hover::after| 
  |--hover-before|-hbf|:hover::before| 
  |--hover-target|-htg|:hover:target| 
  |--in-range|-ir|:in-range| 
  |--indeterminate|-ind|:indeterminate| 
  |--invalid|-inv|:invalid| 
  |--last-child|-lc|:last-child| 
  |--last-of-type|-lot|:last-of-type| 
  |--link|-ln|:link| 
  |--not-|-n-|:not| 
  |--nth-child-|-nc-|:nth-child| 
  |--nth-last-child-|-nlc-|:nth-last-child| 
  |--nth-last-of-type-|-nlot-|:nth-last-of-type| 
  |--nth-of-type-|-not-|:nth-of-type| 
  |--only-of-type |-oot|:only-of-type| 
  |--only-child|-oc|:only-child| 
  |--optional|-op|:optional|  
  |--out-of-range|-oor|:out-of-range| 
  |--placeholder|-ph|::placeholder| 
  |--read-only |-ro|:read-only| 
  |--read-write|-rw|:read-write| 
  |--required|-rq|:required| 
  |--root|-rt|:root| 
  |--selection|-s|::selection| 
  |--scrollbar|-sb|::-webkit-scrollbar|
  |--scrollbar-track|-st|::-webkit-scrollbar-track|
  |--scrollbar-thumb|-stm|::-webkit-scrollbar-thumb|
  |--target |-tg|:target| 
  |--valid|-v|:valid| 
  |--visited|-vi|:visited| 
  
  **Examples**
  
 |  classname  |shorthand    | css                 |Remarks|
|----------- |-----------   |----------------------|------------|
|`--hover-display-flex`|`-h-df`|`:hover{display: flex ;}`|
|`--focus-list-style-none`|`-fo-lsn`|`:focus{list-style:none;}`|
|`--nth-child-2n-margin-left20px`|`-nc-2n-ml20px`|`:nth-child(2n){margin-left:20px ;}`|
 
 
 #### Similary , we can also tell aliascss classname to use selector by using '_' at the begining class name . eg:-
 ```
 <div class="_h3-c-white _p-fs14px"" >
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
<p class="xs-dn">This will not show in smmaler device</p>
```
or using semantic classname
 ```
<p class="xs-display-none">This will not show in smaller devices</p>

```
#### Device Guide Table
|AliasCSS Device Prefix| CSS Selector|
|--|--|
|mob|@media (max-width : 768px) |
|mobile|@media (max-width : 768px) |
|tab|@media  (min-width : 768px)|
|lab|@media  (min-width : 992px) |
|desk|@media  (min-width : 1200px) |
|hd|@media  (min-width : 1408px) |
|print|@media print|
|xs|@media (max-width : 576px) |
|sm|@media  (min-width : 576px) |
|md|@media  (min-width : 768px) |
|lg|@media  (min-width : 992px) |
|xl|@media  (min-width : 1200px)|

>Any of the above prefix can be used, these prefix must be the at the begining of the classnames.
Few examples:-
 
**Define**
```
<div class="xs-flex-direction-column">...</div>
//using shorthand <div class="xs-fdc">...</div>
```


**Compiled** 
```
@media (max-width : 768px) {
    .mob-flex-direction-column{
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
<div class="tab-width500px">...</div>
//using shorthand <div class="tab-w500p">...</div>
```

**Compiled**
```
@media (min-width : 768px){
    .tab-width500px{
         width:500px ;
    }
}
```


# Classname Defination Guide
##### Rules for defining classnames
- In general every aliasCSS classnames are derived from css property and value we want to apply.i.e display-flex, color-red, wigth100px, margin-left2rem etc, similary short-hand classnames are also  derived for first letter of property follwed by every first letter after '-'followed by first letter of value and evry first letter after '-' if it has any.
For Example 
```
display:flex => df or display-flex
font-weight-bold=> fwb or font-weight-bold
animation-timing-function: ease-in-out => atfeio or animation-timing-function-ease-in-out
width:100px => w100px or width100px 
width:-100px => w-100px or width-100px
```
> if there is '-' in classname before length or numeric unit it will treated as  negative value. e.g  w100px => width:100px ,  w-100px =>width:-100px , margin100px=> margin:100px, margin-100px => margin:-110px, fs-12px => font-size:-12px; fs12px=> font-size:12px; Becarefull when using '-' before numeric value.
- Repace "." with d and "%" with p, note this only appicable to numeric and length unit . "d" must be between two numeric value. i.e d5 not != .5, use 0d5 => 0.5

 |Acss|shorthand|Css|
 |--|--|--|
 |`margin0d75rem`|`m0d75rem`|`margin:0.75rem`|
 |`margin-0d75rem`|`m-0d75rem`|`margin:-0.75rem`|
 |`width50p`|` w50p`|`width:50%`|
 |`opacity0d5`|`o0d5`|`opacity:0.5`|



## Length [property whose value are in length ]
`Syntax:- property[-]?[value]`

|  classname  |shorthand    | css                 |Remarks|
|----------- |-----------   |----------------------|------------|
|`margin100px`|`m100px`      |  `margin:100px`      |           |
|`margin1em`  |`m1em`        |`margin:1em`|
|`margin50p`  |`m50p`         |`margin:50%` | Use 'p' for %|
|`margin0d5rem`|`m0d5rem`       |`margin:0.5rem` | use 'd' for .|
|`margin20px30px20px40px`|`m20px30px20px40px`|` margin:20px 30px 20px 40px`|
|`margin-20px30px-20px40px`|`m-20px30px-20px40px`| `margin:-20px 30px -20px 40px`|
|`margin-left150px`|`ml150px`|`margin-left:150px`|
|`border-radius15px`|br15px`|`border-radius:15px`|
|`max-width500px`|`xw500pc`|`max-width:500px`|
|`min-width300px`|`mw300p`|`min-width:300px`|
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
Alpha can be represent by either decimal or percentage value, 'd' should be used in palce of ' . '.



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
|`border1px-solid-red`|`b1px-s-red`|`border:1px solid red`|
|`border1px-solid-30p40p50p`|`b2px-s-30p40p50p`|`border:1px solid rgb(30%,40%,50%)`|
|`border-bottom2px-dashed-cccccc`|`bb2px-ds-cccccc`|`border-bottom:2px dashed #cccccc`|

#### `border-radius`

|classname|shorthand|css|Remarks|
|---------|---------|---|-------|
|`border-radius5px`|`br5px`|`border-radius:5px`|
|`border-radius10px5px`|`br10px5px`|`border-radius:10px 5px`|
|`border-radius5px10px30px4px`|`br5px10px30px4px`|`border-radius:4px 10px 30px 4px`|
|`border-bottom-left-radius5px60px`|`bblr5px60px`|` border-bottom-left-radius:5px 60px ;`|
|`border-top-right-radius6p`|`btrr6p`|` border-top-right-radius:6% ;`|

#### `box-shadow`

|classname|shorthand|css|Remarks|
|---------|---------|---|-------|
|`box-shadow1px2px3px4px-pink`|`bxs1px2px3px4px-pink`|`box-shadow:1px 2px 3px 4px pink`|
|`box-shadow0px2px-000000000`|`bxs0px2px-000000000`|`box-shadow:0px 2px rgb(000,000,000)`|
|`box-shadow-2px-2px-cccccc`|`bxs-2px-2px-cccccc`|`box-shadow:-2px -2px #cccccc`|
|`box-shadow0px2px-000000000--2px5px1px-red`|`bxs0px2px-000000000----2px5px1px-red`|`box-shadow:0px 2px rgb(000,000,000),2px 5px 1px red`|Multiple Box-shadow|
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
|`transform-rotate45deg`|`tf-r45deg`|`transform:rotate(45deg)`|
|`transform-scale2--rotate25deg`|`tf-s2--r25deg`|`transform:scale(2) rotate(25deg)`| Multiple value|
|`transform-rotate45deg`|`tf-r45deg`|`transform:rotate(45deg)`|
|`transform-rotate3d1_-1_1_45deg`|`tf-r3d1_-1_1_45deg`|`transform:rotate3d(1, -1, 1, 45deg)`|
|`transform-matrix0d8_0d7_-0d8_0.866_0_0`|`tf-m0d8_0d7_-0d8_0.866_0_0`|`transform:matrix(0.8, 0.7, -0.8, 0.866, 0, 0)`||
|`transform-rotateX45deg`|`tf-rx45deg`|`transform:rotateX(45deg)`|
|`transform-rotate45deg`|`tf-r45deg`|`transform:rotate(45deg)`|
|`transform:-scaleX2`|`tf-sx2`|`transform:scaleX(2)`|
|`transform-skew45deg_-45deg`|`tf-sk45deg`|`transform:skew(45deg, -45deg)`|
|`transform-translate20px_10px`|`tf-t20px_10px`|`transform:translate(20px, 10px)`|
|`transform-rotate45deg`|`tf-r45deg`|`transform:rotate(45deg)`|
|`transform-rotate45deg`|`tf-r45deg`|`transform:rotate(45deg)`|

## Transition 

|classname|shorthand|css|Remarks|
|---------|---------|---|-------|
|`transition-all0d5s`|`tn-all0d5s` |`transition:all 0.5s`|
|`transition-width0d35s`|`tn-width0d35s` |`transition:width 0.5s`|
|`transition-width-0d35s`|`tn-width-0d35s` |`transition:width 0.5s`| '-' used  before numeric time unit will not taken as negative value
|`transition-transform0d35s`|`tn-transform0d35s`|`transition:transform 0.35s`|

## Filter

|classname|shorthand|css|Remarks|
|---------|---------|---|-------|
|`filter-blur4px`|`fl-b4px`|`filter:blur(4px)`||
|`filter-unset`|`flu`|`fliter:unset`||
|`filter-brightness50p--blur4px--invert50p`|`fl-br50p--b4px--i50p`|`filter:brightness( 50% ) blur( 4px ) invert( 50% )` |
|`filter-drop-shadow8px8px10px-gray`|`fl-ds8px8px10px-gray`|`filter:drop-shadow( 8px 8px 10px gray )`||
|`filter-hue-rotate40deg`|`fl-hr40deg`|`filter:hue-rotate( 40deg )`||

## Gradient 
|classname|shorthand|css|Remarks|
|---------|---------|---|-------|
|`background-linear-gradient-red-blue`|`bg-lg-red-blue `|`background:linear-gradient( red, blue ) `||
|`background-linear-gradient-red_10p-blue_90p`|`bg-lg-red_10p-blue_20p `|`background:linear-gradient( red 10%, blue 90% )`||
|`background-repeating-linear-gradient-red_10p-blue_90p`|`bg-rlg-red_10p-blue_20p `|`background:repeating-linear-gradient( red 10%, blue 90% )`||
|`background-linear-gradient-to-right-red_10p-blue_90p`|`bg-lg-tr-red_10p-blue_90p `|`background:linear-gradient(to right, red 10%, blue 90% )`||
|`background-linear-gradient45deg-red_10p-blue_90p`|`bg-lg45deg-red_10p-blue_90p `|`background:linear-gradient(45deg, red 10%, blue 90% )`||
|`background-radial-gradient-red_10p-blue_90p`|`bg-rg-red_10p-blue_90p `|`background:radial-gradient( red 10%, blue 90% )`||
|`background-repeating-radial-gradient-circle-blue_5p-skyblue_23p `|`bg-rrg-circle-blue_5p-skyblue_23p `|`background:repeating-radial-gradient( circle, blue 5%, skyblue 23% )`||
|`background-conic-gradient-red-blue`|`bg-cg-red-blue `|`background:conic-gradient( red, blue ) `||

## CSS Variable 
|classname|shorthand|css|Remarks|
|---------|---------|---|-------|
|`color--var--name`|`c--var--name`|`color: var(--name)`|
|`width--var--side-bar-width`|`w--var--side-bar-width`| `width: var(--side-bar-width)`||


# NPM Guide
 
With `npm` version  there are lots of exrta front-end / workflow feature we can use out of the box.

`npm intstall aliascss`


To Compiler folder from command line

`npx aliascss 'public/*.html' 'public/css/acss.ccc'`

> output css file must be there if not it should be created manully. 

>Guide-`npx aliascsss 'glob-patterm' 'path/to/output/style.css'`

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

## .aliascss.config.js
`.aliascss.config.js`  gives you more feature and power to the workflow.

@.aliascss.config.js

Basic structure of config file
```
export let config= {
    //input files in glob pattern to get compiled
    input:'public/*.html',

    //Output css file , must exist or should be created manully if not exist
    output:'./public/css/acss.css',

    //Truncate the css file , you should let it true unless you know what your are doing
    truncate:true,
    	//input glob patterns, can be array of folder or files or both,

    //    
	custom:{
		color:{
			'main':"rgb(12,23,45)",// now you can use bgc-main
			'theme':'#c6c6c6'

		},
		length:{
			'1cv':'25%'
		}

	},
    // predine classname and
	extend:{
		//in browser-mode you can simply group class="c-blue" acss-group="color-primary"
		'outline-color':'color: blue',
		//now you can use it with device or seduo --hover-outline-color
	},
    //if you want to add some css statement 
	statement:`
        :root{
            --bg-color: teal;
            --outline-color:blue;
            --col-1:8.33%
            --col-2:calc(var(--col-1)*2)
            --col-3:calc(var(--col-1)*3)
            --col-4:calc(var(--col-1)*4)
            --col-5:calc(var(--col-1)*5)
            --col-6:50%
            --col-8:calc(var(--col-1)*8)
            --col-12:100*
        }

        body{
            font:BlinkMacSystemFont , -apple-system , "Segoe UI" , Roboto , Oxygen , Ubuntu , Cantarell , "Fira Sans" , "Droid Sans" , "Helvetica Neue" , Helvetica , Arial , sans-serif , "Apple Color Emoji" , "Segoe UI Emoji" , "Segoe UI Symbol" , "Noto Color Emoji";
        }

	`,

	// group classname in single classname
	group:{
		'container':'p15px border1px-solid-light',
		'row':'--hover-filter-blur1px '
	},
    //if some of the classname collide with other CSS framework like bootstrap and tailwindcss
    //You wanna  tell aliasccss to ignore it...
	ignore:['fs12px', 'c-red'],


}
```

Now you can do,

`npx aliascss --config `

 ##### Watch

`npx aliascss --config --watch`

@package.json
```
....
 "scripts": {
    ...
    "aliascss-build": "aliascss --config'",
    "aliascss-watch": "aliascss --config --watch"
  }
  ...
  
  ```


Here is the complete AliasCSS documentation for ChatGPT, compiled from all official docs pages:

AliasCSS — Full Documentation for ChatGPT
What is AliasCSS?
AliasCSS is a build-time CSS compiler (post-processor). You style elements by writing class names that encode CSS property:value pairs directly in HTML/JSX. It compiles them into standard CSS files. Works alongside Bootstrap, Tailwind, or custom CSS.

1. Installation
bash
# NPM (recommended)
npm install --save-dev aliascss

# CDN
<script defer src="https://cdn.jsdelivr.net/npm/aliascss@latest/dist/aliascss.js"></script>
2. Setup — aliascss.config.js
Create this file in your project root:

js
const config = {
  input: ['app/**/*.(jsx|tsx)', 'components/**/*.(jsx|tsx)'],
  output: {
    location: 'public/css/master.css',
    '--file': true,       // optional: generates [filename].css per file
  },
}
export default config;
Run commands:

bash
npx aliascss --config          # one-time build
npx aliascss --config --watch  # watch mode
package.json scripts:

json
"scripts": {
  "aliascss-build": "aliascss --config",
  "aliascss-watch": "aliascss --config --watch"
}
Without config file (inline):

bash
npx aliascss 'public/*.html' 'public/css/acss.css'
npx aliascss 'app/**/*.(tsx|jsx)' 'public/css/acss.css' --watch
The output CSS file must already exist (create it manually if needed).

3. Basic Class Name Rules
How to create a class name from CSS
Replace : with - and spaces between values with -.

text
color:blue          → color-blue        (or shorthand: c-blue)
font-size:16px      → font-size-16px    (or shorthand: fs-16px)
display:flex        → display-flex      (or shorthand: df)
margin-left:-32px   → margin-left--32px (or shorthand: ml--32px)
Tip: -- before a numeric value makes it negative. E.g. m--100px → margin: -100px

Shorthands
If property and value are both strings, use first letters:

display:inline-grid → dig

font-weight:bold → fwb

justify-content:space-between → jcsb

If value is numeric, color, or complex — only shorten the property:

margin:100px → m-100px

color:red → c-red

border:1px solid #ccc → b-1px-solid-ccc

Common Examples Table
CSS	Class Name	Shorthand
display:flex	display-flex	df or d-f
list-style:none	list-style-none	lsn
margin-left:32px	margin-left-32px	ml-32px
margin-left:-32px	margin-left--32px	ml--32px
color:red	color-red	c-red
border-color:#ccc	border-color-ccc	bc-ccc
color:#e3e3e3	color-e3e3e3	c-e3e3e3
background-color:skyBlue	background-color-skyBlue	bgc-skyBlue
background:linear-gradient(red,blue)	background-linear-gradient-red-blue	bg-lg-red-blue
font-size:16px	font-size-16px	fs-16px
animation-timing-function:ease-in-out	animation-timing-function-ease-in-out	atf-eio
4. Class Name Order (STRICT CONVENTION)
Always build AliasCSS class names in this fixed order:

text
[device prefix] + [element selector(s)] + [state/pseudo flag] + [property-value]
Rules:
Device prefix (optional, always first) — xs, sm, md, lg, xl, 2xl, etc.

Element selector (optional) — uses _ prefix(es):

_tagname → any descendant tagname (_div-df div{..})

__tagname → direct child tagname (.__div-df > div{..})

___tagname → adjacent sibling (+ div)

____tagname → general sibling (~ div)

_all → all children *

_child_tagname → direct child (> div)

_next_tagname → adjacent sibling (+ div)

_siblings_tagname → general sibling (~ div)

State/pseudo flag (optional) — --hover, --focus, --active, etc.

Property + value — c-blue, bgc-red, fs-14px, df, etc.

Class Name Examples
Class Name	Compiled CSS Meaning
--hover-c-blue	:hover { color: blue }
--focus-bgc-red	:focus { background-color: red }
--hover-bgc-yellow	:hover { background-color: yellow } (shorthand: --h-bgc-yellow)
_h3-c-white	.cls h3 { color: white }
__div-df	.cls > div { display: flex }
___div-df	.cls + div { display: flex }
_all-c-red	.cls * { color: red }
_child_div-df	.cls > div { display: flex }
_siblings_div-df	.cls ~ div { display: flex }
xs_h1--hover-c-gray	@media xs → child h1:hover { color: gray }
md__p--focus-fs-14px	@media md → descendant p:focus { font-size: 14px }
xs-df	@media (max-width:576px) { display: flex }
md-w500px	@media (min-width:768px) { width: 500px }
5. All State / Pseudo Flags
Flag	Short Flag	CSS Selector
--active	--a or --ac	:active
--after	--af	::after
--after-hover	--afh	::after:hover
--before	--bf	::before
--before-hover	--bfh	::before:hover
--checked	--ch	:checked
--disabled	--di	:disabled
--empty	--em	:empty
--enabled	--en	:enabled
--first-child	--fc	:first-child
--first-letter	--fl	::first-letter
--first-of-type	--fot	:first-of-type
--focus	--f or --fo	:focus
--focus-within	--fw	:focus-within
--focus-visible	--fv	:focus-visible
--hover	--h or --ho	:hover
--hover-after	--haf	:hover::after
--hover-before	--hbf	:hover::before
--hover-target	--htg	:hover:target
--invalid	--inv	:invalid
--last-child	--lc	:last-child
--last-of-type	--lot	:last-of-type
--link	--ln	:link
--not-	--n-	:not(...)
--nth-child-	--nc-	:nth-child(...)
--nth-of-type-	--nthot-	:nth-of-type(...)
--marker	--m	::marker
--placeholder	--ph	::placeholder
--read-only	--ro	:read-only
--required	--rq	:required
--root	--rt	:root
--selection	--s	::selection
--scrollbar	--sb	::-webkit-scrollbar
--scrollbar-track	--st	::-webkit-scrollbar-track
--scrollbar-thumb	--stm	::-webkit-scrollbar-thumb
--target	--tg	:target
--valid	--va	:valid
--visited	--vi	:visited
--is	--is	:is(...)
--where	--w	:where(...)
--has	--hs	:has(...)
--autofill	--atf	:-webkit-autofill
--backdrop	--bd	::backdrop
--popover-open	--po	:popover-open
--fullscreen	--fs	::fullscreen
--file-selector-button	--fsb	::file-selector-button
6. Attribute Selector
Use [attribute=value] prefix in class names:

xml
<div class="[data-state=close]-display-none" data-state="open">...</div>
<div class="[class~=code]-font-mono code">...</div>
Note: quotes ' and " inside attribute selector class names are not allowed.

7. Device / Screen Prefixes
Always placed at the very beginning of the class name.

Prefix	CSS Media Query
xs	@media (max-width: 576px)
sm	@media (min-width: 576px)
md	@media (min-width: 768px)
lg	@media (min-width: 992px)
xl	@media (min-width: 1200px)
2xl	@media (min-width: 1408px)
-xs	@media (min-width: 576px)
-sm	@media (max-width: 576px)
-md	@media (max-width: 768px)
-lg	@media (max-width: 992px)
dark	@media (prefers-color-scheme: dark)
light	@media (prefers-color-scheme: light)
print	@media print
@hover	@media screen and (hover: hover)
@landscape	@media (orientation: landscape)
@portrait	@media (orientation: portrait)
@theme	@layer theme
@base	@layer base
@components	@layer components
@utils	@layer utilities
@container-xs	@container (max-width: 576px)
@container-sm	@container (min-width: 576px)
Example:

xml
<div class="xs_p-fdc">...</div>
<!-- @media (max-width:576px) { .xs_p-fdc p { flex-direction: column } } -->
8. CSS Variables
Use -- or --var-- after the property name to reference a CSS variable.

xml
<div class="--header-color:skyBlue">
  <h3 class="color--header-color --hover--header-color:blue">Hello World</h3>
</div>
bgc--main-bg → background-color: var(--main-bg)

bgc--main-bg:blue → background-color: var(--main-bg, blue) (with default)

w--var--side-bar-width:200px → width: var(--side-bar-width, 200px)

Use --var-- when variable name starts with a number (e.g. --var--24x)

Declaring CSS variables via className:

xml
<div class="color--grey-alt --grey:--grey-default" style="--grey-default:rgba(210,213,217,1)">
  <h3 class="color--grey --hover-color--grey-hover --grey-hover:black">Hello World</h3>
</div>
9. Magic & Identifier
By default, element selectors are applied after the className in the generated CSS. Use & to make the selector come before the className.

xml
<!-- Default: ._div-bgc-red div { background-color: red } -->
<h1 class="_div-bgc-red">...</h1>

<!-- With &: div ._div\&-bgc-red { background-color: red } -->
<h1 class="_div&-bgc-red">...</h1>
Dark mode use case:

xml
<div class="--is(_html[class~=dark])&-bgc--dark-bg-color">...</div>
<!-- :is(html[class~="dark"]) .cls { background-color: var(--dark-bg-color) } -->
10. Class Grouping
Inline Grouping [acss,acss,acss]
Group multiple AliasCSS classes under the same state/selector:

xml
<!-- Instead of repeating --hover multiple times: -->
<button class="b0 color-fff bgc-blue --hover-c-gray --hover-border-radius-4px --hover-bgc-skyBlue">

Here is the complete table of repeated CSS values along with all the alias keys that map to them:

## Repeated CSS Values Table

| Repeated CSS Value | Keys / Aliases |
| --- | --- |
| `align-content: start` | `acs`, `acs/start`<br> |
| `align-content: stretch` | `acs2`, `acs/stretch`, `acst`<br> |
| `animation-direction: normal` | `adn`, `adnl`<br> |
| `animation-fill-mode: backwards` | `afmb`, `afmb/backward`<br> |
| `animation-fill-mode: both` | `afmb2`, `afmb/both`, `afmbo`<br> |
| `background-blend-mode: darken` | `bgbmd`, `bgbmd/darken`<br> |
| `background-blend-mode: difference` | `bgbmd2`, `bgbmd/difference`, `bgbmdf`<br> |
| `background-blend-mode: lighten` | `bgbml`, `bgbml/lighteb`<br> |
| `background-blend-mode: luminosity` | `bgbml2`, `bgbml/luminosity`, `bgbmlu`<br> |
| `background-blend-mode: saturation` | `bgbms2`, `bgbms/saturation`, `bgbmsa`<br> |
| `background-blend-mode: screen` | `bgbms`, `bgbms/screen`<br> |
| `background-repeat: no-repeat` | `bgnr`, `bgrn`<br> |
| `background-repeat: repeat no-repeat` | `bgrnr`, `bgrrn`, `bgrrnr`<br> |
| `background-repeat: repeat-x` | `bgrrx`, `bgrx`<br> |
| `background-repeat: repeat-y` | `bgrry`, `bgry`<br> |
| `background-size: cover` | `bgsc`, `bgsc/cover`<br> |
| `background-size:contain` | `bgsc2`, `bgsc/contain`<br> |
| `border-bottom-style: dashed` | `bbsd`, `bbsd/dashed`, `bbsds`<br> |
| `border-bottom-style: dotted` | `bbsd3`, `bbsd/dotted`, `bbsdt`<br> |
| `border-bottom-style: double` | `bbsd2`, `bbsd/double`, `bbsdb`<br> |
| `border-bottom-width: thick` | `bbwt`, `bbwt/thick`<br> |
| `border-bottom-width: thin` | `bbwt2`, `bbwt/thin`, `bbwtn`<br> |
| `border-image-repeat: repeat` | `birr`, `birr/repeat`<br> |
| `border-image-repeat: round` | `birro`, `birr2`, `birr/round`<br> |
| `border-image-repeat: space` | `birs`, `birs/space`<br> |
| `border-image-repeat: stretch` | `birs2`, `birs/stretch`, `birsth`<br> |
| `border-image-source: none` | `bisn2`, `bisn/source`, `bisn/image-source`, `bisno`<br> |
| `border-inline-end-style: dashed` | `biesd`, `biesd/dashed`, `biesds`<br> |
| `border-inline-end-style: dotted` | `biesd3`, `biesd/dotted`, `biesdt`<br> |
| `border-inline-end-style: double` | `biesd2`, `biesd/double`, `biesdb`<br> |
| `border-inline-start-style: dashed` | `bissd`, `bissd/dashed`, `bissds`<br> |
| `border-inline-start-style: dotted` | `bissd3`, `bissd/dotted`, `bissdt`<br> |
| `border-inline-start-style: double` | `bissd2`, `bissd/double`, `bissdb`<br> |
| `border-inline-style: dashed` | `bisd`, `bisd/dashed`, `bisds`<br> |
| `border-inline-style: dotted` | `bisd3`, `bisd/dotted`, `bisdt`<br> |
| `border-inline-style: double` | `bisd2`, `bisd/double`, `bisdb`<br> |
| `border-inline-style: none` | `bisn`, `bisn/inline-style`, `bisn/style`<br> |
| `border-left-style: dashed` | `blsd`, `blsd/dashed`, `blsds`<br> |
| `border-left-style: dotted` | `blsd3`, `blsd/dotted`, `blsdt`<br> |
| `border-left-style: double` | `blsd2`, `blsd/double`, `blsdb`<br> |
| `border-left-width: thick` | `blwt`, `blwt/thick`<br> |
| `border-left-width: thin` | `blwt2`, `blwt/thin`, `blwtn`<br> |
| `border-right-style: dashed` | `brsd`, `brsd/dashed`, `brsds`<br> |
| `border-right-style: dotted` | `brsd3`, `brsd/dotted`, `brsdt`<br> |
| `border-right-style: double` | `brsd2`, `brsd/double`, `brsdb`<br> |
| `border-right-width: thick` | `brwt`, `brwt/thick`<br> |
| `border-right-width: thin` | `brwt2`, `brwt/thin`, `brwtn`<br> |
| `border-style: dashed` | `bsd`, `bsd/dashed`, `bsds`<br> |
| `border-style: dotted` | `bsd3`, `bsd/dotted`, `bsdt`<br> |
| `border-style: double` | `bsd2`, `bsd/double`, `bsdb`<br> |
| `border-style: inset` | `bsi`, `bsi/inset`<br> |
| `border-top-style: dashed` | `btsd`, `btsd/dashed`, `btsds`<br> |
| `border-top-style: dotted` | `btsd3`, `btsd/dotted`, `btsdt`<br> |
| `border-top-style: double` | `btsd2`, `btsd/double`, `btsdb`<br> |
| `border-top-width: thick` | `btwt`, `btwt/thick`<br> |
| `border-top-width: thin` | `btwt2`, `btwt/thin`, `btwtn`<br> |
| `border-width: thick` | `bwt`, `bwt/thick`<br> |
| `border-width: thin` | `bwt2`, `bwt/thin`, `bwtn`<br> |
| `bottom: auto` | `ba`, `btma`<br> |
| `box-align: baseline` | `bab2`, `bab/baseline`, `babl`<br> |
| `box-align: before` | `bab`, `bab/before`<br> |
| `break-after: always` | `baa3`, `baa/always`, `baal`<br> |
| `break-after: auto` | `baa`, `baa/auto`<br> |
| `break-after: avoid` | `baa2`, `baa/avoid`, `baav`<br> |
| `break-before: always` | `bba3`, `bba/always`, `bbal`<br> |
| `break-before: auto` | `bba`, `bba/auto`<br> |
| `break-before: avoid` | `bba2`, `bba/avoid`, `bbav`<br> |
| `break-inside: auto` | `bia`, `bia/auto`<br> |
| `break-inside: avoid` | `bia2`, `bia/avoid`, `biav`<br> |
| `clear-after: both` | `cab`, `cab/both`<br> |
| `clear-after: bottom` | `cab2`, `cab/bottom`, `cabtm`<br> |
| `clear-after: start` | `cas2`, `cas/after`, `cas/clear`, `cast`<br> |
| `clear: none` | `cn`, `cn/clear`<br> |
| `clip: auto` | `ca3`, `ca/clip`, `cla`<br> |
| `column-rule-style: dashed` | `crsd`, `crsd/dashed`, `crsds`<br> |
| `column-rule-style: dotted` | `crsd3`, `crsd/dotted`, `crsdt`<br> |
| `column-rule-style: double` | `crsd2`, `crsd/double`, `crsdb`<br> |
| `column-rule-width: thick` | `crwt`, `crwt/thick`<br> |
| `column-rule-width: thin` | `crwt2`, `crwt/thin`, `crwtn`<br> |
| `content: close-quote` | `concq`, `ccq`<br> |
| `content: icon` | `ci2`, `ci/icon`, `ci/content`, `coni`<br> |
| `content: no-close-quote` | `cncq`, `conncq`<br> |
| `content: no-open-quote` | `cnoq`, `connoq`<br> |
| `content: none` | `cn3`, `cn/content`, `conn`<br> |
| `content: normal` | `cn4`, `cn/normal`, `connl`<br> |
| `cursor: alias` | `ca2`, `ca/alias`, `cal`<br> |
| `cursor: all-scroll` | `cas`, `cas/cursor`<br> |
| `cursor: auto` | `ca`, `ca/auto`, `ca/cursor`<br> |
| `cursor: n-resize` | `cnr`, `cnr/n`<br> |
| `cursor: ne-resize` | `cner`, `cnr7`, `cnr8`, `cnr/ne`<br> |
| `cursor: nesw-resize` | `cneswr`, `cnr5`, `cnr6`, `cnr/nesw`<br> |
| `cursor: none` | `cn2`, `cn/cursor`, `cnone`<br> |
| `cursor: ns-resize` | `cnr2`, `cnr/ns`, `cnsr`<br> |
| `cursor: nw-resize` | `cnr3`, `cnr/nw`, `cnwr`<br> |
| `cursor: nwse-resize` | `cnr4`, `cnr/nwse`, `cnwser`<br> |
| `cursor: pointer` | `cp`, `cp/pointer`<br> |
| `cursor: progress` | `cp2`, `cp/progress`, `cpg`<br> |
| `cursor: s-resize` | `csr`, `csr/s`<br> |
| `cursor: se-resize` | `cser`, `csr3`, `csr/se`<br> |
| `cursor: sw-resize` | `csr2`, `csr/sw`, `cswr`<br> |
| `display: compact` | `dc2`, `dc/compact`, `dcp`<br> |
| `display: container` | `dc`, `dc/container`<br> |
| `display: table-caption` | `dtc2`, `dtc/caption`, `dtcp`<br> |
| `display: table-cell` | `dtc3`, `dtc/cell`, `dtcl`<br> |
| `display: table-column` | `dtc`, `dtc/column`<br> |
| `flex-direction: column` | `fdc`, `ffc`<br> |
| `flex-direction: column-reverse` | `fdcr`, `ffcr`<br> |
| `flex-direction: row` | `fdr`, `ffr`<br> |
| `flex-direction: row-reverse` | `fdrr`, `ffrr`<br> |
| `flex-item-align: start` | `fias`, `fias/start`<br> |
| `flex-item-align: stretch` | `fias2`, `fias/stretch`, `fiasth`<br> |
| `flex-line-pack: stretch` | `flps/stretch`, `flpsth`<br> |
| `flex-wrap: nowrap` | `ffn`, `fwn`<br> |
| `font-kerning: normal` | `fkn2`, `fknl`<br> |
| `font-size: large` | `fsl`, `fsl/large`<br> |
| `font-size: larger` | `fsl2`, `fsl/larger`, `fslr`<br> |
| `font-size: small` | `fss`, `fss/small`<br> |
| `font-size: smaller` | `fss2`, `fss/smaller`, `fssr`<br> |
| `font-size: x-large` | `fsxl`, `fsxl/x`<br> |
| `font-size: xx-large` | `fsxl2`, `fsxl/xx`, `fsxxl`<br> |
| `font-size: xx-small` | `fsxs2`, `fsxs`, `fsxxs`<br> |
| `font-smooth: never` | `fsn4`, `fsn/never`, `fsnv`<br> |
| `font-stretch: normal` | `fsn3`, `fsnml`<br> |
| `font-style: italic` | `fsi`, `fsi/italic`<br> |
| `font-style: normal` | `fsn2`, `fsnl`<br> |
| `font-variant-caps: normal` | `fvcn`, `fvcnl`<br> |
| `font-weight: bold` | `fwb`, `fwb/bold`<br> |
| `font-weight: bolder` | `fwb2`, `fwb/bolder`, `fwbr`<br> |
| `font-weight: normal` | `fwn2`, `fwnl`<br> |
| `height:auto` | `ha2`, `ha/height`<br> |
| `hyphens: auto` | `ha`, `ha/hyphen`<br> |
| `justify-items: right` | `jir`, `jir/right`<br> |
| `justify-items: start` | `jis`, `jis/start`<br> |
| `justify-items: stretch` | `jis2`, `jis/stretch`, `jist`<br> |
| `justify-self: right` | `jsr`, `jsr/right`<br> |
| `justify-self: start` | `jss`, `jss/start`<br> |
| `justify-self: stretch` | `jss2`, `jss/stretch`, `jsst`<br> |
| `letter-spacing: normal` | `lesnl`, `lsn2`, `lsn/normal`, `lsnl`<br> |
| `line-break: normal` | `lbn`, `lbnl`<br> |
| `line-height: normal` | `lhn`, `lhnl`<br> |
| `list-style-type: armenian` | `lsa`, `lsta`<br> |
| `list-style-type: circle` | `lsc`, `lstc`<br> |
| `list-style-type: decimal` | `lsd2`, `lsd/decimal`, `lsdc`, `lstd2`, `lstd/decimal`<br> |
| `list-style-type: decimal-leading-zero` | `lsdlz`, `lstdlz`<br> |
| `list-style-type: disc` | `lsd`, `lsd/disc`, `lstd`, `lstd/disc`<br> |
| `list-style-type: georgian` | `lsg`, `lstg`<br> |
| `list-style-type: lower-alpha` | `lsla`, `lstla`<br> |
| `list-style-type: lower-greek` | `lslg`, `lstlg`<br> |
| `list-style-type: lower-latin` | `lsll`, `lstll`<br> |
| `list-style-type: lower-roman` | `lslr`, `lstlr`<br> |
| `list-style-type: square` | `lss`, `lsts`<br> |
| `list-style-type: upper-alpha` | `lstua`, `lsua`<br> |
| `list-style-type: upper-latin` | `lstul`, `lsul`<br> |
| `list-style-type: upper-roman` | `lstur`, `lsur`<br> |
| `list-style: none` | `lsn`, `lsn/none`<br> |
| `mask-repeat: repeat` | `mrr`, `mrr/repeat`<br> |
| `mask-repeat: round` | `mrr2`, `mrr/round`, `mrro`<br> |
| `mix-blend-mode: darken` | `mbmd`, `mbmd/darken`<br> |
| `mix-blend-mode: difference` | `mbmd2`, `mbmd/difference`, `mbmdf`<br> |
| `mix-blend-mode: lighten` | `mbml`, `mbml/lighten`<br> |
| `mix-blend-mode: luminosity` | `mbml2`, `mbml/luminisity`, `mbmlu`<br> |
| `mix-blend-mode: saturation` | `mbms2`, `mbms/saturation`, `mbmsa`<br> |
| `mix-blend-mode: screen` | `mbms`, `mbms/screen`<br> |
| `outline-style: dashed` | `osd`, `osd/dashed`, `osds`<br> |
| `outline-style: dotted` | `osd3`, `osd/dotted`, `osdt`<br> |
| `outline-style: double` | `osd2`, `osd/double`, `osdb`<br> |
| `outline-width: thick` | `owt`, `owt/thick`<br> |
| `outline-width: thin` | `owt2`, `owt/thin`, `owtn`<br> |
| `outline:none` | `oln`, `on`<br> |
| `overflow-wrap: normal` | `own`, `ownl`<br> |
| `page-break-after: always` | `pbaa3`, `pbaa/always`, `pbaal`<br> |
| `page-break-after: auto` | `pbaa`, `pbaa/auto`<br> |
| `page-break-after: avoid` | `pbaa2`, `pbaa/avoid`, `pbaav`<br> |
| `page-break-before: always` | `pbba3`, `pbba/always`, `pbbal`<br> |
| `page-break-before: auto` | `pbba`, `pbba/auto`<br> |
| `page-break-before: avoid` | `pbba2`, `pbba/avoid`, `pbbav`<br> |
| `page-break-inside: avoid` | `pbia2`, `pbiav`<br> |
| `perspective-origin: bottom` | `pob`, `pobtm`<br> |
| `place-items: start legacy` | `pisl`, `pisl/start`<br> |
| `place-items: stretch legacy` | `pisl2`, `pisl/stretch`, `pistl`<br> |
| `place-self: start auto` | `pssa`, `pssa/start`<br> |
| `place-self: stretch auto` | `pssa2`, `pssa/stretch`, `pssta`<br> |
| `position: static` | `ps`, `ps/static`<br> |
| `position: sticky` | `ps2`, `ps/sticky`, `pst`<br> |
| `stroke-linecap:butt` | `slb`, `slb/butt`, `slcb`<br> |
| `stroke-linecap:round` | `slcr`, `slr`, `slr/linecap`, `slr/cap`<br> |
| `stroke-linecap:square` | `slcs`, `sls`<br> |
| `stroke-linejoin:arcs` | `sla`, `slja`<br> |
| `stroke-linejoin:bevel` | `slb2`, `slb/bevel`, `sljb`<br> |
| `stroke-linejoin:milter` | `sljm`, `slm`<br> |
| `stroke-linejoin:milter-clip` | `sljmc`, `slmc`<br> |
| `stroke-linejoin:round` | `sljr`, `slr2`, `slr/linejoin`, `slr/join`<br> |
| `text-decoration-style: dashed` | `tdsd2`, `tdsd/double`, `tdsds`<br> |
| `text-decoration-style: dotted` | `tdsd3`, `tdsd/dotted`, `tdsdt`<br> |
| `text-decoration-style: double` | `tdsd`, `tdsd/dashed`, `tdsdb`<br> |
| `text-decoration: dashed` | `tdd`, `tdd/dashed`, `tdds`<br> |
| `text-decoration: dotted` | `tdd3`, `tdd/dotted`, `tddt`<br> |
| `text-decoration: double` | `tdd2`, `tdd/double`, `tddb`<br> |
| `text-decoration: overline` | `tdlo`, `tdo`<br> |
| `text-overflow: clip` | `toc2`, `toc/clip`, `toc/text`, `toc/overflow`<br> |
| `text-rendering: geometricPrecision` | `trg`, `trgp`<br> |
| `text-rendering: optimizeLegibility` | `tro`, `trop`<br> |
| `text-rendering: optimizeSpeed` | `tro2`, `tros`<br> |
| `transform-origin: bottom` | `tob`, `tobtm`<br> |
| `transform-origin: center` | `toc`, `toc/center`, `toc/transform`, `toc/origin`<br> |
| `transform-style: preserve-3d` | `tsp3`, `tsp3d`<br> |
| `unicode-bidi: normal` | `ubn`, `ubnl`<br> |
| `user-select: all` | `usa2`, `usa/all`, `usal`<br> |
| `user-select: auto` | `usa`, `usa/auto`<br> |
| `vertical-align: baseline` | `vab`, `vab/baseline`<br> |
| `vertical-align: bottom` | `vab2`, `vab/bottom`, `vabtm`<br> |
| `white-space: normal` | `wsn2`, `wsn/space`, `wsn/white`, `wsnl`<br> |
| `white-space: nowrap` | `wsn`, `wsn/nowrap`<br> |
| `word-break: normal` | `wbn`, `wbnl`<br> |
| `word-spacing:normal` | `wsn3`, `wsn/world`, `wsn/spacing`<br> |
| `word-wrap: normal` | `wwn`, `wwnl`<br> |
| `writing-direction-ltr` | `wdl`, `wdltr`<br> |
| `writing-direction-rtl` | `wdr`, `wdrtl`<br> |
| `writing-mode: vertical-lr` | `wmvl`, `wmvlr`<br> |
| `writing-mode: vertical-rl` | `wmvr`, `wmvrl`<br> |
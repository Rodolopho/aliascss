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
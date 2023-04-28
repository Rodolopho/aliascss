export let propertyAliasCompiler = {
  //property:'compiler' or [multiple,compile]
  //color
  color: ["color"],

  "background-color": ["color"],
  "accent-color":["color"],
  "caret-color":["color"],
  "column-rule-color":["color"],

  "border-color": ["color"],

  "border-right-color": ["color"],

  "border-left-color": ["color"],

  "border-top-color": ["color"],

  "border-bottom-color": ["color"],

  fill: ["color"],

  stroke: ["color"],

  "outline-color": ["color"],

  "text-shadow-color": ["color"],

  "text-decoration-color": ["color"],

  //length
  "border-radius": ["length"],

  "border-image-outset": ["length"],

  "border-image-slice": ["number", "length"],

  "border-image-width": ["length"],

  "border-bottom-left-radius": ["length"],

  "border-bottom-right-radius": ["length"],

  "border-top-right-radius": ["length"],

  "border-top-left-radius": ["length"],

  "border-width": ["length"],

  "border-right-width": ["length"],

  "border-top-width": ["length"],

  "border-left-width": ["length"],

  "border-bottom-width": ["length"],

  bottom: ["length"], //-----------------------#

  "background-position": ["length"], //----------

  "background-size": ["length"], //-----------

  "border-spacing": ["length"],

  "column-gap": ["length"],

  "column-rule-width": ["length"], //#

  "column-width": ["length"],

  "flex-basis": ["length"],

  "font-size": ["number", "length"],

  //Grid
  "grid-gap": ["length"],

  gap: ["length"],

  "grid-row-gap": ["length"],

  "row-gap": ["length"],

  "grid-column-gap": ["length"],

  "grid-auto-columns": ["length"],

  "grid-auto-rows": ["length"],

  "grid-column": ["grid", "number"],

  "grid-row": ["grid", "number"],

  "grid-template-columns": ["grid", "length"],

  "grid-template-rows": ["grid", "length"],

  height: ["length"],

  left: ["length"],

  "letter-spacing": ["number", "length"], //--------

  "line-height": ["number", "length"],

  margin: ["length"],
  // "ma" :["margin","length"],

  "margin-bottom": ["length"],

  "min-height": ["length"],

  "margin-left": ["length"],

  "marker-offset": ["length"],

  "margin-right": ["length"],

  "margin-top": ["length"],

  "min-width": ["length"],

  "outline-offset": ["length"], //---------

  "outline-width": ["length"], //--------

  "object-position": ["number", "length"], //-----------

  padding: ["length"],

  "padding-bottom": ["length"],

  perspective: ["length"], //--------

  "perspective-origin": ["length"],

  "padding-left": ["length"],

  "padding-right": ["length"],

  "padding-top": ["length"],

  right: ["length"],

  "stroke-width": ["length"],

  "stroke-dasharray": ["length"],

  "stroke-dashoffset": ["length"],

  top: ["length"],
  "tab-size":["length"],

  "transform-origin": ["length"], //--------

  "text-indent": ["length"],

  "vertical-align": ["length"],

  width: ["length"],

  "word-spacing": ["length"],

  "max-height": ["length"], //------

  "max-width": ["length"], //----------------

  //Number

  "animation-iteration-count": ["number"],

  "column-count": ["number"],

  flex: ["number"],

  "flex-grow": ["number"],

  "flex-shrink": ["number"],

  "grid-column-start": ["grid", "number"],

  "grid-column-end": ["grid", "number"],

  "grid-row-start": ["grid", "number"],

  "grid-row-end": ["grid", "number"],

  order: ["number"], //-------

  opacity: ["number"],

  "stroke-opacity": ["number"],

  "fill-opacity": ["number"],

  orphans: ["number"],

  "z-index": ["number"],

  //Font-family

  "font-family": ["font"],

  //font-feature-setting

  "font-feature-settings": ["fontFeatureSetting"],

  //Time

  "animation-delay": ["time"],

  "animation-duration": ["time"],

  "transition-delay": ["time"],

  "transition-duration": ["time"],

  //transform

  transform: ["transform"],

  //transition

  transition: ["transition"],

  //border

  border: ["border"],

  "border-right": [, "border"],

  "border-left": ["border"],

  "border-top": ["border"],

  "border-bottom": ["border"],

  outline: ["border"],
  "column-rule": ["border"],

  //Miscelineous

  //gradient and url

  "background-image": ["url", "gradient"],

  background: ["url", "gradient"],

  "border-image-source": ["url", "gradient"],

  //Shadow

  "text-shadow": ["shadow"],

  "text-shadow-radius": ["length"],

  // "bs":["box-shadow","shadow"],
  "box-shadow": ["shadow"],

  // "box-shadow-inset":["box-shadow-inset","shadow"],

  //Filter

  filter: ["filter"],

  //timing function

  "animation-timing-function": ["timingFunction"],

  "transition-timing-function": ["timingFunction"],

  //string

  content: ["content", "url"],

  "counter-reset": ["string"],

  "counter-increment": ["string"], //counter-increment-listIndex_-1

  //animation
  "animation-name": ["string"],

  //grid
  "grid-template-areas": ["grid"],

  "grid-area": ["grid", "number"],

  "aspect-ratio":["grid","number"],

  "clip-path":["clipPath"],
};

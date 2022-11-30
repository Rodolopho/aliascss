let deviceAlias = {
  match: /^(mob|mobile|tab|lab|hd|print|xs|sm|md|lg|xl)(?=[-|_])/,
  mob: "@media (max-width : 768px) {",
  mobile: "@media (max-width : 768px) {",
  tab: "@media  (min-width : 768px){",
  lab: "@media  (min-width : 992px) {",
  desk: "@media  (min-width : 1200px) {",
  hd: "@media  (min-width : 1408px) {",
  print: "@media print{",
  xs: "@media (max-width : 576px) {",
  sm: "@media  (min-width : 576px) {",
  md: "@media  (min-width : 768px) {",
  lg: "@media  (min-width : 992px) {",
  xl: "@media  (min-width : 1200px) {",
};

// 320px — 480px: Mobile devices
// 481px — 768px: iPads, Tablets
// 769px — 1024px: Small screens, laptops
// 1025px — 1200px: Desktops, large screens
// 1201px and more —  Extra large screens, TV

// /* Extra small devices (phones, up to 480px) */
// @media screen and (max-width: 767px) {
// }
// /* Small devices (tablets, 768px and up) */
// @media (min-width: 768px) and (max-width: 991px) {
// }
// /* tablets/desktops and up ———– */
// @media (min-width: 992px) and (max-width: 1199px) {
// }
// /* large desktops and up ———– */
// @media screen and (min-width: 1200px) {
// }
export const deviceMatch = deviceAlias.match;
export function deviceHandler(alias, content) {
  if (deviceAlias.hasOwnProperty(alias)) {
    return deviceAlias[alias] + "\n\t" + content + "\n } ";
  } else {
  }
}

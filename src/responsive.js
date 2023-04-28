let deviceAlias = {
  match: /^(hd|print|xs|sm|md|lg|xl|_hd|_sm|_md|_lg|_xl)(?=[-|_])/,
  print: "@media print",
  xs: "@media (max-width : 576px) ",
  sm: "@media  (min-width : 576px) ",
  md: "@media  (min-width : 768px) ",
  lg: "@media  (min-width : 992px) ",
  xl: "@media  (min-width : 1200px) ",
   hd: "@media  (min-width : 1408px) ",
  _sm: "@media  (max-width : 576px) ",
  _md: "@media  (max-width : 768px) ",
  _lg: "@media  (max-width : 992px) ",
  _xl: "@media  (max-width : 1200px) ",
  _hd: "@media  (max-width : 1408px) ",
};


export const deviceMatch = deviceAlias.match;
export function deviceHandler(alias, content) {
  if (deviceAlias.hasOwnProperty(alias)) {
    return `${deviceAlias[alias]} {\n \t ${content} \n } `;
  } else {
  }
}

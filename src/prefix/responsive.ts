const  media :{
    [key:string]:any,
    target:
    {[key:string]:string
    }
}
    =  {
    // test:/^(print|xs|sm|md|lg|xl|xxl|-xs|-sm|-md|-lg|-xl|-xxl|-2xl)(?=[-|_])/,
    test:new RegExp("^("+"print|xs|sm|md|lg|xl|xxl|-xs|-sm|-md|-lg|-xl|-xxl|-2xl"+")(?=[-|_])"),
    target:{
        print: '@media print',
        '@print': '@media print',

        '@hover-capable': '@media screen and (hover: hover)',

        '@landscape': '@media (orientation: landscape)',
        '@portrait': '@media (orientation: portrait)',

        '@container-xs': '@container (max-width: 576px)',
        '@container-sm': '@container (min-width: 576px)',
        '@container-md': '@container (min-width: 768px)',
        '@container-lg': '@container (min-width: 992px)',
        '@container-xl': '@container (min-width: 1200px)',
        '@container-xxl': '@container (min-width: 1408px)',

        '@forced-color-active': '@media (forced-colors: active)',
        '@fca': '@media (forced-colors: active)',

        '@standalone': '@media (display-mode: standalone)',
        '@browser': '@media (display-mode: browser)',

        '@short-height': '@media (max-height: 600px)',
        '@xsh': '@media (max-height: 600px)',

        '@p3': '@media (color-gamut: p3)',

        '@motion-reduce': '@media (prefers-reduced-motion: reduce)',

        '@mouse': '@media (hover: hover) and (pointer: fine)',
        '@touch': '@media (hover: none) and (pointer: coarse)',

        '@resolution-lg':
            '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',

        '@resolution-xl':
            '@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi)',

        '@contrast-more': '@media (prefers-contrast: more)',
        '@data-reduce': '@media (prefers-reduced-data: reduce)',

        xs: '@media (max-width: 575.99px)',
        '@xs': '@media (max-width: 575.99px)',

        sm: '@media (min-width: 576px)',
        '@sm': '@media (min-width: 576px)',

        md: '@media (min-width: 768px)',
        '@md': '@media (min-width: 768px)',

        lg: '@media (min-width: 992px)',
        '@lg': '@media (min-width: 992px)',

        xl: '@media (min-width: 1200px)',
        '@xl': '@media (min-width: 1200px)',

        xxl: '@media (min-width: 1408px)',
        '@xxl': '@media (min-width: 1408px)',

        dark: '@media (prefers-color-scheme: dark)',
        '@dark': '@media (prefers-color-scheme: dark)',

        light: '@media (prefers-color-scheme: light)',
        '@light': '@media (prefers-color-scheme: light)',

        '@theme': '@layer theme',
        '@base': '@layer base',

        '@reset': '@layer reset',
        '@rs': '@layer reset',

        '@components': '@layer components',
        '@comps': '@layer components',

        '@utils': '@layer utilities',
        '@utilities': '@layer utilities',

        '@starting-style': '@starting-style',
        '@ss': '@starting-style'
        },

}

export function createRegexForMedia(prefix:{[key:string]:string
    }){
    const prefixAlias= Object.keys(prefix).reduce((previous,current)=>previous+"|"+current);
    return new RegExp("^("+prefixAlias+")(?=[-|_])");
}

export default media;
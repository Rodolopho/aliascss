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
        xs: '@media (max-width : 576px)',
        '@xs': '@media (max-width : 576px)',
        sm: '@media (min-width : 576px)',
        '@sm': '@media (min-width : 576px)',
        md: '@media (min-width : 768px)',
        '@md': '@media (min-width : 768px)',
        lg: '@media (min-width : 992px)',
        '@lg': '@media (min-width : 992px)',
        xl: '@media (min-width : 1200px)',
        '@xl': '@media (min-width : 1200px)',
        xxl: '@media (min-width : 1408px)',
        '@xxl': '@media (min-width : 1408px)',
        '2xl': '@media (min-width : 1408px)',
        '-xs': '@media (min-width : 576px)',
        '-@xs': '@media (min-width : 576px)',
        '-@sm': '@media (max-width : 576px)',
        '-sm': '@media (max-width : 576px)',
        '-@md': '@media (max-width : 768px)',
        '-md': '@media (max-width : 768px)',
        '-@lg': '@media (max-width : 992px)',
        '-lg': '@media (max-width : 992px)',
        '-@xl': '@media (max-width : 1200px)',
        '-xl': '@media (max-width : 1200px)',
        '-@xxl': '@media (max-width : 1408px)',
        '-xxl': '@media (max-width : 1408px)',
        '-@2xl': '@media (max-width : 1408px)',
        '-2xl': '@media (max-width : 1408px)',
        'dark':'@media (prefers-color-scheme: dark)',
        '@dark':'@media (prefers-color-scheme: dark)',
        'light':'@media (prefers-color-scheme: light)',
        '@light':'@media (prefers-color-scheme: light)',
        '@theme':'@layer theme',
        '@base':'@layer base',
        '@components':'@layer components',
        '@comps':'@layer components',
        '@utils':'@layer utilities',
        '@utilities':'@layer utilities',
    },

}

export function createRegexForMedia(prefix:{[key:string]:string
    }){
    const prefixAlias= Object.keys(prefix).reduce((previous,current)=>previous+"|"+current);
    return new RegExp("^("+prefixAlias+")(?=[-|_])");
}

export default media;
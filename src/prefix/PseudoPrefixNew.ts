export function createRegexForPseudo(prefix:{[key:string]:string
    }){
    const prefixAlias= Object.keys(prefix).reduce((previous,current)=>previous+"|"+current);
    return new RegExp("^("+prefixAlias+")(?=[-(|_])");
}


 const prefix:{[key:string]:string}={

  '--active': ':active', // -a
  '--a': ':active',
  '--ac': ':active',

  '--after-hover': '::after:hover',
  '--afh': '::after:hover',

  
  '--after': '::after', // -af
  '--af': '::after', // -af
  '--autofill':':-webkit-autofill',
  '--atf':':-webkit-autofill',
  '--any-link':':any-link',
  '--al':':any-link',

  '--backdrop':'::backdrop',
  '--bd':'::backdrop',

  '--blank':':blank',
  '--bl':':blank',

  '--before-hover': '::before:hover', // -bfh
  '--bfh': '::before:hover', // -bfh

  '--before': '::before', // -bf
  '--bf': '::before', // -bf

  '--checked': ':checked', // -ck
  '--ch': ':checked', // -ck

  '--current': ':current', // -ck
  '--cur': ':current',

  '--cue':'::cue',
  '--cu':'::cue',

  '--default': ':default', // -df
  '--de': ':default', // -df

  '--disabled': ':disabled', // -ds
  '--di': ':disabled', // -ds

  '--empty': ':empty', // -em
  '--em': ':empty', // -em

  '--enabled': ':enabled', // -en
  '--en': ':enabled', // -en

  '--file-selector-button':'::file-selector-button',
  '--fsb':'::file-selector-button',

  '--first-child': ':first-child', // -fc
  '--fc': ':first-child',

  '--first-letter': '::first-letter', // -f
  '--fl': '::first-letter', // -fl

  '--first-line': '::first-line', // -fln
  '--fln': '::first-line', // -fln

  '--first-of-type': ':first-of-type', // -fot
  '--fot': ':first-of-type',

  '--focus': ':focus', // -fo
  '--fo': ':focus', // -fo
  '--f': ':focus', // -fo

   '--focus-within': ':focus-within', // -fo
  '--fw': ':focus-within', // -fo

   '--focus-visible': ':focus-visible', // -fo
  '--fv': ':focus-visible', // -fo

  '--fullscreen':':fullscreen',
  '--fs':':fullscreen',

   '--has': ':has', // --has
  '--hs': ':has', // -hs

  '--hover-after': ':hover::after', // -haf
  '--haf': ':hover::after', // -haf

  '--hover-before': ':hover::before', // -hbf
  '--hbf': ':hover::before', // -hbf

  '--hover-target': ':hover:target', // -htg
  '--htg': ':hover:target', // -htg

  '--hover': ':hover', // -h
  '--h': ':hover', // -h
  '--ho': ':hover', // -h

 


  '--in-range': ':in-range', // -ir
  '--ir': ':in-range', // -ir

  '--indeterminate': ':indeterminate', // idt
  '--ind': ':indeterminate', // idt

  '--invalid': ':invalid', // -in
  '--inv': ':invalid', // -in
  '--is':':is',
  // '--is':':is',

  '--lang': ':lang', // -ln
  '--lan': ':lan', // -ln

  '--last-child': ':last-child', // -lc
  '--lc': ':last-child', // -lc

  '--last-of-type': ':last-of-type', // -lot
  '--lot': ':last-of-type', // -lot

  '--link': ':link', // -l
  '--ln': ':link', // -l
  '--l': ':link', // -l

  '--marker':'::marker',
  '--m':'::marker',
  '--not': ':not', // -n-
  '--n': ':not', // -n-

  '--nth-child': ':nth-child', // 	-nc2n
  '--nc': ':nth-child', // 	-nc2n

  '--nth-last-child': ':nth-last-child', // -nlc2n
  '--nlc': ':nth-last-child', // -nlc2n

  '--nth-last-of-type': ':nth-last-of-type', // -nlot2n
  '--nlot': ':nth-last-of-type', // -nlot2n

  '--nth-of-type': ':nth-of-type', // -not
  '--nthot': ':nth-of-type', // -not

  '--only-of-type': ':only-of-type', // -oot
  '--oot': ':only-of-type', // -oot

  '--only-child': ':only-child', // -oc
  '--oc': ':only-child', // -oc

  '--optional': ':optional', // -o
  '--op': ':optional', // -o

  '--out-of-range': ':out-of-range', // -oor
  '--oor': ':out-of-range', // -oor

  '--placeholder': '::placeholder', // -ph
  '--ph': '::placeholder', // -ph

  '--placeholder-shown': ':placeholder-shown', // -phs
  '--phs': ':placeholder-shown', // -phs

  '--popover-open':':popover-open',
  '--po':':popover-open',

  '--read-only': ':read-only', // -ro

  '--ro': ':read-only', // -ro

  '--read-write': ':read-write', // -rw
  '--rw': ':read-write', // -rw

  '--required': ':required', // -rq
  '--rq': ':required', // -rq

  '--root': ':root', // -rt
  '--rt': ':root', // -rt

  '--selection': '::selection', // -sl
  '--s': '::selection', // -sl

  '--spelling-error':'::spelling-error',
  '--se':'::spelling-error',

  '--scrollbar': '::-webkit-scrollbar',
  '--webkit-scrollbar': '::-webkit-scrollbar',
  '--sb': '::-webkit-scrollbar',
  '--scrollbar-track': '::-webkit-scrollbar-track',
  '--webkit-scrollbar-track': '::-webkit-scrollbar-track',
  '--st': '::-webkit-scrollbar-track',
  '--scrollbar-thumb': '::-webkit-scrollbar-thumb',
  '--web-kit-scrollbar-thumb': '::-webkit-scrollbar-thumb',
  '--stm': '::-webkit-scrollbar-thumb',

  '--target': ':target', // -tg
  '--tg': ':target', // -tg

  '--user-invalid':':user-invalid',
  '--ui':':user-invalid',

  '--valid': ':valid', // -vl
  '--va': ':valid', // -vl

  '--visited': ':visited', // -vi
  '--vi': ':visited', // -vi
  '--v': ':visited', // -vi
  '--where':':where',
  '--w':':where'
    

}

export default prefix;


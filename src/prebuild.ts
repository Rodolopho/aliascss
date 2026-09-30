export default {
  // bgc-red pa l-0 t-0 r-0 [class~=x-absolute-hide]-tf-ty--100% [data-absolute-hide]-tf-ty--100%
  'x-absolute-0':{
            type:'statement',
            statement:`pa t-0 l-0 r-0 btm-0`
        },      
  'x-absolute-top':{
            type:'statement',
            statement:`tp-transform tdu-0.35s ttf(cubic-bezier(0.16,1,0.3,1))_  will-change-transform 
            pa l-0 t-0 r-0 [class~=x-absolute-hide]-tf-ty--100% [data-absolute-hide]-tf-ty--100%"
            `
        },
        
         'x-absolute-bottom':{
            type:'statement',
            statement:`tp-transform tdu-0.35s ttf(cubic-bezier(0.16,1,0.3,1))_  will-change-transform 
            pa l-0 btm-0 r-0 [class~=x-absolute-hide]-tf-ty-100% [data-absolute-hide]-tf-ty-100%
            `
        },
         'x-absolute-right':{
            type:'statement',
            statement:`tp-transform tdu-0.35s ttf(cubic-bezier(0.16,1,0.3,1))_  will-change-transform 
            pa btm-0 t-0 r-0 [class~=x-absolute-hide]-tf-tx-100% [data-absolute-hide]-tf-tx-100%
            `
        },
         'x-absolute-left':{
            type:'statement',
            statement:`tp-transform tdu-0.35s ttf(cubic-bezier(0.16,1,0.3,1))_  will-change-transform 
            pa l-0 t-0 btm-0  [class~=x-absolute-hide]-tf-tx--100% [data-absolute-hide]-tf-tx--100%
            `
        },
        'x-btn':{
            type:'statement',
            statement:`@base-all-unset 
        @base-[inline-flex-center,px-15px,h-35px,br-4px,fs-15px,lh-1,fw5,usn,theme(color,gray-1,grayDark-1),theme(background,gray-9,grayDark-9)] ` ,  

        },
         'x-button':{
            type:'statement',
            statement:`@base-all-unset
                @base-[class][inline-flex-center,p-12px-28px,fs-15px,fw5,usn,cp,br-6px,g-8px,wsn,theme(color,white,black),theme(background,gray-800,gray-200)]` ,  
        },
        'x-input':{
            type:'statement',
            statement:`@base-au @base-[class][bsbb,w-100p,df,jsfs,aic,fw4,--ring-width:1px,flex-1-0-auto,br-6px,p-0px-14px,h-40px,lh-24px,g-12px,b-1px-s-gray-400,theme(color,gray-600,red),theme(color,gray-600,grayDark-600),bgc-transparent,--hover-theme(color,gray-700,grayDark-700),--fo-ring-gray-200]`,
        },

        

        'x-css-reset-normalize':{
            type:'raw',
            statement:`@layer reset, base;
            @layer reset{html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}}`
        },
        'x-css-reset':{
            type:'raw',
            statement:`@layer reset, base;
            @layer reset{html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}}`
        },
        'x-css-reset-josh':{
            type:'raw',
            statement:`
            @layer reset, base;
            @layer reset{*,::before,::after{box-sizing:border-box}*{margin:0} @media(prefers-reduced-motion: no-preference){html{interpolate-size:allow-keywords}}body{line-height:1.5;-webkit-font-smoothing:antialiased}img,picture,video,canvas,svg{display:block;max-width:100%} input,button,textarea,select{font:inherit} p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word} p{text-wrap:pretty}h1,h2,h3,h4,h5,h6{text-wrap:balance}#root,#__next{isolation:isolate}}`
        },
        'x-css-reset-sanitize':{
            type:'raw',
            statement:`@layer reset, base;
            @layer reset{*,::before,::after{box-sizing:border-box;background-repeat:no-repeat}::before,::after{text-decoration:inherit;vertical-align:inherit}:where(:root){cursor:default;line-height:1.5;overflow-wrap:break-word;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%}:where(body){margin:0}:where(h1){font-size:2em;margin:.67em 0}:where(dl,ol,ul) :where(dl,ol,ul){margin:0}:where(hr){color:inherit;height:0}:where(nav) :where(ol,ul){list-style-type:none;padding:0}:where(nav li)::before{content:"\x80";float:left}:where(pre){font-family:monospace,monospace;font-size:1em;overflow:auto}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace,monospace;font-size:1em}:where(small){font-size:80%}:where(audio,canvas,iframe,img,svg,video){vertical-align:middle}:where(iframe){border-style:none}:where(svg:not([fill])){fill:currentColor}:where(table){border-collapse:collapse;border-color:inherit;text-indent:0}:where(button,input,select){margin:0}:where(button,[type="button" i],[type="reset" i],[type="submit" i]){-webkit-appearance:button}:where(fieldset){border:1px solid #a0a0a0}:where(progress){vertical-align:baseline}:where(textarea){margin:0;resize:vertical}:where([type="search" i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(dialog){background-color:#fff;border:solid;color:#000;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(details > summary:first-of-type){display:list-item}:where([aria-busy="true" i]){cursor:progress}:where([aria-controls]){cursor:pointer}:where([aria-disabled="true" i],[disabled]){cursor:not-allowed}:where([aria-hidden="false" i][hidden]){display:initial}:where([aria-hidden="false" i][hidden]:not(:focus)){clip:rect(0,0,0,0);position:absolute}}`
        },
        'x-css-reset-preflight':{
            type:'raw',
            statement:`@layer reset, base;
            @layer reset{*,::after,::before,::backdrop,::file-selector-button{box-sizing:border-box;margin:0;padding:0;border:0 solid}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:--theme(--default-font-family,ui-sans-serif,system-ui,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji');font-feature-settings:--theme(--default-font-feature-settings,normal);font-variation-settings:--theme(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:--theme(--default-mono-font-family, ui-monospace,SFMono-Regular,Menlo, Monaco,Consolas,'Liberation Mono','Courier New',monospace);font-feature-settings:--theme(--default-mono-font-feature-settings,normal);font-variation-settings:--theme(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea,::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;border-radius:0;background-color:transparent;opacity:1}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not (-webkit-appearance: -apple-pay-button)) or (contain-intrinsic-size: 1px){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type='button'],[type='reset'],[type='submit']),::file-selector-button{appearance:button}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden='until-found'])){display:none!important}}`
        },
//        

    'x-import-tokens':{
        type:'raw',
        statement:`   
        :root{

            /* Fluid Display Scale */
            --display-xs:  clamp(1.125rem, calc(1rem + 0.625vw), 1.5rem);      /* Scales from 18px to 24px */
            --display-sm:  clamp(1.25rem,  calc(1.0417rem + 1.0417vw), 1.875rem); /* Scales from 20px to 30px */
            --display-md:  clamp(1.5rem,   calc(1.25rem + 1.25vw), 2.25rem);    /* Scales from 24px to 36px */
            --display-lg:  clamp(1.875rem, calc(1.5rem + 1.875vw), 3rem);       /* Scales from 30px to 48px */
            --display-xl:  clamp(2.25rem,  calc(1.75rem + 2.5vw), 3.75rem);     /* Scales from 36px to 60px */
            --display-2xl: clamp(2.5rem,   calc(1.8333rem + 3.3333vw), 4.5rem); /* Scales from 40px to 72px */
               
            /* Typography scale — fluid */
    
            --text-xs:   clamp(0.75rem,  calc(0.7rem + 0.25vw),  0.875rem);
            --text-sm:   clamp(0.875rem, calc(0.8rem + 0.35vw),  1rem);
            --text-base: clamp(1rem,     calc(0.95rem + 0.25vw), 1.125rem);
            --text-lg:   clamp(1.125rem, calc(1rem + 0.75vw),    1.5rem);
            --text-xl:   clamp(1.5rem,   calc(1.2rem + 1.25vw),  2.25rem);
            --text-2xl:  clamp(2rem,     calc(1.2rem + 2.5vw),   3.5rem);
            --text-3xl:  clamp(2.5rem,   calc(1rem + 4vw),       5rem);
            --text-hero: clamp(3rem,     calc(0.5rem + 7vw),     8rem);
            
            /* Base spacing unit */

            --space: var(--space-base,0.25rem); 

            /* Spacing scale */
            --space-1:  calc(var(--space) * 1);
            --space-2:  calc(var(--space) * 2);
            --space-3:  calc(var(--space) * 3);
            --space-4:  calc(var(--space) * 4);
            --space-5:  calc(var(--space) * 5);
            --space-6:  calc(var(--space) * 6);
            --space-8:  calc(var(--space) * 8);
            --space-10: calc(var(--space) * 10);
            --space-12: calc(var(--space) * 12);
            --space-16: calc(var(--space) * 16);
            --space-20: calc(var(--space) * 20);
            --space-24: calc(var(--space) * 24);
            --space-32: calc(var(--space) * 32);

             /* Border radius */
            --radius-sm:   0.375rem;
            --radius-md:   0.5rem;
            --radius-base:   0.5rem;
            --radius-lg:   0.75rem;
            --radius-xl:   1rem;
            --radius-2xl:  1.5rem;
            --radius-full: 9999px;

            /* Colors — Light */
            --color-bg:               #f5f6fa;
            --color-surface:          #ffffff;
            --color-surface-2:        #f8f9fc;
            --color-surface-offset:   #eef0f6;
            --color-surface-offset-2: #e4e7f0;
            --color-surface-dynamic:  #d9dde8;
            --color-divider:          #d0d4e0;
            --color-border:           #c4c9d8;

            --color-text:         #111827;
            --color-text-muted:   #4b5563;
            --color-text-faint:   #9ca3af;
            --color-text-inverse: #f9fafb;

            --color-primary:           #0a4f6b;
            /* --color-primary:           red; */
            --color-primary-hover:     #063a52;
            --color-primary-active:    #04283a;
            --color-primary-highlight: #cce3ed;
            --color-primary-light:     #e8f4f8;

            --color-accent:       #d97706;
            --color-accent-hover: #b45309;
            --color-accent-light: #fef3c7;

            --color-success:           #166534;
            --color-success-bg:        #dcfce7;
            --color-success-highlight: #dcfce7;

            --color-error:    #991b1b;
            --color-error-bg: #fee2e2;

            --color-gold:    #d19900;
            --color-gold-bg: #fef9e7;

           

            /* Base shadow color (Lightness Chroma Hue) */

            --shadow-color: 0.2 0.03 245;

            /* Shadows */

            --shadow-sm: 0 1px 3px   oklch(var(--shadow-color) / 0.08);
            --shadow-md: 0 4px 14px  oklch(var(--shadow-color) / 0.10);
            --shadow-lg: 0 12px 40px oklch(var(--shadow-color) / 0.14);
            --shadow-xl: 0 24px 60px oklch(var(--shadow-color) / 0.18);

                    /* subtle: Subtle contact + slight lift (Great for buttons and cards) */
            --shadow-subtle: 
                0 1px 2px oklch(var(--shadow-color) / 0.06), 
                0 1px 4px oklch(var(--shadow-color) / 0.08);

            /* light: Defined contact + medium spread (Great for dropdowns) */
            --shadow-light: 
                0 2px 4px oklch(var(--shadow-color) / 0.04), 
                0 6px 16px oklch(var(--shadow-color) / 0.10);

            /* soft: Soft contact + ambient mid + wide directional (Great for modals) */
            --shadow-soft: 
                0 4px 8px oklch(var(--shadow-color) / 0.03), 
                0 12px 24px oklch(var(--shadow-color) / 0.06),
                0 20px 48px oklch(var(--shadow-color) / 0.12);

            /* hard: Deep contact + soft ambient + massive spread (Great for floating palettes) */
            --shadow-hard: 
                0 6px 12px oklch(var(--shadow-color) / 0.03), 
                0 16px 32px oklch(var(--shadow-color) / 0.06),
                0 32px 80px oklch(var(--shadow-color) / 0.14);

            /* Layout */
            --content-narrow:  640px;
            --content-default: 960px;
            --content-wide:    1200px;
    }
        `
    },
    

    'x-divider-text':{
        type:'statement',
        statement:`[df,aic,g12px]
             --before[df,cont,bgc--x-divider-color:gray,flex-1,h--x-divider-width:1px] 
             --after[df,cont,bgc--x-divider-color:gray,flex-1,h--x-divider-width:1px]
             `,
    },
    'x-divider':{
        type:'statement',
        statement:`border-top-width--x-divider-width:1px 
             border-top-color--x-divider-color:gray 
             border-top-style--x-divider-style:solid bsbb db` ,  

    },
    
            'x-arrow':{
                type:'statement',
                statement:
            `[bss,bc--x-arrow-color:black,brw--x-arrow-width:3px,bbw--x-arrow-width:3px,dib,p-3px,btw-0px,blw-0px] [class~=x-arrow-left]-tf-r-135deg [class~=x-arrow-up]-tf-r--135deg [class~=x-arrow-right]-tf-r--45deg [class~=x-arrow-down]-tf-r-45deg`,
            },

            // CSS entities
            
            // 'x-currency-dollar' :{type:'statement',statement:'--bf-cont_0024'
            // },
            // 'x-currency-cent' :{type:'statement',statement:'--bf-cont_00A2'
            // },
            // 'x-currency-pound' :{type:'statement',statement:'--bf-cont_00A3'
            // },
            // 'x-currency' :{type:'statement',statement:'--bf-cont_00A4'
            // },
            // 'x-currency-yen' :{type:'statement',statement:'--bf-cont_00A5'
            // },
            // 'x-currency-euro-currency' :{type:'statement',statement:'--bf-cont_20A0', /* Historical ECU */
            // },
            // 'x-currency-euro' :{type:'statement',statement:'--bf-cont_20AC',
            // },

            // 'x-currency-rupee' :{type:'statement',statement:'--bf-cont_20B9',},
            // 'x-symbol-copy-right' :{type:'statement',statement:'--bf-cont_00A9',},
            // 'x-symbol-registered' :{type:'statement',statement:'--bf-cont_00AE',},
            // 'x-symbol-divide' :{type:'statement',statement:'--bf-cont_00Ff7',},
            // 'x-symbol-arrow-left' :{type:'statement',statement:'--bf-cont_2190',},
            // 'x-symbol-arrow-up' :{type:'statement',statement:'--bf-cont_2191',},
            // 'x-symbol-arrow-right' :{type:'statement',statement:'--bf-cont_2192',},
            // 'x-symbol-arrow-down' :{type:'statement',statement:'--bf-cont_2193',},
            // 'x-symbol-arrow-left-right' :{type:'statement',statement:'--bf-cont_2194',},
            // 'x-symbol-arrow-down-left' :{type:'statement',statement:'--bf-cont_2195',},
            // 'x-symbol-square-root' :{type:'statement',statement:'--bf-cont_221A',},
            // 'x-symbol-trade-mark' :{type:'statement',statement:'--bf-cont_2122',},


            // --
            'x-menu':{
                type:'statement',
                statement:
                    `pr x-menu-rounded cp   
                     w-35px h-30px bg-lg-transparent_0px_12d5px-currentColor_12d5px_17d5px-transparent_17d5px_35px
                    tn-all-0d5s [class~=x-menu-open]-bg-none 
                    [x-menu-open]-bg-none 
                    --af[pa,t0,h-5px,w-35px,bgc-currentColor,cont]
                    [class~=x-menu-rounded]--af-br-5px 
                    --bf[btm-0,pa,h-5px,w-35px,bgc-currentColor,cont,]
                    [class~=x-menu-rounded]--bf-br-5px tn-all-0d5s
                    --af-tn-all-0d5s --bf-tn-all-0d5s
                    [class~=x-menu-open][--af-tf-r-45deg,--af-t-50p,--bf-tf-r--45deg,--bf-t50p,--af-tn-all-0d5s,--bf-tn-all-0d5s]
                    [x-menu-open][--af-tf-r-45deg,--af-t-50p,--bf-tf-r--45deg,--bf-t50p,--af-tn-all-0d5s,--bf-tn-all-0d5s]`
                },

                'x-import-utils-classes':{
                    type:'statement',
                    statement:`
                    [c-gray-900,dark-c-grayDark-50]--as-text-primary
                    [c-white,dark-c-grayDark-50]--as-text-primary-on-brand
                    [c-gray-700,--hover-c-gray-800,dark-c-grayDark-300,dark--hover-c-grayDark-200]--as-text-secondary
                    [c-brand-200,dark-c-grayDark-300]--as-text-secondary-on-brand
                    [c-gray-600,--h-c-gray-700,dark-c-grayDark-400,dark--h-c-grayDark-300]--as-text-tertiary
                    [c-brand-200,dark-c-grayDark-300]--as-text-tertiary-on-brand
                    [c-gray-500,dark-c-grayDark-400]--as-text-quaternary
                    [c-brand-300,dark-c-grayDark-400]--as-text-quaternary-on-brand
                    [c-white]--as-text-white
                    c-gray-500--as-text-disabled
                    [c-gray-500,dark-c-grayDark-400]--as-text-placeholder
                    [c-gray-300,dark-c-grayDark-700]--as-text-placeholder-subtle
                    [c-brand-900,dark-c-grayDark-50]--as-text-brand-primary
                    [c-brand-700,dark-c-grayDark-300]--as-text-brand-secondary
                    [c-brand-600,dark-c-grayDark-400]--as-text-brand-tertiary
                    [c-brand-600,dark-c-grayDark-50]--as-text-brand-tertiary-alt
                    [c-error-600,dark-c-error-400]--as-text-error-primary
                    [c-warning-600,dark-c-warning-400]--as-text-warning-primary
                    [c-success-600,dark-c-success-400]--as-text-success-primary
                    [border-color-gray-300,dark-border-color-grayDark-700]--as-border-primary
                    [border-color-gray-200,dark-border-color-grayDark-800]--as-border-secondary
                    [border-color-gray-100,dark-border-color-grayDark-800]--as-border-tertiary
                    [border-color-gray-300,dark-border-color-grayDark-700]--as-border-disabled
                    [border-color-gray-200,dark-border-color-grayDark-800]--as-border-disabled-subtle
                    [border-color-brand-500,dark-border-color-brand-400]--as-border-brand
                    [border-color-brand-600,dark-border-color-grayDark-700]--as-border-brand-alt
                    [border-color-error-500,dark-border-color-error-400]--as-border-error
                    [border-color-error-300,dark-border-color-error-400]--as-border-error-subtle
                    [background-color-gray-900,dark-background-color-white]--as-fg-primary
                    [background-color-gray-700,--h-bgc-gray-800,dark-background-color-grayDark-300,dark--h-bgc-grayDark-200]--as-fg-secondary
                    [background-color-gray-600,--h-bgc-gray-700,dark-background-color-grayDark-400,dark--h-bgc-grayDark-300]--as-fg-tertiary
                    [background-color-gray-500,--h-bgc-gray-400,dark-background-color-grayDark-600,dark--h-bgc-grayDark-300]--as-fg-quaternary
                    [background-color-gray-400,--h-bgc-gray-500,dark-background-color-grayDark-500,dark--h-bgc-grayDark-400]--as-fg-quinary
                    [background-color-gray-300,dark-background-color-grayDark-600]--as-fg-senary
                    [background-color-gray-400,dark-background-color-grayDark-500]--as-fg-disabled
                    [background-color-gray-300,dark-background-color-grayDark-600]--as-fg-disabled-subtle
                    [background-color-brand-600,dark-background-color-brand-500]--as-fg-brand-primary
                    [background-color-brand-600,dark-background-grayDark-300]--as-fg-brand-primary-alt
                    [background-color-brand-500,dark-background-color-brand-500]--as-fg-brand-secondary
                    [background-color-error-600,dark-background-color-error-500]--as-fg-error-primary
                    [background-color-error-500,dark-background-color-error-400]--as-fg-error-secondary
                    [background-color-warning-600,dark-background-color-warning-500]--as-fg-warning-primary
                    [background-color-warning-500,dark-background-color-warning-400]--as-fg-warning-secondary
                    [background-color-success-600,dark-background-color-success-500]--as-fg-success-primary
                    [background-color-success-500,dark-background-color-success-400]--as-fg-success-secondary

                    [background-color-white,--h-bgc-gray-50,dark-background-color-grayDark-950,dark--h-bgc-grayDark-800]--as-bg-primary
                    [background-color-white,dark-background-color-grayDark-900]--as-bg-primary-alt
                    [background-color-gray-950,dark-background-color-grayDark-900]--as-bg-primary-solid
                    [background-color-gray-50,--h-bgc-gray-100,dark-background-color-grayDark-900,dark--h-bgc-grayDark-800]--as-bg-secondary
                    [background-color-gray-50,dark-background-color-grayDark-950]--as-bg-secondary-alt
                    [background-color-gray-25,dark-background-color-grayDark-900]--as-bg-secondary-subtle
                    [background-color-gray-600,dark-background-color-grayDark-600]--as-bg-secondary-solid
                    [background-color-gray-100,dark-background-color-grayDark-800]--as-bg-tertiary
                    [background-color-gray-200,dark-background-color-grayDark-700]--as-bg-quaternary
                    [background-color-gray-50,dark-background-color-grayDark-800]--as-bg-active
                    [background-color-gray-100,dark-background-color-grayDark-800]--as-bg-disabled
                    [background-color-gray-950,dark-background-color-grayDark-800]--as-bg-overlay
                    [background-color-brand-50,dark-background-color-brand-500]--as-bg-brand-primary
                    [background-color-brand-50,dark-background-color-grayDark-800]--as-bg-brand-primary-alt
                    [background-color-brand-100,dark-background-color-brand-600]--as-bg-brand-secondary
                    [background-color-brand-600,--h-bgc-brand-700,dark-background-color-brand-600,dark--h-bgc-brand-500]--as-bg-brand-solid
                    [background-color-brand-800,dark-background-color-grayDark-800]--as-bg-section
                    [background-color-brand-700,dark-background-color-grayDark-950]--as-bg-section-subtle
                    [background-color-error-50,dark-background-color-error-500]--as-bg-error-primary
                    [background-color-warning-50,dark-background-color-warning-500]--as-bg-warning-primary
                    [background-color-warning-100,dark-background-color-warning-600]--as-bg-warning-secondary
                    [background-color-warning-600,dark-background-color-warning-600]--as-bg-warning-solid
                    [background-color-success-100,dark-background-color-success-600]--as-bg-success-primary
                    [background-color-success-600,dark-background-color-success-600]--as-bg-success-solid
                    `,
                    },

                    'x-import-utils-ra':{
                        type:'raw',
                        statement:`/* colors */
:root {
  /* Change this variable to set the theme color for all components. */
  /* You can use the below presets, or choose a custom color. */
  --tint: var(--indigo);

  /* theme colors */
  /* lightness channel is only used as a multiplier for chroma (see below) */
  --gray: oklch(0.5 0 0);
  --red: oklch(0.6 0.181447 27.0726);
  --orange: oklch(0.7 0.150492 54);
  --yellow: oklch(0.8 0.128516 73.8032);
  --turquoise: oklch(0.5 0.081146 205.114);
  --cyan: oklch(0.4 0.142107 243.926);
  --green: oklch(0.5 0.121276 155.372);
  --blue: oklch(0.5 0.22049 266.315);
  --indigo: oklch(1 0.25049 284.23);
  --purple: oklch(0.7 0.223324 302);
  --pink: oklch(0.6 0.177717 347.813);

  /** tint color scale */
  --tint-100: oklch(from var(--tint) var(--lightness-100) var(--chroma-100) h);
  --tint-200: oklch(from var(--tint) var(--lightness-200) var(--chroma-200) h);
  --tint-300: oklch(from var(--tint) var(--lightness-300) var(--chroma-300) h);
  --tint-400: oklch(from var(--tint) var(--lightness-400) var(--chroma-400) h);
  --tint-500: oklch(from var(--tint) var(--lightness-500) var(--chroma-500) h);
  --tint-600: oklch(from var(--tint) var(--lightness-600) var(--chroma-600) h);
  --tint-700: oklch(from var(--tint) var(--lightness-700) var(--chroma-700) h);
  --tint-800: oklch(from var(--tint) var(--lightness-800) var(--chroma-800) h);
  --tint-900: oklch(from var(--tint) var(--lightness-900) var(--chroma-900) h);
  --tint-1000: oklch(from var(--tint) var(--lightness-1000) var(--chroma-1000) h);
  --tint-1100: oklch(from var(--tint) var(--lightness-1100) var(--chroma-1100) h);
  --tint-1200: oklch(from var(--tint) var(--lightness-1200) var(--chroma-1200) h);
  --tint-1300: oklch(from var(--tint) var(--lightness-1300) var(--chroma-1300) h);
  --tint-1400: oklch(from var(--tint) var(--lightness-1400) var(--chroma-1400) h);
  --tint-1500: oklch(from var(--tint) var(--lightness-1500) var(--chroma-1500) h);
  --tint-1600: oklch(from var(--tint) var(--lightness-1600) var(--chroma-1600) h);

  /* gray scale */
  --gray-100: oklch(from var(--gray) var(--lightness-100) c h);
  --gray-200: oklch(from var(--gray) var(--lightness-200) c h);
  --gray-300: oklch(from var(--gray) var(--lightness-300) c h);
  --gray-400: oklch(from var(--gray) var(--lightness-400) c h);
  --gray-500: oklch(from var(--gray) var(--lightness-500) c h);
  --gray-600: oklch(from var(--gray) var(--lightness-600) c h);
  --gray-700: oklch(from var(--gray) var(--lightness-700) c h);
  --gray-800: oklch(from var(--gray) var(--lightness-800) c h);
  --gray-900: oklch(from var(--gray) var(--lightness-900) c h);
  --gray-1000: oklch(from var(--gray) var(--lightness-1000) c h);
  --gray-1100: oklch(from var(--gray) var(--lightness-1100) c h);
  --gray-1200: oklch(from var(--gray) var(--lightness-1200) c h);
  --gray-1300: oklch(from var(--gray) var(--lightness-1300) c h);
  --gray-1400: oklch(from var(--gray) var(--lightness-1400) c h);
  --gray-1500: oklch(from var(--gray) var(--lightness-1500) c h);
  --gray-1600: oklch(from var(--gray) var(--lightness-1600) c h);
}

/* light mode colors */
:root {
  --background-color: #f8f8f8;
  --gray-50: #ffffff;

  --lightness-100: 98.1187%;
  --lightness-200: 95.2045%;
  --lightness-300: 91.1434%;
  --lightness-400: 85.1751%;
  --lightness-500: 79.1773%;
  --lightness-600: 72.3297%;
  --lightness-700: 67.0121%;
  --lightness-800: 62.3039%;
  --lightness-900: 57.9699%;
  --lightness-1000: 51.9076%;
  --lightness-1100: 46.9058%;
  --lightness-1200: 41.0821%;
  --lightness-1300: 35.3616%;
  --lightness-1400: 29.6725%;
  --lightness-1500: 24.5366%;
  --lightness-1600: 16.6959%;

  /* lower chroma at low lightness levels */
  --chroma-100: calc(l * c * 0.5);
  --chroma-200: calc(l * c * 0.6);
  --chroma-300: calc(l * c * 0.7);
  --chroma-400: calc(l * c * 0.8);
  --chroma-500: calc(l * c * 0.9);
  --chroma-600: c;
  --chroma-700: c;
  --chroma-800: c;
  --chroma-900: c;
  --chroma-1000: c;
  --chroma-1100: c;
  --chroma-1200: c;
  --chroma-1300: c;
  --chroma-1400: c;
  --chroma-1500: c;
  --chroma-1600: c;

  --highlight-hover: rgb(0 0 0 / 0.07);
  --highlight-pressed: rgb(0 0 0 / 0.15);
  --overlay-background: var(--gray-50);
  --overlay-border: rgb(0 0 0 / 0.06);
  --popover-shadow: 0 8px 20px rgba(0 0 0 / 0.12);
}

/* dark mode colors */
@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #1b1b1b;
    --gray-50: oklch(22% 0 0);

    --lightness-100: 29.6725%;
    --lightness-200: 35.3616%;
    --lightness-300: 41.0821%;
    --lightness-400: 46.9058%;
    --lightness-500: 51.9076%;
    --lightness-600: 57.9699%;
    --lightness-700: 56.1347%;
    --lightness-800: 59.2866%;
    --lightness-900: 62.3039%;
    --lightness-1000: 67.0121%;
    --lightness-1100: 72.3297%;
    --lightness-1200: 79.1773%;
    --lightness-1300: 85.1751%;
    --lightness-1400: 91.1434%;
    --lightness-1500: 95.2045%;
    --lightness-1600: 100%;

    --highlight-hover: rgb(255 255 255 / 0.1);
    --highlight-pressed: rgb(255 255 255 / 0.2);
    --overlay-background: var(--gray-100);
    --overlay-border: rgb(255 255 255 / 0.2);
    --popover-shadow: 0 8px 20px rgba(0 0 0 / 0.5);
  }
}

/* Semantic colors */
:root {
  --focus-ring-color: var(--tint-1000);
  --text-color: var(--gray-1200);
  --text-color-hover: var(--gray-1300);
  --text-color-disabled: var(--gray-600);
  --text-color-placeholder: var(--gray-1000);
  --link-color: var(--tint-1200);
  --link-color-secondary: var(--gray-1200);
  --link-color-pressed: var(--tint-1300);
  --border-color: var(--gray-400);
  --border-color-hover: var(--gray-500);
  --border-color-disabled: var(--gray-300);
  --field-text-color: var(--gray-1400);
  --button-background: var(--tint-100);
  --button-background-pressed: var(--tint-200);
  /* these colors are the same between light and dark themes
   * to ensure contrast with the foreground color */
  --highlight-background: oklch(from var(--tint) 55% c h);
  --highlight-background-pressed: oklch(from var(--tint) 50% c h);
  --highlight-background-invalid: oklch(from var(--red) var(--lightness-900) c h);
  --highlight-foreground: white;
  --highlight-overlay: oklch(from var(--tint-1000) l c h / 15%);
  --invalid-color: oklch(from var(--red) var(--lightness-1000) c h);
  --field-background: var(--gray-50);
}

/* Windows high contrast mode overrides */
@media (forced-colors: active) {
  :root {
    --background-color: Canvas;
    --focus-ring-color: Highlight;
    --text-color: ButtonText;
    --text-color-hover: ButtonText;
    --text-color-disabled: GrayText;
    --text-color-placeholder: ButtonText;
    --link-color: LinkText;
    --link-color-secondary: LinkText;
    --link-color-pressed: LinkText;
    --border-color: ButtonBorder;
    --border-color-hover: ButtonBorder;
    --border-color-pressed: ButtonBorder;
    --border-color-disabled: GrayText;
    --field-background: Field;
    --field-text-color: FieldText;
    --overlay-background: Canvas;
    --overlay-border: ButtonBorder;
    --button-background: ButtonFace;
    --button-background-pressed: ButtonFace;
    --highlight-background: Highlight;
    --highlight-background-pressed: Highlight;
    --highlight-background-invalid: LinkText;
    --highlight-foreground: HighlightText;
    --invalid-color: LinkText;
  }
}

/* typography and spacing scale */
:root {
  --font-size: 0.875rem; /* 14px */
  --font-size-sm: 0.75rem; /* 12px */
  --font-size-lg: 1rem; /* 16px */
  --radius: 8px;
  --radius-sm: 6px;
  --radius-lg: 10px;
  --radius-xl: 16px;
  --spacing: 0.25rem; /* 4px */
  --spacing-1: var(--spacing);
  --spacing-2: calc(2 * var(--spacing));
  --spacing-3: calc(3 * var(--spacing));
  --spacing-4: calc(4 * var(--spacing));
  --spacing-5: calc(5 * var(--spacing));
  --spacing-6: calc(6 * var(--spacing));
  --spacing-7: calc(7 * var(--spacing));
  --spacing-8: calc(8 * var(--spacing));
  --spacing-9: calc(9 * var(--spacing));
  --spacing-10: calc(10 * var(--spacing));
}

/* Scale up hit targets on high resolution mobile devices. */
@media (min-resolution: 200dpi) {
  :root {
    --spacing: calc(0.25rem * 1.25);
    --font-size: 1.0625rem; /* 17px */
    --font-size-sm: 0.9375rem; /* 15px */
    --font-size-lg: 1.25rem; /* 20px */
  }
}

@layer utilities {
  /* utility that creates a button-like element, which can be optionally selected */
  .button-base {
    --button-color: var(--tint);
    --button-background: oklch(from var(--button-color) var(--lightness-100) var(--chroma-100) h);
    --button-gradient: oklch(from var(--button-color) var(--lightness-200) var(--chroma-200) h);
    --button-border: oklch(from var(--button-color) var(--lightness-300) var(--chroma-300) h);
    --button-highlight: rgb(255 255 255 / 0.8);
    --button-shadow: oklch(from var(--button-color) var(--lightness-400) var(--chroma-400) h);
    --button-border-size: 1px;
    --button-text: oklch(from var(--button-color) var(--lightness-1400) var(--chroma-1400) h);
    --button-gradient-size: 8px;

    background: var(--button-background);
    color: var(--button-text);
    box-shadow:
      inset 0 -1px 0 var(--button-shadow),
      /* bottom shadow */ inset 0 0 0 var(--button-border-size) var(--button-border),
      /* border */ inset 0px calc(var(--button-border-size) + 1px) 0px var(--button-highlight),
      /* top specular highlight */ inset 0px calc(-1 * var(--button-gradient-size))
        var(--button-gradient-size) -2px var(--button-gradient); /* inner gradient */
    outline: none;
    transition-property: background, color, scale, box-shadow;
    transition-duration: 200ms;
    will-change: scale;
    forced-color-adjust: none;
    -webkit-tap-highlight-color: transparent;

    @media (prefers-color-scheme: dark) {
      --button-shadow: oklch(from var(--button-color) var(--lightness-200) var(--chroma-200) h);
      --button-highlight: rgb(255 255 255 / 0.15);
      box-shadow:
        inset 0 var(--button-border-size) 0 var(--button-highlight),
        /* top specular highlight */ inset 0 calc(-1 * var(--button-border-size)) 0
          var(--button-shadow),
        /* bottom shadow */ inset 0 0 0 var(--button-border-size) var(--button-border),
        /* border */ inset 0 var(--button-gradient-size) var(--button-gradient-size) -2px
          var(--button-gradient); /* inner gradient */
    }

    &:where([data-pressed]) {
      --button-background: oklch(from var(--button-color) var(--lightness-200) var(--chroma-200) h);
    }

    &:where([data-focus-visible]) {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: 2px;
    }

    &:where([data-variant='secondary']) {
      --button-color: var(--gray);
    }

    &:where([data-variant='quiet']) {
      --button-background: none;
      --button-text: var(--text-color);
      box-shadow: 0 0 0 1px transparent;

      &:where([data-hovered], [data-pressed]) {
        --button-background: var(--tint-200);
        --button-text: var(--tint-1400);
        box-shadow: 0 0 0 1px var(--tint-200);
      }
    }

    &:where([data-selected]) {
      --button-background: oklch(from var(--button-color) 55% c h);
      --button-border: oklch(from var(--button-color) 50% c h);
      --button-gradient: var(--button-border);
      --button-highlight: rgb(255 255 255 / 0.2);
      --button-shadow: oklch(from var(--button-color) 30% c h);
      --button-text: var(--highlight-foreground);

      box-shadow:
        inset 0 -1px 0 var(--button-shadow),
        /* bottom shadow */ inset 0 0 0 1px var(--button-border),
        /* border */ inset 0 2px 0 var(--button-highlight),
        /* top specular highlight */ inset 0 calc(-1 * var(--button-gradient-size))
          var(--button-gradient-size) var(--button-gradient); /* inner gradient */

      @media (prefers-color-scheme: dark) {
        --button-highlight: rgb(255 255 255 / 0.4);
        --button-gradient: rgb(255 255 255 / 0.2);
        --button-shadow: var(--button-border);
        box-shadow:
          inset 0 1px 0 var(--button-highlight),
          /* top specular highlight */ inset 0 var(--button-gradient-size)
            var(--button-gradient-size) var(--button-gradient),
          /* inner gradient */ inset 0 0 0 1px var(--button-border); /* border */
      }

      &:where([data-pressed]) {
        --button-background: oklch(from var(--button-color) 50% c h);
      }
    }

    &:where([data-disabled]) {
      box-shadow: none;
      --button-background: var(--border-color-disabled);
      --button-text: var(--text-color-disabled);

      &:where([data-variant='quiet']) {
        --button-background: none;
      }
    }

    @media (forced-colors: active) {
      --button-background: ButtonFace;
      --button-text: ButtonText;
      --button-border: ButtonBorder;
      box-shadow: inset 0 0 0 var(--button-border-size) var(--button-border);

      &:where([data-variant='quiet']) {
        --button-border: transparent;
        &:where([data-hovered], [data-pressed]) {
          --button-border: ButtonBorder;
        }
      }

      &:where([data-selected]) {
        --button-background: Highlight;
        --button-text: HighlightText;
        --button-border: Highlight;
      }

      &:where([data-disabled]) {
        --button-background: ButtonFace;
        --button-text: GrayText;
        --button-border: GrayText;

        &:where([data-variant='quiet']) {
          --button-border: transparent;
        }
      }
    }
  }

  /* utility that creates a small indicator, such as a checkbox, radio, switch, or slider thumb */
  .indicator {
    --indicator-color: var(--gray);
    --indicator-background: oklch(
      from var(--indicator-color) var(--lightness-100) var(--chroma-100) h
    );
    --indicator-border: oklch(from var(--indicator-color) var(--lightness-800) var(--chroma-800) h);
    --indicator-drop-shadow: 0 0;

    background: var(--indicator-background);
    box-shadow:
      inset 0 0 0 1px var(--indicator-border),
      /* border */ inset 0 2px 0 white,
      /* top specular highlight */ inset 0 -4px 2px
        oklch(from var(--indicator-color) 30% c h / 0.08),
      /* inner gradient */ var(--indicator-drop-shadow); /* optional drop shadow */
    will-change: scale;

    @media (prefers-color-scheme: dark) {
      box-shadow:
        inset 0 1px 0 rgb(255 255 255 / 0.4),
        /* top specular highlight */ inset 0 4px 2px rgb(255 255 255 / 0.1),
        /* inner shadow */ inset 0 0 0 1px var(--indicator-border),
        /* border */ var(--indicator-drop-shadow); /* optional drop shadow */
    }

    @media (forced-colors: active) {
      --indicator-background: ButtonFace;
      --indicator-border: ButtonBorder;
      box-shadow: inset 0 0 0 1px var(--indicator-border);
    }

    &[data-pressed],
    [data-pressed] & {
      scale: 0.9;
    }

    [data-selected] > &,
    [data-indeterminate] > & {
      --indicator-color: var(--highlight-background);
      --indicator-background: var(--indicator-color);
      --indicator-highlight: rgb(255 255 255 / 0.3);
      --indicator-shadow: oklch(from var(--indicator-color) 45% c h);
      --indicator-border: var(--indicator-background);
      box-shadow:
        inset 0 -1px 0 var(--indicator-shadow),
        /* bottom shadow */ inset 0 0 0 1px var(--indicator-border),
        /* border */ inset 0 2px 0 var(--indicator-highlight),
        /* top specular highlight */ var(--indicator-drop-shadow); /* optional drop shadow */

      @media (prefers-color-scheme: dark) {
        --indicator-highlight: rgb(255 255 255 / 0.5);
        --indicator-gradient: rgb(255 255 255 / 0.12);
        box-shadow:
          inset 0 1px 0 var(--indicator-highlight),
          /* top specular highlight */ inset 0 4px 2px var(--indicator-gradient),
          /* inner gradient */ inset 0 0 0 1px var(--indicator-border),
          /* border */ var(--indicator-drop-shadow); /* optional drop shadow */
      }

      @media (forced-colors: active) {
        box-shadow: none;
      }
    }

    &[data-invalid],
    [data-invalid] > & {
      --indicator-color: var(--invalid-color);

      @media (forced-colors: active) {
        --indicator-border: var(--invalid-color);
      }
    }

    &[data-focus-visible],
    [data-focus-visible] > & {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: 2px;
    }

    &[data-disabled],
    [data-disabled] > & {
      background: var(--field-background);
      box-shadow: inset 0 0 0 1px var(--border-color-disabled);
    }
  }

  /* utility that creates an inset effect, used for form fields, slider/progress tracks, etc. */
  .inset {
    --inset-background: var(--field-background);
    --inset-border: var(--border-color);
    --inset-border-size: 1px;
    --inset-shadow-offset: 2px;
    --inset-shadow-size: 4px;

    background: var(--inset-background);
    box-shadow:
      inset 0 0 0 var(--inset-border-size) var(--inset-border),
      /* border */ inset 0 var(--inset-shadow-offset) var(--inset-shadow-size) rgb(0 0 0 / 0.15),
      /* inner shadow */ 0 1px 0 var(--gray-50); /* bottom specular highlight */
    transition: box-shadow 200ms;
    forced-color-adjust: none;

    @media (prefers-color-scheme: dark) {
      --inset-border: var(--gray-200);
      --border-color-hover: var(--gray-300);
      --inset-highlight: var(--gray-400);
      --inset-shadow-size: 6px;
      box-shadow:
        inset 0 calc(-1 * var(--inset-border-size)) 0 var(--inset-highlight),
        /* bottom specular highlight */ inset 0 0 0 var(--inset-border-size) var(--inset-border),
        /* border */ inset 0 1px var(--inset-shadow-size) rgb(0 0 0); /* inner shadow */
    }

    &:where([data-hovered], [data-pressed]) {
      --inset-border: var(--border-color-hover);
    }

    @media (forced-colors: active) {
      --inset-border: ButtonBorder;
      box-shadow: inset 0 0 0 var(--inset-border-size) var(--inset-border);
    }

    &:where([data-invalid]) {
      --inset-border: var(--invalid-color);
      --inset-highlight: var(--inset-border);
    }

    &:where([data-disabled]) {
      box-shadow: inset 0 0 0 1px var(--border-color-disabled);
    }

    &.track {
      --inset-shadow-offset: 1px;
      --inset-shadow-size: 3px;

      @media (prefers-color-scheme: light) {
        --inset-background: var(--gray-300);
        --inset-border: var(--gray-500);
        --inset-border-size: 0.5px;
      }

      @media (forced-colors: active) {
        --inset-background: Field;
        --inset-border: ButtonBorder;
        --inset-border-size: 1px;
      }
    }
  }
}

`
                    }
}

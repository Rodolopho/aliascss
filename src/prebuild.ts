export default {

    // x-screen
    'x-screen-root':`oh pr  
    __[class~=x-screen][tdu--x-screen-transition-duration:0d35s,pa,ttf--x-screen-transition-timing-function:eio,transition-property-transform_height_width,transform-translateY-0px]
    __[class~=x-screen][w--x-screen-width:100p,h--x-screen-height:100p]
    __[class~=x-screen][class~=x-screen-active]-transform-translate-0
    __[class~=x-screen][x-screen-active]--x-screen-offset:0p
    __[class~=x-screen-up][zi-2,t-0,l-0,transform-translateY--t-up,--t-up:calc(0%-var(--x-screen-offset,100%))]
    __[class~=x-screen-down][zi-3,btm-0px,l-0,transform-translateY--t-down,--t-down:calc(var(--x-screen-offset,100%)-0%)]
    __[class~=x-screen-left][zi-4,transform-translateX--t-left,--t-left:calc(0%-var(--x-screen-offset,100%))]
    __[class~=x-screen-right][zi-5,t0,r0,transform-translateX--t-right,--t-right:calc(var(--x-screen-offset,100%)-0%)]`,



    // Box-and-button
    'x-section':`w--x-section-width:100p p--x-section-padding:20px [class~=x-section-spacious]--x-section-padding:80px height--x-section-height:auto`,
    'x-container':`width-100p xw--x-container-width:1200px margin-0-auto p--x-container-padding:16px
        [class~=x-container-fluid][--x-container-width:100%]
        [class~=x-container-narrow][--x-container-width:800px]`,   
    'x-row':`df fww g-16px m--8px __all-margin-8px __all-flex-1 [class~=x-row-no-wrap]-fwn [class~=x-row-center]-jcc`,
    'x-col':`df fww g-16px m--8px __all-margin-8px __all-flex-1 [class~=x-col-no-wrap]-fwn [class~=x-col-center]-jcc    
        [class~=x-col-full][flex-grow:1]`,
    'x-box':`bgc--x-box-bg:ffffff p--x-box-padding:16px br--x-box-border-radius:8px border--x-box-border:1px-solid-e0e0e0
        [class~=x-box-shadow]-bxs-0px-2px-8px-0000000000d1`,

    'x-card':`bgc--x-card-bg:ffffff padding--x-card-padding:24px br--x-card-border-radius:12px bxs--x-card-shadow:0px-4px-12px-0000000000d1
[class~=x-card-interactive][--hover-transform-translateY--4px,--hover-bxs-0-8px-24px-0000000000d15]
    transition-transform-0.3s-ease__box-shadow-0.3s-ease
    [class~=x-card-dark][--x-card-bg:1a1a1a,--x-card-shadow:0px-4px-12px-0000000000d3,color--x-card-color:ffffff]`,
        
    'x-divider-text':`[df,aic,g12px]
             --before[df,cont,bgc--x-divider-color:gray,flex-1,h--x-divider-width:1px] 
             --after[df,cont,bgc--x-divider-color:gray,flex-1,h--x-divider-width:1px]
             `,
    'x-divider':`border-top-width--x-divider-width:1px 
             border-top-color--x-divider-color:gray 
             border-top-style--x-divider-style:solid bsbb db` ,  

    'x-button':`dib aic jcc cp tdn tn-all-0d3s 
            c--x-button-color:ffffff 
            p--x-button-padding:8px-16px 
            fs--x-button-font-size:16px 
            br--x-button-border-radius:4px 
            b--x-button-border:2px-solid--border-color
            --x-button-border-color:transparent
            bg--x-button-bg:gray-600
            --hover-opacity-0d9 
            --hover-transform-translateY--1px 
            --active-transform-translateY-0px

            [class~=x-button-primary][--x-button-bg:primary600,--x-button-soft-bg:primary100,--x-button-color:ffffff]
            [class~=x-button-success][--x-button-bg:success600,--x-button-soft-bg:success100,--x-button-color:ffffff]
            [class~=x-button-error][--x-button-bg:error600,--x-button-soft-bg:error100,--x-button-color:ffffff]
            [class~=x-button-warning][--x-button-bg:warning600,--x-button-soft-bg:warning100,--x-button-color:ffffff]

            [disabled]-bg-cccccc
            [disabled]-color-666666
            [disabled]-opacity-0.7
            [disabled]-cursor-not-allowed

            [class~=x-button-sm][--x-button-padding:6px-12px,--x-button-font-size:14px]
            [class~=x-button-lg][--x-button-padding:12px-24px,--x-button-font-size:18px]
            [class~=x-button-outline][bg-transparent,--x-button-color:--x-button-bg:gray-600,--border-color:--x-button-color,--hover-bg--x-button-color:gray-600,--hover-color-ffffff]
            [class~=x-button-text][bgc-transparent,--x-button-border:none,--hover-bg--x-button-soft-bg:gray100,--x-button-color:--x-button-bg:gray600,--x-button-padding:4px-8px]`,  

            'x-arrow':`[bss,bc--x-arrow-color:black,bw-0px-3px-3px-0,dib,p-3px] [class~=x-arrow-left]-tf-r-135deg [class~=x-arrow-up]-tf-r--135deg [class~=x-arrow-right]-tf-r--45deg [class~=x-arrow-down]-tf-r-45deg`,

            //CSS entities
            'x-dollar' : '-—af-cont_0024',
            'x-cent' : '-—af-cont_00A2',
            'x-pound' : '-—af-cont_00A3',
            'x-currency' : '-—af-cont_00A4',
            'x-yen' : '-—af-cont_00A5',
            'x-latin-f' : '-—af-cont_0192', /* Florin */
            'x-armenian-dram' : '-—af-cont_058F',
            'x-afghani' : '-—af-cont_060B',
            'x-bengali-mark' : '-—af-cont_09F2',
            'x-bengali-sign' : '-—af-cont_09F3',
            'x-gujarati-sign' : '-—af-cont_0AF1',
            'x-tamil-sign' : '-—af-cont_0BF9',
            'x-thai-baht' : '-—af-cont_0E3F',
            'x-khmer-riel' : '-—af-cont_17DB',
            'x-rial' : '-—af-cont_FDFC',
            'x-wancho-ngun' : '-—af-cont_1E2FF',
            'x-euro-currency' : '-—af-cont_20A0', /* Historical ECU */
            'x-euro' : '-—af-cont_20AC',
            'x-franc' : '-—af-cont_20A3',
            'x-lira' : '-—af-cont_20A4',
            'x-naira' : '-—af-cont_20A6',
            'x-rupee' : '-—af-cont_20B9',
            'x-peso' : '-—af-cont_20B1',
            'x-shekel' : '-—af-cont_20AA',
            'x-won' : '-—af-cont_20A9',
            'x-tugrik' : '-—af-cont_20AE',
            'x-drachma' : '-—af-cont_20AF',
            'x-kip' : '-—af-cont_20AD',
            'x-guarani' : '-—af-cont_20B2',
            'x-hryvnia' : '-—af-cont_20B4',
            'x-cedi' : '-—af-cont_20B5',


            // --
            'x-menu':`pr x-menu-rounded cp   w-35px h-30px bg-lg-transparent_0px_12d5px-currentColor_12d5px_17d5px-transparent_17d5px_35px
                    tn-all-0d5s [class~=x-menu-open]-bg-none 
                    [x-menu-open]-bg-none 
                    --af[pa,t0,h-5px,w-35px,bgc-currentColor,cont]
                    [class~=x-menu-rounded]--af-br-5px 
                    --bf[btm-0,pa,h-5px,w-35px,bgc-currentColor,cont,]
                    [class~=x-menu-rounded]--bf-br-5px tn-all-0d5s
                    --af-tn-all-0d5s --bf-tn-all-0d5s
                    [class~=x-menu-open][--af-tf-r-45deg,--af-t-50p,--bf-tf-r--45deg,--bf-t50p,--af-tn-all-0d5s,--bf-tn-all-0d5s]
                    [x-menu-open][--af-tf-r-45deg,--af-t-50p,--bf-tf-r--45deg,--bf-t50p,--af-tn-all-0d5s,--bf-tn-all-0d5s]`,
}
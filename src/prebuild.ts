export default {
    'x-section':`p--section-padding:40px bgc--section-bg:transparent [class~=section-spacious]--section-padding:80px
        [class~=section-colored]--section-bg:f0f4f8`,
    'x-row':`df fww g-16px m--8px __all-margin-8px __all-flex-1 [class~=row-no-wrap]-fwn [class~=row-center]-jcc`,
    'x-col':`df fww g-16px m--8px __all-margin-8px __all-flex-1 [class~=col-no-wrap]-fwn [class~=col-center]-jcc
        [class~=col-1][flex-0-0-8.33%] 
        [class~=col-2][flex-0-0-16.66%] 
        [class~=col-3][flex-0-0-25%] 
        [class~=col-4][flex-0-0-33.33%] 
        [class~=col-5][flex-0-0-41.66%] 
        [class~=col-6][flex-0-0-50%] 
        [class~=col-7][flex-0-0-58.33%] 
        [class~=col-8][flex-0-0-66.66%] 
        [class~=col-9][flex-0-0-75%] 
        [class~=col-10][flex-0-0-83.33%] 
        [class~=col-full][flex-grow:1]`,
    'x-container':`width-100p xw--container-width:1200px margin-0-auto p--container-padding:16px
        [class~=container-fluid][--container-width:100%]
        [class~=container-narrow][--container-width:800px]`,

    'x-box':`bgc--box-bg:ffffff p--box-padding:16px br--box-border-radius:8px border--box-border:1px-solid-e0e0e0
        [class~=box-shadow]-bxs-0px-2px-8px-0000000000d1`,

    'x-card':`bgc--card-bg:ffffff padding--card-padding:24px br--card-border-radius:12px bxs--card-shadow:0px-4px-12px-0000000000d1
        --hover-transform-translateY--4px --hover-bxs-0-8px-24px-0000000000d15
        transition-transform-0.3s-ease__box-shadow-0.3s-ease
        [class~=card-dark][--card-bg:1a1a1a,--card-shadow:0px-4px-12px-0000000000d3,color--card-color:ffffff]`,
        
    'x-divider-text':`[df,aic,g12px]
             --before[df,cont,bgc--divider-color:gray,flex-1,h--divider-width:1px] 
             --after[df,cont,bgc--divider-color:gray,flex-1,h--divider-width:1px]
             `,
    'x-divider':`border-top-width--divider-width:1px 
             border-top-color--divider-color:gray 
             border-top-style--divider-style:solid bsbb db` ,  
    'x-button':`dib aic jcc cp tdn tn-all-0d3s 
            c--button-color:ffffff 
            p--button-padding:8px-16px 
            fs--button-font-size:16px 
            br--button-border-radius:4px 
            b--button-border:2px-solid--border-color
            --border-color:transparent
            bg--button-bg:gray-600
            --hover-opacity-0d9 
            --hover-transform-translateY--1px 
            --active-transform-translateY-0px

            [class~=button-primary][--button-bg:primary600,--button-soft-bg:primary100,--button-color:ffffff]
            [class~=button-success][--button-bg:success600,--button-soft-bg:success100,--button-color:ffffff]
            [class~=button-error][--button-bg:error600,--button-soft-bg:error100,--button-color:ffffff]
            [class~=button-warning][--button-bg:warning600,--button-soft-bg:warning100,--button-color:ffffff]
            
            [disabled]-bg-cccccc
            [disabled]-color-666666
            [disabled]-opacity-0.7
            [disabled]-cursor-not-allowed
            
            [class~=button-small][--button-padding:6px-12px,--button-font-size:14px]
            [class~=button-large][--button-padding:12px-24px,--button-font-size:18px]
            [class~=button-outline][bg-transparent,--button-color:--button-bg:gray-600,--border-color:--button-color,--hover-bg--button-color:gray-600,--hover-color-ffffff]
            [class~=button-text][bgc-transparent,--button-border:none,--hover-bg--button-soft-bg:gray100,--button-color:--button-bg:gray600,--button-padding:4px-8px]`,  
            'x-tooltip':`df pr p-8px-12px bgc--tooltip-color b-1px-s-gray100 shadow-lg text-xs c-fff br-8px fw5 dif jcc aic --tooltip-color:gray600
                      --bf-pa --bf-cont --bf-w-12px --bf-h-12px  --bf-bgc-inherit --bf-shadow-lg --bf-tf-r-45deg 
                      --bf-l--4px 
                      [class~=tooltip-up]--bf-t--4px 
                      [class~=tooltip-up]--bf-l--calc-midpoint
                      [class~=tooltip-left]--bf-r--4px 
                      [class~=tooltip-left]--bf-l-initial
                      [class~=tooltip-down]--bf-btm--4px
                      [class~=tooltip-down]--bf-l--calc-midpoint --calc-midpoint:calc(50%-6px)`,            

}
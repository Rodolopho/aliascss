export default {
        'x-css-reset-normalize':{
            type:'raw',
            statement:`html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}`
        },
        'x-css-reset':{
            type:'raw',
            statement:`html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}`
        },
        'x-css-reset-josh':{
            type:'raw',
            statement:`*,::before,::after{box-sizing:border-box}*{margin:0} @media(prefers-reduced-motion: no-preference){html{interpolate-size:allow-keywords}}body{line-height:1.5;-webkit-font-smoothing:antialiased}img,picture,video,canvas,svg{display:block;max-width:100%} input,button,textarea,select{font:inherit} p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word} p{text-wrap:pretty}h1,h2,h3,h4,h5,h6{text-wrap:balance}#root,#__next{isolation:isolate}`
        },
        'x-css-reset-sanitize':{
            type:'raw',
            statement:`*,::before,::after{box-sizing:border-box;background-repeat:no-repeat}::before,::after{text-decoration:inherit;vertical-align:inherit}:where(:root){cursor:default;line-height:1.5;overflow-wrap:break-word;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%}:where(body){margin:0}:where(h1){font-size:2em;margin:.67em 0}:where(dl,ol,ul) :where(dl,ol,ul){margin:0}:where(hr){color:inherit;height:0}:where(nav) :where(ol,ul){list-style-type:none;padding:0}:where(nav li)::before{content:"\x80";float:left}:where(pre){font-family:monospace,monospace;font-size:1em;overflow:auto}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace,monospace;font-size:1em}:where(small){font-size:80%}:where(audio,canvas,iframe,img,svg,video){vertical-align:middle}:where(iframe){border-style:none}:where(svg:not([fill])){fill:currentColor}:where(table){border-collapse:collapse;border-color:inherit;text-indent:0}:where(button,input,select){margin:0}:where(button,[type="button" i],[type="reset" i],[type="submit" i]){-webkit-appearance:button}:where(fieldset){border:1px solid #a0a0a0}:where(progress){vertical-align:baseline}:where(textarea){margin:0;resize:vertical}:where([type="search" i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(dialog){background-color:#fff;border:solid;color:#000;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(details > summary:first-of-type){display:list-item}:where([aria-busy="true" i]){cursor:progress}:where([aria-controls]){cursor:pointer}:where([aria-disabled="true" i],[disabled]){cursor:not-allowed}:where([aria-hidden="false" i][hidden]){display:initial}:where([aria-hidden="false" i][hidden]:not(:focus)){clip:rect(0,0,0,0);position:absolute}`
        },
        'x-css-reset-preflight':{
            type:'raw',
            statement:`*,::after,::before,::backdrop,::file-selector-button{box-sizing:border-box;margin:0;padding:0;border:0 solid}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:--theme(--default-font-family,ui-sans-serif,system-ui,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji');font-feature-settings:--theme(--default-font-feature-settings,normal);font-variation-settings:--theme(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:--theme(--default-mono-font-family, ui-monospace,SFMono-Regular,Menlo, Monaco,Consolas,'Liberation Mono','Courier New',monospace);font-feature-settings:--theme(--default-mono-font-feature-settings,normal);font-variation-settings:--theme(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea,::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;border-radius:0;background-color:transparent;opacity:1}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not (-webkit-appearance: -apple-pay-button)) or (contain-intrinsic-size: 1px){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type='button'],[type='reset'],[type='submit']),::file-selector-button{appearance:button}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden='until-found'])){display:none!important}`
        },
        'x-css-vars-color':{
            type:'raw',
            statement:`:root{--gray-25:#FCFCFD;--gray-50:#F9FAFB;--gray-100:#F2F4F7;--gray-200:#EAECF0;--gray-300:#D0D5DD;--gray-400:#98A2B3;--gray-500:#667085;--gray-600:#475467;--gray-700:#344054;--gray-800:#1D2939;--gray-900:#101828;--gray-950:#0C111D;
--grayDark-25:#FAFAFA;--grayDark-50:#F5F5F5;--grayDark-100:#F0F1F1;--grayDark-200:#ECECED;--grayDark-300:#CECFD2;--grayDark-400:#94969C;--grayDark-500:#85888E;--grayDark-600:#61646C;--grayDark-700:#333741;--grayDark-800:#1F242F;--grayDark-900:#161B26;--grayDark-950:#0C111D;
--primary-25:#FCFAFF;--primary-50:#F9F5FF;--primary-100:#F4EBFF;--primary-200:#E9D7FE;--primary-300:#D6BBFB;--primary-400:#B692F6;--primary-500:#9E77ED;--primary-600:#7F56D9;--primary-700:#6941C6;--primary-800:#53389E;--primary-900:#42307D;--primary-950:#2C1C5F;
--brand-25:#FCFAFF;--brand-50:#F9F5FF;--brand-100:#F4EBFF;--brand-200:#E9D7FE;--brand-300:#D6BBFB;--brand-400:#B692F6;--brand-500:#9E77ED;--brand-600:#7F56D9;--brand-700:#6941C6;--brand-800:#53389E;--brand-900:#42307D;--brand-950:#2C1C5F;
--error-25:#FFFBFA;--error-50:#FEF3F2;--error-100:#FEE4E2;--error-200:#FECDCA;--error-300:#FDA29B;--error-400:#F97066;--error-500:#F04438;--error-600:#D92D20;--error-700:#B42318;--error-800:#912018;--error-900:#7A271A;--error-950:#55160C;
--warning-25:#FFFCF5;--warning-50:#FFFAEB;--warning-100:#FEF0C7;--warning-200:#FEDF89;--warning-300:#FEC48B;--warning-400:#FDB022;--warning-500:#F79009;--warning-600:#DC6803;--warning-700:#B54708;--warning-800:#93370D;--warning-900:#7A2E0E;--warning-950:#4E1D09;
--success-25:#F6FEF9;--success-50:#ECFDF3;--success-100:#DCFAE6;--success-200:#ABEFC6;--success-300:#75E0A7;--success-400:#47CD89;--success-500:#17B26A;--success-600:#079455;--success-700:#067647;--success-800:#085D3A;--success-900:#074D31;--success-950:#053321;
--grayBlue-25:#FCFCFD;--grayBlue-50:#F8F9FC;--grayBlue-100:#EAECF5;--grayBlue-200:#D5D9EB;--grayBlue-300:#B3B8DB;--grayBlue-400:#717BBC;--grayBlue-500:#4E5BA6;--grayBlue-600:#3E4784;--grayBlue-700:#363F72;--grayBlue-800:#293056;--grayBlue-900:#101323;--grayBlue-950:#0D0F1C;
--grayCool-25:#FCFCFD;--grayCool-50:#F9F9FB;--grayCool-100:#EFF1F5;--grayCool-200:#DCDFEA;--grayCool-300:#B9C0D4;--grayCool-400:#7D89B0;--grayCool-500:#5D6B98;--grayCool-600:#4A5578;--grayCool-700:#404968;--grayCool-800:#30374F;--grayCool-900:#111322;--grayCool-950:#0E101B;
--grayModern-25:#FCFCFD;--grayModern-50:#F8FAFC;--grayModern-100:#EEF2F6;--grayModern-200:#E3E8EF;--grayModern-300:#CDD5DF;--grayModern-400:#9AA4B2;--grayModern-500:#697586;--grayModern-600:#4B5565;--grayModern-700:#364152;--grayModern-800:#202939;--grayModern-900:#121926;--grayModern-950:#0D121C;
--grayNeutral-25:#FCFCFD;--grayNeutral-50:#F9FAFB;--grayNeutral-100:#F3F4F6;--grayNeutral-200:#E5E7EB;--grayNeutral-300:#D2D6DB;--grayNeutral-400:#9DA4AE;--grayNeutral-500:#6C737F;--grayNeutral-600:#4D5761;--grayNeutral-700:#384250;--grayNeutral-800:#1F2A37;--grayNeutral-900:#111927;--grayNeutral-950:#0D121C;
--grayIron-25:#FCFCFC;--grayIron-50:#FAFAFA;--grayIron-100:#F4F4F5;--grayIron-200:#E4E4E7;--grayIron-300:#D1D1D6;--grayIron-400:#A0A0AB;--grayIron-500:#70707B;--grayIron-600:#51525C;--grayIron-700:#3F3F46;--grayIron-800:#26272B;--grayIron-900:#1A1A1E;--grayIron-950:#131316;
--grayTrue-25:#FCFCFC;--grayTrue-50:#FAFAFA;--grayTrue-100:#F5F5F5;--grayTrue-200:#E5E5E5;--grayTrue-300:#D6D6D6;--grayTrue-400:#A3A3A3;--grayTrue-500:#737373;--grayTrue-600:#525252;--grayTrue-700:#424242;--grayTrue-800:#292929;--grayTrue-900:#141414;--grayTrue-950:#0F0F0F;
--grayWarm-25:#FDFDFC;--grayWarm-50:#FAFAF9;--grayWarm-100:#F5F5F4;--grayWarm-200:#E7E5E4;--grayWarm-300:#D7D3D0;--grayWarm-400:#A9A29D;--grayWarm-500:#79716B;--grayWarm-600:#57534E;--grayWarm-700:#44403C;--grayWarm-800:#292524;--grayWarm-900:#1C1917;--grayWarm-950:#171412;
--moss-25:#FAFDF7;--moss-50:#F5FBEE;--moss-100:#E6F4D7;--moss-200:#CEEAB0;--moss-300:#ACDC79;--moss-400:#86CB3C;--moss-500:#669F2A;--moss-600:#4F7A21;--moss-700:#3F621A;--moss-800:#335015;--moss-900:#2B4212;--moss-950:#1A280B;
--greenLight-25:#FAFEF5;--greenLight-50:#F3FEE7;--greenLight-100:#E4FBCC;--greenLight-200:#D0F8AB;--greenLight-300:#A6EF67;--greenLight-400:#85E13A;--greenLight-500:#66C61C;--greenLight-600:#4CA30D;--greenLight-700:#3B7C0F;--greenLight-800:#326212;--greenLight-900:#2B5314;--greenLight-950:#15290A;
--green-25:#F6FEF9;--green-50:#EDFCF2;--green-100:#D3F8DF;--green-200:#AAF0C4;--green-300:#73E2A3;--green-400:#73E2A3;--green-500:#16B364;--green-600:#099250;--green-700:#087443;--green-800:#095C37;--green-900:#084C2E;--green-950:#052E1C;
--teal-25:#F6FEFC;--teal-50:#F0FDF9;--teal-100:#CCFBEF;--teal-200:#99F6E0;--teal-300:#5FE9D0;--teal-400:#2ED3B7;--teal-500:#15B79E;--teal-600:#0E9384;--teal-700:#107569;--teal-800:#125D56;--teal-900:#134E48;--teal-950:#0A2926;
--cyan-25:#F5FEFF;--cyan-50:#ECFDFF;--cyan-100:#CFF9FE;--cyan-200:#A5F0FC;--cyan-300:#67E3F9;--cyan-400:#22CCEE;--cyan-500:#06AED4;--cyan-600:#088AB2;--cyan-700:#0E7090;--cyan-800:#155B75;--cyan-900:#164C63;--cyan-950:#0D2D3A;
--blueLight-25:#F5FBFF;--blueLight-50:#F0F9FF;--blueLight-100:#E0F2FE;--blueLight-200:#B9E6FE;--blueLight-300:#7CD4FD;--blueLight-400:#36BFFA;--blueLight-500:#0BA5EC;--blueLight-600:#0086C9;--blueLight-700:#026AA2;--blueLight-800:#065986;--blueLight-900:#0B4A6F;--blueLight-950:#062C41;
--blue-25:#F5FAFF;--blue-50:#EFF8FF;--blue-100:#D1E9FF;--blue-200:#B2DDFF;--blue-300:#84CAFF;--blue-400:#53B1FD;--blue-500:#2E90FA;--blue-600:#1570EF;--blue-700:#175CD3;--blue-800:#1849A9;--blue-900:#194185;--blue-950:#102A56;
--blueDark-25:#F5F8FF;--blueDark-50:#EFF4FF;--blueDark-100:#D1E0FF;--blueDark-200:#B2CCFF;--blueDark-300:#84ADFF;--blueDark-400:#528BFF;--blueDark-500:#2970FF;--blueDark-600:#155EEF;--blueDark-700:#004EEB;--blueDark-800:#0040C1;--blueDark-900:#00359E;--blueDark-950:#002266;
--indigo-25:#F5F8FF;--indigo-50:#EEF4FF;--indigo-100:#E0EAFF;--indigo-200:#C7D7FE;--indigo-300:#A4BCFD;--indigo-400:#8098F9;--indigo-500:#6172F3;--indigo-600:#444CE7;--indigo-700:#3538CD;--indigo-800:#2D31A6;--indigo-900:#2D3282;--indigo-950:#1F235B;
--violet-25:#FBFAFF;--violet-50:#F5F3FF;--violet-100:#ECE9FE;--violet-200:#DDD6FE;--violet-300:#C3B5FD;--violet-400:#A48AFB;--violet-500:#875BF7;--violet-600:#7839EE;--violet-700:#6927DA;--violet-800:#5720B7;--violet-900:#491C96;--violet-950:#2E125E;
--purple-25:#FAFAFF;--purple-50:#F4F3FF;--purple-100:#EBE9FE;--purple-200:#D9D6FE;--purple-300:#BDB4FE;--purple-400:#9B8AFB;--purple-500:#7A5AF8;--purple-600:#6938EF;--purple-700:#5925DC;--purple-800:#4A1FB8;--purple-900:#3E1C96;--purple-950:#21115F;
--fuchsia-25:#FEFAFF;--fuchsia-50:#FDF4FF;--fuchsia-100:#FBE8FF;--fuchsia-200:#F6D0FE;--fuchsia-300:#EEAAFD;--fuchsia-400:#E478FA;--fuchsia-500:#D444F1;--fuchsia-600:#BA24D5;--fuchsia-700:#9F1AB1;--fuchsia-800:#821890;--fuchsia-900:#6F1877;--fuchsia-950:#47104C;
--pink-25:#FEF6FB;--pink-50:#FDF2FA;--pink-100:#FCE7F6;--pink-200:#FCCEEE;--pink-300:#FAA7E0;--pink-400:#F670C7;--pink-500:#EE46BC;--pink-600:#DD2590;--pink-700:#C11574;--pink-800:#9E165F;--pink-900:#851651;--pink-950:#4E0D30;
--rose-25:#FFF5F6;--rose-50:#FFF1F3;--rose-100:#FFE4E8;--rose-200:#FECDD6;--rose-300:#FEA3B4;--rose-400:#FD6F8E;--rose-500:#F63D68;--rose-600:#E31B54;--rose-700:#C01048;--rose-800:#A11043;--rose-900:#89123E;--rose-950:#510B24;
--orangeDark-25:#FFF9F5;--orangeDark-50:#FFF4ED;--orangeDark-100:#FFE6D5;--orangeDark-200:#FFD6AE;--orangeDark-300:#FF9C66;--orangeDark-400:#FF692E;--orangeDark-500:#FF4405;--orangeDark-600:#E62E05;--orangeDark-700:#BC1B06;--orangeDark-800:#97180C;--orangeDark-900:#771A0D;--orangeDark-950:#57130A;
--orange-25:#FEFAF5;--orange-50:#FEF6EE;--orange-100:#FDEAD7;--orange-200:#F9DBAF;--orange-300:#F7B27A;--orange-400:#F38744;--orange-500:#EF6820;--orange-600:#E04F16;--orange-700:#B93815;--orange-800:#932F19;--orange-900:#772917;--orange-950:#511C10;
--yellow-25:#FEFDF0;--yellow-50:#FEFBE8;--yellow-100:#FEF7C3;--yellow-200:#FEEE95;--yellow-300:#FDE272;--yellow-400:#FAC515;--yellow-500:#EAAA08;--yellow-600:#CA8504;--yellow-700:#A15C07;--yellow-800:#854A0E;--yellow-900:#713B12;--yellow-950:#542C0D;

}`,
        },
        
   
        'x-css-vars-color-gray':{
            type:'raw',
            statement:`:root{--gray-25:#FCFCFD;--gray-50:#F9FAFB;--gray-100:#F2F4F7;--gray-200:#EAECF0;--gray-300:#D0D5DD;--gray-400:#98A2B3;--gray-500:#667085;--gray-600:#475467;--gray-700:#344054;--gray-800:#1D2939;--gray-900:#101828;--gray-950:#0C111D;}`
        },
        'x-css-vars-color-grayDark':{
            type:'raw',
            statement:`:root{--grayDark-25:#FAFAFA;--grayDark-50:#F5F5F5;--grayDark-100:#F0F1F1;--grayDark-200:#ECECED;--grayDark-300:#CECFD2;--grayDark-400:#94969C;--grayDark-500:#85888E;--grayDark-600:#61646C;--grayDark-700:#333741;--grayDark-800:#1F242F;--grayDark-900:#161B26;--grayDark-950:#0C111D;}`
        },
        'x-css-vars-color-primary':{
            type:'raw',
            statement:`:root{--primary-25:#FCFAFF;--primary-50:#F9F5FF;--primary-100:#F4EBFF;--primary-200:#E9D7FE;--primary-300:#D6BBFB;--primary-400:#B692F6;--primary-500:#9E77ED;--primary-600:#7F56D9;--primary-700:#6941C6;--primary-800:#53389E;--primary-900:#42307D;--primary-950:#2C1C5F;}`
        },
        'x-css-vars-color-brand':{
            type:'raw',
            statement:`:root{--brand-25:#FCFAFF;--brand-50:#F9F5FF;--brand-100:#F4EBFF;--brand-200:#E9D7FE;--brand-300:#D6BBFB;--brand-400:#B692F6;--brand-500:#9E77ED;--brand-600:#7F56D9;--brand-700:#6941C6;--brand-800:#53389E;--brand-900:#42307D;--brand-950:#2C1C5F;}`
        },
        'x-css-vars-color-error':{
            type:'raw',
            statement:`:root{--error-25:#FFFBFA;--error-50:#FEF3F2;--error-100:#FEE4E2;--error-200:#FECDCA;--error-300:#FDA29B;--error-400:#F97066;--error-500:#F04438;--error-600:#D92D20;--error-700:#B42318;--error-800:#912018;--error-900:#7A271A;--error-950:#55160C;}`
        },
        'x-css-vars-color-success':{
            type:'raw',
            statement:`:root{--warning-25:#FFFCF5;--warning-50:#FFFAEB;--warning-100:#FEF0C7;--warning-200:#FEDF89;--warning-300:#FEC48B;--warning-400:#FDB022;--warning-500:#F79009;--warning-600:#DC6803;--warning-700:#B54708;--warning-800:#93370D;--warning-900:#7A2E0E;--warning-950:#4E1D09;
--success-25:#F6FEF9;--success-50:#ECFDF3;--success-100:#DCFAE6;--success-200:#ABEFC6;--success-300:#75E0A7;--success-400:#47CD89;--success-500:#17B26A;--success-600:#079455;--success-700:#067647;--success-800:#085D3A;--success-900:#074D31;--success-950:#053321;}`
},
        'x-css-vars-color-grayBlue':{
            type:'raw',
            statement:`:root{--grayBlue-25:#FCFCFD;--grayBlue-50:#F8F9FC;--grayBlue-100:#EAECF5;--grayBlue-200:#D5D9EB;--grayBlue-300:#B3B8DB;--grayBlue-400:#717BBC;--grayBlue-500:#4E5BA6;--grayBlue-600:#3E4784;--grayBlue-700:#363F72;--grayBlue-800:#293056;--grayBlue-900:#101323;--grayBlue-950:#0D0F1C;
--grayCool-25:#FCFCFD;--grayCool-50:#F9F9FB;--grayCool-100:#EFF1F5;--grayCool-200:#DCDFEA;--grayCool-300:#B9C0D4;--grayCool-400:#7D89B0;--grayCool-500:#5D6B98;--grayCool-600:#4A5578;--grayCool-700:#404968;--grayCool-800:#30374F;--grayCool-900:#111322;--grayCool-950:#0E101B;}`
},
        'x-css-vars-color-grayNeural':{
            type:'raw',
            statement:`:root{--grayModern-25:#FCFCFD;--grayModern-50:#F8FAFC;--grayModern-100:#EEF2F6;--grayModern-200:#E3E8EF;--grayModern-300:#CDD5DF;--grayModern-400:#9AA4B2;--grayModern-500:#697586;--grayModern-600:#4B5565;--grayModern-700:#364152;--grayModern-800:#202939;--grayModern-900:#121926;--grayModern-950:#0D121C;
--grayNeutral-25:#FCFCFD;--grayNeutral-50:#F9FAFB;--grayNeutral-100:#F3F4F6;--grayNeutral-200:#E5E7EB;--grayNeutral-300:#D2D6DB;--grayNeutral-400:#9DA4AE;--grayNeutral-500:#6C737F;--grayNeutral-600:#4D5761;--grayNeutral-700:#384250;--grayNeutral-800:#1F2A37;--grayNeutral-900:#111927;--grayNeutral-950:#0D121C;}`
},
        'x-css-vars-color-grayIron':{
            type:'raw',
            statement:`:root{--grayIron-25:#FCFCFC;--grayIron-50:#FAFAFA;--grayIron-100:#F4F4F5;--grayIron-200:#E4E4E7;--grayIron-300:#D1D1D6;--grayIron-400:#A0A0AB;--grayIron-500:#70707B;--grayIron-600:#51525C;--grayIron-700:#3F3F46;--grayIron-800:#26272B;--grayIron-900:#1A1A1E;--grayIron-950:#131316;}`
        },
        'x-css-vars-color-grayWarm':{
            type:'raw',
            statement:`:root{--grayTrue-25:#FCFCFC;--grayTrue-50:#FAFAFA;--grayTrue-100:#F5F5F5;--grayTrue-200:#E5E5E5;--grayTrue-300:#D6D6D6;--grayTrue-400:#A3A3A3;--grayTrue-500:#737373;--grayTrue-600:#525252;--grayTrue-700:#424242;--grayTrue-800:#292929;--grayTrue-900:#141414;--grayTrue-950:#0F0F0F;
--grayWarm-25:#FDFDFC;--grayWarm-50:#FAFAF9;--grayWarm-100:#F5F5F4;--grayWarm-200:#E7E5E4;--grayWarm-300:#D7D3D0;--grayWarm-400:#A9A29D;--grayWarm-500:#79716B;--grayWarm-600:#57534E;--grayWarm-700:#44403C;--grayWarm-800:#292524;--grayWarm-900:#1C1917;--grayWarm-950:#171412;}`
},
        'x-css-vars-color-greenLight':{
            type:'raw',
            statement:`:root{--moss-25:#FAFDF7;--moss-50:#F5FBEE;--moss-100:#E6F4D7;--moss-200:#CEEAB0;--moss-300:#ACDC79;--moss-400:#86CB3C;--moss-500:#669F2A;--moss-600:#4F7A21;--moss-700:#3F621A;--moss-800:#335015;--moss-900:#2B4212;--moss-950:#1A280B;
--greenLight-25:#FAFEF5;--greenLight-50:#F3FEE7;--greenLight-100:#E4FBCC;--greenLight-200:#D0F8AB;--greenLight-300:#A6EF67;--greenLight-400:#85E13A;--greenLight-500:#66C61C;--greenLight-600:#4CA30D;--greenLight-700:#3B7C0F;--greenLight-800:#326212;--greenLight-900:#2B5314;--greenLight-950:#15290A;}`
},
        'x-css-vars-color-green':{
            type:'raw',
            statement:`:root{--green-25:#F6FEF9;--green-50:#EDFCF2;--green-100:#D3F8DF;--green-200:#AAF0C4;--green-300:#73E2A3;--green-400:#73E2A3;--green-500:#16B364;--green-600:#099250;--green-700:#087443;--green-800:#095C37;--green-900:#084C2E;--green-950:#052E1C;}`
        },
        'x-css-vars-color-teal':{
            type:'raw',
            statement:`:root{--teal-25:#F6FEFC;--teal-50:#F0FDF9;--teal-100:#CCFBEF;--teal-200:#99F6E0;--teal-300:#5FE9D0;--teal-400:#2ED3B7;--teal-500:#15B79E;--teal-600:#0E9384;--teal-700:#107569;--teal-800:#125D56;--teal-900:#134E48;--teal-950:#0A2926;}`
        },
        'x-css-vars-color-cyan':{
            type:'raw',
            statement:`:root{--cyan-25:#F5FEFF;--cyan-50:#ECFDFF;--cyan-100:#CFF9FE;--cyan-200:#A5F0FC;--cyan-300:#67E3F9;--cyan-400:#22CCEE;--cyan-500:#06AED4;--cyan-600:#088AB2;--cyan-700:#0E7090;--cyan-800:#155B75;--cyan-900:#164C63;--cyan-950:#0D2D3A;}`
        },
        'x-css-vars-color-blueLight':{
            type:'raw',
            statement:`:root{--blueLight-25:#F5FBFF;--blueLight-50:#F0F9FF;--blueLight-100:#E0F2FE;--blueLight-200:#B9E6FE;--blueLight-300:#7CD4FD;--blueLight-400:#36BFFA;--blueLight-500:#0BA5EC;--blueLight-600:#0086C9;--blueLight-700:#026AA2;--blueLight-800:#065986;--blueLight-900:#0B4A6F;--blueLight-950:#062C41;}`
        },
        'x-css-vars-color-blue':{
            type:'raw',
            statement:`:root{--blue-25:#F5FAFF;--blue-50:#EFF8FF;--blue-100:#D1E9FF;--blue-200:#B2DDFF;--blue-300:#84CAFF;--blue-400:#53B1FD;--blue-500:#2E90FA;--blue-600:#1570EF;--blue-700:#175CD3;--blue-800:#1849A9;--blue-900:#194185;--blue-950:#102A56;}`
        },
        'x-css-vars-color-blueDark':{
            type:'raw',
            statement:`:root{--blueDark-25:#F5F8FF;--blueDark-50:#EFF4FF;--blueDark-100:#D1E0FF;--blueDark-200:#B2CCFF;--blueDark-300:#84ADFF;--blueDark-400:#528BFF;--blueDark-500:#2970FF;--blueDark-600:#155EEF;--blueDark-700:#004EEB;--blueDark-800:#0040C1;--blueDark-900:#00359E;--blueDark-950:#002266;}`
        },
        'x-css-vars-color-indigo':{
            type:'raw',
            statement:`:root{--indigo-25:#F5F8FF;--indigo-50:#EEF4FF;--indigo-100:#E0EAFF;--indigo-200:#C7D7FE;--indigo-300:#A4BCFD;--indigo-400:#8098F9;--indigo-500:#6172F3;--indigo-600:#444CE7;--indigo-700:#3538CD;--indigo-800:#2D31A6;--indigo-900:#2D3282;--indigo-950:#1F235B;}`
        },
        'x-css-vars-color-violet':{
            type:'raw',
            statement:`:root{--violet-25:#FBFAFF;--violet-50:#F5F3FF;--violet-100:#ECE9FE;--violet-200:#DDD6FE;--violet-300:#C3B5FD;--violet-400:#A48AFB;--violet-500:#875BF7;--violet-600:#7839EE;--violet-700:#6927DA;--violet-800:#5720B7;--violet-900:#491C96;--violet-950:#2E125E;}`
        },
        'x-css-vars-color-purple':{
            type:'raw',
            statement:`:root{--purple-25:#FAFAFF;--purple-50:#F4F3FF;--purple-100:#EBE9FE;--purple-200:#D9D6FE;--purple-300:#BDB4FE;--purple-400:#9B8AFB;--purple-500:#7A5AF8;--purple-600:#6938EF;--purple-700:#5925DC;--purple-800:#4A1FB8;--purple-900:#3E1C96;--purple-950:#21115F;}`
        },
        'x-css-vars-color-fuchsia':{
            type:'raw',
            statement:`:root{--fuchsia-25:#FEFAFF;--fuchsia-50:#FDF4FF;--fuchsia-100:#FBE8FF;--fuchsia-200:#F6D0FE;--fuchsia-300:#EEAAFD;--fuchsia-400:#E478FA;--fuchsia-500:#D444F1;--fuchsia-600:#BA24D5;--fuchsia-700:#9F1AB1;--fuchsia-800:#821890;--fuchsia-900:#6F1877;--fuchsia-950:#47104C;}`
        },
        'x-css-vars-color-pink':{
            type:'raw',
            statement:`:root{--pink-25:#FEF6FB;--pink-50:#FDF2FA;--pink-100:#FCE7F6;--pink-200:#FCCEEE;--pink-300:#FAA7E0;--pink-400:#F670C7;--pink-500:#EE46BC;--pink-600:#DD2590;--pink-700:#C11574;--pink-800:#9E165F;--pink-900:#851651;--pink-950:#4E0D30;}`
        },
        'x-css-vars-color-rose':{
            type:'raw',
            statement:`:root{--rose-25:#FFF5F6;--rose-50:#FFF1F3;--rose-100:#FFE4E8;--rose-200:#FECDD6;--rose-300:#FEA3B4;--rose-400:#FD6F8E;--rose-500:#F63D68;--rose-600:#E31B54;--rose-700:#C01048;--rose-800:#A11043;--rose-900:#89123E;--rose-950:#510B24;}`
        },
        'x-css-vars-color-orangeDark':{
            type:'raw',
            statement:`:root{--orangeDark-25:#FFF9F5;--orangeDark-50:#FFF4ED;--orangeDark-100:#FFE6D5;--orangeDark-200:#FFD6AE;--orangeDark-300:#FF9C66;--orangeDark-400:#FF692E;--orangeDark-500:#FF4405;--orangeDark-600:#E62E05;--orangeDark-700:#BC1B06;--orangeDark-800:#97180C;--orangeDark-900:#771A0D;--orangeDark-950:#57130A;}`
        },
        'x-css-vars-color-orange':{
            type:'raw',
            statement:`:root{--orange-25:#FEFAF5;--orange-50:#FEF6EE;--orange-100:#FDEAD7;--orange-200:#F9DBAF;--orange-300:#F7B27A;--orange-400:#F38744;--orange-500:#EF6820;--orange-600:#E04F16;--orange-700:#B93815;--orange-800:#932F19;--orange-900:#772917;--orange-950:#511C10;}`
        },
        'x-css-vars-color-yellow':{
            type:'raw',
            statement:`:root{--yellow-25:#FEFDF0;--yellow-50:#FEFBE8;--yellow-100:#FEF7C3;--yellow-200:#FEEE95;--yellow-300:#FDE272;--yellow-400:#FAC515;--yellow-500:#EAAA08;--yellow-600:#CA8504;--yellow-700:#A15C07;--yellow-800:#854A0E;--yellow-900:#713B12;--yellow-950:#542C0D;}`
        },

    'x-screen-root':{
    type:'statement',
    statement:`pr oh
        w--x-screen-root-width:100dvw h--x-screen-root-height:100dvh
        --has(__[data-state=open][class~=x-screen-push][class~=x-screen-up])__[class~=x-screen-main]-mt--push-down:100dvh
        --has(__[data-state=open][class~=x-screen-push][class~=x-screen-down])__[class~=x-screen-main]-mt--push-up:--100dvh
        --has(__[data-state=open][class~=x-screen-push][class~=x-screen-right])__[class~=x-screen-main]-ml--push-left:--100p
        --has(__[data-state=open][class~=x-screen-push][class~=x-screen-left])__[class~=x-screen-main]-ml--push-right:100p
        --has(__[class~=x-screen-is-active][class~=x-screen-push][class~=x-screen-up])__[class~=x-screen-main]-mt--push-down:100dvh
        --has(__[class~=x-screen-is-active][class~=x-screen-push][class~=x-screen-down])__[class~=x-screen-main]-mt--push-up:--100dvh
        --has(__[class~=x-screen-is-active][class~=x-screen-push][class~=x-screen-right])__[class~=x-screen-main]-ml--push-left:--100p
        --has(__[class~=x-screen-is-active][class~=x-screen-push][class~=x-screen-left])__[class~=x-screen-main]-ml--push-right:100p
         `,

},
'x-screen':{
    type:'statement',
    statement:`w--x-screen-width:100p h--x-screen-height:100p pa transition-property-margin_transform
        transition-duration--x-screen-transition-duration:0d35s
        [data-state=open]-transform-translate-0
        [class~=x-screen-is-active]-transform-translate-0
        [transform-ty--100p,t0,l0,zi-1]--as-x-screen-up
        [transform-ty-100p,btm0,l0,zi-1]--as-x-screen-down
        [transform-tx--100p,l0,t0,zi-1]--as-x-screen-left
        [transform-tx-100p,r0,t0,zi-1]--as-x-screen-right `
},


    // Box-and-button
    'x-section':{
        type:'statement',
        statement:`w--x-section-width:100p p--x-section-padding:20px [class~=x-section-spacious]--x-section-padding:80px height--x-section-height:auto`,
    },
    'x-container':{
        type:'statement',
        statement:`width-100p  mla mra pl--x-container-padding:15px pl--x-container-padding:15px bsbb xw--x-container-width:initial 
        [class~=x-container-fluid][--x-container-width:100%,m-0-auto]
        [class~=x-container-narrow][--x-container-width:800px]`,    
    },
    'x-row':{
        type:'statement',
        statement:`df fww g-16px m--8px __all-margin-8px i__all-flex-1 [class~=x-row-no-wrap]-fwn [class~=x-row-center]-jcc`,
    },
    'x-col':{
        type:'statement',
        statement:`df fww g-16px m--8px __all-margin-8px i__all-flex-1 [class~=x-col-no-wrap]-fwn [class~=x-col-center]-jcc    
        [class~=x-col-full][flex-grow:1]`,
    },
    'x-box':{
        type:'statement',
        statement:`bgc--x-box-bg:ffffff p--x-box-padding:16px br--x-box-border-radius:8px border--x-box-border:1px-solid-e0e0e0
        [class~=x-box-shadow]-bxs-0px-2px-8px-0000000000d1`,

    },
    'x-card':{
        type:'statement',
        statement:`bgc--x-card-bg:ffffff padding--x-card-padding:24px br--x-card-border-radius:12px bxs--x-card-shadow:0px-4px-12px-0000000000d1
[class~=x-card-interactive][--hover-transform-translateY--4px,--hover-bxs-0-8px-24px-0000000000d15]
    transition-transform-0.3s-ease__box-shadow-0.3s-ease
    [class~=x-card-dark][--x-card-bg:1a1a1a,--x-card-shadow:0px-4px-12px-0000000000d3,color--x-card-color:ffffff]`,
        
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
    'x-button':{
        type:'statement',
        statement:`dib aic jcc cp tdn tn-all-0d3s 
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

            },
            'x-arrow':{
                type:'statement',
                statement:
    `[bss,bc--x-arrow-color:black,bw-0px-3px-3px-0,dib,p-3px] [class~=x-arrow-left]-tf-r-135deg [class~=x-arrow-up]-tf-r--135deg [class~=x-arrow-right]-tf-r--45deg [class~=x-arrow-down]-tf-r-45deg`,
            },

            // CSS entities
            
            'x-currency-dollar' :{type:'statement',statement:'--bf-cont_0024'
            },
            'x-currency-cent' :{type:'statement',statement:'--bf-cont_00A2'
            },
            'x-currency-pound' :{type:'statement',statement:'--bf-cont_00A3'
            },
            'x-currency' :{type:'statement',statement:'--bf-cont_00A4'
            },
            'x-currency-yen' :{type:'statement',statement:'--bf-cont_00A5'
            },
            'x-currency-latin-f' :{type:'statement',statement:'--bf-cont_0192' /* Florin */
            },
            'x-currency-armenian-dram' :{type:'statement',statement:'--bf-cont_058F'
            },
            'x-currency-afghani' :{type:'statement',statement:'--bf-cont_060B'
            },
            'x-currency-bengali-mark' :{type:'statement',statement:'--bf-cont_09F2'
            },
            'x-currency-bengali-sign' :{type:'statement',statement:'--bf-cont_09F3'
            },
            'x-currency-gujarati-sign' :{type:'statement',statement:'--bf-cont_0AF1'
            },
            'x-currency-tamil-sign' :{type:'statement',statement:'--bf-cont_0BF9'
            },
            'x-currency-thai-baht' :{type:'statement',statement:'--bf-cont_0E3F'
            },
            'x-currency-khmer-riel' :{type:'statement',statement:'--bf-cont_17DB',
            },
            'x-currency-rial' :{type:'statement',statement:'--bf-cont_FDFC'
            },
            'x-currency-wancho-ngun' :{type:'statement',statement:'--bf-cont_1E2FF',
            },
            'x-currency-euro-currency' :{type:'statement',statement:'--bf-cont_20A0', /* Historical ECU */
            },
            'x-currency-euro' :{type:'statement',statement:'--bf-cont_20AC',
            },
            'x-currency-franc' :{type:'statement',statement:'--bf-cont_20A3',
            },
            'x-currency-lira' :{type:'statement',statement:'--bf-cont_20A4',
            },
            'x-currency-naira' :{type:'statement',statement:'--bf-cont_20A6',
            },
            'x-currency-rupee' :{type:'statement',statement:'--bf-cont_20B9',
            },
            'x-currency-peso' :{type:'statement',statement:'--bf-cont_20B1',
            },
            'x-currency-shekel' :{type:'statement',statement:'--bf-cont_20AA',
            },
            'x-currency-won' :{type:'statement',statement:'--bf-cont_20A9',
            },
            'x-currency-tugrik' :{type:'statement',statement:'--bf-cont_20AE',
            },
            'x-currency-drachma' :{type:'statement',statement:'--bf-cont_20AF',
            },
            'x-currency-kip' :{type:'statement',statement:'--bf-cont_20AD',
            },
            'x-currency-guarani' :{type:'statement',statement:'--bf-cont_20B2',
            },
            'x-currency-hryvnia' :{type:'statement',statement:'--bf-cont_20B4',
            },
            'x-currency-cedi' :{type:'statement',statement:'--bf-cont_20B5',},
            'x-symbol-copy-right' :{type:'statement',statement:'--bf-cont_00A9',},
            'x-symbol-registered' :{type:'statement',statement:'--bf-cont_00AE',},
            'x-symbol-divide' :{type:'statement',statement:'--bf-cont_00Ff7',},
            'x-symbol-arrow-left' :{type:'statement',statement:'--bf-cont_2190',},
            'x-symbol-arrow-up' :{type:'statement',statement:'--bf-cont_2191',},
            'x-symbol-arrow-right' :{type:'statement',statement:'--bf-cont_2192',},
            'x-symbol-arrow-down' :{type:'statement',statement:'--bf-cont_2193',},
            'x-symbol-arrow-left-right' :{type:'statement',statement:'--bf-cont_2194',},
            'x-symbol-arrow-down-left' :{type:'statement',statement:'--bf-cont_2195',},
            'x-symbol-square-root' :{type:'statement',statement:'--bf-cont_221A',},
            'x-symbol-trade-mark' :{type:'statement',statement:'--bf-cont_2122',},


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

                'x-acss-utils':{
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
                'x-acss-vars-dark':{
                    type:'statement',
                    statement:`
                    --text-primary:--gray-50
                    --text-secondary:--gray-200
                    --text-disabled:--gray-400
                    `,
                },
}
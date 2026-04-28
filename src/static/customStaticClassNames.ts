export const customStaticClassNames: { [key: string]: string } = {
  // ----------------------Border-Radius

  'x-lorem':`content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
  'x-lorem-2':`content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`,
  'x-lorem-3':`content:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."`,
  'x-lorem-4':`content:"The quick brown fox jumps over the lazy dog"`,
 
 
  // Standard Widths
  'width-xs': 'width:var(--width-xs, clamp(17.5000rem, calc(14.2105rem + 16.4474vw), 30.0000rem))',   // Scales from 280px to 480px 
  'width-sm': 'width:var(--width-sm, clamp(20.0000rem, calc(14.7368rem + 26.3158vw), 40.0000rem))',   // Scales from 320px to 640px
  'width-md': 'width:var(--width-md, clamp(30.0000rem, calc(25.2632rem + 23.6842vw), 48.0000rem))',   // Scales from 480px to 768px 
  'width-lg': 'width:var(--width-lg, clamp(40.0000rem, calc(33.6842rem + 31.5789vw), 64.0000rem))',   // Scales from 640px to 1024px 
  'width-xl': 'width:var(--width-xl, clamp(48.0000rem, calc(39.5789rem + 42.1053vw), 80.0000rem))',   // Scales from 768px to 1280px 
  'width-2xl': 'width:var(--width-2xl, clamp(64.0000rem, calc(55.5789rem + 42.1053vw), 96.0000rem))', // Scales from 1024px to 1536px 

  // Shorthand Utilities
  'w-xs': 'width:var(--width-xs, clamp(17.5000rem, calc(14.2105rem + 16.4474vw), 30.0000rem))',
  'w-sm': 'width:var(--width-sm, clamp(20.0000rem, calc(14.7368rem + 26.3158vw), 40.0000rem))',
  'w-md': 'width:var(--width-md, clamp(30.0000rem, calc(25.2632rem + 23.6842vw), 48.0000rem))',
  'w-lg': 'width:var(--width-lg, clamp(40.0000rem, calc(33.6842rem + 31.5789vw), 64.0000rem))',
  'w-xl': 'width:var(--width-xl, clamp(48.0000rem, calc(39.5789rem + 42.1053vw), 80.0000rem))',
  'w-2xl': 'width:var(--width-2xl, clamp(64.0000rem, calc(55.5789rem + 42.1053vw), 96.0000rem))',

  
  "x-radius-xs":'border-radius:var(--radius-xs,4px)',
  "br-xs":'border-radius:var(--radius-xs,6px)',
  "x-radius-sm":'border-radius:var(--radius-sm,6px)',
  "br-sm":'border-radius:var(--radius-sm,6px)',
  "border-radius-sm":'border-radius:var(--radius-sm,6px)',
  "x-radius-md":'border-radius:var(--radius-md,8px)',
  "br-md":'border-radius:var(--radius-md,8px)',
  "border-radius-md":'border-radius:var(--radius-md,8px)',
  "x-radius-base":'border-radius:var(--radius-base,8px)',
  "br-base":'border-radius:var(--radius-base,8px)',
  "border-radius-base":'border-radius:var(--radius-base,8px)',
  "x-radius-lg":'border-radius:var(--radius-lg,10px)',
  "br-lg":'border-radius:var(--radius-lg,10px)',
  "border-radius-lg":'border-radius:var(--radius-lg,10px)',
  "x-radius-xl":'border-radius:var(--radius-xl,16px)',
  "br-xl":'border-radius:var(--radius-xl,16px)',
  "border-radius-xl":'border-radius:var(--radius-xl,16px)',
  "x-radius-full":'border-radius:var(--radius-full,9999px)',
  "br-full":'border-radius:var(--radius-full,9999px)',
  "border-radius-full":'border-radius:var(--radius-full,9999px)',
  // --------  end

  // // --Padding/Spacing
  // "x-padding-none":'padding:var(--x-padding-none,0px)',
  // "x-padding-xxs":'padding:var(--x-padding-xxs,2px)',
  // "x-padding-xs":'padding:var(--x-padding-xs,4px)',
  // "x-padding-sm":'padding:var(--x-padding-sm,6px)',
  // "x-padding-md":'padding:var(--x-padding-md,8px)',
  // "x-padding-lg":'padding:var(--x-padding-lg,12px)',
  // "x-padding-xl":'padding:var(--x-padding-xl,16px)',
  // "x-padding-2xl":'padding:var(--x-padding-2xl,20px)',
  // "x-padding-3xl":'padding:var(--x-padding-3xl,24px)',
  // "x-padding-4xl":'padding:var(--x-padding-4xl,32px)',
  // "x-padding-5xl":'padding:var(--x-padding-5xl,40px)',
  // "x-padding-6xl":'padding:var(--x-padding-6xl,48px)',
  // "x-padding-7xl":'padding:var(--x-padding-7xl,64px)',
  // "x-padding-8xl":'padding:var(--x-padding-8xl,80px)',
  // "x-padding-9xl":'padding:var(--x-padding-9xl,96px)',
  // "x-padding-10xl":'padding:var(--x-padding-10xl,128px)',
  // "x-padding-11xl":'padding:var(--x-padding-11xl,160px)',

  // "x-padding-mobile":'padding:var(--x-padding-mobile,16px)',
  // "x-container-padding-mobile":'padding:var(--x-container-padding-mobile,16px)',
  // "x-padding-desktop":'padding:var(--x-padding-desktop,32px)',
  // "x-container-padding-desktop":'padding:var(--x-container-padding-desktop,32px)',

  // 
  // ---Width
  // "x-width-xxs":'width:var(--x-width-xxs,320px)',
  // "x-width-xs":'width:var(--x-width-xs,384px)',
  // "x-width-sm":'width:var(--x-width-sm,480px)',
  // "x-width-md":'width:var(--x-width-md,560px)',
  // "x-width-lg":'width:var(--x-width-lg,640px)',
  // "x-width-xl":'width:var(--x-width-xl,768px)',
  // "x-width-2xl":'width:var(--x-width-2xl,1024px)',
  // "x-width-3xl":'width:var(--x-width-3xl,1280px)',
  // "x-width-4xl":'width:var(--x-width-4xl,1440px)',
  // "x-width-5xl":'width:var(--x-width-5xl,1600px)',
  // "x-width-6xl":'width:var(--x-width-6xl,1920px)',

  // "x-max-width-desktop":'max-width:var(--x-max-width-desktop,1280px)',
  // "x-desktop-width-desktop":'width:var(--x-desktop-width-desktop,1280px)',
  // "x-width-tablet":'width:var(--x-width-tablet,768px)',
  // "x-max-width-tablet":'max-width:var(--x-max-width-tablet,768px)',
  // "x-width-mobile":'width:var(--x-width-mobile,375px)',
  // "x-max-width-mobile":'max-width:var(--x-max-width-mobile,375px)',
  // "x-container-max-width-desktop":'max-width:var(--x-container-max-width-desktop,1280px)',
  // "x-paragraph-max-width":'max-width:var(--x-paragraph-max-width,720px)',


  // ---old


 'x-display-2xl': 'font-size: var(--display-2xl,4.5rem); line-height: 1.25; letter-spacing: -0.02em',
  'x-display-xl':  'font-size: var(--display-xl,3.75rem); line-height: 1.2; letter-spacing: -0.02em',
  'x-display-lg':  'font-size: var(--display-lg,3rem); line-height: 1.25; letter-spacing: -0.02em',
  'x-display-md':  'font-size: var(--display-md,2.25rem); line-height: 1.22; letter-spacing: -0.02em',
  'x-display-base':  'font-size: var(--display-base,2.25rem); line-height: 1.22; letter-spacing: -0.02em',
  'x-display-sm':  'font-size: var(--display-sm,1.875rem); line-height: 1.26',
  'x-display-xs':  'font-size: var(--display-xs,1.5rem); line-height: 1.33',


'x-text-xl': 'font-size: var(--text-xl,1.25rem); line-height: 1.875rem',
  'fs-xl': 'font-size: var(--text-xl,1.25rem)',
  'font-size-xl': 'font-size: var(--text-xl,1.25rem)',
'x-text-lg': 'font-size: var(--text-lg,1.125rem); line-height: 1.75rem',
  'fs-lg': 'font-size: var(--text-lg,1.125rem)',
  'font-size-lg': 'font-size: var(--text-lg,1.125rem)',
'x-text-md': 'font-size: var(--text-md,1rem); line-height: 1.5rem',
  'fs-md': 'font-size: var(--text-md,1rem)',
  'font-size-md': 'font-size: var(--text-md,1rem)',
'x-text-base': 'font-size: var(--text-base,1rem); line-height: 1.5rem',
  'fs-base': 'font-size: var(--text-base,1rem)',
  'font-size-base': 'font-size: var(--text-base,1rem)',
'x-text-sm': 'font-size: var(--text-sm,0.875rem); line-height: 1.25rem',
  'fs-sm': 'font-size: var(--text-sm,0.875rem)',
  'font-size-sm': 'font-size: var(--text-sm,0.875rem)',
'x-text-xs': 'font-size: var(--text-xs,0.75rem); line-height: 1.125rem',
  'fs-xs': 'font-size: var(--text-xs,0.75rem)',
  'font-size-xs': 'font-size: var(--text-xs,0.75rem)',
'x-text-2xl':'font-size: var(--text-2xl,1.5rem);  line-height: 1.2',
  'fs-2xl':'font-size: var(--text-2xl,1.5rem)',
  'font-size-2xl':'font-size: var(--text-2xl,1.5rem)',
'x-text-3xl':'font-size: var(--text-3xl,1.875rem);  line-height: 1.1',
  'fs-3xl':'font-size: var(--text-3xl,1.875rem)',
  'font-size-3xl':'font-size: var(--text-3xl,1.875rem)',
'x-text-hero':'font-size: var(--text-hero,2.25rem); line-height: 1',
 

// Blur
  'x-blur-sm':'backdrop-filter: var(--x-blur-sm,blur(4px))',
  'x-blur-md':'backdrop-filter: var(--x-blur-md,blur(8px))',
  'x-blur-lg':'backdrop-filter: var(--x-blur-lg,blur(12px))',
  'x-blur-xl':'backdrop-filter: var(--x-blur-xl,blur(20px))',

  //  'x-button-xxl':
    // 'display:inline-flex;justify-content:center;align-items:center;gap:8px;padding:16px 28px;border-radius:8px;box-sizing:border-box',
  // 'x-button-2xl':
  //   'display:inline-flex;justify-content:center;align-items:center;gap:8px;padding:16px 28px;border-radius:8px;box-sizing:border-box',
  // 'x-button-xl':
  //   'display:inline-flex;justify-content:center;align-items:center;gap:8px;padding:12px 20px;border-radius:8px;box-sizing:border-box',
  // 'x-button-lg':
  //   'display:inline-flex;justify-content:center;align-items:center;gap:8px;padding:10px 18px;border-radius:8px;box-sizing:border-box',
  // 'x-button-md':
  //   'display:inline-flex;justify-content:center;align-items:center;gap:8px;padding:10px 16px;border-radius:8px;box-sizing:border-box',
  // 'x-button-sm':
  //   'display:inline-flex;justify-content:center;align-items:center;gap:8px;padding:8px 14px;border-radius:8px;box-sizing:border-box',
  // 'x-button-xs':
  //   'display:inline-flex;justify-content:center;align-items:center;gap:8px;padding:8px 12px;border-radius:8px;box-sizing:border-box',

  // 'x-shadow-3xl': 'box-shadow:var(--shadow-3xl, 0px 32px 64px -12px rgba(16, 24, 40, 0.14))',
  // 'x-shadow-xxxl': 'box-shadow:var(--x-shadow-xxxl, 0px 32px 64px -12px rgba(16, 24, 40, 0.14))',
  // 'x-shadow-2xl': 'box-shadow:var(--shadow-2xl, 0px 24px 48px -12px rgba(16, 24, 40, 0.18))',
  // 'x-shadow-xxl': 'box-shadow:var(--x-shadow-xxl, 0px 24px 48px -12px rgba(16, 24, 40, 0.18))',
  // 'x-shadow-xl': 'box-shadow:var(--shadow-xl, 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03))',
  'x-shadow-lg': 'box-shadow:var(--shadow-lg, 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03))',
  'x-shadow-md': 'box-shadow:var(--shadow-md, 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06))',
  'x-shadow-sm': 'box-shadow:var(--shadow-sm, 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06))',
  // 'x-shadow-xs': 'box-shadow:var(--shadow-xs, 0px 1px 2px rgba(16, 24, 40, 0.05))',

  // 'x-ring-brand':'box-shadow:var(--x-ring-brand, 0px 0px 0px 4px rgba(158, 119, 237, 0.24))',
  // 'x-ring-gray':'box-shadow:var(--x-ring-gray, 0px 0px 0px 4px rgba(152, 162, 179, 0.14))',
  // 'x-ring-gray-secondary':'box-shadow:var(--x-ring-gray-secondary, 0px 0px 0px 4px rgba(152, 162, 179, 0.20))',
  // 'x-ring-error':'box-shadow:var(--x-ring-error, 0px 0px 0px 4px rgba(240, 68, 56, 0.24))',

  // 'x-ring-brand-shadow-xs':'box-shadow:var(--x-ring-brand-shadow-xs, 0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px rgba(158, 119, 237, 0.24))',
  // 'x-ring-brand-shadow-sm':'box-shadow:var(--x-ring-brand-shadow-sm, 0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 0px 0px 4px rgba(158, 119, 237, 0.24))',
  // 'x-ring-brand-gray-xs':'box-shadow:var(--x-ring-brand-gray-xs, 0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px rgba(152, 162, 179, 0.14))',
  // 'x-ring-brand-gray-sm':'box-shadow:var(--x-ring-brand-gray-sm, 0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 0px 0px 4px rgba(152, 162, 179, 0.14))',
  // 'x-ring-brand-error-xs':'box-shadow:var(--x-ring-brand-error-xs, 0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px rgba(240, 68, 56, 0.24))',

  
   
  'x-colorize-dark':'background:#0f0f0f;color:#e3e3e3',
  'x-colorize-light':'background:#e3e3e3;color:rgba(0,0,0,0.8)',

  'x-clip-menu':'clip-path: polygon(0% 10%,100% 10%,100% 20%,0% 20%,0% 45%,100% 45%,100% 55%,0% 55%,0% 80%,100% 80%,100% 90%,0% 90%);',
  'x-clip-message':'clip-path: polygon(0% 0%,100% 0%,100% 80%,60% 80%,50% 100%,40% 80%,0% 80%);',
  'x-clip-star':'clip-path: polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);',
  'x-clip-close': 'clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)',
  'x-clip-plus': 'clip-path: polygon(40% 0%,60% 0%,60% 40%,100% 40%,100% 60%,60% 60%,60% 100%,40% 100%,40% 60%,0% 60%,0% 40%,40% 40%);',
  
  
  // ---------------------------------------General------------
  'x-flex-center': 'display:flex; justify-content:center;align-items:center',
  'x-inline-flex-center': 'display:inline-flex; justify-content:center;align-items:center',
  'x-grid-center': 'display:grid; justify-content:center;align-content:center',
  'x-inline-grid-center': 'display:inline-grid; justify-content:center;align-content:center',
  'x-absolute-center':"position:absolute;margin:auto;top:0;left:0;right:0;bottom:0;",
  'x-absolute-inset':"position:absolute;inset:0",
  'x-absolute-content-inset':'position:absolute;inset:0,content:" "',
  'x-absolute-inset-y':"position:absolute;margin:auto;top:0;bottom:0;",
  'x-absolute-inset-x':"position:absolute;left:0;right:0;",
  'x-fixed-center':"position:fixed;margin:auto;top:0;left:0;right:0;bottom:0;",
  'x-sr-only':'position:absolute;overflow:hidden;clip-path:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0',


  // 'x-jusitfy-between':'justify-content: space-between',
  // 'x-flex':'display:flex',
  'flex-center':'display:flex;align-items:center;justify-content:center',
  'inline-flex-center':'display:inline-flex;align-items:center;justify-content:center',
  'absolute-center':'position:absolute;top:0;right:0;left:0;bottom:0:margin:auto',
  'sr-only':'position:absolute;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0',
  'hidden':'display:none',
  'x-hidden':'display:none',
  'uppercase':'text-transform: uppercase',
  'x-uppercase':'text-transform: uppercase',
  'lowercase':'text-transform: lowercase',
  'x-lowercase':'text-transform: lowercase',
  'capitalize':'text-transform: capitalize',
  'x-capitalize':'text-transform: capitalize',
  'w-full':'width:100%',
  'x-w-full':'width:100%',
  'width-full':'width:100%',
  'x-width-full':'width:100%',
  'w-screen':'width:100vw',
  'x-w-screen':'width:100vw',
  'width-screen':'width:100vw',
  'x-width-screen':'width:100vw',
  'w-screen-d':'width:100dvw',
  'x-w-screen-d':'width:100dvw',
  'width-screen-d':'width:100dvw',
  'x-width-screen-d':'width:100dvw',
  'h-screen':'height:100vh',
  'x-h-screen':'height:100vh',
  'height-screen':'height:100vh',
  'x-height-screen':'height:100vh',
  'h-screen-d':'height:100dvh',
  'x-h-screen-d':'height:100dvh',
  'height-screen-d':'height:100dvh',
  'x-height-screen-d':'height:100dvh',
  'fixed':'position:fixed',
  'x-fixed':'position:fixed',
  'absolute':'position:absolute',
  'x-absolute':'position:absolute',
  'relative':'position:relative',
  'x-relative':'position:relative',
  'x-flex-between':'display:flex;align-items:center;justify-content:space-between',
  'flex-between':'display:flex;align-items:center;justify-content:space-between',

  // ------new Added
'min-h-screen':'min-height: 100vh', 
'max-w-sm':'max-width: 24rem', // 384px
'max-w-md':'max-width: 28rem', // 448px
'max-w-lg':'max-width: 32rem', // 512px
'max-w-xl':'max-width: 36rem', // 576px
'max-w-2xl':'max-width: 42rem', // 672px
'max-w-full':'max-width: 100%',
'x-min-h-screen':'min-height: 100vh',
'x-max-w-sm':'max-width: 24rem', // 384px
'x-max-w-md':'max-width: 28rem', // 448px
'x-max-w-lg':'max-width: 32rem', // 512px
'x-max-w-xl':'max-width: 36rem', // 576px
'x-max-w-2xl':'max-width: 42rem', // 672px
'x-max-w-full':'max-width: 100%',

'mh-screen':'min-height: 100vh',
'xw-sm':'max-width: 24rem', // 384px
'xw-md':'max-width: 28rem', // 448px
'xw-lg':'max-width: 32rem', // 512px
'xw-xl':'max-width: 36rem', // 576px
'xw-2xl':'max-width: 42rem', // 672px
'xw-full':'max-width: 100%',
'x-mh-screen':'min-height: 100vh',
'x-xw-sm':'max-width: 24rem', // 384px
'x-xw-md':'max-width: 28rem', // 448px
'x-xw-lg':'max-width: 32rem', // 512px
'x-xw-xl':'max-width: 36rem', // 576px
'x-xw-2xl':'max-width: 42rem', // 672px
'x-xw-full':'max-width: 100%',

'truncate':'overflow: hidden; text-overflow: ellipsis; white-space: nowrap',
'x-truncate':'overflow: hidden; text-overflow: ellipsis; white-space: nowrap',
  
};

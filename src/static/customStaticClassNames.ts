export const customStaticClassNames: { [key: string]: string } = {
  // ----------------------Border-Radius
  "radius-none":'border-radius:var(--radius-none,0px)',
  "radius-xxs":'border-radius:var(--radius-xxs,2px)',
  "radius-xs":'border-radius:var(--radius-xs,4px)',
  "radius-sm":'border-radius:var(--radius-sm,6px)',
  "radius-md":'border-radius:var(--radius-md,8px)',
  "radius-lg":'border-radius:var(--radius-lg,10px)',
  "radius-xl":'border-radius:var(--radius-xl,12px)',
  "radius-2xl":'border-radius:var(--radius-2xl,16px)',
  "radius-3xl":'border-radius:var(--radius-3xl,20px)',
  "radius-4xl":'border-radius:var(--radius-4xl,24px)',
  "radius-full":'border-radius:var(--radius-full,9999px)',
  // --------  end

  // --Padding/Spacing
  "padding-none":'padding:var(--padding-none,0px)',
  "padding-xxs":'padding:var(--padding-xxs,2px)',
  "padding-xs":'padding:var(--padding-xs,4px)',
  "padding-sm":'padding:var(--padding-sm,6px)',
  "padding-md":'padding:var(--padding-md,8px)',
  "padding-lg":'padding:var(--padding-lg,12px)',
  "padding-xl":'padding:var(--padding-xl,16px)',
  "padding-2xl":'padding:var(--padding-2xl,20px)',
  "padding-3xl":'padding:var(--padding-3xl,24px)',
  "padding-4xl":'padding:var(--padding-4xl,32px)',
  "padding-5xl":'padding:var(--padding-5xl,40px)',
  "padding-6xl":'padding:var(--padding-6xl,48px)',
  "padding-7xl":'padding:var(--padding-7xl,64px)',
  "padding-8xl":'padding:var(--padding-8xl,80px)',
  "padding-9xl":'padding:var(--padding-9xl,96px)',
  "padding-10xl":'padding:var(--padding-10xl,128px)',
  "padding-11xl":'padding:var(--padding-11xl,160px)',

  "padding-mobile":'padding:var(--padding-mobile,16px)',
  "container-padding-mobile":'padding:var(--container-padding-mobile,16px)',
  "padding-desktop":'padding:var(--padding-desktop,32px)',
  "container-padding-desktop":'padding:var(--container-padding-desktop,32px)',
  

  "spacing-none":'padding:var(--spacing-none,0px)',
  "spacing-xxs":'padding:var(--spacing-xxs,2px)',
  "spacing-xs":'padding:var(--spacing-xs,4px)',
  "spacing-sm":'padding:var(--spacing-sm,6px)',
  "spacing-md":'padding:var(--spacing-md,8px)',
  "spacing-lg":'padding:var(--spacing-lg,12px)',
  "spacing-xl":'padding:var(--spacing-xl,16px)',
  "spacing-2xl":'padding:var(--spacing-2xl,20px)',
  "spacing-3xl":'padding:var(--spacing-3xl,24px)',
  "spacing-4xl":'padding:var(--spacing-4xl,32px)',
  "spacing-5xl":'padding:var(--spacing-5xl,40px)',
  "spacing-6xl":'padding:var(--spacing-6xl,48px)',
  "spacing-7xl":'padding:var(--spacing-7xl,64px)',
  "spacing-8xl":'padding:var(--spacing-8xl,80px)',
  "spacing-9xl":'padding:var(--spacing-9xl,96px)',
  "spacing-10xl":'padding:var(--spacing-10xl,128px)',
  "spacing-11xl":'padding:var(--spacing-11xl,160px)',

  // ---Width
  "width-xxs":'width:var(--width-xxs,320px)',
  "width-xs":'width:var(--width-xs,384px)',
  "width-sm":'width:var(--width-sm,480px)',
  "width-md":'width:var(--width-md,560px)',
  "width-lg":'width:var(--width-lg,640px)',
  "width-xl":'width:var(--width-xl,768px)',
  "width-2xl":'width:var(--width-2xl,1024px)',
  "width-3xl":'width:var(--width-3xl,1280px)',
  "width-4xl":'width:var(--width-4xl,1440px)',
  "width-5xl":'width:var(--width-5xl,1600px)',
  "width-6xl":'width:var(--width-6xl,1920px)',

  "max-width-desktop":'width:var(--max-width-desktop,1280px)',
  "container-max-width-desktop":'width:var(--max-width-desktop,1280px)',
  "paragraph-max-width":'width:var(--max-width-desktop,720px)',


  // ---old

  'flex-center': 'display:flex; justify-content:center;align-items:center',


  'display-2xl': 'font-size:72px ; line-height:90px ; letter-spacing:-0.02em',
  'display-xxl': 'font-size:72px ; line-height:90px ; letter-spacing:-0.02em',
  'display-xl': 'font-size: 60px; line-height: 72px; letter-spacing:-0.02em',
  'display-lg': 'font-size:48px ; line-height: 60px; letter-spacing:-0.02em',
  'display-md': 'font-size: 36px; line-height: 44px; letter-spacing:-0.02em',
  'display-sm': 'font-size: 30px; line-height: 38px',
  'display-xs': 'font-size: 24px; line-height: 32px',

  'heading-2xl': 'font-size:72px ; line-height:90px ; letter-spacing:-0.02em',
  'heading-xxl': 'font-size:72px ; line-height:90px ; letter-spacing:-0.02em',
  'heading-xl': 'font-size: 60px; line-height: 72px; letter-spacing:-0.02em',
  'heading-lg': 'font-size:48px ; line-height: 60px; letter-spacing:-0.02em',
  'heading-md': 'font-size: 36px; line-height: 44px; letter-spacing:-0.02em',
  'heading-sm': 'font-size: 30px; line-height: 38px',
  'heading-xs': 'font-size: 24px; line-height: 32px',

  'h-2xl': 'font-size:72px ; line-height:90px ; letter-spacing:-0.02em',
  'h-xxl': 'font-size:72px ; line-height:90px ; letter-spacing:-0.02em',
  'h-xl': 'font-size: 60px; line-height: 72px; letter-spacing:-0.02em',
  'h-lg': 'font-size:48px ; line-height: 60px; letter-spacing:-0.02em',
  'h-md': 'font-size: 36px; line-height: 44px; letter-spacing:-0.02em',
  'h-sm': 'font-size: 30px; line-height: 38px',
  'h-xs': 'font-size: 24px; line-height: 32px',

  'text-xl': 'font-size:20px;line-height:30px',
  'text-lg': 'font-size:18px;line-height:28px',
  'text-md': 'font-size:16px;line-height:24px',
  'text-sm': 'font-size:14px;line-height:20px',
  'text-xs': 'font-size:12px;line-height:18px',

  't-xl': 'font-size:20px;line-height:30px',
  't-lg': 'font-size:18px;line-height:28px',
  't-md': 'font-size:16px;line-height:24px',
  't-sm': 'font-size:14px;line-height:20px',
  't-xs': 'font-size:12px;line-height:18px',

   'button-xxl':
    'display:inline-flex;justify-content:center;align-items:center;gap:8px;padding:16px 28px;border-radius:8px;box-sizing:border-box',
  'button-2xl':
    'display:inline-flex;justify-content:center;align-items:center;gap:8px;padding:16px 28px;border-radius:8px;box-sizing:border-box',
  'button-xl':
    'display:inline-flex;justify-content:center;align-items:center;gap:8px;padding:12px 20px;border-radius:8px;box-sizing:border-box',
  'button-lg':
    'display:inline-flex;justify-content:center;align-items:center;gap:8px;padding:10px 18px;border-radius:8px;box-sizing:border-box',
  'button-md':
    'display:inline-flex;justify-content:center;align-items:center;gap:8px;padding:10px 16px;border-radius:8px;box-sizing:border-box',
  'button-sm':
    'display:inline-flex;justify-content:center;align-items:center;gap:8px;padding:8px 14px;border-radius:8px;box-sizing:border-box',
  'button-xs':
    'display:inline-flex;justify-content:center;align-items:center;gap:8px;padding:8px 12px;border-radius:8px;box-sizing:border-box',

  'shadow-3xl': 'box-shadow:var(--shadow-3xl, 0px 32px 64px -12px rgba(16, 24, 40, 0.14))',
  'shadow-xxxl': 'box-shadow:var(--shadow-xxxl, 0px 32px 64px -12px rgba(16, 24, 40, 0.14))',
  'shadow-2xl': 'box-shadow:var(--shadow-2xl, 0px 24px 48px -12px rgba(16, 24, 40, 0.18))',
  'shadow-xxl': 'box-shadow:var(--shadow-xxl, 0px 24px 48px -12px rgba(16, 24, 40, 0.18))',
  'shadow-xl': 'box-shadow:var(--shadow-xl, 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03))',
  'shadow-lg': 'box-shadow:var(--shadow-lg, 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03))',
  'shadow-md': 'box-shadow:var(--shadow-ms, 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06))',
  'shadow-sm': 'box-shadow:var(--shadow-sm, 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06))',
  'shadow-xs': 'box-shadow:var(--shadow-xs, 0px 1px 2px rgba(16, 24, 40, 0.05))',

  'ring-brand':'box-shadow:var(--ring-brand, 0px 0px 0px 4px rgba(158, 119, 237, 0.24))',
  'ring-gray':'box-shadow:var(--ring-gray, 0px 0px 0px 4px rgba(152, 162, 179, 0.14))',
  'ring-gray-secondary':'box-shadow:var(--ring-gray-secondary, 0px 0px 0px 4px rgba(152, 162, 179, 0.20))',
  'ring-error':'box-shadow:var(--ring-error, 0px 0px 0px 4px rgba(240, 68, 56, 0.24))',

  'ring-brand-shadow-xs':'box-shadow:var(--ring-brand-shadow-xs, 0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px rgba(158, 119, 237, 0.24))',
  'ring-brand-shadow-sm':'box-shadow:var(--ring-brand-shadow-sm, 0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 0px 0px 4px rgba(158, 119, 237, 0.24))',
  'ring-brand-gray-xs':'box-shadow:var(--ring-brand-gray-xs, 0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px rgba(152, 162, 179, 0.14))',
  'ring-brand-gray-sm':'box-shadow:var(--ring-brand-gray-sm, 0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 0px 0px 4px rgba(152, 162, 179, 0.14))',
  'ring-brand-error-xs':'box-shadow:var(--ring-brand-error-xs, 0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px rgba(240, 68, 56, 0.24))',

  // Blur
  'blur-sm':'backdrop-filter: var(--blur-sm,blur(4px))',
  'blur-md':'backdrop-filter: var(--blur-md,blur(8px))',
  'blur-lg':'backdrop-filter: var(--blur-lg,blur(12px))',
  'blur-xl':'backdrop-filter: var(--blur-xl,blur(20px))',
};

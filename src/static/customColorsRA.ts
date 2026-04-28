

  const colorBase :{[key:string]:string} = {
              'brandRA':'var(--brandColor,oklch(1 .25049 284.23))',
              'grayRA': 'var(--grayColor,oklch(0.5 0 0))',
              'redRA': 'var(--redColor,oklch(0.6 .181447 27.0726))',
              'orangeRA': 'var(--orangeColor,oklch(0.7 .150492 54))',
              'yellowRA': 'var(--yellowColor,oklch(0.8 .128516 73.8032))',
              'turquoiseRA': 'var(--turquoiseColor,oklch(0.5 .081146 205.114))',
              'cyanRA': 'var(--cyanColor,oklch(0.4 .142107 243.926))',
              'greenRA': 'var(--greenColor,oklch(0.5 .121276 155.372))',
              'blueRA': 'var(--blueColor,oklch(0.5 .22049 266.315))',
              'indigoRA': 'var(--indigoColor,oklch(1 .25049 284.23))',
              'purpleRA': 'var(--purpleColor,oklch(0.7 .223324 302))',
              'pinkRA': 'var(--pinkColor,oklch(0.6 .177717 347.813))'
};

const chroma:{[key:string]:string}={
  
  /* lower chroma at low lightness levels */
  '100':'calc(l * c * 0.5)',
  '200':'calc(l * c * 0.6)',
  '300':'calc(l * c * 0.7)',
  '400':'calc(l * c * 0.8)',
  '500':'calc(l * c * 0.9)',
  '600':'c',
  '700':'c',
  '800':'c',
  '900':'c',
  '1000':'c',
  '1100':'c',
  '1200':'c',
  '1300':'c',
  '1400':'c',
  '1500':'c',
  '1600':'c',
};

const lightness:{[key:string]:string}={
  '100':'98.1187%',
  '200':'95.2045%',
  '300':'91.1434%',
  '400':'85.1751%',
  '500':'79.1773%',
  '600':'72.3297%',
  '700':'67.0121%',
  '800':'62.3039%',
  '900':'57.9699%',
  '1000':'51.9076%',
  '1100':'46.9058%',
  '1200':'41.0821%',
  '1300':'35.3616%',
  '1400':'29.6725%',
  '1500':'24.5366%',
  '1600':'16.6959%',
};

const lightnessDark:{[key:string]:string}={
    '100': '29.6725%',
    '200': '35.3616%',
    '300': '41.0821%',
    '400': '46.9058%',
    '500': '51.9076%',
    '600': '57.9699%',
    '700': '56.1347%',
    '800': '59.2866%',
    '900': '62.3039%',
    '1000': '67.0121%',
    '1100': '72.3297%',
    '1200': '79.1773%',
    '1300': '85.1751%',
    '1400': '91.1434%',
    '1500': '95.2045%',
    '1600': '100%',
};

const colors=()=>{
  const collection:{[key:string]:string}={};
  const scales=['100','200','300','400','500','600','700','800','900','1000','1100','1200','1300','1400','1500','1600'];
  for (const [color, value] of Object.entries(colorBase)) {
    for (const scale of scales) {
      collection[`${color}${scale}`] = `oklch(from ${value} ${lightness[scale]} ${chroma[scale]} h)`;
      collection[`${color}Dark${scale}`] = `oklch(from ${value} ${lightnessDark[scale]} ${chroma[scale]} h)`;
      collection[`${color}Theme${scale}`] = `light-dark(oklch(from ${value} ${lightness[scale]} ${chroma[scale]} h),oklch(from ${value} ${lightnessDark[scale]} ${chroma[scale]} h))`;
    }
}
return collection;
};

export const customColorsRa: { [key: string]: string } = colors();
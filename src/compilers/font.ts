export default function font(font: string, custom: { [key: string]: { [key: string]: string } }): string {
  font = font.replace(/^[-_]/, '');
  
  let holder = '';

  font.split(/__/).forEach((e) => {
    if (custom.hasOwnProperty('font') && typeof custom.font === 'object') {
    if (custom.font.hasOwnProperty(e)){
        holder+= custom.font[e]+ ', ';
         return;
    }
  }
   if (e.search(/_/) !== -1) {
      holder += '"' + e.replace(/_/g, ' ') + '", ';
    } else {
      holder += e + ', ';
    }
  });

  return holder.replace(/,[\s]$/, '');
}
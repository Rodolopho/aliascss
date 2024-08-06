export default function url(data: string) {
  
  // bg-url3-path-to-folder-png
  // bg-url3_path_to-the_folder_name_png
  let holder = '';
  data.split(/__/).forEach((each) => {
    each = each.replace(/^[-]?url/, '');
    if(each.match(/^--[a-zA-Z]/)){
      holder+= `url(var(${each})),`;
      return
    }
    let dir: string = '';
    if (each.match(/^[-]?[\d][-_]/)) {
      const ndir = /^([0-9])[-_]/.exec(each);
      if (ndir)
        for (let i = 0; i < parseInt(ndir[1], 10); i++) {
          dir += '../';
        }
      each = each.replace(/^[\d]/, '');
    }
    if (!/^[-_]/.test(each)) {
      each = '-' + each;
    }
    const divider = each.slice(0, 1);

    each = each
      .replace(/^[-_]/, '')
      .replace(new RegExp(divider, 'g'), '/')
      .replace(/[\/]([a-z0-9]+)$/, '.$1');

    holder += "url('" + dir + each + "'),";
  });

  return holder.replace(/[,]$/, '').trim();

  // note restriction not use folder with name that uses ../../also need to figure out for
  // bg-url_3_path_to_folder-name_name_png--3_
}

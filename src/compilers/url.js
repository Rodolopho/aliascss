export default function url(data) {
  let holder = "";
  data.split(/--/).forEach((each) => {
    let ndir = /^([0-9])[-_]/.exec(each);
    let dir = " url('";
    if (ndir && isFinite(parseInt(ndir[1]))) {
      for (let i = 0; i < ndir[1]; i++) {
        dir += "../";
      }
      each = each.replace(ndir[0], "");
    }

    each = each.replace(/[-_]([A-Za-z0-9]+$)/, ".$1").replace(/[-_]/g, "/");

    holder += dir + each + "'),";
  });

  return holder.replace(/[,]$/, "");

  //note restriction not use folder with name that uses ../../also need to figure out for
}

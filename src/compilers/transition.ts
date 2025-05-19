export default function transition(data: string) {
  let holder = '';

  data
    .replace(/^-/, '')
    .split(/__/)
    .forEach((e) => {
      const m = e.match(/^([a-z-]+)([0-9]+[d|/.]?[0-9]*[m]?[s])([\w-_]*)/);
      if (!m) return;
      const tf = m[3].replace(/^-/, '');
      if (tf && func[tf]) {
        holder += m[1].replace(/-$/, '') + ' ' + m[2].replace(/d/, '.') + ' ' + func[tf] + ',';
      } else {
        holder += m[1].replace(/-$/, '') + ' ' + m[2].replace(/d/, '.') + ',';
      }
    });

  return holder.replace(/[,]$/, '');
}
const func: { [key: string]: string } = {
  e: 'ease',
  ease: 'ease',
  linear: 'linear',
  l: 'linear',
  ei: 'ease-in',
  'ease-in': 'ease-in',
  eo: 'ease-out',
  'ease-out': 'ease-out',
  eio: 'ease-in-out',
  'ease-in-out': 'ease-in-out',
  ss: 'step-start',
  'step-start': 'step-start',
  se: 'step-end',
  'step-end': 'step-end',
};

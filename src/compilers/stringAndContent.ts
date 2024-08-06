export  function string(str: string, custom: { [key: string]: { [key: string]: string } }) {
    // return string as it is only changes __ to ,
  return str.replace(/^[-]/, '').replace(/__/g,', ');
}


export default function content(str: string) {
  // for CSS entities
  if (str.match(/^_/)) {
    return "'" + str.replace('_', ' \\') + "'";
  }

  str = str.replace(/^[-]/, '');

  // attr() or counter()
  const data = str.match(/^(attr|counter)?[-_]([\w-]+)/);
  if (data) {
    if (data[1] === 'attr') {
      return 'attr(' + data[2] + ')';
    }
    if (data[1] === 'counter') {
      return 'counter(' + data[2] + ')';
    }
  }

  // return plain string with quotes
  return '"' + str.replace(/[_]/g, ' ') + '"';
}

// async function mapRawAttributeNames() {
//   const maps = {
//     kfs: Object.create(null),
//     cls: Object.create(null),
//   };

//   const response = await fetch(window.location.href);
//   const html = await response.text();

//   const tagRegex = /<([A-Za-z][A-Za-z0-9:_-]*)(?:\s+[\s\S]*?)?>/g;

//   const attributeRegex =
//     /([A-Za-z_:][A-Za-z0-9_.:-]*)(?=\s*(?:=|$))/g;

//   const prefixes = [
//     ["keyframes", maps.kfs],
//     ["class", maps.cls],
//   ];

//   let tag;

//   while ((tag = tagRegex.exec(html))) {
//     attributeRegex.lastIndex = 0;

//     let match;

//     while ((match = attributeRegex.exec(tag[0]))) {
//       const rawName = match[1];
//       const name = rawName.toLowerCase();

//       for (const [prefix, map] of prefixes) {
//         if (
//           name.startsWith(`${prefix}-`) ||
//           name.startsWith(`${prefix}_`) ||
//           name.startsWith(`${prefix}:`)
//         ) {
//           map[name] = rawName;
//           break;
//         }
//       }
//     }
//   }

//   return maps;
// }
// export default mapRawAttributeNames;
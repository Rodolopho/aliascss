
 // GTC GTR GT left no grid
export function repeat(data:string){
    data=data.replace(/repeat/g,'===');
   let matchRegex=/===-([\d]+|auto-fill|auto-fit)-([a-z0-9-]+)/;

    while(data.match(matchRegex)){
        const m=data.match(matchRegex)?.[0].replace(/===/,' ');
         const match=m?.match(/-([\d]+|auto-fill|auto-fit)-([a-z0-9-]+)/)||['','',''];
        data=data.replace(matchRegex,`repeat(${match[1]}, ${match[2].replace(/[-]?(minmax)-(min-content|max-content|auto|\w+)-(min-content|max-content|auto|\w+)/g," $1($2 , $3 ) ")
            .replace(/[-]?(fit-content)[-]([\w]+)/g, "$1( $2 ) ")
            .replace(/([\d])d([\d])/g,'$1.$2')
            .replace(/-([\d|a|a])/g,' $1')
            .replace(/([\d])p([\s])/g,"$1% ").replace(/p$/,"%").replace(/-by[-\s]/g,' / ')})`)
    }

    // const match=data.match(/-([\d]+|auto-fill|auto-fit)-([a-z0-9-]+)(.*)/)||['','',''];
    // return `repeat(${match[1]}, ${match[2].replace(/[-]?(minmax)-(min-content|max-content|auto|\w+)-(min-content|max-content|auto|\w+)/g," $1($2 , $3 ) ")
    //         .replace(/[-]?(fit-content)[-]([\w]+)/g, "$1( $2 ) ")
    //         .replace(/([\d])d([\d])/g,'$1.$2')
    //         .replace(/-([\d|a|a])/g,' $1')
    //         .replace(/([\d])p([\s])/g,"$1% ").replace(/p$/,"%").replace(/-by[-\s]/g,' / ')})`
    // repeat-4-auto-fill-20px-30px-min-max content
    return data.replace(/[-]?(minmax)-(min-content|max-content|auto|\w+)-(min-content|max-content|auto|\w+)/g," $1($2 , $3 ) ")
            .replace(/[-]?(fit-content)[-]([\w]+)/g, "$1( $2 ) ")
            .replace(/([\d])d([\d])/g,'$1.$2')
            .replace(/-([\d|a|a|m|r])/g,' $1').replace(/-[)]r/g,') r')
            .replace(/([\d])p([\s])/g,"$1% ").replace(/p$/,"%").replace(/-by[-\s]/g,' / ').replace(/_(\d)/g,' $1')
}
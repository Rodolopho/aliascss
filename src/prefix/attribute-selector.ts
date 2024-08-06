const  attribute :{
    [key:string]:any,
    process: (...args: any[]) => any
}
    =  {
    test:/^[-]?[\[][a-z0-9-_]+([~*$^]?[=][a-z0-9-_:/.]+)?[\]]/,
    process(className :string){
        const match=className.match(this.test);
        if(match){
            const attr = match[0];
            if (attr) {
                const result = attr.replace(/[=]([a-z0-9-_:/.]+)[\]]/,'="$1"]').replace(/^[-_]/,"");// replace(/([\[|\]])/g,'\\$1').replace(/([=])/g,'\\$1');

                return [className.replace(attr, ''),result];
            }
        }     
    }      
}
export default attribute;


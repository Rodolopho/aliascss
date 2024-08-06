const  element :{
    [key:string]:any,
    process: (...args: any[]) => any
}
    =  {
    test:/^_[_]?[A-Za-z0-9_\.]+(?=[_[-])/,
    process(className :string){
        const match=className.match(this.test);
        if(match){
            const alias = match[0];
            if (alias) {
                const result = alias
                    .replace('next',' + ')
                    .replace('child',' > ')
                    .replace('siblings',' ~')
                    .replace(/____/g, ' ~ ')
                    .replace(/___/g, ' + ')
                    .replace(/__/g, ' > ')
                    .replace(/_/g, '  ')
                    .replace(/[\s]all/, ' * ')
                     .replace(/[\s](dot)/g, (e, a) => { return ' .' + a.toLowerCase();})
                    // .replace(/[\s]([A-Z])/g, (e, a) => { return ' .' + a.toLowerCase();})
                    .replace(/[\s]+/g," ").trim();

                return [className.replace(alias, ''), ' ' + result];
            }
        }     
    }      
}
export default element;


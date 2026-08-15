const  fallbackSelector :{
    [key:string]:any,
    process: (...args: any[]) => any
}
    =  {
    test:/^[-,_]?[_]?@(selector)?\(((?:[^()]+|\((?:[^()]+|\([^()]*\))*\))*)\)/, // @(selector)?\(((?:[^()]+|\((?:[^()]+|\([^()]*\))*\))*)\)
    process(className :string){
        const match=className.match(this.test);
        if(match){
            const selector = match[0];
            if (selector) {
                const result=match[2];
                return [className.replace(selector, ''),/^[_]/.test(className)?' '+result:result];
            }
        }     
    }      
}
export default fallbackSelector;


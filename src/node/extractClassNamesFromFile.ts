import fs from 'fs';
import path from 'path';

type config={
    matchExtractorFunction:RegExp|null,
    matchRegExp:RegExp,
    matchRegExpWithColon:RegExp,
    matchRegExpKeyFrame:RegExp,
    matchRegExpWithColonKeyFrame:RegExp
    useColon:boolean,
    useExtractorFunction:boolean,

    useCSSModule:boolean,
    matchCSSModuleFunction:RegExp|null,

    ignore?:string[],
}

export default function extractClassNamesFromFile(file:string,config:config):[string[],{[key:string]:string},{[key:string]:string}]{
        const data = fs.readFileSync(file, 'utf-8');
        const classList:string[] = [];
        const groups :{[key:string]:string}= {};
        const keyframes:{[key:string]:string}= {};

        const matchExtractorFunction=config.useExtractorFunction?config.matchExtractorFunction:null;

        const matchCSSModuleFunction=config.useCSSModule?config.matchCSSModuleFunction:null;

        const matchRegExp=config.useColon?config.matchRegExpWithColon:config.matchRegExp;
        const matchRegExpKeyFrame=config.useColon?config.matchRegExpWithColonKeyFrame:config.matchRegExpKeyFrame;
    
    // 1 - i. Extract from Extractor function
    if(config.useExtractorFunction && matchExtractorFunction){
        const matchesEF=data.match(new RegExp(matchExtractorFunction,"g"))
                if(matchesEF){
                  matchesEF.forEach((each)=>{
                    const extraction=each.match(matchExtractorFunction);
                    if(extraction && extraction[2]){
                      extraction[2].trim().replace(/[\s]+/," ").split(/\s+/).forEach((e) => {
                                if (config.ignore?.indexOf(e) === -1 && classList.indexOf(e) === -1) {
                                    classList.push(e);
                                }
                            });

                    }
                  })
                }
        }
        // 1 -ii. CSS-Module 
        if(config.useCSSModule && matchCSSModuleFunction){
        const matchesEF=data.match(new RegExp(matchCSSModuleFunction,"g"))
                if(matchesEF){
                  matchesEF.forEach((each)=>{
                    const extraction=each.match(matchCSSModuleFunction);
                    if(extraction && extraction[1]){
                        groups[`module=${extraction[1].replace(/[\s]/g,'\\ ').replace(/([.%=\]\[@~:*#\(\)\/^])/g,'\\$1')}`]=extraction[1].trim().replace(/[\s]+/," ")

                    }
                  })
                }
        }
    // 2. Extract KeyFrames
    const matchesKF= data.match(new RegExp(matchRegExpKeyFrame,"g"));
        if(matchesKF){
            
        matchesKF.forEach((match) => {
            const extraction = match.match(matchRegExpKeyFrame);
            if(!extraction) return;

            // case one if its just keyframes
            if(extraction[1].match(/keyframes[:_-]/)){
                const name=extraction[1].replace(/keyframes[:_-]/,'');
                if (name) {
                    // if name already exists
                    // if (names.hasOwnProperty(name) && names[name] === extraction[2]) {
                    if (keyframes.hasOwnProperty(name)){
                       keyframes[name] = keyframes[name] +" "+ extraction[2].trim().replace(/[\s]+/," ");
                    }
                    else {
                        // new name
                        keyframes[name] = extraction[2].trim().replace(/[\s]+/," ");
                          }

                  }
                  }
                }) 
            }   
        
    // 3 .Extract from  class|className|group  attribute
        const matches=data.match(new RegExp(matchRegExp,"g"));
         
        if(matches?.length){
            matches.forEach(toEach=>{
                const each=toEach.match(matchRegExp);
                if(!each) return;
                if(each[1].match(/^(class|className)$/)){
                    each[2].split(/\s+/).forEach(e=>{
                        
                        if(config.ignore?.indexOf(e)===-1 && classList.indexOf(e)===-1){
                            classList.push(e);
                        }
                    })

                }else if(each[1].match(/class[:_-]/)){
                    // Group 
                    let group=each[1].replace(/class[:_-]/,'');
                    let classExtracted=each[2];
                    const match=group.match(/\[(.)+\]/);
                    if(match){
                        group=group.replace(match[0],'');
                        classExtracted=classExtracted.trim().split(/\s+/).map(e=>match[0].replace(/^\[/,'').replace(/\]$/,'')+(/^[_-]/.test(e)?'':'-')+e).join(" "); 
                    }

                    if(group && classExtracted){
                        if(groups.hasOwnProperty(group)){
                            groups[group] = groups[group] +" "+ classExtracted;
                        }else{
                            groups[group] = classExtracted.trim().replace(/[\s]+/," ");
                        }
                    }
                }  
            })
           
        }
        // ?.join(' ')
        // .replace(/class(Name)?=/g,'')
        // .replace(/["']/g,'')
        // .split(/\s+/) 
        

    // extract from keyframes
    return [classList,groups,keyframes]
}
export default function length(data:string){
    return data.replace(/[-]?fit-content-([-]?\w+)/g,' fit-content( $1 )')
    .replace(/[-]([-]?[0-9])/g,' $1').replace(/([\d])d([\d])/g,'$1.$2').replace(/-auto/g,' auto')
    .replace(/([\d])p[\s]/g,"$1% ").replace(/([\d])p$/,"$1%").replace(/-(f|m)/g,'$1')
    
}
export const lenByNumPer=(value:string)=>value.replace(/[-]([-]?[\w])/g,' $1').replace(/([\d])d([\d])/g,'$1.$2').replace(/([\d])p[\s]/g,"$1% ").replace(/([\d])p$/,"$1%").replace(/[\s]by[\s]/g,' / ').replace(/auto flow/g,'auto-flow');


    // const lenNumPer=(value:string)=>value.replace(/[-]([-]?[\w])/g,' $1').replace(/([\d])d([\d])/g,'$1.$2').replace(/([\d])p[\s]/g,"$1% ").replace(/([\d])p$/,"$1%").replace(/([a-z])([\d-])/g,'$1 $2');
    // const signedLenNumPer=(value:string)=>value.replace(/([\d])d([\d])/g,'$1.$2').replace(/([a-z])([\d-])/g,'$1 $2').replace(/([\d])p[\s]/g,"$1% ").replace(/([\d])p$/,"$1%").replace(/[-]([a-z])/g,'$1');
    // const lenByNumPer=(value:string)=>value.replace(/[-]([-]?[\w])/g,' $1').replace(/([\d])d([\d])/g,'$1.$2').replace(/([\d])p[\s]/g,"$1% ").replace(/([\d])p$/,"$1%").replace(/[\s]by[\s]/g,' / ');
    // const lenFitContent=(value:string)=>value.replace(/fit-content-([-]?\w+)/,'fit-content( $1 )').replace(/[-]([-]?[\w])/g,' $1').replace(/([\d])d([\d])/g,' $1.$2 ').replace(/([\d])p[\s]/g,"$1% ").replace(/([\d])p$/,"$1%");
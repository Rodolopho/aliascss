import gradient from '../../compilers/gradient'

describe('Gradient Test',()=>{
    test('CSS-Var',()=>{
        expect(gradient('-lg--lg-sm',{})).toEqual('linear-gradient(var(--lg-sm))')
    })
    test('CSS-Var multi',()=>{
        expect(gradient('-lg--lg-sm__rg--rg-md',{})).toEqual('linear-gradient(var(--lg-sm)), radial-gradient(var(--rg-md))')
    })
     test('linear-gradient',()=>{
        expect(gradient('-lg-70deg-blue-pink',{})).toEqual('linear-gradient( 70deg,  blue, pink )')
    })
    test('linear-gradient',()=>{
        expect(gradient('-linear-gradient--70deg-blue-pink',{})).toEqual('linear-gradient( -70deg,  blue, pink )')
    })
    test('linear-gradient to bottom right',()=>{
        expect(gradient('-lg-to-bottom-right-blue-pink',{})).toEqual('linear-gradient(to bottom right,  blue, pink )')
    })
    test('linear-gradient to bottom right shorthand',()=>{
        expect(gradient('-lg-tbr-blue-pink',{})).toEqual('linear-gradient(to bottom right,  blue, pink )')
    })
    test('linear-gradient multi 3 ',()=>{
        expect(gradient('-linear-gradient-217deg-25500000080p-2550000000p-70d71p__lg-127deg-00025500080p-0002550000p-70d71p__lg-336deg-00000025580p-0000002550p-70d71p',{}))
        .toEqual(`linear-gradient( 217deg,  rgba(255,000,000,80%), rgba(255,000,000,0%) 70.71% ),linear-gradient( 127deg,  rgba(000,255,000,80%), rgba(000,255,000,0%) 70.71% ),linear-gradient( 336deg,  rgba(000,000,255,80%), rgba(000,000,255,0%) 70.71% )`)
    })
    test('radial-gradient at ',()=>{
        expect(gradient('-rg-at-0p-30p-red-10px-yellow-30p-1e90ff-50p',{})).toEqual('radial-gradient( at 0% 30%, red 10px, yellow 30%, #1e90ff 50% )')
    })
     test('gradient as function with () raws css only replace _ by. " " ',()=>{
        expect(gradient('-radial-gradient(circle_at_20%_30%,rgba(127,86,217,0.45),transparent_65%)',{})).toEqual('radial-gradient(circle at 20% 30%,rgba(127,86,217,0.45),transparent 65%)')
    })

    
})

let v=`radial-gradient(at 0% 30%, red 10px, yellow 30%, #1e90ff 50%)`


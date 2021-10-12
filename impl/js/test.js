require( "./perlin.js" )

console.log( typeof perlin_noise ) ;


console.log(  perlin_noise( 0.1,0.1, 0.1 ) );
console.log(  perlin_noise( 0.11,0.1, 0.1 ) );
console.log(  octaveperlin( 0.1,0.1, 0.1 ) );


var funcs = [ perlin_noise , octaveperlin ];

for ( let f of funcs ) {
    var min = 2 ;
    var max = -2 ;
    for (var i=0; i<100000; i++) {
        var n = f( Math.random()*100 ) ;
        if ( n < min) {
            min = n ;
        } else if ( n > max ) {
            max = n ;
        }
    }
    console.log( "min:" , min, "max:", max ) ;
}




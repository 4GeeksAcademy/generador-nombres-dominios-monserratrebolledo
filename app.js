let pronombres = ['the' , 'our'] ;
let adjetivos= ['great' , 'big'] ;
let sustantivos =['jogger' ,'racoon'] ;
let extensiones=['.com' , '.io' , '.es'];

pronombres.forEach(pronombre => {
    adjetivos.forEach(adjetivo => {
        sustantivos.forEach(sustantivo =>{
       const baseDominio = pronombre + adjetivo + sustantivo ;
            extensiones.forEach(extension => {
                console.log(`dominio generado: ${baseDominio + extension}`);
                
            });
        } );
    });
}) ;
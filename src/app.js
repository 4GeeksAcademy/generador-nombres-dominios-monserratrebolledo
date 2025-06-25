import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let pronombres = ['the', 'our'];
  let adjetivos = ['great', 'big'];
  let sustantivos = ['jogger', 'racoon'];
  let extensiones = ['.com', '.io', '.es'];

  pronombres.forEach(pronombre => {
    adjetivos.forEach(adjetivo => {
      sustantivos.forEach(sustantivo => {
        const baseDominio = pronombre + adjetivo + sustantivo;
        extensiones.forEach(extension => {
          console.log(`${baseDominio + extension}`);

        });
      });
    });
  });
  
};

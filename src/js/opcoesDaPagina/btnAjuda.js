; (function () {

  'use strict';

  const btnAjuda = document.querySelector('#btnAjuda')

  btnAjuda.addEventListener('click', function () {
  
      const conexaoApi = new XMLHttpRequest();
      conexaoApi.open('GET','http://ceep.herokuapp.com/cartoes/instrucoes');
      conexaoApi.responseType = 'json'
      conexaoApi.send();

      conexaoApi.addEventListener('load', function(){

        let listaAjudas = conexaoApi.response.instrucoes

        //criar cartoes com a resposta
        for (let objetoAjuda of listaAjudas) {
          criarCartao(objetoAjuda)      
        }

        /* listaAjudas.forEach(function(ajuda){
          console.log(ajuda);
        })  */

      })
  
      //for in
      /* 
      for(let indice in listaAjudas){
        console.log(indice);
        console.log(listaAjudas[indice]);
      } */
  
      //forEach
      /* 
      listaAjudas.forEach(function(ajuda){
        console.log(ajuda);
      }) 
      */
  
    })

  btnAjuda.classList.remove('no-js');

})()
; (function () {

  'use strict';

  const btnAjuda = document.querySelector('#btnAjuda')

  btnAjuda.classList.remove('no-js');

  btnAjuda.addEventListener('click', function () {

    const listaAjudas = [
      {
        conteudo: 'Bem vindo ao ceep',
        cor: 'pink'
      },
      {
        conteudo: 'Para criar cartoes digite algo no form',
        cor: 'green'
      },
      {
        conteudo: 'Clique no botao linhas para mudar o layout',
        cor: 'orange'
      }
    ]

    //for of
    for (let objetoAjuda of listaAjudas) {
      criarCartao(objetoAjuda)      
    }

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

})()
; (function () {

    $.ajax({
        url: 'http://ceep.herokuapp.com/cartoes/carregar',
        method: 'GET',
        dataType: 'jsonp',
        data: {usuario: 'vanessa'},
        success: function(resposta){
          const listaCartoes = resposta.cartoes;
          //percorrer a lista de cartoes e criar um cartao para cada iteracao da lista
          for(let cartao of listaCartoes){
            criarCartao(cartao)
          }
        }
    })

    /* 
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'http://ceep.herokuapp.com/cartoes/carregar');
    ajax.responseType = 'json';
    ajax.setRequestHeader('Content-Type','application/json');
    ajax.send(JSON.stringify({usuario: 'vanessa'}));
    ajax.addEventListener('load', function(){
         console.log(ajax.response);
    }) 
    */

})()
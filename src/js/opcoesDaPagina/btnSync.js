;(function(){

    'use strict';

    const btn = document.querySelector('#btnSync');

    btn.classList.remove('no-js');

    btn.addEventListener('click', function(){

        btn.classList.add('botaoSync--esperando')
        btn.classList.remove('botaoSync--sincronizado')
        
        //localizar todos os elementos .cartao
        const listaElementosCartao = document.querySelectorAll('.cartao');
        const listaObjetosCartao = [];

        for(const cartao of listaElementosCartao){
            //para cada cartao, coletar o conteudo e cor do cartao
            const conteudo = cartao.querySelector('.cartao-conteudo').innerText;
            const cor = cartao.style.backgroundColor;
            
            //colocar num objeto js {}
            const objetoCartao = {
                conteudo: conteudo,
                cor: cor
            }

            listaObjetosCartao.push(objetoCartao)

            //ou
            //listaObjetosCartao.push({conteudo, cor})
            
        }//fim do for

        const dadosUser = {
            usuario: 'vanessa',
            cartoes: listaObjetosCartao
        }

        const conexaoApi = new XMLHttpRequest();

        conexaoApi.open('POST', 'http://ceep.herokuapp.com/cartoes/salvar');

        conexaoApi.setRequestHeader('Content-Type','application/json');
        conexaoApi.responseType = 'json';
        conexaoApi.send(JSON.stringify(dadosUser));

        conexaoApi.addEventListener('load', function(){
            console.log(conexaoApi.response);

            btn.classList.remove('botaoSync--esperando')
            btn.classList.add('botaoSync--sincronizado')
        })

        conexaoApi.addEventListener('error', function(){
            btn.classList.remove('botaoSync--esperando')
            btn.classList.add('botaoSync--deuRuim')
        })
        
        
    })

})()
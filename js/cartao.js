//iife
;(function(){
    //localizem os cartoes
    const cartoes = document.querySelectorAll('.cartao');
    
    //percorrer a lista de cartoes
    for (let i = 0; i < cartoes.length; i++) {
        const cartao = cartoes[i];

        //adicionar evento focus em cada cartao
        
        cartao.addEventListener('focusin', function(){
            this.classList.add('cartao--focado')
        })

        //focusout
        cartao.addEventListener('focusout', function(){
            this.classList.remove('cartao--focado')
        })

        //adicionar o eventListener com o evento change
        cartao.addEventListener('change', function(evento){
            //no callback do change, pegar o valor do input
            const input = event.target
            const isInputCor = input.classList.contains('opcoesDoCartao-radioTipo')

            if(isInputCor){
                this.style.backgroundColor = input.value
            }

        })

    }
    
})()

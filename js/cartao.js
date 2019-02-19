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

        cartao.addEventListener('keyup', function(evento){

            const isLabel = evento.target.classList.contains('opcoesDoCartao-tipo');
            //se apertar enter ou barra de espaço no label
            if(isLabel && (evento.code == 'Enter' || evento.code == 'Space')){
                //this.style.backgroundColor = evento.target.style.color
                event.target.click()
            }
            
        })

        cartao.addEventListener('click', function(evento){
            
            const isLixeira = evento.target.classList.contains('opcoesDoCartao-remove')

            if(isLixeira){
                this.classList.add('cartao--some');
                this.addEventListener('transitionend', this.remove)
            }
            
        })

    }
    
})()

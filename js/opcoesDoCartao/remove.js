//IIFE
//Immediately Invoked Function Expression
;(function(){
    
    //localizar o botao de remover
    const listaBtns = document.querySelectorAll('.opcoesDoCartao-remove');
    
    for(let indice = 0; indice < listaBtns.length; indice++){
        const btn = listaBtns[indice];

        //qdo clicar no btn
        btn.addEventListener('click', function(){
    
            //localizar o cartao
            const cartao = this.parentElement.parentElement;
    
            //no cartao adicionar classe cartao--some
            cartao.classList.add('cartao--some')
    
            //quando a transicao terminar, remove este cartao
            cartao.addEventListener('transitionend', this.remove)
    
        })
    
    }

})();

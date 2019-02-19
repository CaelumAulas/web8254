;(function(){

    const form = document.querySelector('.formNovoCartao');

    form.addEventListener('submit', function(evento){
        evento.preventDefault();
        
        const textarea = form.querySelector('textarea');
        
        textarea.value = textarea.value.trim();
        const isTextareaVazio = textarea.value == '';

        if(isTextareaVazio){
            console.log('Preencha algo');
            //document.createElement('')

            //neste elemento colocar um texto dentro dele

            //inserir usando insertAdjacentElement
        }
        else {
            console.log(textarea.value);
        }

    })
    
    form.classList.remove('no-js');
})()
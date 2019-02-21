; (function () {

  'use strict';

  const form = document.querySelector('form');

  form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const textarea = form.querySelector('textarea');

    textarea.value = textarea.value.trim();
    const isTextareaVazio = textarea.value == '';

    if (isTextareaVazio) {

      const mensagemValidacaoEl = document.createElement('p');
      mensagemValidacaoEl.classList.add('formNovoCartao-msg');
      mensagemValidacaoEl.textContent = 'Digite algum texto para criar o cartão';

      mensagemValidacaoEl.addEventListener('animationend', function () {
        this.remove()
      })

      //novidade diferente da apostila
      textarea.insertAdjacentElement('afterend', mensagemValidacaoEl);

    }
    else {

      const objetoCartao = {
        conteudo: textarea.value
      }

      criarCartao(objetoCartao);
      
      form.reset();
      textarea.focus(); 

    }
  })

  form.classList.remove('no-js');
})()

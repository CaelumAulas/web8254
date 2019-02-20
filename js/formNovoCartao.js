; (function () {

  const form = document.querySelector('form');
  let numeroCartao = 1;

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

      const cartao = document.createElement('article');
      cartao.classList.add('cartao')
      cartao.tabIndex = 0;
      cartao.id = `cartao_${numeroCartao}`

      cartao.innerHTML = `<div class="opcoesDoCartao">
      <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
        <svg><use xlink:href="#iconeRemover"></use></svg>
      </button>

      <input type="radio" name="corDoCartao${numeroCartao}" value="#EBEF40" id="corPadrão-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo" checked>
      <label for="corPadrão-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
        Padrão
      </label>

      <input type="radio" name="corDoCartao${numeroCartao}" value="#F05450" id="corImportante-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo">
      <label for="corImportante-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
        Importante
      </label>

      <input type="radio" name="corDoCartao${numeroCartao}" value="#92C4EC" id="corTarefa-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo">
      <label for="corTarefa-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
        Tarefa
      </label>

      <input type="radio" name="corDoCartao${numeroCartao}" value="#76EF40" id="corInspiração-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo">
      <label for="corInspiração-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
        Inspiração
      </label>
    </div>
    <p class="cartao-conteudo" contenteditable tabindex="0">${textarea.value}</p>`;


      cartao.addEventListener('focusin', function () {
        this.classList.add('cartao--focado')
      })

      //focusout
      cartao.addEventListener('focusout', function () {
        this.classList.remove('cartao--focado')
      })

      //adicionar o eventListener com o evento change
      cartao.addEventListener('change', function (evento) {
        //no callback do change, pegar o valor do input
        const input = event.target
        const isInputCor = input.classList.contains('opcoesDoCartao-radioTipo')

        if (isInputCor) {
          this.style.backgroundColor = input.value
        }

      })

      cartao.addEventListener('keyup', function (evento) {

        const isLabel = evento.target.classList.contains('opcoesDoCartao-tipo');
        //se apertar enter ou barra de espaço no label
        if (isLabel && (evento.code == 'Enter' || evento.code == 'Space')) {
          //this.style.backgroundColor = evento.target.style.color
          event.target.click()
        }

      })

      cartao.addEventListener('click', function (evento) {

        const isLixeira = evento.target.classList.contains('opcoesDoCartao-remove')

        if (isLixeira) {
          this.classList.add('cartao--some');
          this.addEventListener('transitionend', this.remove)
        }

      })


      const mural = document.querySelector('.mural')
      mural.insertAdjacentElement('beforeend', cartao)

      numeroCartao++

      form.reset();

    }
  })

  form.classList.remove('no-js');
})()

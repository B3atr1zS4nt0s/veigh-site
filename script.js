document.addEventListener('DOMContentLoaded', function () {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

  botaoDeAcessibilidade.addEventListener('click', function () {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

    const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
    botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
  });

  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');
  const alternaContraste = document.getElementById('alterna-contraste');

  let tamanhoAtualFonte = parseFloat(localStorage.getItem('tamanhoFonte')) || 1;
  document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

  if (localStorage.getItem('contrasteAtivo') === 'true') {
    document.body.classList.add('alto-contraste');
  }

  aumentaFonteBotao.addEventListener('click', function () {
    if (tamanhoAtualFonte < 2) {
      tamanhoAtualFonte += 0.1;
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
      localStorage.setItem('tamanhoFonte', tamanhoAtualFonte);
    }
  });

  diminuiFonteBotao.addEventListener('click', function () {
    if (tamanhoAtualFonte > 0.6) {
      tamanhoAtualFonte -= 0.1;
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
      localStorage.setItem('tamanhoFonte', tamanhoAtualFonte);
    }
  });

  alternaContraste.addEventListener('click', function () {
    document.body.classList.toggle('alto-contraste');
    localStorage.setItem('contrasteAtivo', document.body.classList.contains('alto-contraste'));
  });
});

// ScrollReveal animações
ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#Veigh', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });

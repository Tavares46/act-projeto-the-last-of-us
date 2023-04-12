/* 
OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundocorrespondente.

passo 1 - dar um jeito de pegar o elemento HTML dos botões

passo 2 - dar um jeito de identificar o clique do usuário no botão

passo 3 - desmarcar o botão selecionado anterior

passo 4 - marcar o botão clicando como se estivesse selecionado

passo 5 - esconder a imagem de fundo  anterior
passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicadokk

*/
  
    const botoesCarrossel = document.querySelectorAll('.botao');
    const imagens = document.querySelectorAll('.imagem');

    botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');

    botao.classList.add('selecionado');

    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
 
    imagens[indice].classList.add('ativa');

    })
})

    



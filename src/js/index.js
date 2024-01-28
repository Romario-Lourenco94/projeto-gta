 /*

    objetivo 1 - quando o usuario clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma
    passo 1 - pegar o botão de seleção de plataformas no JS pra poder   verificar quando o usuario clicar em cima dele

    passo 2 - pegar o elemento do conteudo que precisa ser mostrado

    passo 3 - pegar o clique do usuario no js

    passo 4 - quando o usuario clicar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteúdo apareça


objetivo 2 - caso a lista de botões de plataformas ja esteja aparecendo eo usuario clicar em cima do botão, o conteudo deve ser escondido

    Passo 1 - verificar se o botão ja esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente

*/

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});


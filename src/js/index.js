// Pegar o elemento html dos botôes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
// Identificar o clique no botão pelo usuário
botoesCarrossel.forEach((botao, indice) => {
	botao.addEventListener('click', () => {

		//desmarcar o botao selecionado anterior
		desativarBotaoSelecionado();
		//Marcar o botão com class selecionado
		selecionarBotaoCarrossel(botao);
		//esconder a imagem do fundo anterior
		esconderImagemAtiva();
		//Fazer aparecer imagem correspondente ao botão clicado
		mostrarImagemDeFundo(indice);

	})
})

function mostrarImagemDeFundo(indice){
	imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao){
	botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
	const botaoSelecionado = document.querySelector('.selecionado');
	botaoSelecionado.classList.remove('selecionado');
}



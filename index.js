function mostrarBotaoCopiar() {
    let botao = document.querySelector('.botaoCopiar');
    botao.style.display = 'block';
}

function ocultarSecaoInformativa() {
    let boneco = document.querySelector('.bonecoSVG');
    let nenhuma = document.querySelector('.nenhuma');
    boneco.style.display = 'none';
    nenhuma.style.display = 'none';
}

function exibirTexto (textoParametro) {
    let secaoTexto = document.querySelector('.exibirTexto')
    secaoTexto.style.display = 'block'
    secaoTexto.innerHTML = textoParametro;
    return textoParametro;
}

function copiarTexto() {
    let textoParaCopiar = document.querySelector('.exibirTexto').innerHTML;;
    let botao = document.querySelector('.botaoCopiar');
    navigator.clipboard.writeText(textoParaCopiar);
    botao.innerHTML = 'Copiado <i class="fa-solid fa-check"></i>';
}

const statusBotaoCopiar = () => {
    let botao = document.querySelector('.botaoCopiar');
    botao.innerHTML = '<i class="fa-solid fa-copy"></i> Copiar'
}

const controleDeExibicao = () => {
    ocultarSecaoInformativa();
    mostrarBotaoCopiar();
}

function encriptar() {
    let input = document.querySelector('.textoDigitado');
    let texto = input.value;
    if (texto.trim() === '') {
        input.setAttribute('placeholder', 'Você precisa digitar algo aqui!')
    } else {
        let codificado = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        exibirTexto(codificado);
        controleDeExibicao();
        statusBotaoCopiar();
        let maiusculas = checarMaiusculas(texto);
        let especiais = checarCaracteresEspeciais(texto);
        sinalizandoMaiuscOuCaractEspec(maiusculas || especiais);
        input.value = ''
        return true;
    }
}

function descriptar() {
    let input = document.querySelector('.textoDigitado');
    let texto = input.value;
    if (texto.trim() === ''){
        input.setAttribute('placeholder', 'Você precisa digitar algo aqui!')
    } else {
        let decodificado = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
        exibirTexto(decodificado);
        controleDeExibicao();
        statusBotaoCopiar();
        let maiusculas = checarMaiusculas(texto);
        let especiais = checarCaracteresEspeciais(texto);
        sinalizandoMaiuscOuCaractEspec(maiusculas || especiais);
        input.value = ''
    }
}

function checarMaiusculas(texto) {
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== texto[i].toLowerCase()) {
            sinalizandoMaiuscOuCaractEspec()
            return true
        }
    }
}

function checarCaracteresEspeciais(texto) {
    const regex = /[^a-zA-Z0-9\s]/g;
    if (regex.test(texto)) {
        sinalizandoMaiuscOuCaractEspec()
        return true
    }
}

const sinalizandoMaiuscOuCaractEspec = (ativar) => {
    let caixa = document.querySelector('.letrinhas');
    if (ativar) {
        caixa.style.border = '2px solid red'; // Ativa a borda vermelha
    } else {
        caixa.style.border = 'none'; // Remove a borda vermelha
    }
}
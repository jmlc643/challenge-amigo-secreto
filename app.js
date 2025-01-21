// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let inputAmigo = document.getElementById('amigo');

function agregarAmigo() {
    if (inputAmigo.value) {
        const amigo = inputAmigo.value;
        amigos.push(amigo);
        limpiarInputs();
        actualizarLista();
    } else {
        alert("Por favor, inserte un nombre.");
    }
}

function limpiarInputs() {
    inputAmigo.value = "";
}

function actualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    if(amigos.length == 0) {
        return;
    }
    amigos.forEach(amigo => {
        listaAmigos.innerHTML += `<li>${amigo}</li>`
    });
}

function sortearAmigo() {
    if(amigos.length === 0) {
        alert('La lista esta vacía');
        return;
    }
    const index = parseInt(Math.floor(Math.random() * amigos.length));
    const amigoSorteado = amigos[index];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
    amigos = [];
    actualizarLista();
}
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
    amigos.forEach(amigo => {
        listaAmigos.innerHTML += `<li>${amigo}</li>`
    });
}
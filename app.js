// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let inputAmigo = document.getElementById('amigo');

function agregarAmigo() {
    if (inputAmigo.value) {
        const amigo = inputAmigo.value;
        amigos.push(amigo);
        console.log(amigos);
        limpiarInputs();
    } else {
        alert("Por favor, inserte un nombre.");
    }
}

function limpiarInputs() {
    inputAmigo.value = "";
}
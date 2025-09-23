let listaAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value;

    if (nome === "") {
        alert("Por favor, insira um nome");
        return;
    }

    listaAmigos.push(nome);
    input.value = ""; 
    mostrarLista();
}

function mostrarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listaAmigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        return;
    }

    let indice = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indice];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
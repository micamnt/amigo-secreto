let amigos = [];
let lista = document.getElementById("amigos");

function agregarAmigo() {
    let nombres = document.getElementById("amigo").value.trim(); // Elimina espacios en blanco iniciales y finales

    if (nombres === "") {
        alert("Por favor, inserte un nombre.");
    } else if (amigos.length >= 5) {
        alert("Solo puedes ingresar un máximo de 5 nombres.");
    } else if (amigos.includes(nombres)) {
        alert("Este nombre ya fue ingresado.");
    } else {
        amigos.push(nombres);
        document.getElementById("amigo").value = "";
        actualizarLista();
    }

    console.log(amigos);
}


function actualizarLista() {
    // Obtener el elemento de la lista y limpiar
    lista.innerHTML = ""; 

    // Iterar sobre el array usando for y agregar cada nombre a la lista
    for (let i = 0; i < amigos.length; i++) {
        let listaNombre = document.createElement("li");
        listaNombre.textContent = amigos[i];
        lista.appendChild(listaNombre);
    };

    return;
};

function sortearAmigo() {
    // Verificar que hay nombres en la lista
    if (amigos.length === 0) {
        alert("Ingresar nombres para sortear.");
        return;
    }
    // Sortea un nombre de forma aleatoria
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nombreSorteado = amigos[indiceSorteado];
    let nombreMostrado = document.getElementById("resultado");

    nombreMostrado.textContent = `🎉 El amigo sorteado es ${nombreSorteado} 🎉`;
}


function reiniciarSorteo() {
    // Vaciar el array de nombres
    amigos = [];
    // Actualizar la lista en pantalla
    actualizarLista();
    // Borrar el mensaje de sorteo
    document.getElementById("resultado").innerHTML = "";
    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";
}
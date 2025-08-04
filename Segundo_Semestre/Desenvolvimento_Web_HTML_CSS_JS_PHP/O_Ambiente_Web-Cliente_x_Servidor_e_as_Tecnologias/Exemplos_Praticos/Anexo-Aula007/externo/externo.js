function apagar() {
    document.getElementById('lamp').src = '../img/apagada.png';
}
function acender() {
    document.getElementById('lamp').src = '../img/acessa.png';
}
document.getElementById('apgButton').addEventListener('click', apagar);
document.getElementById('acdButton').addEventListener('click', acender);
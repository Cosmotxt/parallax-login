let cena = document.getElementById('cena');
let parallax = new Parallax(cena);

const closedEye = document.querySelector('.input img');
const input = document.querySelector('.input #senha');

function passView() {
    if(input.getAttribute('type') == 'text') {
        closedEye.src = './assets/elements/olha_fechado.png';
        input.setAttribute('type', 'password');
    }else {
        input.setAttribute('type', 'text');
        closedEye.src = './assets/elements/olho_aberto.png';
    }

}

closedEye.addEventListener('click', passView);
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
btnMobile.addEventListener('click', toggleMenu);


const btnMobilecontato = document.getElementById('btn-mobile-contato');

function toggleMenuContato(){
    const navcont = document.getElementById('nav-contato');
    navcont.classList.toggle('active');
}
btnMobilecontato.addEventListener('click', toggleMenuContato);
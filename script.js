var btn = document.querySelector('#esconder');
var container = document.querySelector('.container');

btn.addEventListener('click', function() {

    if(container.style.display === 'block') {
        container.style.display = 'none'
    }else {
        container.style.display = 'block'
    }
})

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imagens/menu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imagens/close.png";
    }
}
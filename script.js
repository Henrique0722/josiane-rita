var btn = document.querySelector('#esconder');
//var btn = document.querySelector('#escon2');
var container = document.querySelector('.container');
//var container = document.querySelector('.esconder.cont2');

btn.addEventListener('click', function() {

    if(container.style.display === 'block') {
        container.style.display = 'none'
    }else {
        container.style.display = 'block'
    }
})

var btn = document.querySelector('#escon2')
var container = document.querySelector('.ocultar')

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
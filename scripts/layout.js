const input = document.getElementById('finder');
const input2 = document.getElementById('finder2');

input.addEventListener('click', newInput);
input.addEventListener('blur', endInput);

input2.addEventListener('click', newInput2);
input2.addEventListener('blur', endInput2);

function newInput() {
    if (input.value === 'Поиск по сайту...') {
        input.value = '';
    }
}

function endInput() {
    if (input.value.trim() === '') {
        input.value = 'Поиск по сайту...';
    }
}

function newInput2() {
    if (input2.value === 'Поиск по сайту...') {
        input2.value = '';
    }
}

function endInput2() {
    if (input2.value.trim() === '') {
        input2.value = 'Поиск по сайту...';
    }
}

const logo = document.getElementById('logo');
const bottomLogo = document.getElementById('logo-footer');
const bottomLogo1 = document.getElementById('logo-footer1');

logo.addEventListener('click', goToHome);
bottomLogo.addEventListener('click', goToHome);
bottomLogo1.addEventListener('click', goToHome);

function goToHome(event) {
    const mainFile = event.view.location.pathname.split('/').at(-1);
    
    if (mainFile !== 'index.html') {
        location.replace('../index.html');
    }
}

const burger = document.getElementById('burger');
const closeBurger = document.getElementById('close-burger');

burger.addEventListener('click', openMenu);
closeBurger.addEventListener('click', closeMenu);

function openMenu() {
    console.log('open menu');
    document.getElementById('header-menu').classList.add('flex');
    document.getElementById('header-default').classList.add('d-none');
    document.getElementById('header-menu').classList.remove('d-none');
    document.getElementById('header-default').classList.remove('flex');
}

function closeMenu() {
    console.log('close menu');
    document.getElementById('header-menu').classList.add('d-none');
    document.getElementById('header-default').classList.add('flex');
    document.getElementById('header-menu').classList.remove('flex');
    document.getElementById('header-default').classList.remove('d-none');
}

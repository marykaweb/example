'use strict';

let btnMenu = document.getElementsByClassName('btn-menu');
let menuBlock = document.getElementsByClassName('sidenav');

console.log(btnMenu);

btnMenu[0].addEventListener('click', function(){
	menuBlock[0].classList.toggle('menu-show');
	menuBlock[0].classList.add('animate');
});

document.addEventListener('click', e => {
	let target = e.target;
	let its_menu = target == menuBlock[0] || menuBlock[0].contains(target);
	let its_hamburger = target == btnMenu[0];
	let menu_is_active = menuBlock[0].classList.contains('menu-show');
	
	if (!its_menu && !its_hamburger && menu_is_active) {
		menuBlock[0].classList.remove('menu-show');
	}
});

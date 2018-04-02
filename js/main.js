'use strict';

var body = document.querySelector('body');
var btnMenuTrigger = document.querySelector('.nav-trigger');
var btnMenuClose = document.querySelector('.nav-close');

btnMenuTrigger.addEventListener('click', function() {
	body.classList.add('menu-show');
	console.log('estoy entrando');
});

btnMenuClose.addEventListener('click', function() {
	body.classList.remove('menu-show');
});

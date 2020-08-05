$(function(){

	const mobileBtn = document.querySelector('.header__mobile-btn');
	const nav = document.querySelector('.header__nav');

	mobileBtn.addEventListener('click', (e) => {
		e.preventDefault;
		nav.classList.toggle('header__nav_active');

	})


  
});
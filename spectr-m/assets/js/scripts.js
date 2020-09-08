var searchBtn = document.querySelector('.header__search');
var searchForm = document.querySelector('.header__search-form');
var headerNavigation = document.querySelector('.header__nav');

searchBtn.addEventListener('click', function(e){
	e.preventDefault;
	searchBtn.classList.toggle('header__search_active');
	searchForm.classList.toggle('header__search-form_active');
	headerNavigation.classList.toggle('header__nav_hidden');

})


var mobileMenuOpenBtn = document.querySelector('.mobile-nav__item_menu');
var mobileMenu = document.querySelector('.mobile-menu');
var mobileMenuCloseBtn = document.querySelector('.mobile-menu__close-btn');

mobileMenuOpenBtn.addEventListener('click', function(e){
	e.preventDefault;
	mobileMenu.classList.add('mobile-menu_opened');

})

mobileMenuCloseBtn.addEventListener('click', function(e){
	e.preventDefault;
	mobileMenu.classList.remove('mobile-menu_opened');

})


var mobileSearchOpenBtn = document.querySelector('.mobile-nav__item_search');
var mobileSearch = document.querySelector('.mobile-search');
var mobileSearchCloseBtn = document.querySelector('.mobile-search__close-btn');

mobileSearchOpenBtn.addEventListener('click', function(e){
	e.preventDefault;
	mobileSearch.classList.add('mobile-search_opened');

})

mobileSearchCloseBtn.addEventListener('click', function(e){
	e.preventDefault;
	mobileSearch.classList.remove('mobile-search_opened');

})



$(document).ready(function(){
  $('.slider__list').slick({
		prevArrow: $('.slider__btn_left'),
		nextArrow: $('.slider__btn_right'),
		dots: true
	});
});

$(document).ready(function(){
  $('.popular__carousel-list').slick({
		centerMode: true,
		slidesToShow: 3,
		prevArrow: $('.popular__slider-btn_left'),
		nextArrow: $('.popular__slider-btn_right'),
		responsive: [
			{
				breakpoint: 980,
				settings: {
					arrows: false,
					centerMode: true,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 640,
				settings: {
					arrows: false,
					centerMode: true,
					slidesToShow: 1
				}
			}
		]
	});
});


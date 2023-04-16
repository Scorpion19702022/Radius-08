const burgerBtn = document.querySelector('.burger')
const btnBars = document.querySelector('.fa-bars')
const btnCross = document.querySelector('.fa-xmark')
const nav = document.querySelector('.navbar')
const links = document.querySelectorAll('.navbar__link')

// --------------------------------------

const body = document.querySelector('body')

// --------------------------------------

const photoInGallery = document.querySelector('.photo')
const videoInGallery = document.querySelector('.video')

const viewPhotoSlider = document.querySelector('.photoswiper')
const xmarkInSliders = document.querySelectorAll('.xmark')

// --------------------------------------

body.onload = function () {
	loadCards()
}

const loadCards = () => {
	setTimeout(() => {
		photoInGallery.classList.add('actionphotomain')
	}, 800)
	setTimeout(() => {
		videoInGallery.classList.add('actionvideomain')
	}, 1600)
}

const handleNav = () => {
	nav.classList.toggle('actionnav')
	btnBars.classList.toggle('hide')
	btnCross.classList.toggle('hide')

	links.forEach(items => {
		items.addEventListener('click', () => {
			nav.classList.remove('actionnav')
			btnBars.classList.remove('hide')
			btnCross.classList.add('hide')
		})
	})
}

// ------------------------------------------

const swiper = new Swiper('.sliders', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

// ------------------------------------------

const actionSliders1 = () => {
	photoInGallery.classList.remove('actionphotomain')
	videoInGallery.classList.remove('actionvideomain')
	viewPhotoSlider.classList.add('swiperaction')
	xmarkInSliders.forEach(el => {
		el.addEventListener('click', function () {
			photoInGallery.classList.add('actionphotomain')
			videoInGallery.classList.add('actionvideomain')
			viewPhotoSlider.classList.remove('swiperaction')
		})
	})
}

burgerBtn.addEventListener('click', handleNav)
photoInGallery.addEventListener('click', actionSliders1)

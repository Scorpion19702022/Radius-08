const burgerBtn = document.querySelector('.burger')
const btnBars = document.querySelector('.fa-bars')
const btnCross = document.querySelector('.fa-xmark')
const nav = document.querySelector('.navbar')
const links = document.querySelectorAll('.navbar__link')

// --------------------------------------

const cardHomeOne = document.querySelector('.cards__cardone')
const cardhomeTwo = document.querySelector('.cards__cardtwo')
const body = document.querySelector('body')
const imgCardOne = document.querySelector('.imgcardone')
const imgCardTwo = document.querySelector('.imgcardtwo')

// --------------------------------------

const imgOfferOne = document.querySelector('.offerimgone')
const imgOfferTwo = document.querySelector('.offerimgtwo')

// const photoInGallery = document.querySelector('.photo')
// const videoInGallery = document.querySelector('.video')

// const viewPhotoSlider = document.querySelector('.photoswiper')
// const xmarkInSliders = document.querySelectorAll('.xmark')

// ------------------------------------------

body.onload = function () {
	loadCards()
}

const loadCards = () => {
	setTimeout(() => {
		cardHomeOne.classList.add('actioncards')
	}, 800)
	setTimeout(() => {
		cardhomeTwo.classList.add('actioncards')
	}, 1600)
	setTimeout(() => {
		imgCardOne.classList.add('imgcardoneview')
	}, 2400)
	setTimeout(() => {
		imgCardTwo.classList.add('imgcardoneview')
	}, 3200)
}

// ------------------------------------------

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

const scrollOffer = () => {
	if (window.scrollY >= 560) {
		imgOfferOne.classList.add('actionofferzero')
		imgOfferTwo.classList.add('actionofferzero')
	} else {
		imgOfferOne.classList.remove('actionofferzero')
		imgOfferTwo.classList.remove('actionofferzero')
	}
	if (window.scrollY >= 880) {
		imgOfferOne.classList.add('actionofferone')
		imgOfferTwo.classList.add('actionofferone')
	} else {
		imgOfferOne.classList.remove('actionofferone')
		imgOfferTwo.classList.remove('actionofferone')
	}
}

// ------------------------------------------

burgerBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', scrollOffer)

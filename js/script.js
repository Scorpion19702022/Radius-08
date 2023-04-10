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

const cardAboutOne = document.querySelector('.aboutone')
const cardAboutTwo = document.querySelector('.abouttwo')
const cardAboutThree = document.querySelector('.aboutthree')
const cardAboutFour = document.querySelector('.aboutfour')

// --------------------------------------

const imgOfferOne = document.querySelector('.offerimgone')
const imgOfferTwo = document.querySelector('.offerimgtwo')

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

	setTimeout(() => {
		cardAboutOne.classList.add('actioncardsaboutus')
	}, 500)
	setTimeout(() => {
		cardAboutTwo.classList.add('actioncardsaboutus')
	}, 1000)
	setTimeout(() => {
		cardAboutThree.classList.add('actioncardsaboutus')
	}, 1500)
	setTimeout(() => {
		cardAboutFour.classList.add('actioncardsaboutus')
	}, 2000)
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
	console.log(window.scrollY)
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
	// if (window.scrollY >= 1930) {
	// 	imgOfferOne.classList.add('actionoffertwo')
	// 	imgOfferTwo.classList.add('actionoffertwo')
	// } else {
	// 	imgOfferOne.classList.remove('actionoffertwo')
	// 	imgOfferTwo.classList.remove('actionoffertwo')
	// }
}

scrollOffer()

// ------------------------------------------

burgerBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', scrollOffer)

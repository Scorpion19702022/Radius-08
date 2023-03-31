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

burgerBtn.addEventListener('click', handleNav)

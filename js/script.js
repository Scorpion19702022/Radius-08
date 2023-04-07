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

burgerBtn.addEventListener('click', handleNav)

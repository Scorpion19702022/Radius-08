const burgerBtn = document.querySelector('.burger')
const btnBars = document.querySelector('.fa-bars')
const btnCross = document.querySelector('.fa-xmark')
const nav = document.querySelector('.navbar')
const links = document.querySelectorAll('.navbar__link')

// --------------------------------------

const body = document.querySelector('body')

const cardAboutOne = document.querySelector('.aboutone')
const cardAboutTwo = document.querySelector('.abouttwo')
const cardAboutThree = document.querySelector('.aboutthree')
const cardAboutFour = document.querySelector('.aboutfour')

body.onload = function () {
	loadCards()
}

const loadCards = () => {
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

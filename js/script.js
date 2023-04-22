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

const cookieBox = document.querySelector('.cookie')
const cookieBtn = document.querySelector('.cookie__btn')

// --------------------------------------

const imgOfferOne = document.querySelector('.offerimgone')
const imgOfferTwo = document.querySelector('.offerimgtwo')

// ------------------------------------------
const msgStatus = document.querySelector('.msgstatus')

console.log(document.location.search)

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

const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookies')
	if (cookieEaten) {
		cookieBox.classList.add('nocookie')
	}
}
showCookie()

const handleCookie = () => {
	localStorage.setItem('cookies', 'true')
	cookieBox.classList.add('nocookie')
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

if (document.location.search === '?mail_status=sent') {
	msgStatus.classList.add('sendsuccess')
	msgStatus.textContent = 'Wiadomość wysłana poprawnie'
}
if (document.location.search === '?mail_status=error') {
	msgStatus.classList.add('senderror')
	msgStatus.textContent = 'Nie udało się wysłać wiadomości'
}

// ------------------------------------------

burgerBtn.addEventListener('click', handleNav)
cookieBtn.addEventListener('click', handleCookie)
window.addEventListener('scroll', scrollOffer)

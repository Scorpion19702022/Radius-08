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

// ------------------------------------------

const counterBox = document.querySelector('.cards')
const counter = document.querySelectorAll('.card__heading')

console.log(counter)

const options = {
	rootMargin: '-1000px',
}

const startCounter = entry => {
	console.log(entry[0])
	console.log(entry[0].isIntersecting)

	if (entry[0].isIntersecting) {
		counter.forEach(count => {
			console.log(count)

			const updateCount = () => {
				const final = count.getAttribute('data-number')
				const value = parseInt(count.textContent)

				// const speed = 300
				// console.log(final / 300)

				const speed = final / 300

				if (value < final) {
					count.textContent = `${Math.floor(value + speed)}`
					setTimeout(updateCount, 3)
				} else {
					count.textContent = final
				}
			}

			updateCount()
		})
	}
}

const observer = new IntersectionObserver(startCounter, options)
observer.observe(counterBox)

burgerBtn.addEventListener('click', handleNav)

const burgerBtn = document.querySelector('.burger')
const btnBars = document.querySelector('.fa-bars')
const btnCross = document.querySelector('.fa-xmark')
const nav = document.querySelector('.navbar')
const links = document.querySelectorAll('.navbar__link')

// --------------------------------------

const cookieBox = document.querySelector('.cookie')
const cookieBtn = document.querySelector('.cookie__btn')

// --------------------------------------

const msgStatus = document.querySelector('.msgstatus')

const inputName = document.querySelector('#name')
const inputMail = document.querySelector('#email')
const textarea = document.querySelector('#msg')

const errorName = document.querySelector('.errorname')
const errorMail = document.querySelector('.erroremail')
const errorText = document.querySelector('.errortext')

const btnSend = document.querySelector('.btnsend')
const btnClear = document.querySelector('.btnclean')

const re =
	/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/

// console.log(document.location.search)

// if (document.location.search === '?mail_status=sent') {
// 	msgStatus.classList.add('sendsuccess')
// 	msgStatus.textContent = 'Wiadomość wysłana poprawnie'
// 	setTimeout(() => {
// 		msgStatus.classList.remove('sendsuccess')
// 	}, 3000)
// }
// if (document.location.search === '?mail_status=error') {
// 	msgStatus.classList.add('senderror')
// 	msgStatus.textContent = 'Nie udało się wysłać wiadomości'
// 	setTimeout(() => {
// 		msgStatus.classList.remove('senderror')
// 	}, 3000)
// }

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

const send = e => {
	if (inputName.value !== '' && re.test(inputMail.value) && textarea.value !== '') {
		msgStatus.classList.add('sendsuccess')
		msgStatus.textContent = 'Wiadomość wysłana poprawnie'
		errorName.classList.remove('actionerror')
		errorMail.classList.remove('actionerror')
		errorText.classList.remove('actionerror')
		inputName.classList.remove('backerror')
		inputMail.classList.remove('backerror')
		textarea.classList.remove('backerror')
		setTimeout(() => {
			msgStatus.classList.remove('sendsuccess')
			inputName.value = ''
			inputMail.value = ''
			textarea.value = ''
		}, 3000)
	} else if (inputName.value === '' && re.test(inputMail.value) && textarea.value === '') {
		errorName.classList.add('actionerror')
		errorName.textContent = 'Wypełnij pole'
		errorMail.classList.remove('actionerror')
		errorText.classList.add('actionerror')
		errorText.textContent = 'Wypełnij pole'
		inputName.classList.add('backerror')
		textarea.classList.add('backerror')
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Nie udało się wysłać wiadomości'
		setTimeout(() => {
			errorName.classList.remove('actionerror')
			errorText.classList.remove('actionerror')
			inputName.classList.remove('backerror')
			textarea.classList.remove('backerror')
			msgStatus.classList.remove('senderror')
		}, 3000)
	} else if (inputName.value !== '' && re.test(inputMail.value) && textarea.value === '') {
		errorName.classList.remove('actionerror')
		errorMail.classList.remove('actionerror')
		errorText.classList.add('actionerror')
		errorText.textContent = 'Wypełnij pole'
		textarea.classList.add('backerror')
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Nie udało się wysłać wiadomości'
		setTimeout(() => {
			errorText.classList.remove('actionerror')
			textarea.classList.remove('backerror')
			msgStatus.classList.remove('senderror')
		}, 3000)
	} else if (inputName.value === '' && re.test(inputMail.value) && textarea.value !== '') {
		errorName.classList.add('actionerror')
		errorName.textContent = 'Wypełnij pole'
		errorMail.classList.remove('actionerror')
		errorText.classList.remove('actionerror')
		inputName.classList.add('backerror')
		textarea.classList.remove('backerror')
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Nie udało się wysłać wiadomości'
		setTimeout(() => {
			errorName.classList.remove('actionerror')
			inputName.classList.remove('backerror')
			msgStatus.classList.remove('senderror')
		}, 3000)
	} else if (inputName.value === '' && inputMail.value === '' && textarea.value === '') {
		errorName.classList.add('actionerror')
		errorName.textContent = 'Wypełnij pole'
		errorMail.classList.add('actionerror')
		errorMail.textContent = 'Wypełnij pole'
		errorText.classList.add('actionerror')
		errorText.textContent = 'Wypełnij pole'
		inputName.classList.add('backerror')
		inputMail.classList.add('backerror')
		textarea.classList.add('backerror')
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Nie udało się wysłać wiadomości'
		setTimeout(() => {
			errorName.classList.remove('actionerror')
			errorMail.classList.remove('actionerror')
			errorText.classList.remove('actionerror')
			inputName.classList.remove('backerror')
			inputMail.classList.remove('backerror')
			textarea.classList.remove('backerror')
			msgStatus.classList.remove('senderror')
		}, 3000)
	} else if (inputName.value !== '' && inputMail.value === '' && textarea.value === '') {
		errorName.classList.remove('actionerror')
		errorMail.classList.add('actionerror')
		errorMail.textContent = 'Wypełnij pole'
		errorText.classList.add('actionerror')
		errorText.textContent = 'Wypełnij pole'
		inputMail.classList.add('backerror')
		textarea.classList.add('backerror')
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Nie udało się wysłać wiadomości'
		setTimeout(() => {
			errorMail.classList.remove('actionerror')
			errorText.classList.remove('actionerror')
			inputMail.classList.remove('backerror')
			textarea.classList.remove('backerror')
			msgStatus.classList.remove('senderror')
		}, 3000)
	} else if (inputName.value === '' && inputMail.value !== '' && textarea.value === '') {
		errorName.classList.add('actionerror')
		errorName.textContent = 'Wypełnij pole'
		errorMail.classList.add('actionerror')
		errorMail.textContent = 'Niepoprawy adres'
		errorText.classList.add('actionerror')
		errorText.textContent = 'Wypełnij pole'
		inputName.classList.add('backerror')
		inputMail.classList.add('backerror')
		textarea.classList.add('backerror')
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Nie udało się wysłać wiadomości'
		setTimeout(() => {
			errorName.classList.remove('actionerror')
			errorMail.classList.remove('actionerror')
			errorText.classList.remove('actionerror')
			inputName.classList.remove('backerror')
			inputMail.classList.remove('backerror')
			textarea.classList.remove('backerror')
			msgStatus.classList.remove('senderror')
		}, 3000)
	} else if (inputName.value === '' && inputMail.value === '' && textarea.value !== '') {
		errorName.classList.add('actionerror')
		errorName.textContent = 'Wypełnij pole'
		errorMail.classList.add('actionerror')
		errorMail.textContent = 'Wypełnij pole'
		errorText.classList.remove('actionerror')
		inputName.classList.add('backerror')
		inputMail.classList.add('backerror')
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Nie udało się wysłać wiadomości'
		setTimeout(() => {
			errorName.classList.remove('actionerror')
			errorMail.classList.remove('actionerror')
			inputName.classList.remove('backerror')
			inputMail.classList.remove('backerror')
			msgStatus.classList.remove('senderror')
		}, 3000)
	} else if (inputName.value !== '' && inputMail.value === '' && textarea.value !== '') {
		errorName.classList.remove('actionerror')
		errorMail.classList.add('actionerror')
		errorMail.textContent = 'Wypełnij pole'
		errorText.classList.remove('actionerror')
		inputMail.classList.add('backerror')
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Nie udało się wysłać wiadomości'
		setTimeout(() => {
			errorMail.classList.remove('actionerror')
			inputMail.classList.remove('backerror')
			msgStatus.classList.remove('senderror')
		}, 3000)
	} else if (inputName.value !== '' && inputMail.value !== '' && textarea.value === '') {
		errorName.classList.remove('actionerror')
		errorMail.classList.add('actionerror')
		errorMail.textContent = 'Niepoprawny adres'
		errorText.classList.add('actionerror')
		errorText.textContent = 'Wypełnij pole'
		textarea.classList.add('backerror')
		inputMail.classList.add('backerror')
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Nie udało się wysłać wiadomości'
		setTimeout(() => {
			errorText.classList.remove('actionerror')
			errorMail.classList.remove('actionerror')
			inputMail.classList.remove('backerror')
			textarea.classList.remove('backerror')
			msgStatus.classList.remove('senderror')
		}, 3000)
	} else if (inputName.value === '' && inputMail.value !== '' && textarea.value !== '') {
		errorName.classList.add('actionerror')
		errorName.textContent = 'Wypełnij pole'
		errorMail.classList.add('actionerror')
		errorMail.textContent = 'Niepoprawny adres'
		errorText.classList.remove('actionerror')
		inputName.classList.add('backerror')
		inputMail.classList.add('backerror')
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Nie udało się wysłać wiadomości'
		setTimeout(() => {
			errorName.classList.remove('actionerror')
			errorMail.classList.remove('actionerror')
			inputName.classList.remove('backerror')
			inputMail.classList.remove('backerror')
			msgStatus.classList.remove('senderror')
		}, 3000)
	} else {
		inputMail.classList.add('backerror')
		errorMail.classList.add('actionerror')
		errorMail.textContent = 'Niepoprawny adres'
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Nie udało się wysłać wiadomości'
		setTimeout(() => {
			inputMail.classList.remove('backerror')
			errorMail.classList.remove('actionerror')
			msgStatus.classList.remove('senderror')
		}, 3000)
	}
	e.preventDefault()
}

const clean = e => {
	inputName.value = ''
	inputMail.value = ''
	textarea.value = ''
	errorName.classList.remove('actionerror')
	errorMail.classList.remove('actionerror')
	errorText.classList.remove('actionerror')
	e.preventDefault()
}

burgerBtn.addEventListener('click', handleNav)
btnSend.addEventListener('click', send)
btnClear.addEventListener('click', clean)
cookieBtn.addEventListener('click', handleCookie)

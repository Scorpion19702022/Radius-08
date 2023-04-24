const msgStatus = document.querySelector('.msgstatus')

const inputName = document.querySelector('#name')
const inputMail = document.querySelector('#email')
const textarea = document.querySelector('#msg')

const errorName = document.querySelector('.errorname')
const errorMail = document.querySelector('.erroremail')
const errorText = document.querySelector('.errortext')

const btnSend = document.querySelector('.btnsend')
const btnClear = document.querySelector('.btnclean')

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

const send = e => {
	if (inputName.value !== '' && inputMail.value !== '' && textarea.value !== '') {
		msgStatus.classList.add('sendsuccess')
		msgStatus.textContent = 'Wiadomość wysłana poprawnie'
		errorName.classList.remove('actionerror')
		errorMail.classList.remove('actionerror')
		errorText.classList.remove('actionerror')
		setTimeout(() => {
			msgStatus.classList.remove('sendsuccess')
		}, 3000)
	} else if (inputName.value === '') {
		errorName.classList.add('actionerror')
		errorName.textContent = 'Wypełnij pole'
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Nie udało się wysłać wiadomości'
		setTimeout(() => {
			msgStatus.classList.remove('senderror')
		}, 3000)
	} else if (inputMail.value === '') {
		errorMail.classList.add('actionerror')
		errorMail.textContent = 'Wypełnij pole'
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Nie udało się wysłać wiadomości'
		setTimeout(() => {
			msgStatus.classList.remove('senderror')
		}, 3000)
	} else if (textarea.value === '') {
		errorText.classList.add('actionerror')
		errorText.textContent = 'Wypełnij pole'
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Nie udało się wysłać wiadomości'
		setTimeout(() => {
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

btnSend.addEventListener('click', send)
btnClear.addEventListener('click', clean)

// else if (inputName.value === '' || inputMail.value === '' || textarea.value === '') {
// 	errorName.classList.add('actionerror')
// 	errorName.textContent = 'Wypełnij pole'
// 	errorMail.classList.add('actionerror')
// 	errorMail.textContent = 'Wypełnij pole'
// 	errorText.classList.add('actionerror')
// 	errorText.textContent = 'Wypełnij pole'
// 	msgStatus.classList.add('senderror')
// 	msgStatus.textContent = 'Nie udało się wysłać wiadomości'
// 	setTimeout(() => {
// 		msgStatus.classList.remove('senderror')
// 	}, 3000)
// }

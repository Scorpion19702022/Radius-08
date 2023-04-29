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

const send = e => {
	if (inputName.value !== '' && re.test(inputMail.value) && textarea.value !== '') {
		msgStatus.classList.add('sendsuccess')
		msgStatus.textContent = 'Message sent successfully'
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
		errorName.textContent = 'Fill in this field'
		errorMail.classList.remove('actionerror')
		errorText.classList.add('actionerror')
		errorText.textContent = 'Fill in this field'
		inputName.classList.add('backerror')
		textarea.classList.add('backerror')
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Failed to send message'
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
		errorText.textContent = 'Fill in this field'
		textarea.classList.add('backerror')
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Failed to send message'
		setTimeout(() => {
			errorText.classList.remove('actionerror')
			textarea.classList.remove('backerror')
			msgStatus.classList.remove('senderror')
		}, 3000)
	} else if (inputName.value === '' && re.test(inputMail.value) && textarea.value !== '') {
		errorName.classList.add('actionerror')
		errorName.textContent = 'Fill in this field'
		errorMail.classList.remove('actionerror')
		errorText.classList.remove('actionerror')
		inputName.classList.add('backerror')
		textarea.classList.remove('backerror')
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Failed to send message'
		setTimeout(() => {
			errorName.classList.remove('actionerror')
			inputName.classList.remove('backerror')
			msgStatus.classList.remove('senderror')
		}, 3000)
	} else if (inputName.value === '' && inputMail.value === '' && textarea.value === '') {
		errorName.classList.add('actionerror')
		errorName.textContent = 'Fill in this field'
		errorMail.classList.add('actionerror')
		errorMail.textContent = 'Fill in this field'
		errorText.classList.add('actionerror')
		errorText.textContent = 'Fill in this field'
		inputName.classList.add('backerror')
		inputMail.classList.add('backerror')
		textarea.classList.add('backerror')
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Failed to send message'
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
		errorMail.textContent = 'Fill in this field'
		errorText.classList.add('actionerror')
		errorText.textContent = 'Fill in this field'
		inputMail.classList.add('backerror')
		textarea.classList.add('backerror')
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Failed to send message'
		setTimeout(() => {
			errorMail.classList.remove('actionerror')
			errorText.classList.remove('actionerror')
			inputMail.classList.remove('backerror')
			textarea.classList.remove('backerror')
			msgStatus.classList.remove('senderror')
		}, 3000)
	} else if (inputName.value === '' && inputMail.value !== '' && textarea.value === '') {
		errorName.classList.add('actionerror')
		errorName.textContent = 'Fill in this field'
		errorMail.classList.add('actionerror')
		errorMail.textContent = 'Invalid address'
		errorText.classList.add('actionerror')
		errorText.textContent = 'Fill in this field'
		inputName.classList.add('backerror')
		inputMail.classList.add('backerror')
		textarea.classList.add('backerror')
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Failed to send message'
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
		errorName.textContent = 'Fill in this field'
		errorMail.classList.add('actionerror')
		errorMail.textContent = 'Fill in this field'
		errorText.classList.remove('actionerror')
		inputName.classList.add('backerror')
		inputMail.classList.add('backerror')
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Failed to send message'
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
		errorMail.textContent = 'Fill in this field'
		errorText.classList.remove('actionerror')
		inputMail.classList.add('backerror')
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Failed to send message'
		setTimeout(() => {
			errorMail.classList.remove('actionerror')
			inputMail.classList.remove('backerror')
			msgStatus.classList.remove('senderror')
		}, 3000)
	} else if (inputName.value !== '' && inputMail.value !== '' && textarea.value === '') {
		errorName.classList.remove('actionerror')
		errorMail.classList.add('actionerror')
		errorMail.textContent = 'Invalid address'
		errorText.classList.add('actionerror')
		errorText.textContent = 'Fill in this field'
		textarea.classList.add('backerror')
		inputMail.classList.add('backerror')
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Failed to send message'
		setTimeout(() => {
			errorText.classList.remove('actionerror')
			errorMail.classList.remove('actionerror')
			inputMail.classList.remove('backerror')
			textarea.classList.remove('backerror')
			msgStatus.classList.remove('senderror')
		}, 3000)
	} else if (inputName.value === '' && inputMail.value !== '' && textarea.value !== '') {
		errorName.classList.add('actionerror')
		errorName.textContent = 'Fill in this field'
		errorMail.classList.add('actionerror')
		errorMail.textContent = 'Invalid address'
		errorText.classList.remove('actionerror')
		inputName.classList.add('backerror')
		inputMail.classList.add('backerror')
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Failed to send message'
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
		errorMail.textContent = 'Invalid address'
		msgStatus.classList.add('senderror')
		msgStatus.textContent = 'Failed to send message'
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

btnSend.addEventListener('click', send)
btnClear.addEventListener('click', clean)

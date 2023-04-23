const msgStatus = document.querySelector('.msgstatus')

const inputName = document.querySelector('#name')
const inputMail = document.querySelector('#email')
const textarea = document.querySelector('#msg')

const errorName = document.querySelector('.errorname')
const errorMail = document.querySelector('.erroremail')
const errorText = document.querySelector('.errortext')

const btnSend = document.querySelector('.btnsend')
const btnClear = document.querySelector('.btnclean')

console.log(document.location.search)

if (document.location.search === '?mail_status=sent') {
	msgStatus.classList.add('sendsuccess')
	msgStatus.textContent = 'Wiadomość wysłana poprawnie'
	setTimeout(() => {
		msgStatus.classList.remove('sendsuccess')
	}, 3000)
}
if (document.location.search === '?mail_status=error') {
	msgStatus.classList.add('senderror')
	msgStatus.textContent = 'Nie udało się wysłać wiadomości'
	setTimeout(() => {
		msgStatus.classList.remove('senderror')
	}, 3000)
}

const clean = () => {
	inputName.value = ''
	inputMail.value = ''
	textarea.value = ''
}

btnClear.addEventListener('click', clean)

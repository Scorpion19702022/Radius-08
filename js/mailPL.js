const msgStatus = document.querySelector('.msgstatus')

console.log(document.location.search)

if (document.location.search === '?mail_status=sent') {
	msgStatus.classList.add('sendsuccess')
	msgStatus.textContent = 'Wiadomość wysłana poprawnie'
}
if (document.location.search === '?mail_status=error') {
	msgStatus.classList.add('senderror')
	msgStatus.textContent = 'Nie udało się wysłać wiadomości'
}

const year = document.querySelector('.year')
const currentYear = new Date().getFullYear()

const yearFooter = () => {
	year.innerHTML = currentYear
}

yearFooter()

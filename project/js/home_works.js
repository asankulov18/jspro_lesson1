// Gmail checker
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9._%+-]+@+[0-9a-z.]+\.com$/

function validateGmail() {
	if (regExp.test(gmailInput.value)) {
		gmailResult.innerHTML = 'OK'
		gmailResult.style.color = 'green'
		gmailInput.value = ''
	} else {
		gmailResult.innerHTML = 'NOT OK'
		gmailResult.style.color = 'red'
	}
}

gmailButton.onclick = validateGmail

gmailInput.addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
		validateGmail()
	}
})

////move_block
const child_block = document.querySelector('.child_block')

let num = 0

const getRandomColor = () => {
	const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
	return randomColor
}

const counter = () => {
	num++
	child_block.style.left = `${num}px`
	// child_block.style.height = `${num/2}px`
	// child_block.style.width = `${num/2}px`
	child_block.style.backgroundColor = getRandomColor()

	if (num < 450) {
		requestAnimationFrame(counter)
	}
}

counter()

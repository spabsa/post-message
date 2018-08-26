const button = document.querySelector('#sendBtn');
const input = document.querySelector('#messageInput');
const messageOut = document.querySelector('#messageOut');

button.addEventListener('click', sendMsg);

function sendMsg() {
	let message = input.value;
	if(message === '') {
		alert('enter a value');
	} else {
	messageOut.innerHTML = message;
	input.value = '';
	}
}
var name = 'ynon';
var email = 'ynon@ynonperek.com';

var  colors = ['red', 'blue', 'green', 'orange', 'gray'];
var index = 0;

function change_background_color() {
	var next_color = colors[index];
	index = (index + 1) % colors.length;
	
	document.body.style.backgroundColor = next_color;	
}

var h1 = document.querySelector('h1');
h1.addEventListener('click', change_background_color);
var colors = ['red', 'blue', 'green', 'purple'];
var ul = document.querySelector('ul');


function shuffle() {
  ul.innerHTML = '';
  colors = _.shuffle(colors);

  for(var i=0; i<colors.length; i++) {
    var new_li = document.createElement('li');
    new_li.innerHTML = colors[i];
    new_li.style.color = colors[i];
    ul.appendChild(new_li);
  }
}

function paint_body(ev) {
  if (ev.target.tagName !== 'LI') {
    return;
  }

  var color = ev.target.innerHTML;
  document.body.style.backgroundColor = color;
}
ul.addEventListener('click', paint_body);

var button = document.querySelector('#btn-shuffle');
button.addEventListener('click', shuffle);

shuffle();
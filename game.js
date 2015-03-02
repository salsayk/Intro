function main() {
	
	/**
	 * el holds all important elements
	 * render(): JS -> web page
	 * 
	 * setTimeout / clearTimeout
	 */
	
	
	var el = {
		score: document.querySelector('#score'),
		game: document.querySelector('.game')	
	};

	var score = 0;
	var winner_index = 0;
	var clock;
	
	function timeout() {
		score -= 2;
		clock = setTimeout(timeout, 1000);
		render();
	}
	
	
	function render() {
		el.score.innerHTML = score;
		
		var current_winner = document.querySelector('.winner');
		current_winner.classList.remove('winner');
		
		var squares = document.querySelectorAll('.square');
		squares[winner_index].classList.add('winner');
	}
	
	function shuffle() {
		winner_index = Math.floor(Math.random() * 4);
	}
	
	function check_round(ev) {
		if (!ev.target.classList.contains('square')) {
			return;	
		}
		
		if (ev.target.classList.contains('winner')) {
			score += 5;	
		} else {
			score -= 5;
		}
		
		clearTimeout(clock);
		clock = setTimeout(timeout, 1000);
		
		shuffle();
		render();
	}
	
	el.game.addEventListener('click', check_round);	


	timeout();

	
}

main();
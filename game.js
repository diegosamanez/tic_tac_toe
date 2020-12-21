const game = document.querySelector('.game');
const message = document.querySelector('.winnerMessage')

let turno = 0;
const player1 = []
const player2 = []
const winningPlays = [
	['1','2','3'],
	['4','5','6'],
	['7','8','9'],
	['1','5','9'],
	['7','5','3'],
	['1','4','7'],
	['2','5','8'],
	['3','6','9'],
]

const plays = arr => {
	let n = 0
	let res = false
	//evalual cada array ganador y si se tiene los 3 gano
	winningPlays.forEach( arrG => {
		arrG.forEach( el => {
			if(arr.includes(el)) n++
			if(n === 3) res = true
		})
		n=0
	})
	return res
}

game.addEventListener('click', e => {
    if (e.target.innerHTML === '') {
        if (turno === 0) {
            e.target.innerHTML = 'O'
            e.target.style.color = 'red'
            turno++
            player1.push(e.target.dataset.pos)

            if(plays(player1)) {
            	message.innerHTML = `
            		<p>Player 1 Win</p>
            		<p class="play">Play</p>
            	`
            	message.style.visibility = 'visible'
            	message.style.transform = 'scale(1)'
            }
        } else {
            e.target.innerHTML = 'X'
            turno--
            player2.push(e.target.dataset.pos)

            if(plays(player2)) {
            	message.innerHTML = `
            		<p>Player 2 Win</p>
            		<p class="play">Play</p>
            	`
            	message.style.visibility = 'visible'
            	message.style.transform = 'scale(1)'
            }
        }
    }
})

message.addEventListener('click', () => {
	player1.splice(0, player1.length)
	player2.splice(0, player2.length)
	for(let i = 0; i < game.children.length; i++){
		game.children[i].innerHTML = ''
		game.children[i].style.color = 'white'
	}
	turno = 0
	message.style.transform = 'scale(0)'
	message.style.visibility = 'hidden'
})

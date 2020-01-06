console.log("King Sandwich Game");

/// this will contain each of my classes one for the sandwich that needs to be made for the game
// there will be properties of a boolean for the sandwich, each corresponding to the ingredient 
// the other will  contain the recipes in which the user will need to choose from 
// these will also be boolean but to down the line will specifically need to be true to match with the sandwich



class Sandwich {
	constructor(name, bread) {

		this.name = this.name 
		this.bread = false

	}

	// reuben() {

	// 	this.name = 'reuben'

	// }

	// blt() {
	// 	this.name = 'blt'

	// }

	// pbjj() {
	// 	this.name = 'pb&j&j'

	// }

	// turkeyClub() {

	// 	this.name = 'turkeyclub'

	// }
}


class Recipe {
	constructor(ingredient, click) {

		this.ingredient = this.ingredient
		this.click = false

	}
	wasClicked() {

		this.click = true

	}


}

class Badrecipe {
	constructor(img, ingredient) {

		this.img = this.img
		this.ingredient = false 
	} 
}


class Player {
	constructor(name,hasName) {

		this.name = this.name
		this.hasName = false

	}

}



// here I will have my first object which will the game that the user will be playing
// this will house all of the information about the game while also containing the results
// of each round and maintaing all of the images that will be used 
// there will be created divs that handle images 



const theSandwichGame = {
	typeOfSandwich: ['blt','pb&j&j','reuben', 'turkeyclub'],
	theSandwich: null,
	ingredients: [],
	typeOfIngredients: [],
	// choices: null,
	correct: false,
	name: null, 
	timer: 30,
	round: 0,
	player1Score: 0, 
	player2Score: 0,
	turn: false,
	playerTurn: null,
	interval: null,
	badIngredient: [],
	playerNames: [],
	randomImg: null,
	timerPoints: 0,

	generateSandwich(){

		const randomSandwich = Math.floor(Math.random() * this.typeOfSandwich.length)

		this.theSandwich = new Sandwich()

		this.theSandwich.name = this.typeOfSandwich[randomSandwich]



		// this.chooseSandwich()

		this.theIngredients()

		const list = this.typeOfIngredients.ingredient1 + " " + this.typeOfIngredients.ingredient2 + " " + this.typeOfIngredients.ingredient3

		

	},
	theIngredients(){



		if(this.theSandwich.name === "blt") {

				this.theSandwich.bread = true
				this.typeOfIngredients.ingredient1 = 'bacon'
				this.typeOfIngredients.ingredient2 = 'lettuce'
				this.typeOfIngredients.ingredient3 = 'tomato'	

				const bacon = new Recipe()
				const tomato = new Recipe()
				const lettuce = new Recipe()

				bacon.ingredient = 'bacon'
				tomato.ingredient = 'tomato'
				lettuce.ingredient = 'lettuce'

				this.ingredients.push(bacon)
				this.ingredients.push(tomato)
				this.ingredients.push(lettuce)
		}	

		else if(this.theSandwich.name === "pb&j&j") {

				this.theSandwich.bread = true
				this.typeOfIngredients.ingredient1 = 'peanutbutter'
				this.typeOfIngredients.ingredient2 = 'jelly'
				this.typeOfIngredients.ingredient3 = 'jam'	

				
				const peanutbutter = new Recipe()
				const jelly = new Recipe()
				const jam = new Recipe()

				peanutbutter.ingredient = 'peanutbutter'
				jelly.ingredient = 'jelly'
				jam.ingredient = 'jam'

				this.ingredients.push(peanutbutter)
				this.ingredients.push(jelly)
				this.ingredients.push(jam)
		}	

	  else if(this.theSandwich.name === "reuben") {

	  		this.theSandwich.bread = true
			this.typeOfIngredients.ingredient1 = 'cornedbeef'
			this.typeOfIngredients.ingredient2 = 'swisscheese'
			this.typeOfIngredients.ingredient3 = 'sauerkraut'	

			
			const cornedBeef = new Recipe()
			const swissCheese = new Recipe()
			const sauerkraut = new Recipe()

			cornedBeef.ingredient = 'cornedbeef'
			swissCheese.ingredient = 'swisscheese'
			sauerkraut.ingredient = 'sauerkraut'

			this.ingredients.push(cornedBeef)
			this.ingredients.push(swissCheese)
			this.ingredients.push(sauerkraut)
	  }

	  else if(this.theSandwich.name === 'turkeyclub') {

	  		this.theSandwich.bread = true
			this.typeOfIngredients.ingredient1 = 'ham'
			this.typeOfIngredients.ingredient2 = 'mayo'
			this.typeOfIngredients.ingredient3 = 'lettucetomato'	

			
			const ham = new Recipe()
			const mayo = new Recipe()
			const lettuceTomato = new Recipe()

			ham.ingredient = 'ham'
			mayo.ingredient = 'mayo'
			lettuceTomato.ingredient = 'lettucetomato'

			this.ingredients.push(ham)
			this.ingredients.push(mayo)
			this.ingredients.push(lettuceTomato)




	  }

},

intro(){

		
		$('html').css({'background-image': 'url(https://cdna.artstation.com/p/assets/images/images/007/419/268/large/connor-wakes-conwak-sotn.jpg?1506008314)',
		"background-size": "100%"})



		$('#user1-form').remove()
		$('#user2-form').remove()

		//welcome user to the game, and give them instructions 

		$('<p class="messages"></p>').text("Welcome " + this.playerNames[0].name + " & "  + this.playerNames[1].name +  " to the Your Royal Sandwich Game").appendTo($('#game-dialouge')).fadeOut(8800)
		$('<p class="messages"></p>').text('You have been tasked with provding his Royal Highness a sandwich of his very desire!').appendTo($('#game-dialouge')).fadeOut(9000)
		$("<p class='messages'></p>").text('Provide me with the correct recipe or face dire concequences!').appendTo($('#game-dialouge')).fadeOut(10000)


		this.generateSandwich()

		$("<p class='messages'></p>").text('What are the ingredients for a ' + this.theSandwich.name + " !").appendTo($('#game-dialouge')).fadeOut(11000)

		// const input = prompt('Pick! (0/1)')
		// if(input === '0'){
		// 	this.choices = 0
		// }if(input === '1'){
		// 	this.choices = 1
		// }

		// this.generateSandwich()
		// alert('Your sandwich is ' + this.theSandwich)


		// $('<form id="recipe-form"></form>').appendTo($('#game-dialouge'))
		// $('<input id="recipe-input" placeholder="Ingredients"></input>').appendTo($('#recipe-form'))
		// $('<button id="recipe-button">Enter</button>').appendTo($('#recipe-form'))

		
		this.theInterval()

		this.printIngredients()

		this.checkPlayerRound()

		



		// setTimeout(this.theInterval, 1000)

		// console.log(setTimeout);

		// console.log(this.theInterval);


		// console.log(setTimeout(this.theInterval, 1000));

		// setTimeout(this.printIngredients, 1000)

		// setTimeout(this.checkPlayerRound, 1000)
		



	},

	playerRound($userInput) {

		this.timerPoints = this.timer

		const nameOfIngre = $userInput.data().whichIngredient

		console.log('click is here');

		console.log($userInput.data().whichIngredient);
		
		for(let i = 0; i < this.ingredients.length; i++) { 

			if(nameOfIngre === this.ingredients[i].ingredient){

				$("<p class='messages'></p>").text("Good job that is a correct ingredient for a " + this.theSandwich.name).appendTo('h2').fadeOut(1000)

				$userInput.remove()	

				this.ingredients[i].click = true


				this.verifyAllWereClicked($userInput)

			}	
			// if all of the correct ingredients are moved then the user receives a completed sandwich 

		}




		if(this.correct === true) {
			
			$('.player').remove()
			$('.messages').remove()

			$("<p class='messages'></p>").text("You made a " + this.theSandwich.name).appendTo('#game-dialouge').fadeOut(10000)


			this.printSandwich()
			this.tallyPoints()
			this.clearTheInterval()
			this.printStats()
			this.resetRound()
			this.newRound()



		}

		// const input = prompt("What is one the of the ingredients?")
		// if(input === this.typeOfIngredients.ingredient1 || input === this.typeOfIngredients.ingredient2 || input === this.typeOfIngredients.ingredient3){
		// 	this.correct = true
		// 	console.log('that\'s right');
		// }
		// else if(input !== this.typeOfIngredients.ingredient1 || input !== this.typeOfIngredients.ingredient2 || input !== this.typeOfIngredients.ingredient3){
		// 	alert('that\'s not right' );
		// 	this.test2()

		// https://cdn.apps.joltteam.com/brikbuild/sandwich-pixel-art-8bit-bread-brik-bin-finger-food-food-pixel-pixel-art-sandwich-5a24f9b6f6c96a8d2972098a.brickImg.jpg
	},

	// player2Round($userInput) {

	// 	const nameOfIngre = $userInput.data().whichIngredient

	// 	console.log(nameOfIngre + ' player2');
		
	// 	for(let i = 0; i < this.ingredients.length; i++) { 

	// 		if(nameOfIngre === this.ingredients[i].ingredient){

	// 			$("<p class='messages'></p>").text("Good job that is a correct ingredient for a " + this.theSandwich).appendTo('#game-dialouge').fadeOut(1000)

	// 			$userInput.remove()	

	// 			this.ingredients[i].click = true

	// 			this.verifyAllWereClicked($userInput)

	// 		}	
	// 		// if all of the correct ingredients are moved then the user receives a completed sandwich 

	// 	}


	// 	if(this.correct === true) {
			
	// 		$('.player').remove()
	// 		$('.messages').remove()

	// 		$("<p class='messages'></p>").text("You made a " + this.theSandwich).appendTo('#game-dialouge').fadeOut(10000)


	// 		this.printSandwich()
	// 		this.clearTheInterval()
	// 		this.player2Score ++
	// 		this.printStats()
	// 		this.resetRound()
	// 		this.newRound()
	// 		this.checkPlayerRound()


	// 	}

	// 	if(this.timer > 0 ){

	// 		this.checkTimer()

	// 	}

	// 	// const input = prompt("What is one the of the ingredients?")
	// 	// if(input === this.typeOfIngredients.ingredient1 || input === this.typeOfIngredients.ingredient2 || input === this.typeOfIngredients.ingredient3){
	// 	// 	this.correct = true
	// 	// 	console.log('that\'s right');
	// 	// }
	// 	// else if(input !== this.typeOfIngredients.ingredient1 || input !== this.typeOfIngredients.ingredient2 || input !== this.typeOfIngredients.ingredient3){
	// 	// 	alert('that\'s not right' );
	// 	// 	this.test2()

	// 	// https://cdn.apps.joltteam.com/brikbuild/sandwich-pixel-art-8bit-bread-brik-bin-finger-food-food-pixel-pixel-art-sandwich-5a24f9b6f6c96a8d2972098a.brickImg.jpg





	// },





	printSandwich() {

		if(this.theSandwich.name === 'pb&j&j') {

			$('<img src= "photo/pbjj.png">').css({
				'height': '150px',
				'margin-top': '250px'
			}).appendTo($('#sandwich')).fadeOut(1000)
		}

		if(this.theSandwich.name === 'blt') {
			$('<img src= "photo/blt.png">').css({
				'height': '150px',
				'margin-top': '250px' 
			}).appendTo($('#sandwich')).fadeOut(1000)
		}

		if(this.theSandwich.name === 'reuben') {
			$('<img src= "photo/reuben.png">').css({
				'height': '150px',
				'margin-top': '250px'
			}).appendTo($('#sandwich')).fadeOut(1000)
		}

		if(this.theSandwich.name === 'turkeyclub') {
			$('<img src= "photo/turkeyclub.png">').css({
				'height': '150px',
				'margin-top': '250px'
			}).appendTo($('#sandwich')).fadeOut(1000)
		}
	},

	printIngredients() {


		// const newSandwich = new Sandwich()

		// $('#ingredients-container').text(this.ingredients[0])

		if(this.theSandwich.name === 'blt') {

			this.createIngredients()

			// this.badIngredient[this.randomImg].img.appendTo('#bad-ingredients')
			$('<img class="ingredients" src="photo/bacon.png">').appendTo('#bacon').css('width', '40%').attr('data-which-ingredient', this.ingredients[0].ingredient)
			$('<img class="ingredients" src="photo/tomato.png">').appendTo('#tomato').attr('data-which-ingredient', this.ingredients[1].ingredient)
			// this.badIngredient[this.randomImg].img.appendTo('#bad-ingredients')	
			$('<img class="ingredients" src="photo/lettuce.png">').appendTo('#lettuce').attr('data-which-ingredient', this.ingredients[2].ingredient)
			// this.badIngredient[this.randomImg].img.appendTo('#bad-ingredients')

		}

		if(this.theSandwich.name === 'pb&j&j') {

			this.createIngredients()

			$('<img class="ingredients" src="photo/peanutbutter.png">').appendTo('#peanutbutter').attr('data-which-ingredient', this.ingredients[0].ingredient)
			// this.badIngredient[this.randomImg].img.appendTo('#bad-ingredients')
			$('<img class="ingredients" src="photo/jam.png">').appendTo('#jelly').attr('data-which-ingredient', this.ingredients[1].ingredient)
			// this.badIngredient[this.randomImg].img.appendTo('#bad-ingredients')
			$('<img class="ingredients" src="photo/jam2.png">').appendTo('#jam').attr('data-which-ingredient', this.ingredients[2].ingredient)
			// this.badIngredient[this.randomImg].img.appendTo('#bad-ingredients')


		}

		if(this.theSandwich.name === 'reuben') {

			this.createIngredients()
			

			$('<img class="ingredients" src="photo/cornedbeef.png">').appendTo('#cornedbeef').attr('data-which-ingredient', this.ingredients[0].ingredient)
			$('<img class="ingredients" src="photo/swisscheese.png">').appendTo('#swisscheese').attr('data-which-ingredient', this.ingredients[1].ingredient)
			// this.badIngredient[this.randomImg].img.appendTo('#bad-ingredients')
			// this.badIngredient[this.randomImg].img.appendTo('#bad-ingredients')
			$('<img class="ingredients" src="photo/sauerkraut.png">').appendTo('#sauerkraut').attr('data-which-ingredient', this.ingredients[2].ingredient)

		}

		if(this.theSandwich.name === 'turkeyclub') {

			this.createIngredients()
			

			$('<img class="ingredients" src="photo/ham.png">').appendTo('#ham').attr('data-which-ingredient', this.ingredients[0].ingredient)
			// this.badIngredient[this.randomImg].img.appendTo('#bad-ingredients')
			$('<img class="ingredients" src="photo/mayo.png">').appendTo('#mayo').attr('data-which-ingredient', this.ingredients[1].ingredient)
			// this.badIngredient[this.randomImg].img.appendTo('#bad-ingredients')
			$('<img class="ingredients" src="photo/tomatolettuce.png">').appendTo('#lettucetomato').attr('data-which-ingredient', this.ingredients[2].ingredient)


		}


	},
	createIngredients() {

		// this.createBadIngredients()

		$('<div><div>').attr('id', this.typeOfIngredients.ingredient1).appendTo('#ingredients-container')
		$('<div><div>').attr('id', this.typeOfIngredients.ingredient2).appendTo('#ingredients-container')
		$('<div><div>').attr('id', this.typeOfIngredients.ingredient3).appendTo('#ingredients-container')

	},



	printBadIngredients() {

		$('<div><div>').attr('id', this.badIngredient[this.randomImg].img).appendTo('#bad-ingredients')
		$('<div><div>').attr('id', this.badIngredient[this.randomImg].img).appendTo('#bad-ingredients')
		$('<div><div>').attr('id', this.badIngredient[this.randomImg].img).appendTo('#bad-ingredients')


	},


	createBadIngredients() {

		const badIngredient1 = new Badrecipe()
		const badIngredient2 = new Badrecipe()
		const badIngredient3 = new Badrecipe()
		const badIngredient4 = new Badrecipe()
		const badIngredient5 = new Badrecipe()
		const badIngredient6 = new Badrecipe()

		this.badIngredient.push(badIngredient1)
		this.badIngredient.push(badIngredient2)
		this.badIngredient.push(badIngredient3)
		this.badIngredient.push(badIngredient4)
		this.badIngredient.push(badIngredient5)
		this.badIngredient.push(badIngredient6)

		this.badIngredient[0].img = $('<img class="ingredients" src="photo/shoe.png">')
		this.badIngredient[1].img = $('<img class="ingredients" src="photo/moldycheese.png">')
		this.badIngredient[2].img = $('<img class="ingredients" src="photo/peanut.png">')
		this.badIngredient[3].img = $('<img class="ingredients" src="photo/oldbacon.png">')
		this.badIngredient[4].img = $('<img class="ingredients" src="photo/tortilla.png">')
		this.badIngredient[5].img = $('<img class="ingredients" src="photo/nutella.png">')


		this.randomImg = Math.floor(Math.random() * this.badIngredient.length)

		console.log(Math.floor(Math.random() * this.badIngredient.length));


		




	},

	verifyAllWereClicked() {


		if(this.ingredients[0].click === true && this.ingredients[1].click === true && this.ingredients[2].click === true ){

			this.correct = true

		}



	},
	theInterval() {


		this.interval = setInterval(() => {
			this.timer --
			$('#timer').text(this.timer)

			if(this.timer <= 0 ) {

				this.checkTimer()

			}

		},500)






	},

	printStats() {


		$('#timer').text(this.timer)
		$('#round').text(this.round)
		$('#score1').text(this.player1Score)
		$('#score2').text(this.player2Score)

		


	},
	clearTheInterval() {

		clearInterval(this.interval)

	},
	newRound() {

		if(this.round > 5 && this.round < 7){

			this.winChecker()
		}

		if(this.round < 6 ){

			this.generateSandwich()
			$("<p class='messages'></p>").text("Next Round!").css('font-size', '100px').appendTo('#game-dialouge').fadeOut(1000)
			$("<p class='messages'></p>").text('What are the ingredients for a ' + this.theSandwich.name + " !").appendTo($('#game-dialouge')).fadeOut(11000)
			this.printIngredients()
			this.theInterval()
			this.checkPlayerRound()


		}

		// if(this.round > 2 && this.round < 4)


	},

	resetRound() {

		this.correct = false
		this.timer = 30
		this.ingredients.splice(0,3)

		for(let i = 0; i < this.ingredients.length ; i++){
			this.ingredients[i].click = false


		}

	},
	winChecker() {

		if(this.player1Score > this.player2Score){
			this.clearTheInterval()

			$('<p class="messages"></p>').text("Congrats " + this.playerNames[0].name +  ", you have satisfied his royal highness").appendTo($('#game-dialouge')).fadeOut(8800)
			$('<p class="messages"></p>').text('You have spared yourself this day!').appendTo($('#game-dialouge')).fadeOut(9000)
			$("<p class='messages'></p>").text('Farewell!').appendTo($('#game-dialouge')).fadeOut(10000)
			$("<p class='messages'></p>").text("GAME OVER").css('font-size', '100px').appendTo('#game-dialouge')

		}
		if(this.player1Score < this.player2Score){
			this.clearTheInterval()

			$('<p class="messages"></p>').text("Congrats " + this.playerNames[1].name +  ", you have satisfied his royal highness").appendTo($('#game-dialouge')).fadeOut(8800)
			$('<p class="messages"></p>').text('You have spared yourself this day!').appendTo($('#game-dialouge')).fadeOut(9000)
			$("<p class='messages'></p>").text('Farewell!').appendTo($('#game-dialouge')).fadeOut(10000)
			$("<p class='messages'></p>").text("GAME OVER").css('font-size', '100px').appendTo('#game-dialouge')

		}
	},

	tallyPoints() {

		if(this.playerTurn === this.playerNames[0].name) {
			this.player1Score ++
			this.round ++
			this.tallyTimerP1()

		}
		
		if(this.playerTurn === this.playerNames[1].name) {
			this.player2Score ++ 
			this.round ++ 
			this.tallyTimerP2()

		}

	},

	createPlayer1(user1Input,) {
		

		const player1 = new Player()

		this.playerNames.push(player1)

		this.playerNames[0].name = user1Input.value

		this.playerNames[0].hasName = true

	},

	createPlayer2(user2Input) {

		const player2 = new Player()

		this.playerNames.push(player2)

		this.playerNames[1].name = user2Input.value

		this.playerNames[1].hasName = true

		this.verifyTwoPlayers()

	},

	checkPlayerRound() {

		if(this.turn === false) {


			$('<p class="player"></p>').text(this.playerNames[0].name + ' turn').appendTo('#game-dialouge')
			this.turn = !this.turn
			this.playerTurn = this.playerNames[0].name

			this.playerRound()

		}

		if(this.turn === true) {

			$('<p class="player"></p>').text(this.playerNames[1].name + ' turn').appendTo('#game-dialouge')

			this.turn = !this.turn
			this.playerTurn = this.playerNames[1].name

			this.playerRound()

		}


	},

	verifyTwoPlayers() {

		if(this.playerNames[0].hasName === true && this.playerNames[1].hasName === true) {

			this.intro()

		}

	},

	checkTimer() {


		
		$('.ingredients').remove()
		$('.player').remove()
		this.clearTheInterval()
		this.round ++
		this.timer = 30
		this.printStats()
		this.resetRound()
		this.newRound()



	},
	bonusRound() {




	},

	tallyTimerP1() {



		if(this.timerPoints < 30 && this.timerPoints > 25) {

			this.player1Score += 3

		}

		if(this.timerPoints < 25 && this.timerPoints > 15) {

			this.player1Score += 2

		}

		if(this.timerPoints < 15 && this.timerPoints > 0 ) {

			this.player1Score += 1
		}


	},

	tallyTimerP2() {



		if(this.timerPoints < 30 && this.timerPoints > 25) {

			this.player2Score += 3

		}

		if(this.timerPoints < 25 && this.timerPoints > 15) {

			this.player2Score += 2

		}

		if(this.timerPoints < 15 && this.timerPoints > 0 ) {

			this.player2Score += 1
		}


	}

}

$('#user1-form').on('submit', (e) => {
	
	e.preventDefault()

	const input = $('#user1-input')

	const user1Input = input[0]

	console.log(user1Input.value);

	theSandwichGame.createPlayer1(user1Input)

})


$('#user2-form').on('submit', (e) => {
	
	e.preventDefault()

	const input = $('#user2-input')

	const user2Input = input[0]

	console.log(user2Input.value);

	theSandwichGame.createPlayer2(user2Input)

})



$('#ingredients-container').on('click', (e) => {


	const $userInput = $(e.target)

	theSandwichGame.playerRound($userInput)





})

	






// here my event listener will live that needs to be checking for user input to start the game
// and looking for clicks on the divs that I will be creating a class for, there should be two classes
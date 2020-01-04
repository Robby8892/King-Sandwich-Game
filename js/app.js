console.log("King Sandwich Game");

/// this will contain each of my classes one for the sandwich that needs to be made for the game
// there will be properties of a boolean for the sandwich, each corresponding to the ingredient 
// the other will  contain the recipes in which the user will need to choose from 
// these will also be boolean but to down the line will specifically need to be true to match with the sandwich



class Sandwich {
	constructor(bread) {

		this.bread = false

	}
}


class Recipe {
	constructor(ingredient, click){

		this.ingredient = this.ingredient
		this.click = false

	}
	wasClicked() {

		this.click = true

	}


}

class Player {
	constructor(name,hasName){

		this.name = this.name
		this.hasName = false

	}

}



// here I will have my first object which will the game that the user will be playing
// this will house all of the information about the game while also containing the results
// of each round and maintaing all of the images that will be used 
// there will be created divs that handle images 



const theSandwichGame = {
	typeOfSandwich: ['blt', 'pb&j&j'],
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
	interval: null,
	playerNames: [],

	generateSandwich(){

		const randomSandwich = Math.floor(Math.random() * this.typeOfSandwich.length)

		this.theSandwich = this.typeOfSandwich[randomSandwich]

		// this.chooseSandwich()

		this.theIngredients()

		const list = this.typeOfIngredients.ingredient1 + " " + this.typeOfIngredients.ingredient2 + " " + this.typeOfIngredients.ingredient3

		

	},
	theIngredients(){

		if(this.theSandwich === "blt"){

			this.typeOfIngredients.bread = true
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

		else if(this.theSandwich === "pb&j&j"){

			this.typeOfIngredients.bread = true
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
	// else {
	// 	this.theSandwich = "Is not a sandwich"
	// 	this.typeOfIngredients.ingredient1 = 'nothing'
	// 	this.typeOfIngredients.ingredient2 = 'more nothing'
	// 	this.typeOfIngredients.ingredient3 = 'extra nothing'
	// 	}
	// },
	// chooseSandwich() {
	// 	if(this.choices === 0){

	// 		this.ingredients = true
	// 		this.theSandwich = this.typeOfSandwich[this.choices]

	// 	}
	// 	if(this.choices === 1) {

	// 		this.ingredients = true
	// 		this.theSandwich = this.typeOfSandwich[this.choices]
	// 	}

	},

	intro(){

		// this.name = user1Input.value

	

		$('#user1-form').remove()
		$('#user2-form').remove()

		//welcome user to the game, and give them instructions 

		$('<p class="messages"></p>').text("Welcome " + this.playerNames[0].name + " & "  + this.playerNames[1].name +  " to the Your Royal Sandwich Game").appendTo($('#game-dialouge')).fadeOut(8800)
		$('<p class="messages"></p>').text('You have been tasked with provding his Royal Highness a sandwich of his very desire!').appendTo($('#game-dialouge')).fadeOut(9000)
		$("<p class='messages'></p>").text('Provide me with the correct recipe or face dire concequences!').appendTo($('#game-dialouge')).fadeOut(10000)


		this.generateSandwich()

		$("<p class='messages'></p>").text('What are the ingredients for a ' + this.theSandwich + " !").appendTo($('#game-dialouge')).fadeOut(11000)

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

		this.printStats()

		this.printIngredients()

		this.gameRound()



	},

	gameRound() {


		const nameOfIngre = $userInput.data().whichIngredient
		
		for(let i = 0; i < this.ingredients.length; i++) { 

			if(nameOfIngre === this.ingredients[i].ingredient){

			$("<p class='messages'></p>").text("Good job that is a correct ingredient for a " + this.theSandwich).appendTo('#game-dialouge').fadeOut(1000)

			$userInput.remove()	

			this.ingredients[i].click = true

			this.verifyAllWereClicked($userInput)

			}	
			// iff all of the correct ingredients are moved then the user receives a completed sandwich 

		}


		if(this.correct === true) {
			


			$("<p class='messages'></p>").text("You made a " + this.theSandwich).appendTo('#game-dialouge').fadeOut(10000)


			this.printSandwich()
			this.clearTheInterval()
			this.round ++
			this.score ++
			this.timer = 30
			this.printStats()
			this.resetRound()
			this.newRound()


		}


		if(this.timer <= 0){

			this.clearTheInterval()
			this.round ++
			this.timer = 30
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
	printSandwich() {

		if(this.theSandwich === 'pb&j&j') {

			$('<img src= "photo/pbjj.png">').css({
				'height': '150px',
				'margin-top': '250px'
			}).appendTo($('#sandwich'))

		}

		if(this.theSandwich === 'blt') {
			$('<img src= "photo/blt.png">').css({
			  'height': '150px',
			  'margin-top': '250px' 
			}).appendTo($('#sandwich'))
		
		} else {
			$('<img src= "">')
		}
	},

	printIngredients() {


		// const newSandwich = new Sandwich()

		// $('#ingredients-container').text(this.ingredients[0])

		if(this.theSandwich === 'blt'){

			this.createIngredients()

			$('<img class="ingredients" src="photo/bacon.png">').appendTo('#bacon').css('width', '40%').attr('data-which-ingredient', this.ingredients[0].ingredient)
			$('<img class="ingredients" src="photo/tomato.png">').appendTo('#tomato').attr('data-which-ingredient', this.ingredients[1].ingredient)
			$('<img class="ingredients" src="photo/lettuce.png">').appendTo('#lettuce').attr('data-which-ingredient', this.ingredients[2].ingredient)
		
		}

		if(this.theSandwich === 'pb&j&j'){

			this.createIngredients()

			$('<img class="ingredients" src="photo/peanutbutter.png">').appendTo('#peanutbutter').attr('data-which-ingredient', this.ingredients[0].ingredient)
			$('<img class="ingredients" src="photo/jam.png">').appendTo('#jelly').attr('data-which-ingredient', this.ingredients[1].ingredient)
			$('<img class="ingredients" src="photo/jam2.png">').appendTo('#jam').attr('data-which-ingredient', this.ingredients[2].ingredient)


		}


	},
	createIngredients() {

		$('<div><div>').attr('id', this.typeOfIngredients.ingredient1).appendTo('#ingredients-container')
		$('<div><div>').attr('id', this.typeOfIngredients.ingredient2).appendTo('#ingredients-container')
		$('<div><div>').attr('id', this.typeOfIngredients.ingredient3).appendTo('#ingredients-container')
},

	verifyAllWereClicked($userInput) {


		if(this.ingredients[0].click === true && this.ingredients[1].click === true && this.ingredients[2].click === true ){

			this.correct = true

			}

				

	},
	theInterval() {
			
			
			this.interval = setInterval(() => {
				this.timer --
				$('#timer').text(this.timer)

		},1000)



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

		if(this.round > 2 && this.round < 4){

			this.winChecker()
		}

		if(this.round < 3 ){

			this.generateSandwich()
			$("<p class='messages'></p>").text("Next Round!").css('font-size', '100px').appendTo('#game-dialouge').fadeOut(1000)
			$("<p class='messages'></p>").text('What are the ingredients for a ' + this.theSandwich + " !").appendTo($('#game-dialouge')).fadeOut(11000)
			this.printIngredients()
			this.theInterval()
			// this.gameRound()


		}

		// if(this.round > 2 && this.round < 4)


	},

	resetRound() {

		this.correct = false


		for(let i = 0; i < this.ingredients.length ; i++){
			this.ingredients[i].click = false


		}

	},
	winChecker() {

		// if(this.score === 3){
			this.clearTheInterval()

			$('<p class="messages"></p>').text("Congrats " + this.name +  ", you have satisfied his royal highness").appendTo($('#game-dialouge')).fadeOut(8800)
			$('<p class="messages"></p>').text('You have spared yourself this day!').appendTo($('#game-dialouge')).fadeOut(9000)
			$("<p class='messages'></p>").text('Farewell!').appendTo($('#game-dialouge')).fadeOut(10000)
			$("<p class='messages'></p>").text("GAME OVER").css('font-size', '100px').appendTo('#game-dialouge')

		// }


	},

	tallyPoints() {

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


	},

	verifyTwoPlayers() {

		if(this.playerNames[0].hasName === true && this.playerNames[1].hasName === true) {

			this.intro()

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

	theSandwichGame.gameRound($userInput)


})







// here my event listener will live that needs to be checking for user input to start the game
// and looking for clicks on the divs that I will be creating a class for, there should be two classes
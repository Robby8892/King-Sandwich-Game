console.log("King Sandwich Game");

/// this will contain each of my classes one for the sandwich that needs to be made for the game
// there will be properties of a boolean for the sandwich, each corresponding to the ingredient 
// the other will  contain the recipes in which the user will need to choose from 
// these will also be boolean but to down the line will specifically need to be true to match with the sandwich



class Sandwich {
	constructor(bread,ingredient1,ingredient2,ingredient3) {

		this.bread = false
		this.ingredient1 = this.ingredient1
		this.ingredient2 = this.ingredient2
		this.ingredient3 = this.ingredient3



	}
}


class Recipe {
	constructor(ingredient, click, bacon, lettuce, tomato){

		this.ingredient = true
		this.click = false

	}
	wasClicked() {

		this.click = true

	}


}

class Player {
	constructor(name, name2){

		this.name = this.name
		this.name2 = this.name2

	}

}



// here I will have my first object which will the game that the user will be playing
// this will house all of the information about the game while also containing the results
// of each round and maintaing all of the images that will be used 
// there will be created divs that handle images 



const theSandwichGame = {
	typeOfSandwich: ['pb&j&j','blt'],
	theSandwich: null,
	ingredients: [],
	typeOfIngredients: null,
	// choices: null,
	correct: false,
	name: null, 
	timer: 30,
	round: 0,
	score: 0, 

	generateSandwich(){

		const randomSandwich = Math.floor(Math.random() * this.typeOfSandwich.length)

		this.theSandwich = this.typeOfSandwich[randomSandwich]

		this.typeOfIngredients = new Sandwich()

		// this.chooseSandwich()

		this.theIngredients()

		console.log(this.typeOfIngredients.ingredient1);

		const list = this.typeOfIngredients.ingredient1 + " " + this.typeOfIngredients.ingredient2 + " " + this.typeOfIngredients.ingredient3

		// console.log("It ha


	},
	theIngredients(){

		if(this.theSandwich === "blt"){

			this.typeOfIngredients.bread = true
			this.typeOfIngredients.ingredient1 = 'bacon'
			this.typeOfIngredients.ingredient2 = 'lettuce'
			this.typeOfIngredients.ingredient3 = 'tomato'	
			
		}	

		else if(this.theSandwich === "pb&j&j"){
			this.typeOfIngredients.bread = true
			this.typeOfIngredients.ingredient1 = 'peanutbutter'
			this.typeOfIngredients.ingredient2 = 'jelly'
			this.typeOfIngredients.ingredient3 = 'jam'
			
			
	}	
	// else {
	// 	this.theSandwich = "Is not a sandwich"
	// 	this.typeOfIngredients.ingredient1 = 'nothing'
	// 	this.typeOfIngredients.ingredient2 = 'more nothing'
	// 	this.typeOfIngredients.ingredient3 = 'extra nothing'
	// 	}
	},
	chooseSandwich() {
		if(this.choices === 0){

			this.ingredients = true
			this.theSandwich = this.typeOfSandwich[this.choices]

		}
		if(this.choices === 1) {

			this.ingredients = true
			this.theSandwich = this.typeOfSandwich[this.choices]
		}

	},

	test(userInput){

		this.name = userInput.value

		$('#user-form').remove()

		//welcome user to the game, and give them instructions 

		$('<p class="messages"></p>').text("Welcome " + this.name +  " to the Your Royal Sandwich Game").appendTo($('#game-dialouge')).fadeOut(8800)

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

		this.printIngredients()

		this.testListen()


	},

	test2(userInput) {




		if(userInput ===  hasClass('ingredients') || userInput === hasClass('ingredients') || userInput === hasClass('ingredients')){

		$("<p class='messages'></p>").text("Good job that is a correct ingredient for a " + this.theSandwich).appendTo('#game-dialouge')

		this.printSandwich()

		// $('#recipe-form').remove()

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

			$('<img src= "photo/pbj.png">').css({
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

	testListen() {

		$('#ingredients-container').on('click', (e) => {

			// e.preventDefault()

			// const input = $('#recipe-input')

			// console.log(input);

			// const userInput = input[0]

			const userInput = e.target

			console.log(userInput);

			theSandwichGame.test2(userInput)

		})
	},
	printIngredients() {


		const bacon = new Recipe()
		const lettuce = new Recipe()
		const tomato = new Recipe()

		this.ingredients.push(bacon)
		this.ingredients.push(lettuce)
		this.ingredients.push(tomato)


		// $('#ingredients-container').text(this.ingredients[0])

		if(this.theSandwich === 'blt'){

			this.createIngredients()

			$('<img class="ingredients" src="photo/bacon.png" >').appendTo('#bacon').css('width', '40%').attr('data-which-ingredient', 'bacon')
			$('<img class="ingredients" src="photo/lettuce.png" >').appendTo('#lettuce').attr('data-which-ingredient', 'lettuce').text('lettuce')
			$('<img class="ingredients" src="photo/tomato.png" >').appendTo('#tomato').attr('data-which-ingredient', 'tomato')



		}

	},
	createIngredients() {



		$('<div> <div>').text(this.typeOfIngredients.ingredient1).attr('id', this.typeOfIngredients.ingredient1).appendTo('#ingredients-container')
		$('<div> <div>').text(this.typeOfIngredients.ingredient2).attr('id', this.typeOfIngredients.ingredient2).appendTo('#ingredients-container')
		$('<div> <div>').text(this.typeOfIngredients.ingredient3).attr('id', this.typeOfIngredients.ingredient3).appendTo('#ingredients-container')
}

}

$('#user-form').on('submit', (e) => {
	
	e.preventDefault()

	const input = $('#user-input')

	const userInput = input[0]

	theSandwichGame.test(userInput)

})










// here my event listener will live that needs to be checking for user input to start the game
// and looking for clicks on the divs that I will be creating a class for, there should be two classes
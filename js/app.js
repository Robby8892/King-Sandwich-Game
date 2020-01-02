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
	constructor(ingredient){

		this.ingredient = true
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
	typeOfSandwich: ['pbjj','blt','other'],
	theSandwich: null,
	ingredients: false,
	typeOfIngredients: null,
	choices: null,
	correct: false,
	name: null, 

	generateSandwich(){

		const randomSandwich = Math.floor(Math.random() * this.typeOfSandwich.length)

		// this.theSandwich = this.typeOfSandwich[randomSandwich]

		this.typeOfIngredients = new Sandwich()

		this.chooseSandwich()

		this.theIngredients()

		console.log("Your sandwich is " + this.theSandwich );

		const list = this.typeOfIngredients.ingredient1 + " " + this.typeOfIngredients.ingredient2 + " " + this.typeOfIngredients.ingredient3

		// console.log("It has " + list);



	},
	theIngredients(){

		if(this.theSandwich === "blt" && this.ingredients === true){

			this.typeOfIngredients.bread = true
			this.typeOfIngredients.ingredient1 = 'bacon'
			this.typeOfIngredients.ingredient2 = 'lettuce'
			this.typeOfIngredients.ingredient3 = 'tomato'	
			this.printSandwich()
		}	

		else if(this.theSandwich === "pbjj" && this.ingredients === true){
			this.typeOfIngredients.bread = true
			this.typeOfIngredients.ingredient1 = 'peanutbutter'
			this.typeOfIngredients.ingredient2 = 'jelly'
			this.typeOfIngredients.ingredient3 = 'jam'
			this.printSandwich()
			
	}	else {
		this.theSandwich = "Is not a sandwich"
		this.typeOfIngredients.ingredient1 = 'nothing'
		this.typeOfIngredients.ingredient2 = 'more nothing'
		this.typeOfIngredients.ingredient3 = 'extra nothing'
		}
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

		$('#user-form').fadeOut()

		const input = prompt('Pick! (0/1)')
		if(input === '0'){
			this.choices = 0
		}if(input === '1'){
			this.choices = 1
		}
	
		this.generateSandwich()
		alert('Your sandwich is ' + this.theSandwich)

		this.test2()
	},

	test2() {

		const input = prompt("What is one the of the ingredients?")
		if(input === this.typeOfIngredients.ingredient1 || input === this.typeOfIngredients.ingredient2 || input === this.typeOfIngredients.ingredient3){
			this.correct = true
			console.log('that\'s right');
		}
		else if(input !== this.typeOfIngredients.ingredient1 || input !== this.typeOfIngredients.ingredient2 || input !== this.typeOfIngredients.ingredient3){
			alert('that\'s not right' );
			this.test2()
		}
	},
	printSandwich() {

		if(this.theSandwich === 'pbjj'){

			$('<img src= "https://3.bp.blogspot.com/-EP5vkZI0XOw/WKgW0TUL_nI/AAAAAAAAAFY/qE81GkJAjCQGzkwDx1DNcx-tX6WUX4bLgCLcB/s1600/pb%2526j_Logo_V2-2.jpg">').css('color', 'blue').appendTo($('body'))

		}
		if(this.theSandwich === 'blt'){
			$('<img src= "https://cdn.apps.joltteam.com/brikbuild/sandwich-pixel-art-8bit-bread-brik-bin-finger-food-food-pixel-pixel-art-sandwich-5a24f9b6f6c96a8d2972098a.brickImg.jpg">').css
			({'height': '150px',
			  'margin-top': '250px',
			  'background-color': 'blue' 
			}).appendTo($('#blt'))


		
		}else {
			$('<img src= "">')
		}
	}	

}


$('#user-form').on('submit', (e) => {
	e.preventDefault()

	const input = $('#user-input')

	const userInput = input[0]

	console.log(userInput.value);

	theSandwichGame.test(userInput)

})












// here my event listener will live that needs to be checking for user input to start the game
// and looking for clicks on the divs that I will be creating a class for, there should be two classes
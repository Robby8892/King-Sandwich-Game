console.log("King Sandwich Game");

/// this will contain each of my classes one for the sandwich that needs to be made for the game
// there will be properties of a boolean for the sandwich, each corresponding to the ingredient 
// the other will  contain the recipes in which the user will need to choose from 
// these will also be boolean but to down the line will specifically need to be true to match with the sandwich



class Sandwich { constructor(name, bread=false) {
        this.name = name
        this.bread = bread

    }
}

class Ingredient {constructor(click=false, name){this.click = click, this.name = name}}

class Recipe {
    constructor(ingredient1, ingredient2, ingredient3) {
        this.ingredient1 = new Ingredient(false, ingredient1)
        this.ingredient2 = new Ingredient(false, ingredient2)
        this.ingredient3 = new Ingredient(false, ingredient3)


    }
    wasClicked() {
        this.click = true

    }

}

class Badrecipe {
    constructor(img, ingredient=false) {

        this.img = img
        this.ingredient = ingredient
    }
}


class Player {
    constructor(name, hasName=false) {

        this.name = name
        this.hasName = hasName

    }

}



// here I will have my first object which will the game that the user will be playing
// this will house all of the information about the game while also containing the results
// of each round and maintaing all of the images that will be used 
// there will be created divs that handle images 



const theSandwichGame = {
    // typeOfSandwich: ['blt', 'pb&j&j', 'reuben', 'turkeyclub']
    typeOfSandwich: ['blt'],
    theSandwich: null,
    ingredients: [],
    correct: false,
    name: null,
    timer: 30000000,
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
    bonusScore: 0,
    theKing: [],
    kingPosition: {top: 0, left: 0},
    positionMatch: false,
    sandwichPosition: {top: -1, left: -1},
    bonusRoundSandwich: [],

    generateSandwich() {

        const randomSandwich = Math.floor(Math.random() * this.typeOfSandwich.length)

        this.theSandwich = new Sandwich()

        this.theSandwich.name = this.typeOfSandwich[randomSandwich]

        this.theIngredients()

        const list = this.ingredients.ingredient1 + " " + this.ingredients.ingredient2 + " " + this.ingredients.ingredient3

    },
    theIngredients() {

        if (this.theSandwich.name === 'blt') {
            
            this.theSandwich.bread = true
            const blt = new Recipe('bacon','lettuce','tomato')
            this.ingredients = blt
            

        } else if (this.theSandwich.name === 'pb&j&j') {

            this.theSandwich.bread = true
            const pbjj = new Recipe('peanutbutter','jelly','jam')
            this.ingredients = pbjj

        } else if (this.theSandwich.name === "reuben") {

            this.theSandwich.bread = true
            const reuben = new Recipe('cornedbeef','swisscheese','sauerkraut')
            this.ingredients = reuben

        } else if (this.theSandwich.name === 'turkeyclub') {

            this.theSandwich.bread = true
            const turkeyClub = new Recipe('ham','mayo','lettucetomato')
            this.ingredients = turkeyClub 

        }

    },

    intro() {


        $('html').css({
            'background-image': 'url(./photo/throneRoom.png)',
            "background-size": "100%"
        })

        $('.user-form').remove()
        $('#button-mapping').remove()
        $('.intro').remove()

        $('<p class="messages"></p>').text("Welcome " + this.playerNames[0].name + " & " + this.playerNames[1].name + " to the Your Royal Sandwich Game").appendTo($('#game-dialouge')).fadeOut(1200)
        $('<p class="messages"></p>').text('You have been tasked with provding his Royal Highness a sandwich of his very desire!').appendTo($('#game-dialouge')).fadeOut(1200)
        $("<p class='messages'></p>").text('Provide me with the correct recipe or face dire concequences!').appendTo($('#game-dialouge')).fadeOut(1200)


        this.generateSandwich()

        $("<p class='messages'></p>").text('What are the ingredients for a ' + this.theSandwich.name + " !").appendTo($('#game-dialouge')).fadeOut(4000)


        this.theInterval()

        this.printIngredients()

        this.checkPlayerRound()

    },

    playerRound($userInput) {

        this.timerPoints = this.timer
        
        const nameOfIngre = $userInput.data().whichIngredient

        if (nameOfIngre === this.ingredients.ingredient1.name) {
            $("<p class='messages'></p>").text("Good job that is a correct ingredient for a " + this.theSandwich.name).appendTo('h2').fadeOut(800)
            $userInput.remove()
            this.ingredients.ingredient1.click = true 
            this.verifyAllWereClicked($userInput)
        }

        else if(nameOfIngre === this.ingredients.ingredient2.name) {
            $("<p class='messages'></p>").text("Good job that is a correct ingredient for a " + this.theSandwich.name).appendTo('h2').fadeOut(800)
            $userInput.remove()
            this.ingredients.ingredient2.click = true 
            this.verifyAllWereClicked($userInput)
        }

        else if(nameOfIngre === this.ingredients.ingredient3.name) {
            $("<p class='messages'></p>").text("Good job that is a correct ingredient for a " + this.theSandwich.name).appendTo('h2').fadeOut(800)
            $userInput.remove()
            this.ingredients.ingredient3.click = true 
            this.verifyAllWereClicked($userInput)
        }


        if (this.correct === true) {

            $('.player').remove()
            $('.messages').remove()

            $("<p class='messages'></p>").text("You made a " + this.theSandwich.name).appendTo('#game-dialouge').fadeOut(10000)

            this.printSandwich()
            this.tallyPoints()
            this.clearTheInterval()
            this.printStats()
            this.resetRound()
            this.bonusRound()
            
        }

    },

 
    printSandwich() {

        if (this.theSandwich.name === 'pb&j&j') {

        	const pbj = $('<img class="sandwich" src= "photo/pbjj.png">')

        	this.bonusRoundSandwich.push(pbj[0])

        	console.log(this.bonusRoundSandwich);
        }

        if (this.theSandwich.name === 'blt') {

           	const blt = $('<img class="sandwich" src= "photo/blt.png">')

           
           	this.bonusRoundSandwich.push(blt[0])

           	console.log(this.bonusRoundSandwich);

        }

        if (this.theSandwich.name === 'reuben') {

            const reuben = $('<img class="sandwich" src= "photo/reuben.png">')

            this.bonusRoundSandwich.push(reuben[0]) 

            console.log(this.bonusRoundSandwich);
        }

        if (this.theSandwich.name === 'turkeyclub') {

            const turkeyClub = $('<img class="sandwich" src= "photo/turkeyclub.png">')

            this.bonusRoundSandwich.push(turkeyClub[0])

            console.log(this.bonusRoundSandwich);
        }
    },

    printIngredients() {


        // const newSandwich = new Sandwich()

        // $('#ingredients-container').text(this.ingredients[0])

        if (this.theSandwich.name === 'blt') {

            this.createIngredients()

            // this.badIngredient[this.randomImg].img.appendTo('#bad-ingredients')
            $('<img class="ingredients" src="photo/bacon.png">').appendTo('#bacon').css('width', '40%').attr('data-which-ingredient', this.ingredients.ingredient1.name)
            // this.badIngredient[this.randomImg].img.appendTo('#bad-ingredients')	
            $('<img class="ingredients" src="photo/lettuce.png">').appendTo('#lettuce').attr('data-which-ingredient', this.ingredients.ingredient2.name)
            $('<img class="ingredients" src="photo/tomato.png">').appendTo('#tomato').attr('data-which-ingredient', this.ingredients.ingredient3.name)
            // this.badIngredient[this.randomImg].img.appendTo('#bad-ingredients')

        }

        if (this.theSandwich.name === 'pb&j&j') {

            this.createIngredients()

            $('<img class="ingredients" src="photo/peanutbutter.png">').appendTo('#peanutbutter').attr('data-which-ingredient', this.ingredients.ingredient1.name)
            // this.badIngredient[this.randomImg].img.appendTo('#bad-ingredients')
            $('<img class="ingredients" src="photo/jam.png">').appendTo('#jelly').attr('data-which-ingredient', this.ingredients.ingredient2.name)
            // this.badIngredient[this.randomImg].img.appendTo('#bad-ingredients')
            $('<img class="ingredients" src="photo/jam2.png">').appendTo('#jam').attr('data-which-ingredient', this.ingredients.ingredient3.name)
            // this.badIngredient[this.randomImg].img.appendTo('#bad-ingredients')


        }

        if (this.theSandwich.name === 'reuben') {

            this.createIngredients()


            $('<img class="ingredients" src="photo/cornedbeef.png">').appendTo('#cornedbeef').attr('data-which-ingredient', this.ingredients.ingredient1.name)
            $('<img class="ingredients" src="photo/swisscheese.png">').appendTo('#swisscheese').attr('data-which-ingredient', this.ingredients.ingredient2.name)
            // this.badIngredient[this.randomImg].img.appendTo('#bad-ingredients')
            // this.badIngredient[this.randomImg].img.appendTo('#bad-ingredients')
            $('<img class="ingredients" src="photo/sauerkraut.png">').appendTo('#sauerkraut').attr('data-which-ingredient', this.ingredients.ingredient3.name)

        }

        if (this.theSandwich.name === 'turkeyclub') {

            this.createIngredients()


            $('<img class="ingredients" src="photo/ham.png">').appendTo('#ham').attr('data-which-ingredient', this.ingredients.ingredient1.name)
            // this.badIngredient[this.randomImg].img.appendTo('#bad-ingredients')
            $('<img class="ingredients" src="photo/mayo.png">').appendTo('#mayo').attr('data-which-ingredient', this.ingredients.ingredient2.name)
            // this.badIngredient[this.randomImg].img.appendTo('#bad-ingredients')
            $('<img class="ingredients" src="photo/tomatolettuce.png">').appendTo('#lettucetomato').attr('data-which-ingredient', this.ingredients.ingredient3.name)


        }


    },
    createIngredients() {

        // this.createBadIngredients()

        $('<div><div>').attr('id', this.ingredients.ingredient1.name).appendTo('#ingredients-container')
        $('<div><div>').attr('id', this.ingredients.ingredient2.name).appendTo('#ingredients-container')
        $('<div><div>').attr('id', this.ingredients.ingredient3.name).appendTo('#ingredients-container')

    },

    verifyAllWereClicked() {


        if (this.ingredients.ingredient1.click === true && this.ingredients.ingredient2.click === true && this.ingredients.ingredient3.click === true) {
            this.correct = true

        }



    },
    theInterval() {

        this.interval = setInterval(() => {

            
            this.timer--


            $('#timer').text(this.timer)

            if (this.timer <= 0) {

                this.checkTimer()

            }

        }, 500)




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

        if (this.round > 5 && this.round < 7) {

            this.winChecker()
        }

        if (this.round < 6) {

            this.generateSandwich()
            $("<p class='messages'></p>").text("Next Round!").css('font-size', '100px').appendTo('#game-dialouge').fadeOut(1000)
            $("<p class='messages'></p>").text('What are the ingredients for a ' + this.theSandwich.name + " !").appendTo($('#game-dialouge')).fadeOut(11000)
            this.printIngredients()
            this.theInterval()
            this.checkPlayerRound()


        }


    },

    resetRound() {

        this.correct = false
        this.timer = 30
        this.bonusScore = 0
        this.ingredients = ''

        for (let i = 0; i < this.ingredients.length; i++) {
            this.ingredients[i].click = false


        }

    },
    winChecker() {

        if (this.player1Score > this.player2Score) {
            this.clearTheInterval()

            $('<p class="messages"></p>').text("Congrats " + this.playerNames[0].name + ", you have satisfied his royal highness").appendTo($('#game-dialouge')).fadeOut(8800)
            $('<p class="messages"></p>').text('You have spared yourself this day!').appendTo($('#game-dialouge')).fadeOut(9000)
            $("<p class='messages'></p>").text('Farewell!').appendTo($('#game-dialouge')).fadeOut(10000)
            $("<p class='messages'></p>").text("GAME OVER").css('font-size', '100px').appendTo('#game-dialouge')

        }
        if (this.player1Score < this.player2Score) {
            this.clearTheInterval()

            $('<p class="messages"></p>').text("Congrats " + this.playerNames[1].name + ", you have satisfied his royal highness").appendTo($('#game-dialouge')).fadeOut(8800)
            $('<p class="messages"></p>').text('You have spared yourself this day!').appendTo($('#game-dialouge')).fadeOut(9000)
            $("<p class='messages'></p>").text('Farewell!').appendTo($('#game-dialouge')).fadeOut(10000)
            $("<p class='messages'></p>").text("GAME OVER").css('font-size', '100px').appendTo('#game-dialouge')

        }
    },

    tallyPoints() {

        if (this.playerTurn === this.playerNames[0].name) {
            this.player1Score++
            this.round++
            this.tallyTimerP1()

        }

        if (this.playerTurn === this.playerNames[1].name) {
            this.player2Score++
            this.round++
            this.tallyTimerP2()

        }

    },

    createPlayer(user1Input, user2Input) {


        const player1 = new Player(name=user1Input, hasName=true)
        const player2 = new Player(name=user2Input, hasName=true)

        this.playerNames.push(player1)
        this.playerNames.push(player2)

        this.verifyTwoPlayers()

    },

    checkPlayerRound() {

        if (this.turn === false) {


            $('<p class="player"></p>').text("It's " + this.playerNames[0].name + '\'s turn').appendTo('h2')
            this.turn = !this.turn
            this.playerTurn = this.playerNames[0].name

            this.playerRound()

        }

        if (this.turn === true) {

            $('<p class="player"></p>').text("It's " + this.playerNames[1].name + '\'s turn').appendTo('h2')

            this.turn = !this.turn
            this.playerTurn = this.playerNames[1].name

            this.playerRound()

        }


    },

    verifyTwoPlayers() {

        if (this.playerNames[0].hasName === true && this.playerNames[1].hasName === true) {

            this.intro()

        }

    },

    checkTimer() {

        $('.ingredients').remove()
        $('.player').remove()
        this.clearTheInterval()
        this.round++
        this.timer = 30000000000
        this.printStats()
        this.resetRound()
        this.newRound()
    },

    bonusRound() {

    	$('html').css({
        	'background-image': 'url(./photo/bouns-round-background.png)',
            "background-size": "100%"
        })


    	this.setIntervalBonusRound()
    	this.createKing()
    	this.createGameBoard()
    	this.checkPostion()


    },

    createKing() {
    
        this.king = $('<img id="king-char" src="source-images/kingeating.png">')
        this.king.appendTo('#king')
        

    },

    movementOfKing($userInput) {

        // this direction will cause the king image to move up 
    	if($userInput[0] === 119) {

    		// console.log('You got it');
    		$('#king-char').css({'position': 'relative',
                'top': '-=10px'
            })
    		this.kingPosition = $('#king-char').position()
            this.sandwichPosition = $('.sandwich').position()
            const findKingPos = this.findingPosition($('#king-char'))
            const findSandwichPos = this.findingPosition($('.sandwich'))
            console.log('here is findSandwichPos', findSandwichPos);
            console.log('here is findKingPos', findKingPos);
            this.positionMatch = this.comparePositions(findKingPos, findSandwichPos)
            console.log('Here is posMatch', this.positionMatch);
       		this.checkPostion()

    	}
        // this direction will cause the king image to move left 
    	if($userInput[0] === 100 ) {

    		$('#king-char').css({'position': 'relative', 
    			'left': '+=10px',
    			'transform': 'scaleX(1)'	})

    		this.kingPosition = $('#king-char').position()
            this.sandwichPosition = $('.sandwich').position()
            const findKingPos = this.findingPosition($('#king-char'))
            const findSandwichPos = this.findingPosition($('.sandwich'))
            console.log('here is findSandwichPos', findSandwichPos);
            console.log('here is findKingPos', findKingPos);
            this.positionMatch = this.comparePositions(findKingPos, findSandwichPos)
            console.log('Here is posMatch', this.positionMatch);
    		this.checkPostion()

    	}
        // this direction will cause the king image to move right 
    	if($userInput[0] === 97) {

    		$('#king-char').css({'position': 'relative',
    			'left': '-=10px',
				'transform': 'scaleX(-1)'	})

    		this.kingPosition = $('#king-char').position()
            this.sandwichPosition = $('.sandwich').position()
            const findKingPos = this.findingPosition($('#king-char'))
            const findSandwichPos = this.findingPosition($('.sandwich'))
            console.log('here is findSandwichPos', findSandwichPos);
            console.log('here is findKingPos', findKingPos);
            this.positionMatch = this.comparePositions(findKingPos, findSandwichPos)
            console.log('Here is posMatch', this.positionMatch);
    		this.checkPostion()


    	}
        // this direction will cause the king image to move down 
    	if($userInput[0] === 115) {

    		  $('#king-char').css({'position': 'relative',
                'top': '+=10px'
            })

            this.kingPosition = $('#king-char').position()
            this.sandwichPosition = $('.sandwich').position()
            const findKingPos = this.findingPosition($('#king-char'))
            const findSandwichPos = this.findingPosition($('.sandwich'))
            console.log('here is findSandwichPos', findSandwichPos);
            console.log('here is findKingPos', findKingPos);
            this.positionMatch = this.comparePositions(findKingPos, findSandwichPos)
            console.log('Here is posMatch', this.positionMatch);
    		this.checkPostion()
    	}
    },

    findingPosition(elem){
        let pos = $(elem).position()
        let height = $(elem).height()
        let width = $(elem).width()
        return [[pos.left, pos.left + width], [pos.top, pos.top + height]]
    },

    comparePositions(king, sandwich){
        console.log('here is king', king[0])
        console.log('here is sandwich', sandwich[0]);;
        console.log(king[0][1] == sandwich[0][1], 'true false ?');
        return king[0][1] == sandwich[0][1]
    },

    createMultipleSandwiches() {
    	const $gameBoard = $('.bonus-game')
    	const ranNum = Math.floor(Math.random() * 50)
		$gameBoard[ranNum].append(this.bonusRoundSandwich[0])
    },

    createGameBoard() {
    	for(let i = 0; i < 50; i++) {
    		$('<div class="bonus-game"></div>').appendTo('#the-game-container').attr('id', i)
    	}
    	this.createMultipleSandwiches()
    },

    tallyBounsRound() {

    	if(this.playerTurn === this.playerNames[0].name) {
    		this.player1Score += this.bonusScore
    		this.printStats()
    	}
    	
    	if(this.playerTurn === this.playerNames[1].name) {
    		this.player2Score += this.bonusScore
    		this.printStats()		
    	}
    },

    returnToGame() {
    	this.resetRound()
    	this.clearBonusRound()
    	this.newRound()
    },

    checkPostion() {
    	if(this.positionMatch) {
    		$('.sandwich').remove()
            console.log('sandwich match');
    		this.createMultipleSandwiches()
    		this.bonusScore += 10
    	}
    },

    setIntervalBonusRound() {

    	this.timer = 60000000

    	this.interval = setInterval(() => {
            this.printStats()
            this.timer--

            $('#timer').text(this.timer)

            if (this.timer <= 0) {

            	this.tallyBounsRound()
            	this.clearTheInterval()
         		this.returnToGame()
            }

        }, 400)
    },

    tallyTimerP1() {



        if (this.timerPoints < 30 && this.timerPoints > 25) {
            this.player1Score += 3

        }

        if (this.timerPoints < 25 && this.timerPoints > 15) {
            this.player1Score += 2

        }

        if (this.timerPoints < 15 && this.timerPoints > 0) {
            this.player1Score += 1
        }


    },

    tallyTimerP2() {



        if (this.timerPoints < 30 && this.timerPoints > 25) {
            this.player2Score += 3

        }

        if (this.timerPoints < 25 && this.timerPoints > 15) {
            this.player2Score += 2

        }

        if (this.timerPoints < 15 && this.timerPoints > 0) {
            this.player2Score += 1
        }


    },

    clearBonusRound() {

    	$('#king-char').remove()
    	$('.bonus-game').remove()
    	this.bonusRoundSandwich.splice(0,1)


     	$('html').css({
        	'background-image': 'url(./photo/throneRoom.png)',
         	"background-size": "100%"
        	})

    	}

}


$('.user-form').on('submit', (e) => {
    e.preventDefault()
    
    const $input1 = $('#user1-input')
    const $input2 = $('#user2-input')
    
    const user1Input = $input1[0].value
    const user2Input = $input2[0].value
    
    if(!user2Input) {

    } else {
        theSandwichGame.createPlayer(user1Input, user2Input)
        
    }
})

$('#ingredients-container').on('click', (e) => {
    const $userInput = $(e.target)
    theSandwichGame.playerRound($userInput)

})

$('body').on('keypress', (e) => {

	const $userInput = $(e.keyCode)
	theSandwichGame.movementOfKing($userInput)

})


// here my event listener will live that needs to be checking for user input to start the game
// and looking for clicks on the divs that I will be creating a class for, there should be two classes
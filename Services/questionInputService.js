// ---------------------------------------------------------------------
// ---------------------------- Maja -----------------------------------
// ---------------------------------------------------------------------

import _addPreQuestionService from "./../services/addPreQuestionService.js"
class QuestionInputService {

    // Some games require more information, (options for a quiz | true or false questions)
    // This service holdes some functions for creating extra input fields for this information ...
    // ... and for getting data from these extra add-question-input-fields

    // It works for both the predefined and the user generated questions ...
    // ... so this service is imported in the AddPreQuestionService & the ArrayNewQuestionService

    constructor() {
        this.gameRef = _db.collection('games');
        this.addedValue = "";
        this.answerValue = "";
        this.status = "";

        // Array for the quiz answers/options-data
        this.arrOfAnswers = [];

        // Object to hold the information for new Predefined questions
        this.newPredefinedQuestion = {};

        // Object to hold the information for new user created questions
        this.newUserQuestion = {};


    }

    // This function changes the innerHTML of an article with the id ${whereToPut}.
    // The content of this article depends on which game is selected in the select #${gameId}.
    // It also takes the parameters of ${inputId}, which is the inserted content for the question
    // ... and the ${preOrNot}, which tells if the action should happen on the page for adding new predefinded questions to the database
    // ... or if it should be on the page for adding question to the game. 
    async gameInputSettings(gameId, inputId, whereToPut, preOrNot) {

        let differentInputs = "";

        await this.gameRef.doc(`${gameId}`).get().then(function (doc) { // Get data for the selected game from the database-gameId-document
            let docData = doc.data()

            //-------------------------- if Truth or Dare --------------------------//

            if (gameId === 'vRD8Spl5fQ4AfTifPtRq') {
                differentInputs = /*html*/ `
        <input class="inputfield" type="text" id="${inputId}" placeholder='${docData.gamePlaceholder}' required>

        <label class="smallInputfield" for="truth${preOrNot}">Sandhed</label>
        <input id="truth${preOrNot}" name="Sandhed" onchange="styleWhichValue(this.id, 'dare${preOrNot}')" class="hide displayNone" type="checkbox">
        <input id="dare${preOrNot}" name="Konsekvens" onchange="styleWhichValue(this.id, 'truth${preOrNot}')" class="hide displayNone" type="checkbox">
        <label class="smallInputfield" for="dare${preOrNot}">Konsekvens</label>
        `


                //-------------------------- if Quiz --------------------------//

            } else if (gameId === 'MEF7ah2clInWlmgNpg6M') {
                differentInputs = /*html*/ `
        <input class="inputfield" type="text" id="${inputId}" placeholder='${docData.gamePlaceholder}' required>

        <!-- Inputfields for answer 1 -->
        <label class="bold displayBlock" for="answer1${preOrNot}">Svarmulighed 1</label>
        <input id="answer1${preOrNot}" name="answer1" class="inputfield" placeholder="Skriv svarmulighed..." type="text">
       
        <label class="smallInputfield" for="correct1${preOrNot}">Korrekt</label>
        <input id="correct1${preOrNot}" name="Korrekt" onchange="styleWhichValue(this.id, 'wrong1${preOrNot}')" class="hide displayNone" type="checkbox">
        <input id="wrong1${preOrNot}" name="Falsk" onchange="styleWhichValue(this.id, 'correct1${preOrNot}')" class="hide displayNone" type="checkbox">
        <label class="smallInputfield" for="wrong1${preOrNot}">Forkert</label>


        <!-- Inputfields for answer 2 -->
        <label class="bold displayBlock" for="answer2${preOrNot}">Svarmulighed 2</label>
        <input id="answer2${preOrNot}" name="answer2" class="inputfield" placeholder="Skriv svarmulighed..." type="text">

        <label class="smallInputfield" for="correct2${preOrNot}">Korrekt</label>
        <input id="correct2${preOrNot}" name="Korrekt" onchange="styleWhichValue(this.id, 'wrong2${preOrNot}')" class="hide displayNone" type="checkbox">
        <input id="wrong2${preOrNot}" name="Falsk" onchange="styleWhichValue(this.id, 'correct2${preOrNot}')" class="hide displayNone" type="checkbox">
        <label class="smallInputfield" for="wrong2${preOrNot}">Forkert</label>


        <!-- Inputfields for answer 3 -->
        <label class="bold displayBlock" for="answer3${preOrNot}">Svarmulighed 3</label>
        <input id="answer3${preOrNot}" name="answer3" class="inputfield" placeholder="Skriv svarmulighed..." type="text">

        <label class="smallInputfield" for="correct3${preOrNot}">Korrekt</label>
        <input id="correct3${preOrNot}" name="Korrekt" onchange="styleWhichValue(this.id, 'wrong3${preOrNot}')" class="hide displayNone" type="checkbox">
        <input id="wrong3${preOrNot}" name="Falsk" onchange="styleWhichValue(this.id, 'correct3${preOrNot}')" class="hide displayNone" type="checkbox">
        <label class="smallInputfield" for="wrong3${preOrNot}">Forkert</label>

        
        <!-- Inputfields for answer 4 -->
        <label class="bold displayBlock" for="answer4${preOrNot}">Svarmulighed 4</label>
        <input id="answer4${preOrNot}" name="answer4" class="inputfield" placeholder="Skriv svarmulighed..." type="text">
        
        <label class="smallInputfield" for="correct4${preOrNot}">Korrekt</label>
        <input id="correct4${preOrNot}" name="Korrekt" onchange="styleWhichValue(this.id, 'wrong4${preOrNot}')" class="hide displayNone" type="checkbox">
        <input id="wrong4${preOrNot}" name="Falsk" onchange="styleWhichValue(this.id, 'correct4${preOrNot}')" class="hide displayNone" type="checkbox">
        <label class="smallInputfield" for="wrong4${preOrNot}">Forkert</label>
        `


                //-------------------------- if True or False --------------------------//
            } else if (gameId === 'pfF2l2zwYDqcVCIjMlNr') {
                differentInputs = /*html*/ `
        <input class="inputfield" type="text" id="${inputId}" placeholder='${docData.gamePlaceholder}' required>

        <label class="smallInputfield" for="truthfull${preOrNot}">Sandt</label>
        <input id="truthfull${preOrNot}" name="Sandt" onchange="styleWhichValue(this.id, 'false${preOrNot}')" class="hide displayNone" type="checkbox">
        <input id="false${preOrNot}" name="Falsk" onchange="styleWhichValue(this.id, 'truthfull${preOrNot}')" class="hide displayNone" type="checkbox">
        <label class="smallInputfield" for="false${preOrNot}">Falsk</label>
        `

                //-------------------------- if the other games --------------------------//
            } else {
                differentInputs = /*html*/ `
        <input class="inputfield" type="text" id="${inputId}" placeholder='${docData.gamePlaceholder}' required>
        `
            }
        })
        document.querySelector(`#${whereToPut}`).innerHTML = differentInputs;
    }



    // Style the two opisite options (for example: truth or dare)
    styleWhichValue(thisCheckbox, theOtherCheckbox) {
        // The clicked checkbox
        let checkBoxForThisCheckbox = document.querySelector(`#${thisCheckbox}`);
        let labelForThisCheckbox = document.querySelector(`[for=${thisCheckbox}]`);

        // The opisite checkbox
        let otherCheckbox = document.querySelector(`#${theOtherCheckbox}`);
        let labelForOtherCheckbox = document.querySelector(`[for=${theOtherCheckbox}]`);

        if (checkBoxForThisCheckbox.checked == true) { // Based on which checkbox is checked ...

            // ... change the color of the labels ...
            labelForThisCheckbox.style.background = 'var(--secundary_color_light)';
            labelForOtherCheckbox.style.background = 'var(--secundary_color_dark)';
            labelForThisCheckbox.style.color = 'var(--font_color_dark)';
            labelForOtherCheckbox.style.color = 'var(--font_color_light)';

            // ... and set the other checkbox to false
            otherCheckbox.checked = false;

            // Set the name for the checkbox to the addedValue variable
            this.addedValue = checkBoxForThisCheckbox.name
        } else {
            labelForThisCheckbox.style.background = 'var(--secundary_color_dark)';
            labelForOtherCheckbox.style.background = 'var(--secundary_color_dark)';
            labelForThisCheckbox.style.color = 'var(--font_color_light)';
            labelForOtherCheckbox.style.color = 'var(--font_color_light)';
        }
    }


    // If the game is a quiz this function will run, to get the data from the input fields
    getDataFromQuiz(number, preOrNot) {

        // Every answer/option has an id which starts with 'answer', then the number of the answer (1-4), and then which page it is on
        // Same applies for the connected correct and wrong checkboxes.

        let input = document.querySelector(`#answer${number}${preOrNot}`);
        let correct = document.querySelector(`#correct${number}${preOrNot}`);
        let wrong = document.querySelector(`#wrong${number}${preOrNot}`);

        if (correct.checked == true) { // If the option status is correct

            this.status = correct.name;

        } else if (wrong.checked == true) { // If the option status is wrong
            this.status = wrong.name;
        }
        this.answerValue = input.value // Add the option-content to the variable answerValue ...

        // ... before connecting the option value with the option status in an object.
        let differentOptions = {
            option: this.answerValue,
            status: this.status
        }

        this.arrOfAnswers.push(differentOptions); // Object is pushed into array of answers


    }

    // This function declares if extra information for a game is needed, and if yes, then what
    whichParameters(whichPage, gameSelectId) {

        let gameInput = document.querySelector(`#${gameSelectId}`); // The input field for games

        //-------------------------- if Truth or dare --------------------------//
        if (gameInput.value == 'vRD8Spl5fQ4AfTifPtRq') {

            //The object which should get an new property is based on which page
            if (whichPage == "") {
                this.newUserQuestion.truthOrDare = this.addedValue // Add the prop 'truthOrDare' with the value addedValue to the obejct 
            } else if (whichPage == 'PredefinedPage') {
                this.newPredefinedQuestion.truthOrDare = this.addedValue
            }
            this.resetTwoOptions(`${whichPage}`, 'truth', 'dare')
        }

        //-------------------------- if True or false --------------------------//
        if (gameInput.value == 'pfF2l2zwYDqcVCIjMlNr') {
            if (whichPage == "") {
                this.newUserQuestion.trueOrFalse = this.addedValue
            } else if (whichPage == 'PredefinedPage') {
                this.newPredefinedQuestion.trueOrFalse = this.addedValue
            }
            this.resetTwoOptions(`${whichPage}`, 'truthfull', 'false')
        }

        //-------------------------- if Quiz --------------------------//
        if (gameInput.value == 'MEF7ah2clInWlmgNpg6M') {

            // Get the data from all four quiz-answers/options
            this.getDataFromQuiz('1', `${whichPage}`);
            this.getDataFromQuiz('2', `${whichPage}`);
            this.getDataFromQuiz('3', `${whichPage}`);
            this.getDataFromQuiz('4', `${whichPage}`);

            if (whichPage == "") {
                this.newUserQuestion.answerOptions = this.arrOfAnswers;
                this.resetQuizInputfields(whichPage);
            } else if (whichPage == 'PredefinedPage') {
                this.newPredefinedQuestion.answerOptions = this.arrOfAnswers;
                this.resetQuizInputfields(whichPage);
            }


        }


    }

    resetTwoOptions(preOrNot, trueProp, falseProp) {
        let theTrueProp = document.querySelector(`#${trueProp}${preOrNot}`);
        let theFalseProp = document.querySelector(`#${falseProp}${preOrNot}`);

        theTrueProp.checked = false;
        theFalseProp.checked = false;
        console.log(trueProp, preOrNot, theTrueProp.checked, theFalseProp.checked)
        this.styleWhichValue(`${trueProp}${preOrNot}`, `${falseProp}${preOrNot}`);
        this.addedValue = "";

    }


    resetQuizInputfields(whichPage) {

        let number = 1;
        for (number = 1; number <= 4; number++) {

            let answerField = document.querySelector(`#answer${number}${whichPage}`);
            let correct = document.querySelector(`#correct${number}${whichPage}`);
            let wrong = document.querySelector(`#wrong${number}${whichPage}`);
            correct.checked = false;
            wrong.checked = false;

            _addPreQuestionService.highlightChoosenCategories(`correct${number}${whichPage}`);
            _addPreQuestionService.highlightChoosenCategories(`wrong${number}${whichPage}`);
            answerField.value = "";
        }

        this.arrOfAnswers = [];

    }



}
const _questionInputService = new QuestionInputService();
export default _questionInputService;
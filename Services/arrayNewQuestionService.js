// ---------------------------------------------------------------------
// ---------------------------- Helle & Maja -----------------------------------
// ---------------------------------------------------------------------

import _questionInputService from "./questionInputService.js"

// Imports the array with added questions to the game
class ArrayNewQuestionService {
    constructor() {
        this.gameInput = document.querySelector("#select-game");
        this.questionInput = document.querySelector("#newQuestion");
        this.gameRef = _db.collection('games');

        this.partyContentArray = [];
        this.theIdRef = "";
    }

    highlightNumber() {
        document.querySelector('[for=addedQuestions]').innerHTML = `Dit spilindhold <div id="numberOfRoundsAdded"> ${_arrayNewQuestionService.partyContentArray.length}</div>`
        document.querySelector('#numberOfRoundsAdded').classList.add('highlightAnimation');
    }

    generateIdForOwnQuestions() {

        // https://gist.github.com/gordonbrander/2230317
        // Geerer et "unikt" id til de egne tilføjede spil
        // Date.now returns the number of milliseconds since 01.01.1970.
        // + a ramdom number from 0 up to 1
        // toString(36) takes a binary number and translates it to text by Base 36
        // substr(2) gets the rest of the string besides the 2 first caracters (this including a dot which is not welcome in our id)
        let uniqueId = Date.now() + Math.random().toString(36).substr(2);

        // So now we get an id with numbers (from milliseconds sice 1970) and some text (from a random generated number)
        this.theIdRef = uniqueId;

    }


    createNewQuestion() {
        this.generateIdForOwnQuestions();

        let gameInput = document.querySelector("#select-game");
        let questionInput = document.querySelector("#newQuestion");

        _questionInputService.newUserQuestion = {
            game: gameInput.value,
            questionContent: questionInput.value,
            addedId: `i${this.theIdRef}`
        }

        _questionInputService.whichParameters('', 'select-game');

        console.log(_questionInputService.newUserQuestion)
        this.partyContentArray.push(_questionInputService.newUserQuestion)

        this.highlightNumber()
        document.querySelector("#newQuestion").value = "";

    }






}
const _arrayNewQuestionService = new ArrayNewQuestionService;
export default _arrayNewQuestionService;
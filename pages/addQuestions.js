import GamePage from "./gamePage.js"
import _arrayNewQuestionService from "./../services/arrayNewQuestionService.js"
import _addQuestionToGameService from "./../services/addQuestionToGameService.js"
import _questionInputService from "./../services/questionInputService.js"
import _spaService from "./../services/spa.js"


export default class AddQuestions {
  constructor() {
    this.questionRef = _db.collection("questions");
    this.gameRef = _db.collection("games");
    this.partyRef = _db.collection("parties");

    // Maeby we should get the datafrom the database at put it in the new array before - for no overwrite
    // this.partyContentArray = _arrayNewQuestionService.partyContentArray;

    _addQuestionToGameService.fetchGames();

    this.template();
    this.createGameOptions();
    this.gamePage = new GamePage;

  }

  // ---------------------------------------------------------------------
  // ---------------------------- Helle -----------------------------------
  // ---------------------------------------------------------------------

  // Template over the page, that adds a dropdown menu with all the different games.
  // Underneath there is a input field where the user can add his or her own questions til the game.
  // Underneath again there is an article with the players own questions, sorted by game.
  template() {
    document.querySelector('#content').innerHTML += /*html*/ `
    <section id="addQuestions" class="page">
      <div for="addedQuestions" onclick="basket();createAddedQuestionsList()"><b>Dit spilindhold</b><div id="numberOfRoundsAdded">${_arrayNewQuestionService.partyContentArray.length}</div></div>
      <img class="goBack" onclick="navigateTo('addPlayers')" src="img/hide.svg">
      <!--<article id="addedQuestionsArticle" class="hide">
      </article>-->
      <form id="questionForm">
        <h2>Tilføj nye spørgsmål til spillet:</h2>
        <select class="inputfield" id="select-game" name="games"s onchange="gameInputSettings(this.value, 'newQuestion', 'inputForGames', '')" placeholder="Vælg spil..." required></select>
        <div id="inputForGames" class="flexcontainer">
        <input class="inputfield" type="text" id="newQuestion" placeholder="Tilføj spil indhold her...." required>
        </div>
        <button class="btn" id="adQuestion" type="button" name="button" onclick="createNewQuestion()">Tilføj</button>
      </form>
      <article id="appendUserQuestions">
        <h2>Tilføj spørgsmål fra databasen</h2>
        <div id="list">
        </div>
        <div id="predefined">
        </div>
      </article>
      <button class="btn fixedBottom" onclick="generateGamePages()">Start spillet!</button>
  
    </section>
    `;
  }


  // This function creates the dropdown menu over games, by taking every new game id, and adding the game title to the menu.
  // GameRef refers back to the constructor, therefore the this.
  createGameOptions() {
    this.gameRef.get().then(snapshotData => {
      snapshotData.forEach(doc => {
        let game = doc.data();
        game.id = doc.id;

        let listOfGames = document.getElementById("select-game");

        listOfGames.add(new Option(game.gameTitle, game.id));
      });
    });
  }



  // ---------------------------------------------------------------------
  // ---------------------------- Maja -----------------------------------
  // ---------------------------------------------------------------------

  // This checkbox runs onclick on the addQuestions page. 
  // The function adds the predefined questions to the partyContentArray
  // ...and displays the qustion "none" afterwords.
  async checkbox(element, id) {
    element.classList.add('checkboxChecked');

    await this.questionRef.doc(`${id}`).get().then(function (doc) { // Finds the specific question document from the database
      let docData = doc.data()
      _questionInputService.newPredefinedQuestion = { // Sets a object with values from the database document
        game: docData.game,
        questionContent: docData.questionContent,
        categories: docData.categories,
        addedId: `added${id}`,
      }

      // let gameId = id.substr(2);
      console.log(docData.game)
      //-------------------------- if Truth or Dare --------------------------//
      if (docData.game === 'vRD8Spl5fQ4AfTifPtRq') {
        _questionInputService.newPredefinedQuestion.truthOrDare = docData.truthOrDare


        //-------------------------- if Quiz --------------------------//
      } else if (docData.game === 'MEF7ah2clInWlmgNpg6M') {

        _questionInputService.newPredefinedQuestion.answerOptions = docData.answerOptions


        //-------------------------- if True or False --------------------------//
      } else if (docData.game === 'pfF2l2zwYDqcVCIjMlNr') {
        _questionInputService.newPredefinedQuestion.trueOrFalse = docData.trueOrFalse
      }

    })


    _arrayNewQuestionService.partyContentArray.push(_questionInputService.newPredefinedQuestion); // Pushes the obejct with database-values into an the global partyContenArray
    _arrayNewQuestionService.highlightNumber() // Highlights the number of added questions

    element.style.display = "none";
    console.log(_arrayNewQuestionService.partyContentArray)
    element.classList.remove('checkboxChecked');
  }


  // This removeFromList function removes the specific question from the partyContentArray, so it´s not going to be added to the game
  removeFromList(element, id) {
    // Find the index of the question in the partyContentArray
    let index = _arrayNewQuestionService.partyContentArray.map(function (e) {
      return e.addedId // get the id of the question from the specific question-object
    }).indexOf(id);

    if (index > -1) { // If it exsists in the array (if it dosn´t the index will be -1)
      _arrayNewQuestionService.partyContentArray.splice(index, 1); // then remove it
    }

    _arrayNewQuestionService.highlightNumber(); // Highligth the new nuber of added questions

    element.style.display = 'none';

    if (id.substr(0, 5) == 'added') { // If the question is a predefined question (the Id starts with 'added')

      let preId = id.slice(5); // Then get the id from the predefined part (same id, just without 'added' infront of...
      document.querySelector(`#id${preId}`).style.display = "block"; // ... but 'id' in front of instead) And display it again
    }
  }

  // This basket function shows or hides the article with the questions added to the game.
  // It does this by toggeling the class 'hide'.
  basket() {
    // document.querySelector('#addedQuestionsArticle').classList.toggle('hide');

    document.querySelector('#numberOfAdded').innerHTML = `Du har tilføjet <b>${_arrayNewQuestionService.partyContentArray.length}</b> spørgsmål til spillet`
    _spaService.navigateTo('basketPage');
  }
}
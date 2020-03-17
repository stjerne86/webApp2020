// ---------------------------------------------------------------------
// ---------------------------- Maja -----------------------------------
// ---------------------------------------------------------------------

import _arrayNewQuestionService from "./../services/arrayNewQuestionService.js"
export default class BasketPage {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector('#content').innerHTML += /*html*/ `
        <section id="basketPage" class="page">
        <img class="goBack" onclick="navigateTo('addQuestions')" src="img/hide.svg">
        <h2>Din kurv</h2>
        <p id="numberOfAdded">Du har tilføjet <b>${_arrayNewQuestionService.partyContentArray.length}</b> spørgsmål til spillet</p>
        <p>Hvis du alligevel ikke ønsker et spørgsmål, så tryk på det for at fjerne det fra din liste.</p>
        <article id="addedQuestionsArticle">
        </article>
        <button class="btn" onclick="navigateTo('addQuestions')">Tilføj flere spørgsmål</button>
        <button class="btn" onclick="generateGamePages()">Det er fint, start spillet</button>
       
      
        </section>
        `;
    }
}
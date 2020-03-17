// ---------------------------------------------------------------------
// ---------------------------- Maja -----------------------------------
// ---------------------------------------------------------------------

//This page is not active in version 1.0

export default class YouAreReadyPage {
    constructor() {
        this.template();
    }

    // HTML-template for the you-are-ready-waiting-"page"
    template() {
        document.querySelector('#content').innerHTML += /*html*/ `
        <article id="playersReady" class="page">
        <h2>I spiller på spilmesterens device</h2>

        <p>Du og X andre er klar :)</p>
        <p>Der er nu tilføjet xx runder til spillet</p>
        
        <br>
        <button class="btn" type="button" name="addQuestions" onclick="navigateTo(this.name)">Nej vent, jeg har et spørgsmål mere!</button>
        <br>
        <button class="btn" type="button" name="gamePage" onclick="navigateTo(this.name)">Når alle er klar</button>
        </article>
        `;
    }
}
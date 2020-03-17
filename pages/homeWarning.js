// ---------------------------------------------------------------------
// ---------------------------- Helle, Louise & Maja -----------------------------------
// ---------------------------------------------------------------------

export default class HomeWarningPage {
    constructor() {
        this.template();

    }

    // HTML-template for the home "page" with the warning for not drinking too much
    template() {
        document.querySelector('#content').innerHTML += /*html*/ `
        <article id="home" class="page" >
        <div class="collectionOfItems btn" id="warning" >
     <h1>Drik ansvarligt folkens!</h1><br>
     <b class="yellowText">Mor er her ikke</b> til at sige I skal huske at drikke vand, så ved brug af dette spil, accepterer du at brug af spillet foregår under eget ansvar.
         </div>
         <button class="btn" name="settingsPage" onclick="navigateTo(this.name)">Start</button>
        </article>
        `;
    }
}
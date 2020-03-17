// ---------------------------------------------------------------------
// ---------------------------- Maja -----------------------------------
// ---------------------------------------------------------------------

export default class AddPlayersPage {
    constructor() {
        this.template();

    }

    // The HTML-template for the "page" where you can add player names to the group
    template() {
        document.querySelector('#content').innerHTML += /*html*/ `
        <article id="addPlayers" class="page">
        <img class="goBack" onclick="navigateTo('settingsPage')" src="img/hide.svg">
        <h2>Tilføj spillere</h2>
        <div id="playerInput">
        <input type="text" placeholder="Skriv spillernavn" class="inputfield myFriends">
        <input type="text" placeholder="Skriv spillernavn" class="inputfield myFriends">
        </div>
        <div class="addIcon" onclick="addAnotherPlayer('playerInput')"></div>
        <br>
        <br>
        <br>
        <button class="btn" type="button" name="addQuestions" onclick="addPlayers()">Klar til at tilføje indhold</button>
        </article>
        `;
    }


    // Creates a new childInputfild for more players, with different attributes
    addAnotherPlayer(whereToAdd) {
        let x = document.createElement("INPUT");
        x.setAttribute("type", "text");
        x.setAttribute("placeholder", "Skriv spillernavn");
        x.setAttribute("class", "inputfield myFriends")
        document.querySelector(`#${whereToAdd}`).appendChild(x);
    }
}
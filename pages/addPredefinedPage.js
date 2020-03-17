// ---------------------------------------------------------------------
// ---------------------------- Maja -----------------------------------
// ---------------------------------------------------------------------

export default class AddPredefinedPage {
    constructor() {
        this.categoryRef = _db.collection("categories");
        this.gameRef = _db.collection("games");
        // this.choosenCategoriesArr = [];

        this.createCategoryOptions();
        this.createGameOptions();
        this.template();

    }

    // The HTML with input filds to define new content for the database
    template() {
        document.querySelector('#content').innerHTML += /*html*/ `
        <article id="addPredefinded" class="page collectionOfItems">
            <h2>Tilføj prædefinerede spørgsmål</h2>
            <div class="flexcontainer" id="wichCategories">
            </div>
        
            <select name="whichGame" id="whichGame" onchange="gameInputSettings(this.value, 'newPreQuestion', 'preInputfield', 'PredefinedPage')" class="inputfield">
            </select>
        
            <div id="preInputfield" class="flexcontainer">
                <input type="text" id="newPreQuestion" placeholder="Tilføj spil indhold her...." class="inputfield">
            </div>
        
            <button class="btn" type="button" onclick='createQuestion()'>Tilføj spørgsmål til databasen</button>
        </article>
        `

    }

    // Add a checkbox with a label for each category in the firebase database, on the addPredefineded 'page'
    createCategoryOptions() {
        this.categoryRef.get().then(snapshotData => {
            snapshotData.forEach(doc => {

                let category = doc.data();
                category.id = doc.id;

                let categoriyCheckboxes = document.querySelector("#wichCategories");
                categoriyCheckboxes.innerHTML += /*html*/ `
                <input type="checkbox" id="the${category.id}" onchange="highlightChoosenCategories(this.id)" class="displayNone" value="${category.id}">
                <label class="smallInputfield" for="the${category.id}">${category.contentCategory}</label>
                `
            });
        });
    }

    // Get options from the database for the GAME-selectbox on the addPredefineded 'page'
    createGameOptions() {
        this.gameRef.get().then(snapshotData => {
            snapshotData.forEach(doc => {
                let game = doc.data();
                game.id = doc.id;

                let listOfGames = document.getElementById("whichGame");
                listOfGames.add(new Option(game.gameTitle, game.id));
            });
        });
    }
}
// ---------------------------------------------------------------------
// ---------------------------- Maja -----------------------------------
// ---------------------------------------------------------------------

// This page is not active in version 1.0
export default class LoginPage {
    constructor() {
        this.template();
    }

    // HTML-template for the login "page" with fast play and login
    template() {
        document.querySelector('#content').innerHTML += /*html*/ `
        <section id="login" class="page flexcontainer">
        <button class="btn" name="home" onclick="navigateTo(this.name)">Hurtigt i gang</button>
        <article id="firebaseui-auth-container"></article>
        </section>`
    }
}
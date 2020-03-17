// --------------------------------------------------------------------------------------
//     ---------------------------- Helle, Louise, Maja -------------------------------------
// ----------------------------------------------------------------------------------------


// Improting pages
// import LoginPage from "./pages/loginPage.js"
import AddPredefinedPage from "./pages/addPredefinedPage.js"
import HomeWarningPage from "./pages/homeWarning.js"
import AddQuestions from "./pages/addQuestions.js"
// import CreatePartyPage from "./pages/createPartyPage.js"
import AddPlayersPage from "./pages/addPlayersPage.js"
// import YouAreReadyPage from "./pages/youAreReadyPage.js"
import SettingsPage from "./pages/settingsPage.js"
import GamePage from "./pages/gamePage.js"
import BasketPage from "./pages/basketPage.js"


// Importing services
import _spaService from "./services/spa.js"
// import authService from "./services/loginService.js";
// import createPartyService from "./../services/createPartyService.js"
// import _joinPartyService from "./../services/joinPartyService.js"
import _questionInputService from "./services/questionInputService.js"
import _arrayNewQuestionService from "./services/arrayNewQuestionService.js"
import _addQuestionToGameService from "./services/addQuestionToGameService.js"
import _addPreQuestionService from "./services/addPreQuestionService.js"
import _addPlayersService from "./services/addPlayersService.js"
import loaderService from "./services/loader.js"


// Declaring and initiating pages
// let loginPage = new LoginPage();
let addPredefinedPage = new AddPredefinedPage();
let homeWarning = new HomeWarningPage();
let addQuestions = new AddQuestions();
// let createPartyPage = new CreatePartyPage();
let addPlayersPage = new AddPlayersPage();
// let youAreReadyPage = new YouAreReadyPage();
let settingsPage = new SettingsPage();
let gamePage = new GamePage();
let basketPage = new BasketPage();


// Initiating services
// authService.init();
_spaService.init();
loaderService.show(false)



// onclick handlers
window.pageChange = () => _spaService.pageChange();
window.createQuestion = () => _addPreQuestionService.createQuestion();
window.navigateTo = (hash) => _spaService.navigateTo(hash);
window.addAnotherPlayer = (whereToAdd) => addPlayersPage.addAnotherPlayer(whereToAdd);
// window.joinParty = (hash) => _joinPartyService.joinParty(hash);
// window.createParty = (hash) => createPartyService.createParty(hash);
window.addPlayers = () => _addPlayersService.addPlayers();
window.showRules = (name) => gamePage.showRules(name);
window.showAdd = () => gamePage.showAdd();
// window.logout = () => authService.logout();
window.checkbox = (element, id) => addQuestions.checkbox(element, id);
window.getThePartyId = () => settingsPage.getThePartyId();
window.basket = () => addQuestions.basket();
window.createAddedQestionsList = () => addQuestions.createAddedQestionsList();
window.highlightNumber = () => addQuestions.highlightNumber();
window.basket = () => addQuestions.basket();
window.createAddedQuestionsList = () => _addQuestionToGameService.createAddedQuestionsList();
window.highlightNumber = () => _arrayNewQuestionService.highlightNumber();
window.removeFromList = (element, id) => addQuestions.removeFromList(element, id);
window.gameInputSettings = (gameId, inputId, whereToPut, preOrNot) => _questionInputService.gameInputSettings(gameId, inputId, whereToPut, preOrNot);
window.styleWhichValue = (truthId, dareId) => _questionInputService.styleWhichValue(truthId, dareId);
window.createNewQuestion = () => _arrayNewQuestionService.createNewQuestion();
window.generateGamePages = () => gamePage.generateGamePages();
window.highlightChoosenCategories = (checkboxId) => _addPreQuestionService.highlightChoosenCategories(checkboxId);
window.getDataFromQuiz = (number, preOrNot) => _questionInputService.getDataFromQuiz(number, preOrNot);
window.showOrHideContent = (idForGameArticle) => _addQuestionToGameService.showOrHideContent(idForGameArticle)

// window.chekRangeSlider =()=> settingsPage.chekRangeSlider();
window.showSliderValue = () => settingsPage.showSliderValue();

// let rangeSlider = document.getElementById("myRange");
// let rangeBullet = document.getElementById("demo");

// rangeSlider.addEventListener("input", showSliderValue, false);

// function showSliderValue() {
//     rangeBullet.innerHTML = rangeslider.value;
//     console.log(rangeslider.value)
//     let bulletPositon = rangeSlider.value / rangeSlider.max;
//     rangeBullet.style.left = bulletPositon * 578 + "px";
// }





// Swipe
window.swipe = () => {
    const _C = document.querySelector('#gameContainer');
    let N = _C.children.length;

    let NF = 30,
        TFN = {
            'linear': function (k) {
                return k
            },
            'ease-in': function (k, e = 1.675) {
                return Math.pow(k, e)
            },
            'ease-out': function (k, e = 1.675) {
                return 1 - Math.pow(1 - k, e)
            },
            'ease-in-out': function (k) {
                return .5 * (Math.sin((k - .5) * Math.PI) + 1)
            }
        };

    let i = 0,
        x0 = null,
        locked = false,
        w, ini, fin, rID = null,
        anf;

    function stopAni() {
        cancelAnimationFrame(rID);
        rID = null
    };

    function ani(cf = 0) {
        _C.style.setProperty('--i', ini + (fin - ini) * TFN['ease-out'](cf / anf));

        if (cf === anf) {
            stopAni();
            return
        }

        rID = requestAnimationFrame(ani.bind(this, ++cf))
    };

    function unify(e) {
        return e.changedTouches ? e.changedTouches[0] : e
    };

    function lock(e) {
        x0 = unify(e).clientX;
        locked = true
    };

    function drag(e) {
        e.preventDefault();

        if (locked) {
            let dx = unify(e).clientX - x0,
                f = +(dx / w).toFixed(2);

            _C.style.setProperty('--i', i - f)
        }
    };

    function move(e) {
        if (locked) {
            let dx = unify(e).clientX - x0,
                s = Math.sign(dx),
                f = +(s * dx / w).toFixed(2);

            ini = i - s * f;

            if ((i > 0 || s < 0) && (i < N - 1 || s > 0) && f > .2) {
                i -= s;
                f = 1 - f
            }

            fin = i;
            anf = Math.round(f * NF);
            ani();
            x0 = null;
            locked = false;
        }
    };

    function size() {
        w = window.innerWidth
    };

    size();
    _C.style.setProperty('--n', N);

    addEventListener('resize', size, false);

    _C.addEventListener('mousedown', lock, false);
    _C.addEventListener('touchstart', lock, false);

    _C.addEventListener('mousemove', drag, false);
    _C.addEventListener('touchmove', drag, false);

    _C.addEventListener('mouseup', move, false);
    _C.addEventListener('touchend', move, false);
}
// ---------------------------------------------------------------------
// ---------------------------- Maja -----------------------------------
// ---------------------------------------------------------------------

import _questionInputService from "./questionInputService.js"


class AddPreQuestionService {
    constructor() {
        this.questionRef = _db.collection("questions");
        this.choosenCategoriesArr = [];
    }

    // Ad a predefined question-object to the database document
    createQuestion() {

        this.choosenCategories(); // Check for checked categories

        let gameInput = document.querySelector("#whichGame");
        let questionInput = document.querySelector("#newPreQuestion");

        _questionInputService.newPredefinedQuestion = {
            categories: this.choosenCategoriesArr,
            game: gameInput.value,
            questionContent: questionInput.value
        }

        _questionInputService.whichParameters('PredefinedPage', 'whichGame'); // Add extra parameteres for special games
        console.log(_questionInputService.newPredefinedQuestion)
        this.questionRef.add(_questionInputService.newPredefinedQuestion);
        questionInput.value = "";
        _questionInputService.resetQuizInputfields('PredefinedPage');



    }


    //Connect the choosen categories to the question
    choosenCategories() {
        this.choosenCategoriesArr = [];
        let theDivWithInputs = document.querySelector("#wichCategories"); // The container for the categories...
        let tags = theDivWithInputs.getElementsByTagName("input"); // ... the inputs within this container

        for (let i = 0; i < tags.length; i++) { // Run the following code for every input in the container
            let checkBox = document.getElementById(`${tags[i].id}`);

            if (checkBox.checked == true) { // If the current category is checked...
                let theIdForElements = tags[i].id // ... get the id (To avoid the first character being an invalid number 'the' is in front of the id from firebase)
                let thePureCategoryIdFromFireBase = theIdForElements.substr(3); // here we remove the first 3 characters ('the') ...

                // ... so the array (which is later added to firebase) ... 
                this.choosenCategoriesArr.push(`${thePureCategoryIdFromFireBase}`) // ... only holds the category id´s matching those on firebase

                checkBox.checked = false; // The checkbox is set back to false, so it´s ready for a new question ...
                this.highlightChoosenCategories(`${tags[i].id}`) // and so is it´s style
            }
        }
    }

    // Highligt the category checkboxes
    highlightChoosenCategories(checkboxId) {
        let checkBox = document.getElementById(`${checkboxId}`);
        let label = document.querySelector(`[for=${checkboxId}]`);

        if (checkBox.checked == true) { // if the checkbox is checked, ...
            label.style.background = 'var(--secundary_color_light)' // ... then change the background of it´s label
            label.style.color = 'var(--font_color_dark)'
        } else {
            label.style.background = 'var(--secundary_color_dark)'
            label.style.color = 'var(--font_color_light)'
        }
    }
}

const _addPreQuestionService = new AddPreQuestionService();
export default _addPreQuestionService;
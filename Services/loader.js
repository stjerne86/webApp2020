// ---------------------------------------------------------------------
// ---------------------------- Helle -----------------------------------
// ---------------------------------------------------------------------

class LoaderService {
    constructor() {
        this.template();
    }

    // HTML-template for the loader
    template() {
        document.querySelector('#content').innerHTML += /*html*/ `
         <div id="loader">
             <div class="spinner"></div>
         </div>   
        `;
    }

    // Remove or add the hide-class to show or hide the loader
    show(show) {
        let loader = document.getElementById('loader');
        console.log(loader)
        if (show) {
            loader.classList.remove("hide");
        } else {
            setTimeout(() => {


                loader.classList.add("hide");
            }, 300)
        }
    }
}

const loaderService = new LoaderService();
export default loaderService;
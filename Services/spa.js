// ---------------------------------------------------------------------
// ---------------------------- Helle -----------------------------------
// ---------------------------------------------------------------------

class SpaService {
    constructor() {
        this.defaultPage = "home";
    }

    init() {
        this.pages = document.querySelectorAll(".page");
        this.navItems = document.querySelectorAll(".nav-menu a");
        this.pageChange();
    }

    // This function will hide all pages
    hideAllPages() {
        for (let page of this.pages) {
            page.style.display = "none";
        }
    }

    //  This function will shiw bouth the page and tabbar
    showPage(pageId) {
        this.hideAllPages();
        document.querySelector(`#${pageId}`).style.display = "block";
        this.setActiveTab(pageId);
    }

    // This function displays the active tab
    setActiveTab(pageId) {
        for (let navItem of this.navItems) {
            if (`#${pageId}` === navItem.getAttribute("href")) {
                navItem.classList.add("active");
            } else {
                navItem.classList.remove("active");
            }
        }
    }

    // This function navigates to a new page by changing the href
    navigateTo(pageId) {
        window.location.href = `#${pageId}`;
    }

    // This function displays the page name in the URL as a #
    pageChange() {
        let page = this.defaultPage;
        if (window.location.hash) {
            page = window.location.hash.slice(1);
        }
        this.showPage(page);
    }

    // This function shows and hides the tabbar
    hideTabbar(hide) {
        let tabbar = document.querySelector('#nav-menu');
        if (hide) {
            tabbar.classList.add("hide");
        } else {
            tabbar.classList.remove("hide");
        }
    }
}
const _spaService = new SpaService();
export default _spaService;
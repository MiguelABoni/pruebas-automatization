class homePage {
    constructor() {
        this.computersLi = '.top-menu.notmobile li:nth-child(1)';
        this.desktopsLink = '.top-menu.notmobile li:nth-child(1) .sublist.first-level li:nth-child(1) a';
    }

    clickDesktopsLink = () => {
        /** Clickear el elemento "desktops" dentro de el submenú "computers" */
        cy.get(this.computersLi).realHover('mouse');
        cy.get(this.desktopsLink).click();
    }
}

export default new homePage();
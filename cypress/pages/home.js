class homePage {
    constructor() {
        this.computersLi = '.top-menu.notmobile li:nth-of-type(1)';
        this.desktopsLink = '.top-menu.notmobile li:nth-of-type(1) .sublist.first-level li:nth-child(1) a';
    }
    hoverComputersLi = () =>{
        //Hacer hover a "computers" en el menú principal
        cy.get(this.computersLi).trigger('mouseover');
    }
    
    clickDesktopsLink = () => {
        //Clickear el elemento "desktops" dentro de el submenú "computers"
        cy.get(this.desktopsLink).click();
    }
}

export default new homePage();
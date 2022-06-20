class desktopsPage {
    constructor() {
        this.addCartButton = '.button-2 product-box-add-to-cart-button';
    }

    clickCartButton = () => {
        cy.get(this.addCartButton).click();
    }
}

export default new desktopsPage();
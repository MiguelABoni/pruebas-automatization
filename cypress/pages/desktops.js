class desktopsPage {
    constructor() {
        this.addCartButtonComputer = '.button-2.product-box-add-to-cart-button';
    }

    /** Se clickea el botón para añadir el computador seleccionado */
    clickCartButton = () => {
        cy.get('.button-2.product-box-add-to-cart-button').first().click();
    }
}
export default new desktopsPage();
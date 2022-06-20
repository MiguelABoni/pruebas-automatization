class cameraPhotoPage {
    constructor() {
        this.buttonShoppingCart = '.ico-cart';
    }

    clickShoppingCartButton = () => {
        /** Se da click al botón que direcciona a la página del Carrito */
        cy.get(this.buttonShoppingCart).click();
    }
}

export default new cameraPhotoPage();
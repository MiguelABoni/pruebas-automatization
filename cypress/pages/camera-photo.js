class cameraPhotoPage {
    constructor() {
        this.buttonShoppingCart = '.ico-cart';
        this.addCartButtonCamera = '.button-2.product-box-add-to-cart-button';
        this.successClose = '.bar-notification.success span';
        this.priceCamera = '.price.actual-price';
        this.priceTitle = '.product-title'
    }

    clickCartButton = () => {

        let PriceSeletedCamera = {
            title: '',
            price: '',
            quantity: 1
        };

        /** Se da click al botón de "ADD TO CART" para añadir la camara al Carrito */
        cy.get(this.addCartButtonCamera).eq(1).click();

        cy.get(this.priceCamera)

        cy.get(this.priceCamera).eq(2).then((priceHTML) => {
            PriceSeletedCamera.price = priceHTML[0].textContent;
        });

        cy.get(this.priceTitle).eq(2).then((titleHTML) => {
            PriceSeletedCamera.title = titleHTML[0].textContent;
        });

        return PriceSeletedCamera;
    }

    clickShoppingCartButton = () => {
        // Cerrar modal
        cy.get(this.successClose).click();
        /** Se da click al botón que direcciona a la página del Carrito */
        cy.get(this.buttonShoppingCart).click();
    }
}

export default new cameraPhotoPage();
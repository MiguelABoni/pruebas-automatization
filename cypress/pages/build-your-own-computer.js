class buildYourOwnComputerPage {
    constructor() {
        this.titleComputer = '.product-name h1';
        this.RAMselect = '#product_attribute_2';
        this.HDD = 'label[for="product_attribute_3_6"]';
        this.software = 'label[for="product_attribute_5_11"]';
        this.AddToCard = '#add-to-cart-button-1';
        this.success = ".bar-notification.success";
        this.buttonShoppingCart = '.ico-cart';
    }

    AddToCardComputer = (element) => {

        // Verificar título del artículo
        cy.get(this.titleComputer).then((h1_element) => {
            const text = h1_element[0].textContent;
            expect(text).to.equal(element);
           });
        // Seleccionar una RAM (8 GB)
        cy.get(this.RAMselect).select(3);
        // Seleccionar un HDD
        cy.get(this.HDD).click();
        // Agregar Software
       cy.get(this.software).click();
        // Click al boton del carrito de compras
        cy.get(this.AddToCard).click();
        // Verificar mensaje
        cy.get(this.success).should('be.visible')
    }

    clickShoppingCartButton = () => {
        /** Se da click al botón que direcciona a la página del Carrito */
        cy.get(this.buttonShoppingCart).click();
    }
    
}

export default new buildYourOwnComputerPage();
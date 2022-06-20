class cartPage {
    constructor() {
        this.attributes = '.attributes';
        this.productName = '.product-name';
        this.price = '.product-unit-price';
        this.total = '.product-subtotal';
    }
    
    verificateInformation = (attributes) => {
        cy.get(this.attributes).contains(attributes);
        // this.attributesArray = document.querySelector('.attributes').innerHTML.split('<br>');
        // this.attributess = {
        //     processor: this.attributesArray[0],
        //     RAM: this.attributesArray[1],
        //     HDD: this.attributesArray[2],
        //     OS: this.attributesArray[3],
        //     Software: this.attributesArray.slice(4, this.attributesArray.length)
        // };
        
        // cy.get(this.attributes.processor).to.equal(attributes.processor);
        // cy.get(this.searchInput).type(element); 
        // cy.get(this.searchButton).click();
    }
    
}

export default new cartPage();
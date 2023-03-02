context('Find By Cep', () => {
    beforeEach( () => {
        cy.visit('http://127.0.0.1:5173/encontrar-diarista');
    })

    it('Button Disabled', () => {
        cy.get('.MuiInputBase-input').type('1234567');
        const button = cy.get('button').contains(/buscar/i);

        button.should('be.disabled');

        cy.get('.MuiInputBase-input').clear().type('12345678');
        
        button.should('not.be.disabled');
    })

    it('Find Cep', () => {
        cy.get('.MuiInputBase-input').type('38540-000');
        const button = cy.get('button').contains(/buscar/i);

        button.click();
    })
})
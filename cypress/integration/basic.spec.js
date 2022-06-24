/// <reference types="cypress" />

describe('Cypress basics', () => {
    it ('Should visit a page and assert title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        //const title = cy.title()
        //console.log(title)

        cy.pause() //Permite rodar os testes pausadamente, com gerenciamento do cypress
        // cy.debug() mostra mais infos no console

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')
    })

    it ("Should find and interact with an element", () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
            //.get('#buttonSimple')
            //.click()
            //.should('have.value', 'Obrigado!')

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })
})
// Com a linha 3 o VSCode reconhece que estamos trabalhando com cypress.

/// <reference types="cypress" />

// Os testes são descrítos em métodos it.

// Describe serve para agrupar testes.

// it.skip ou describe.skip utilizamos para que o teste não seja executado.
// it.only ou describe.only utilizamos para executar somente aquele teste.

it('A external test...', () => {

})

describe('Should group tests...', () => {
    describe('Should group more specific tests...', () => {
        it('A specific test...', () => {

        })
    })

    describe('Should group more specific tests 2...', () => {
        it('A specific test 2...', () => {

        })
    })

    it('A internal test...', () => {

    })
})
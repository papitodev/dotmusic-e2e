// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('playSong', (songName) => {
    cy.contains('.song', songName)
        .find('button')
        .click();
});

Cypress.Commands.add('songIsPlaying', (songName, timeout = 10000) => {
    cy.contains('.song', songName)
        .find('.pause', { timeout })
        .should('be.visible');
});

Cypress.Commands.add('songIsPausedOrStopped', (songName, timeout = 10000) => {
    cy.contains('.song', songName)
        .find('.play', { timeout })
        .should('be.visible');
});

Cypress.Commands.add('searchSong', (searchTerm) => {
    cy.get('#search-input').type(searchTerm);
    cy.contains('button', 'Buscar').click();
});
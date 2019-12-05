Cypress.Commands.add('getSearchInput', () => {
    cy.get('#searchInput');
})

Cypress.Commands.add('getSearchResultLink', () => {
    return cy.get(`:nth-child(1) > .mw-search-result-heading > a`);
})

Cypress.Commands.add('typeSearchPhrase', (phrase) => {
    cy.getSearchInput().type(phrase);
})

Cypress.Commands.add('searchForPhrase', (phrase) => {
    cy.typeSearchPhrase(phrase);
    cy.get('body > div.suggestions > a > div').click();
})

Cypress.Commands.add('openFirstSearchResult', (phrase) => {
    cy.searchForPhrase(phrase);
    cy.getSearchResultLink().click();
})
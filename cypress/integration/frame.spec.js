/// <reference types="cypress" />

import { MAIN_PAGE_URL, SEARCH_TEXT } from "../constants/constants";

describe("page frame", () => {

    it(`should url be equal to ${MAIN_PAGE_URL}`, () => {
        cy.url().should('equal', MAIN_PAGE_URL);
    })

    it('should show logo', () => {
        cy.get('.mw-wiki-logo').should('be.visible');
    })

    it('should show sidebar', () => {
        cy.get('#mw-panel').should('be.visible');
    })

    it('should show searchbar', () => {
        cy.getSearchInput().should('be.visible');
    })

    it('should show suggestions after typing text in searchbar', () => {
        cy.typeSearchPhrase(SEARCH_TEXT)
        cy.get('body > div.suggestions > a > div').should('be.visible')
    })

    it('should redirect to suggestions url afrer clicking on it', () => {
        cy.typeSearchPhrase(SEARCH_TEXT)
        cy.get('body > div.suggestions > a').should('have.attr', 'href');
    });

})

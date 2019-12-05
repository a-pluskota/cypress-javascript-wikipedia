/// <reference types="cypress" />

import { SEARCH_TEXT } from "../constants/constants";

describe("search results list", () => {

    beforeEach(() => {
        cy.searchForPhrase(SEARCH_TEXT)
    });

    it(`should show header with correct title` , () => {
        cy.get('#firstHeading').should('be.visible').and('contain.text', 'Search results');
    });

    it('should show search results list', () => {
       cy.get('.searchresults').should('be.visible');
    });

    it('should every search results list element contains header', () => {
       cy.get('.mw-search-result').each(function (searchResultElement) {
            cy.wrap(searchResultElement).should('have.descendants', '.mw-search-result-heading')
        })
    });

    it('should have href attribute on link to article', () => {
        cy.getSearchResultLink().should('have.attr', 'href');
    });
    
})

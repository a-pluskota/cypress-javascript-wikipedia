/// <reference types="cypress" />

import { SEARCH_TEXT } from "../constants/constants";

describe("article page", () => {

    beforeEach(() => {
        cy.openFirstSearchResult(SEARCH_TEXT);
    });

    it("should show article title", () => {
        cy.get('#firstHeading').should('be.visible');
    });

    it("should show content body", () => {
        cy.get('#bodyContent').should('be.visible');
    });

    it('(if table of contents exists) should have at least one link content section', () => {
        cy.get('body').then(($body) => {
            if ($body.find('#toc').length) {
                cy.get('.tocsection-1 > a').should('have.attr', 'href');
            } 
        });
    });

});

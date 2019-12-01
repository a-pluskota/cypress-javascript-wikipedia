/// <reference types="cypress" />

export function getArticleTitle() {

    return cy.get('#firstHeading');
}
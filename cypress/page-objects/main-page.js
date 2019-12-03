/// <reference types="cypress" />

import { MAIN_PAGE_URL } from "../resources/constants";

export function navigate() {
    cy.visit(MAIN_PAGE_URL);
}

export function getLogo() {
    return cy.get('.mw-wiki-logo');
}

export function getSearchInput() {
    return cy.get('#searchInput');
}

export function getContainingSearchSuggestionLink() {
    return cy.get('body > div.suggestions > a');
}

export function getContainingSearchSuggestion() {
    return cy.get('body > div.suggestions > a > div');
}

export function getSidebar() {
    return cy.get('#mw-panel');
}

export function searchForPhrase(phrase) {

    navigate();
    getSearchInput().type(phrase);
    getContainingSearchSuggestion().click();
}
/// <reference types="cypress" />

export const SEARCH_RESULT_HEADER = '.mw-search-result-heading';
export const SEARCH_RESULT_ABSTRACT = '.searchresult';
export const SEARCH_RESULT_DATA = '.mw-search-result-data';

export function getSearchResultsListHeader() {

    return cy.get('#firstHeading');
}

export function getSearchResultsList() {

    return cy.get('.searchresults');
}

export function getSearchResultListElement() {

    return cy.get('.mw-search-result');
}

export function validateEverySearchResultsElementContains(elementToSearchFor) {
    
    getSearchResultListElement().each(function (searchResultElement) {

        cy.wrap(searchResultElement)
        .should('have.descendants', `${elementToSearchFor}`)

    })
}

export function getSearchResultsListElementLink(numberOfElement) {


return cy.get(`:nth-child(${numberOfElement}) > .mw-search-result-heading > a`)
}


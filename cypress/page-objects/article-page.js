/// <reference types="cypress" />

export const REFERENCES = 'References';

export function getArticleTitle() {

    return cy.get('#firstHeading');
}

export function getReferencesLink() {
     //lokator do zmiany
    return cy.get('a > .toctext')
    .contains(REFERENCES);
}

export function getReferencesBox() {
     
    return cy.get('.references');
}

export function doStaffIfTableOfContentForArticleExists(staffToDo) {
    
    cy.get('body').then(($body) => {

        if ($body.find('#toc').length) {

            staffToDo     
        } 
    })
} 



/// <reference types="cypress" />

import { 
    navigate, 
    getLogo, 
    getSidebar,
    getSearchInput, 
    getContainingSearchSuggestionLink, 
    getContainingSearchSuggestion 
} from "../page-objects/main-page";

import { 
    SEARCH_TEXT, 
    MAIN_PAGE_URL 
} from "../resources/constants";

describe("main page", () => {

    beforeEach(() => {
        
        navigate();
    });

    it(`should url be equal to ${MAIN_PAGE_URL}`, () => {
        
        cy.url()
        .should('equal', MAIN_PAGE_URL);
    })

    it('should show logo', () => {
        
        getLogo()
        .should('be.visible');
    })

    it('should show sidebar', () => {
        
        getSidebar()
        .should('be.visible');
    })

    it('should show searchbar', () => {
        
        getSearchInput()
        .should('be.visible');
    })

    it('should show suggestions after typing text in searchbar', () => {
        
        getSearchInput()
        .type(SEARCH_TEXT);

        getContainingSearchSuggestion()
        .should('be.visible');
    })

    it('should redirect to suggestions url afrer clicking on it', () => {
        
        getSearchInput()
        .type(SEARCH_TEXT);

        getContainingSearchSuggestionLink().invoke('attr', 'href')
        .then(href => {
            
            getContainingSearchSuggestion()
            .click();
            
            cy.url()
            .should('include', href);
        });

    });

})

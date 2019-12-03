/// <reference types="cypress" />

import { 
    searchForPhrase 
} from "../page-objects/main-page";

import { 
    openSearchResult 
} from "../page-objects/search-page";

import { 
    REFERENCES,
    getArticleTitle,
    getReferencesLink,
    getReferencesBox,
    doStaffIfTableOfContentForArticleExists
} from "../page-objects/article-page";

import { 
    SEARCH_TEXT, 
    MAIN_PAGE_URL 
} from "../resources/constants";

describe("article page", () => {

    beforeEach(() => {
        
        searchForPhrase(SEARCH_TEXT);
        openSearchResult(1);

    });

    it("should show article title", () => {
        
        getArticleTitle()
        .should('be.visible');
    })

    it("(if table of contents exists) should table of content have link to References list", () => {

        doStaffIfTableOfContentForArticleExists(
            [
                getReferencesLink()
                .contains(REFERENCES),
                getReferencesBox()
                .should('contain.html', 'li')
            ]
        )
    })

    it('(if table of contents exists) should link to references redirect references list url afrer clicking on it', () => {

        doStaffIfTableOfContentForArticleExists(

            getReferencesLink().invoke('attr', 'href').then(href => {

                getReferencesLink()
                .click();
    
                cy.url()
                .should('include', href);
    
            })
        );
    });


})

/// <reference types="cypress" />

import { 
    searchForPhrase, getSearchInput
} from "../page-objects/main-page";

import { 
    SEARCH_RESULT_HEADER,
    SEARCH_RESULT_ABSTRACT,
    SEARCH_RESULT_DATA,
    SEARCH_RESULTS_HEADER_TEXT,
    getSearchResultsListHeader,
    getSearchResultsList,
    validateEverySearchResultsElementContains,
    getSearchResultsListElementLink
} from "../page-objects/search-page";

import { 
    SEARCH_TEXT
} from "../resources/constants";

describe("search page", () => {

    beforeEach(() => {

        searchForPhrase(SEARCH_TEXT);

    });

    it(`should show header with title "${SEARCH_RESULTS_HEADER_TEXT}"` , () => {

        getSearchResultsListHeader()
        .should('be.visible')
        .and('contain.text', SEARCH_RESULTS_HEADER_TEXT);
    });

    it('should show search results list', () => {
       
        getSearchResultsList()
        .should('be.visible');
    });


    it('should every search results list element contains header', () => {

        validateEverySearchResultsElementContains(SEARCH_RESULT_HEADER)
    
    });

    it('should every search results list element contains abstract', () => {

        validateEverySearchResultsElementContains(SEARCH_RESULT_ABSTRACT)
    
    });

    it('should every search results list element contains result data', () => {

        validateEverySearchResultsElementContains(SEARCH_RESULT_DATA)
    
    });

    it('should redirect to serach result url afrer clicking on it', () => {

        getSearchResultsListElementLink(1).invoke('attr', 'href').then(href => {
            
            getSearchResultsListElementLink(1)
            .click();

            cy.url()
            .should('include', href);

        });
    });
})

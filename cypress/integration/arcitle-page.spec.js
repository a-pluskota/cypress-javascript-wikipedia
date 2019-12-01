/// <reference types="cypress" />

import { 
    searchForPhrase 
} from "../page-objects/main-page";

import { 
    openSearchResult 
} from "../page-objects/search-page";

import { 
    getArticleTitle 
} from "../page-objects/article-page";

import { 
    SEARCH_TEXT, 
    MAIN_PAGE_URL 
} from "../test-data/constants";

describe("main page", () => {

    beforeEach(() => {
        
        searchForPhrase(SEARCH_TEXT);
        openSearchResult(1);

    });

    it("should show article title", () => {
        
        getArticleTitle()
        .should('be.visible');
    })

    // it('should show logo', () => {
        
    //     getLogo()
    //     .should('be.visible');
    // })

})

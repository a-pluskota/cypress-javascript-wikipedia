import './commands'
import { MAIN_PAGE_URL } from '../constants/constants';


beforeEach(() => {
    cy.visit(MAIN_PAGE_URL);
})

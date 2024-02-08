import { getSearchInput, getUsersCards } from '../support/users.po';

const dobRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{2}$/;

describe('Users List Page', () => {
  beforeEach(() => {
    cy.intercept('/assets/users.json').as('searchUsers');
    cy.visit('/users');
  });

  it('should get the users list from the server and display', () => {
    cy.wait('@searchUsers');
    getUsersCards().should('have.length', 10);
  });

  it('should get the users list on searching', () => {
    getSearchInput().type('iri');
    cy.wait('@searchUsers');
    getUsersCards().should('have.length', 1);
    getUsersCards().find('h4').should(
      el => {
        expect(
          el.text().trim()
        ).to.eq(
          'Irineu da Rocha'
        )
      }
    );
  });
});

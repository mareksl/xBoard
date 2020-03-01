describe('App spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shows App nav', () => {
    cy.get('ul.app__links').should('have.length', 1);
  });

  it('shows items in App nav', () => {
    const expectedNavLinks = ['home', 'hello'];

    cy.get('ul.app__links li').should($items => {
      const linkTextes = $items.toArray().forEach((item, index) => {
        expect(item).to.contain(expectedNavLinks[index]);
      });
    });
  });
});

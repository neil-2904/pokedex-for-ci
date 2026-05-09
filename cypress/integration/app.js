/* global cy */

describe('Pokedex', function() {
  it('frontpage can opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('Pikachu')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo')
  })
})
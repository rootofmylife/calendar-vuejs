/// <reference types="cypress" />

describe('hello word', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should display the main headline.', () => {
    cy.contains('Welcome to Your Vue.js App')
  })
})

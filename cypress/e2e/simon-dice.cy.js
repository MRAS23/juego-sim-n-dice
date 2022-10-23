/// <reference types="Cypress"/>
const URL = "127.0.0.1:5500";

context("simon-dice", () => {
  before(() => {
    cy.visit(URL);
  });

  describe("juega al simon dice", () => {
    const NUMERO_BOTONES = 4;

    it("se asegura que haya un tablero con botones", () => {
      cy.get("#simon").find(".cuadrado").should("have.length", NUMERO_BOTONES);
    });
  });
});

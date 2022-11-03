/// <reference types="Cypress"/>

const { array } = require("assert-plus");

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

  describe("Resuelve el juego", () => {
    it("pierde a la primera", () => {
      const $botonJugar = cy.get("#boton-comenzar");
      $botonJugar.should("have.class", "boton-neon");
      $botonJugar.click();
      $botonJugar.should("have.class", "oculto");

      cy.window()
        .wait(1000)
        .then((win) => {
          if (`.${win.secuenciaPC[0]}` == ".verde") {
            cy.get(`.rojo`).click().wait(1000);
          } else if (`.${win.secuenciaPC[0]}` == ".amarillo") {
            cy.get(`.rojo`).click().wait(1000);
          } else if (`.${win.secuenciaPC[0]}` == ".azul") {
            cy.get(`.rojo`).click().wait(1000);
          } else if (`.${win.secuenciaPC[0]}` == ".rojo") {
            cy.get(`.verde`).click().wait(1000);
          }
        });

      const $BotonVolverAJugar = cy.get("#boton-volver-a-jugar");
      $BotonVolverAJugar.should("have.class", "boton-neon");
      $BotonVolverAJugar.click().wait(1000);
    });

    it("llega a la 4ta ronda", () => {
      cy.window().then((win) => {
        cy.get(".rondas").should("have.text", "0");
        cy.get(`.${win.secuenciaPC}`).click().wait(3100);
        cy.window().then((win) => {
          cy.get(".rondas").should("have.text", "1");
          cy.get(`.${win.secuenciaPC[0]}`).click().wait(500);
          cy.get(`.${win.secuenciaPC[1]}`)
            .click()
            .wait(1000 * 3);
        });
        cy.window().then((win) => {
          cy.get(".rondas").should("have.text", "2");
          cy.get(`.${win.secuenciaPC[0]}`).click().wait(500);
          cy.get(`.${win.secuenciaPC[1]}`).click().wait(500);
          cy.get(`.${win.secuenciaPC[2]}`)
            .click()
            .wait(1000 * 4);
        });
        cy.window().then((win) => {
          cy.get(".rondas").should("have.text", "3");
          cy.get(`.${win.secuenciaPC[0]}`).click().wait(500);
          cy.get(`.${win.secuenciaPC[1]}`).click().wait(500);
          cy.get(`.${win.secuenciaPC[2]}`).click().wait(500);
          cy.get(`.${win.secuenciaPC[3]}`)
            .click()
            .wait(1000 * 5);
        });
        cy.get(".rondas").should("have.text", "4");
        if (`.${win.secuenciaPC[0]}` == ".verde") {
          cy.get(`.rojo`).click();
        } else if (`.${win.secuenciaPC[0]}` == ".amarillo") {
          cy.get(`.rojo`).click();
        } else if (`.${win.secuenciaPC[0]}` == ".azul") {
          cy.get(`.rojo`).click();
        } else if (`.${win.secuenciaPC[0]}` == ".rojo") {
          cy.get(`.verde`).click();
        }

        cy.get("#simon").should("have.class", "oculto");
      });
    });
  });
});

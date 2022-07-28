/// <reference types="cypress" />

describe("testes_cursos", () => {
    beforeEach(() => {
      
      cy.visit('')
    })
  
    it("busca válida por cursos ", () => {

      cy.contains("Courses").click();
      cy.wait(2000);
      cy.get("[type=Search]").type("nodejs{enter}");
      cy.get(".course-card__img-container").should("be.visible");

    })

    it("busca inválida por cursos ", () => {

      cy.contains("Courses").click();
      cy.wait(2000);
      cy.get("[type=Search]").type("python{enter}");
      cy.get(".products__list-no-results");

      })
    
    it("visualizar todos os cursos oferecidos", () => {

      cy.contains("Courses").click();
      cy.wait(2000);
      cy.get(".pagination__page-number").should("be.visible");

      })
      
    it("Fazer login na página de cursos", () => {

      cy.contains("Courses").click();
      cy.wait(2000);
      cy.contains("Sign In").click();
      cy.contains("Welcome Back!").should("be.visible");
        
      })

    it("Visualizar programação de um curso gratuito", () => {

      cy.contains("Courses").click();
      cy.wait(2000);
      cy.contains("Modern React and NodeJS Development (hands-on projects)").click();
      cy.contains("Course curriculum").should("be.visible");
      
      })

    })
  
    ///crtl+J -> npx cypress open
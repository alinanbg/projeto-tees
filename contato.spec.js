/// <reference types="cypress" />

describe("testes_contato", () => {
    beforeEach(() => {
      
      cy.visit('')
    })
  
    it("Contatar site na área do Blog", () => {
        cy.contains("Blog").click();
        cy.wait(2000);
        cy.contains("Contact Us").should("be.visible");
        
    })
  
    it("Contatar site na área dos Cursos", () => {
        cy.contains("Courses").click();
        cy.wait(2000);
        cy.contains("Contact Us").should("be.visible");
    })
   
    it("Visitar política de privacidade do site", () => {
        cy.contains("Privacy policy").click();
        cy.contains("Service Providers").should("be.visible");
    })
   
    it("Receber últimas postagens do Blog", () => {
        cy.get("[id = 'Get_Latest_Blog_Posts']");
        cy.get("[type = email]");
        cy.contains("Subscribe").should("be.visible");
        
    })
  
    })
  
    ///crtl+J -> npx cypress open
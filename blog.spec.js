/// <reference types="cypress" />

describe("testes_blog", () => {
    beforeEach(() => {
      
      cy.visit('')
    })
  
    it("busca por conteúdo válido", () => {
      
      cy.contains("Blog").click();
      cy.wait(2000);
      cy.get(".et_pb_menu__search-button").click();
      cy.get("[type=search]").type("javascript{enter}");
      cy.contains("Comprehensive Testing with JavaScript Workshop").should("be.visible");

    })

    it("busca por conteúdo inválido", () => {
      
        cy.contains("Blog").click();
        cy.wait(2000);
        cy.get(".et_pb_menu__search-button").click();
        cy.get("[type=search]").type("Spyware{enter}");
        cy.get(".not-found-title");
        
      })
    
    it("seta que retorna ao topo da página", () => {
      
        cy.contains("Blog").click();
        cy.wait(2000);
        cy.contains("NextLevel Solutions USA").should("be.visible");
        cy.get(".et_pb_scroll_top");
      })
      
    it("visualizar publicações antigas", () => {
      
        cy.contains("Blog").click();
        cy.wait(2000);
        cy.contains("Older Entries").click();
        
      })

    it("Visualizar publicações recentes", () => {

        cy.contains("Blog").click();
        cy.wait(2000);
        cy.contains("Older Entries").click();
        cy.wait(1000);
        cy.contains("Next Entries").click();

      })

    })
  
    ///crtl+J -> npx cypress open
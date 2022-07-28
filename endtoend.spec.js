/// <reference types="cypress" />

describe("testes_end_to_end", () => {
    beforeEach(() => {
      
      cy.visit('')
    })
  
    it("Usuário acessa o blog, depois os cursos, e realiza login com email válido", () => {

        cy.contains("Blog").click();
        cy.wait(2000);
        cy.contains("Courses").click();
        cy.wait(2500);
        cy.contains("Sign In").click();
        cy.wait(2500);
        cy.get("[id= 'user[email]']").type("alinanbgomes@gmail.com");
        cy.get("[id= 'user[password]']").type("senhateste");
        cy.contains("Sign in").click();
        cy.contains("Signed in successfully.");
    })

    it("Usuário faz login, olha suas notificações, e faz logout", () => {

        cy.contains("Login automation").click();
        cy.get("[id= 'user[email]']").type("alinanbgomes@gmail.com");
        cy.get("[id= 'user[password]']").type("senhateste");
        cy.contains("Sign in").click();
        cy.contains("Signed in successfully.");
        cy.wait(2000);
        cy.get(".fa.fa-caret-down").click();
        cy.contains("My Account").click();
        cy.contains("Notifications").click();
        cy.get(".fa.fa-caret-down").click();
        cy.contains("Sign Out").click();

    })
  
    it("Usuário acessa o blog, navega pelas postagens com os botões Older Entries e Next Entries", () => {
        cy.contains("Blog").click();
        cy.wait(2500);
        cy.contains("Older Entries").click();
        cy.wait(2500);
        cy.contains("Older Entries").click();
        cy.wait(2500);
        cy.contains("Next Entries").click();
        cy.wait(2500);
        cy.contains("Older Entries").click();
        cy.wait(2500);
        cy.contains("Next Entries").click();
        cy.wait(2500);
        cy.contains("Next Entries").click();
        
    })
   
    it("Usuário navega pelos cursos e deseja visitar o blog", () => {
        cy.contains("Courses").click();
        cy.wait(2000);
        cy.contains("Blog").should("be.visible");

    })
   
    it("Usuário faz login, e visita os cursos em progresso", () => {
        cy.contains("Login automation").click();
        cy.get("[id= 'user[email]']").type("alinanbgomes@gmail.com");
        cy.get("[id= 'user[password]']").type("senhateste");
        cy.contains("Sign in").click();
        cy.contains("Signed in successfully.");
        cy.wait(2000);
        cy.get(".fa.fa-caret-down").click();
        cy.contains("My Dashboard").click();
        cy.wait(2000);
        cy.get("#status.form__control").select("In Progress");
        ///cy.contains("In Progress").click();
        
    })
   
/*    it("Usuário faz login, olha suas notificações, e faz logout", () => {

        cy.contains("Login automation").click();
        cy.get("[id= 'user[email]']").type("alinanbgomes@gmail.com");
        cy.get("[id= 'user[password]']").type("senhateste");
        cy.contains("Sign in").click();
        cy.contains("Signed in successfully.");
        cy.wait(2000);
        cy.get(".fa.fa-caret-down").click();
        cy.contains("My Account").click();
        cy.contains("Notifications").click();
        cy.get(".fa.fa-caret-down").click();
        cy.contains("Sign Out").click();

    })
*/  
    })
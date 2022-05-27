/// <reference types="cypress" />

describe("testes_login", () => {
  beforeEach(() => {
    
    cy.visit('')
  })

  it("login com email e/ou senha vazios ou invalidos", () => {
    
    cy.contains("Login automation").click();
    cy.get("[id ='user[email]']");
    cy.get("[id ='user[password]']");
    cy.contains("Sign in").click();
    cy.get(".form-error__list-item");
  })

  it("login com conta do Google", () => {
   
    cy.contains("Login automation").click();
    cy.get("a.button.google").click();
    cy.contains("Fazer login").should("be.visible");
  })
 
  it("login com email e senha validos", () => {
    /// email válido: alinanbgomes@gmail.com
    /// senha válida: senhateste

    cy.contains("Login automation").click();
    cy.get("[id= 'user[email]']").type("alinanbgomes@gmail.com");
    cy.get("[id= 'user[password]']").type("senhateste");
    cy.contains("Sign in").click();
    cy.contains("Signed in successfully.");
  })
 
  it("criar uma nova conta", () => {
   
    cy.contains("Login automation").click();
    cy.contains("Create a new account").click();
    cy.get("[id= 'user[first_name]']");
    cy.get("[id= 'user[last_name]']");
    cy.get("[id= 'user[email]']");
    cy.get("[id= 'user[password]']");
    cy.get("[id= 'user[terms]']");
  })
 
  it("recuperar senha esquecida", () => {
   
    cy.contains("Login automation").click();
    cy.contains("Forgot Password?").click();
    cy.get("[id= 'user[email]']");
  })

  })

  ///crtl+J -> npx cypress open
//import HomePage from "../PageObjects/home"
///<reference types="Cypress"/>
///<reference types="cypress-xpath"/>




describe("Airtable_home", () => {

    beforeEach(() => {
        cy.visit("https://www.alpha-airtable.com")
    })

    it("Header", () => {

        cy.url().should('include', 'airtable');
        cy.get("#marketingHeaderSharedRoot").as("header")
        .find(".Brand-module_wordmarkWrap__c2GRh")
        .should('be.visible')
        cy.get('@header').find(".ActionGroup-module_actionGroupWrap__2CSAe")
        .should('be.visible')
        .contains("Contact sales").click({ force: true })
        cy.url().should('include', 'contact-sales')
        cy.go(-1)
        cy.get("@header").find(".ActionButton-module_mediumAndUpText__3D7uw")
        .should('be.visible')
        .contains("Sign up for free").click()
        cy.url().should('include', 'signup')
        cy.go(-1)
        cy.get("@header").find("a[data-tracking-name='Sign in']")
        .should('be.visible')
        .contains("Sign in").click()
        cy.url().should('include', 'login')
        cy.go(-1)
    })

    it.skip("hero Banner", () => {

        cy.get(".hero").as("hero").find(".hero__text-container")
            .should('be.visible')
        // cy.get('@hero').find(".hero__text-container").find('.hero__headline.css-1n6jbxo')
        //.should('have.te','Connect everything. Achieve anything.')
        cy.get(".hero__headline.css-1n6jbxo")
            .should('have.text', 'Connect everything. Achieve anything.')

        cy.get(".hero__text-container").find(".hero__button.css-1wb73zy").contains("Sign up for free").click()


        // cy.get('.hero__button css-1wb73zy')
        // .click({force:true})
        cy.get("@hero").find(".hero__image").should('be.visible')

    })


})
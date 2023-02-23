describe('Asset Hub',()=>{
    it('Reports - 5 insights shaping the future of martech',()=>{
        cy.visit("https://www.alpha-airtable.com/lp/resources/reports/5-key-insights-shaping-the-future-of-martech ")
        cy.url().should('eq','https://www.alpha-airtable.com/lp/resources/reports/5-key-insights-shaping-the-future-of-martech')
    cy.get('#FirstName').type("RAJASHEKHARA")
    cy.get('#LastName').type("REDDY")
    cy.get('#Email').type("rajareddy446@email.com")
    cy.get('#Phone').type("7483105893")
    cy.get("#Title").type("enginner")
    cy.get(".bkSelect__control.css-1lp4it4-control").type('HR{enter}')
    cy.get("input[name='Company']").type('Airtable')
    cy.get("button[type='submit']").click({force:true})
    })

})
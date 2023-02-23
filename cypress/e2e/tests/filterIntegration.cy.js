

describe('Product/Integrations', () => {
    it('Integrations', () => {
        cy.visit("https://www.alpha-airtable.com/integrations")
        cy.get(".CheckGroupFilter_checkGroupWrapper___Ys06:nth-of-type(1)").as('filter')
        cy.get("@filter").find(".CheckGroupFilter_checkFiltersContainer__5wRAx:nth-of-type(1)")
            .each(($el, index, $list) => {
                const textcheck = $el.find("[type='checkbox']").text()
                if (textcheck.includes('Project Management')) {
                    cy.wrap($el).check().should('have.length', 3).and('be.checked')
                }
                if (textcheck.includes('File Management')) {
                    cy.wrap($el).check().should('have.length', 4).and('be.checked')
                }
                if (textcheck.includes('Communication')) {
                    cy.wrap($el).check().should('have.length', 7).and('be.checked')
                }
                if (textcheck.includes('Eventst')) {
                    cy.wrap($el).check().should('have.length', 2).and('be.checked')
                }
                if (textcheck.includes('Social Networking')) {
                    cy.wrap($el).check().should('have.length', 4).and('be.checked')
                }
                if (textcheck.includes('Development')) {
                    cy.wrap($el).check().should('have.length', 1).and('be.checked')
                }

            })
        cy.get("[type='checkbox']").check({ force: true }).should('be.checked')
        cy.get("@filter").contains('Clear Filters').click({ force: true })
        cy.get("[type='checkbox']").should('not.be.checked')

    })
})
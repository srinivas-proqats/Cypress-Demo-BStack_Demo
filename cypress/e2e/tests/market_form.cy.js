
import MarketoForm from "../../pages/webiner"

describe("Market form", function () {

    before(()=>{
        cy.fixture('marketFormData').then((data)=>{
           this.data=data 
       })
    })

    it("validation", () => {

        cy.visit("https://www.alpha-airtable.com/lp/resources/reports/5-key-insights-shaping-the-future-of-martech")
        cy.fixture('MarketFormData').then(function(data){

            const resourse = new MarketoForm()
            

            resourse.firstName(this.data.fName)
            resourse.lastName(this.data.lName)
            resourse.email(this.data.Email)
            resourse.phoneNumber(this.data.phone)
            resourse.jobTitle(this.data.jTitle)
            resourse.teamDrop()
            resourse.companyName(this.data.cName)
            resourse.submitBtn()

        })
    })
})




class MarketoForm
{
    AfirstName="#FirstName";
    AlastName="#LastName";
    Aemail="input[name='Email']";
    AphoneNumber="#Phone";
    AjobTitle="input[name='Title']";
    AteamDrop=".bkSelect__single-value.css-qc6sy-singleValue";
    AcompanyName="#Company";
    AsubmitBtn="button[type='submit']";

    firstName(fName)
    {
        cy.get("#FirstName").type(fName);
    }
    lastName(lName)
    {
       cy.get(this.AlastName).type(lName)
    }
    email(Email)
    {
       cy.get(this.Aemail).type(Email)
    }
    phoneNumber(phone)
    {
        cy.get(this.AphoneNumber).click(phone)
    }
    jobTitle(jTitle)
    {
        cy.get(this.AjobTitle).click(jTitle)
    }
    teamDrop()
    {
        cy.get(this.AteamDrop).click('Engineer{enter}')
    }
    companyName(cName)
    {
     cy.get(this.AcompanyName).click(cName)
    }
    submitBtn()
    {
     cy.get(this.AsubmitBtn).click({force:true})
    }

}
export default MarketoForm
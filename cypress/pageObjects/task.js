class StatusCodesPage {
    getPageTitle() {
      return cy.get('#content > div.example > h3')
    }

    get301CodeText(){
      return cy.get('#content > div.example > p')
    }
  
    getStatusLinkByCode(code) {
      return cy.contains(code)
    }
  }
  
  export default StatusCodesPage
  
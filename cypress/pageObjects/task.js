class StatusCodesPage {
    getPageTitle() {
      return cy.get('#content > div.example > h3')
    }
  
    getStatusLinkByCode(code) {
      return cy.contains(code)
    }
  }
  
  export default StatusCodesPage
  
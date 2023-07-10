import StatusCodesPage from '../pageObjects/task'

describe('Accessing URL and Checking Status Codes', () => {
  const statusCodesPage = new StatusCodesPage()

  beforeEach(() => {
    cy.openUrl()
  })

  it('Verifies the status codes on the page', () => {
    // Assertion: Verify if the page has loaded successfully
    statusCodesPage.getPageTitle().should('be.visible')

    // Assertion: Verify the status code of a specific link
    statusCodesPage.getStatusLinkByCode('200').should('have.attr', 'href', 'status_codes/200')

    // Assertion: Verify the status code of another link
    statusCodesPage.getStatusLinkByCode('301').should('have.attr', 'href', 'status_codes/301')

    // Assertion: Verify the status code of another link
    statusCodesPage.getStatusLinkByCode('404').should('have.attr', 'href', 'status_codes/404')

    // Assertion: Verify the status code of another link
    statusCodesPage.getStatusLinkByCode('500').should('have.attr', 'href', 'status_codes/500')
  })

  it("Verify that user is able to select Status Code for Redirection", () => {
    statusCodesPage.getStatusLinkByCode('301').click()
    statusCodesPage.get301CodeText().should('include.text','This page returned a 301 status code')
  })
})

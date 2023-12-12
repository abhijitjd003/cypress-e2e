var expect = chai.expect;


describe("Maestro", () => {
  it("Homepage Tests", () => {
    const baseUrl = "https://membercentral.renaissanceins.com";
    // cy.login(`${baseUrl}`, "MMTestExt@MM.com","@MMRodeo22");
    cy.login(`${baseUrl}`, "MMTestExt@MM.com", "@MMRodeo22");
    const maestroUrl = `${baseUrl}/Maestro/`;
    cy.request(maestroUrl).then((response) => {
      cy.visit(maestroUrl);
    });
    cy.wait(30000);
    cy.get("#prism-toolbar > div.prism-persistent-toolbar-holder > div > div.prism-toolbar__section.prism-toolbar__section--left > div.toolbar-breadcrumbs.toolbar-breadcrumbs--cut > span > div");

  });
});

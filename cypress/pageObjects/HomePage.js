import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get("button#navbarAccount");
  }
 
  static get loginButton() {
    return cy.get("button#navbarLoginButton");
  }

  static get userProfileButton(){
    return cy.get("button[aria-label='Go to user profile']")
  }

  static get searchIcon() {
    return cy.get("#searchQuery")
  }

  static get searchField() {
    return cy.get("#searchQuery input")
  }

  static get productBox() {
    return cy.get("div.mdc-card")
  }

  static get productInfo(){
    return cy.get("app-product-details")
  }

  static get closeButton(){
    return cy.get("button[aria-label='Close Dialog']")
  }

  static get reviewButton(){
    return cy.get("mat-expansion-panel-header").contains("Reviews")
  }

  static get submitButton(){
    return cy.get("button[aria-label='Send the review']")
  }

  static get reviewTextField(){
    return cy.get("textarea[aria-label='Text field to review a product']")
  }

  static itemsInPage(number) {
    return cy.get("mat-select") // Get the mat-select dropdown
      .click({ force: true }) // Force the click to open the dropdown
      .get("mat-option") // Get all mat-option elements in the dropdown
      .contains(number.toString()) // Find the option that contains the number
      .click({ force: true }); // Force the click on the option
  }

  static get addToBasketButton() {
    return cy.get("button[aria-label='Add to Basket']")
  }

  static get basketButton() {
    return cy.get("button[aria-label='Show the shopping cart']")
  }
}

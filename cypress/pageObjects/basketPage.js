import { BasePage } from "./basePage";

export class BasketPage extends BasePage {
    
    static get checkoutButton() {
        return cy.get("#checkoutButton");
    }
}
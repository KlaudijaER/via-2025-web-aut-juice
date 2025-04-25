import { BasePage } from "./basePage";

export class DeliveryMethodPage extends BasePage {
    static get standardDelivery() {
        return cy.get("#mat-radio-44");
    }

    static get continueButton(){
        return cy.get("button[aria-label='Proceed to delivery method selection']");
    }
}
import { BasePage } from "./basePage";

export class PaymentOptionsPage extends BasePage {
    static get cardSelection(){
        return cy.get("#mat-radio-45-input");
    }

    static get continueButton(){
        return cy.get("button[aria-label='Proceed to review']");
    }
}
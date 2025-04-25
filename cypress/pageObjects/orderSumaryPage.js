import { BasePage } from "./basePage";

export class OrderSummaryPage extends BasePage {
    static get orderPayButton(){
        return cy.get("button[aria-label='Complete your purchase']");
    }
}
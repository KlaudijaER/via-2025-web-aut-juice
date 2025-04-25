import { BasePage } from "../pageObjects/basePage";

export class SavedAddressesPage extends BasePage {
    static get newAddressButton() {
        return cy.get("button[aria-label='Add a new address']")
    }

    static get addressInfo(){
        return cy.get('mat-cell.mat-column-Address')
    }
}
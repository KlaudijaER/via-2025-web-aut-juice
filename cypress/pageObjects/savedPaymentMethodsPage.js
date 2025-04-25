import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
    static get addCardButton() {
        return cy.contains('mat-expansion-panel-header', 'Add new card')
    }

    static get nameField() {
        return cy.contains('label', 'Name').parents('.mat-mdc-form-field-flex').find('input')
    }

    static get cardNumberField() {
        return cy.contains('label', 'Card Number').parents('.mat-mdc-form-field-flex').find('input')
    }

    static get expirationMonthField() {
        return cy.contains('label', 'Expiry Month').parents('.mat-mdc-form-field-flex').find('select')
    }

    static get expirationYearField() {
        return cy.contains('label', 'Expiry Year').parents('.mat-mdc-form-field-flex').find('select')
    }

    static get submitButton() {
        return cy.get("#submitButton")
    }

    static get cardInfo(){
        return cy.get('mat-cell.mat-column-Number')
    }

}




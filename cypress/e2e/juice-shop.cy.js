import { BasketPage } from "../pageObjects/basketPage";
import { CreateAddressPage } from "../pageObjects/createAddressPage";
import { DeliveryMethodPage } from "../pageObjects/deliveryMethodPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { OrderCompletionPage } from "../pageObjects/orderCompletionPage";
import { OrderSummaryPage } from "../pageObjects/orderSumaryPage";
import { PaymentOptionsPage } from "../pageObjects/paymentOptionsPage";
import { RegistrationPage } from "../pageObjects/registrationPage";
import { SavedAddressesPage } from "../pageObjects/savedAddressesPage";
import { SavedPaymentMethodsPage } from "../pageObjects/savedPaymentMethodsPage";
import { SelectAddressPage } from "../pageObjects/selectAddresspage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileButton.should("contain.text", "demo");
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetACustomerLink.click();
      // Find - how to generate random number in JS
      const randomNumber = Math.floor(Math.random() * 900000) + 100000; // Replace with actual random number generation logic
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      const emailAddress = `email_${randomNumber}@ebox.com`;
      const password = "ABC123#()"; // Replace with actual password generation logic
      RegistrationPage.emailField.type(emailAddress); // Fill in email field with generated email address
      // Save that email address to some variable
      // Fill in password field and repeat password field with same password
      RegistrationPage.passwordField.type(password);
      RegistrationPage.repeatPasswordField.type(password);
      // Click on Security Question menu
      RegistrationPage.securityQuestionField.click();
      // Select  "Name of your favorite pet?"
      RegistrationPage.securityQuestionOptions.contains("Name of your favorite pet?").click();
      // Fill in answer
      RegistrationPage.answerField.type("Fluffy"); // Replace with actual answer generation logic
      // Click Register button
      RegistrationPage.registrationButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(emailAddress);
      // Set password value to previously used password value
      LoginPage.passwordField.type(password);
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileButton.should("contain.text", emailAddress);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Lemon
      HomePage.searchField.type("Lemon{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search 500ml and validate Lemon, while having multiple cards", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for 500ml
      HomePage.searchField.type("500ml{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");
    }
    );

    // Create scenario - Search 500ml and validate cards
    it("Search 500ml and validate cards", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for 500ml
      HomePage.searchField.type("500ml{enter}");
      // Select a product card - Eggfruit Juice (500ml)
      HomePage.productBox.contains("Eggfruit Juice (500ml)").click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.productInfo.should("contain.text", "Now with even more exotic flavour.");
      // Close the card
      HomePage.closeButton.click();
      // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");
      // Close the card
      HomePage.closeButton.click();
      // Select a product card - Strawberry Juice (500ml)
      HomePage.productBox.contains("Strawberry Juice (500ml)").click();
      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.productInfo.should("contain.text", "Sweet & tasty!");
    });

    // Create scenario - Read a review
    it("Read a review", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for King
      HomePage.searchField.type("King{enter}");
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.productBox.contains("OWASP Juice Shop \"King of the Hill\" Facemask").click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.reviewButton.click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf
      HomePage.productInfo.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
    });
    
    // Create scenario - Add a review
    it("Add a review", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Raspberry
      HomePage.searchField.type("Raspberry{enter}");
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.productBox.contains("Raspberry Juice (1000ml)").click();
      // Type in review - "Tastes like metal"
      HomePage.reviewTextField.type("Tastes like metal");
      // Click Submit
      HomePage.submitButton.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.reviewButton.click();
      // Validate review -  "Tastes like metal"
      HomePage.productInfo.should("contain.text", "Tastes like metal");
    });

    // Create scenario - Validate product card amount
    it("Validate product card amount", () => {
      // Validate that the default amount of cards is 12
      HomePage.productBox.should("have.length", 12);
      // Change items per page (at the bottom of page) to 24
      HomePage.itemsInPage(24);
      // Validate that the amount of cards is 24
      HomePage.productBox.should("have.length", 24);
      // Change items per page (at the bottom of page) to 36
      HomePage.itemsInPage(36);
      // Validate that the amount of cards is 35
      HomePage.productBox.should("have.length", 36); //I have 36 items when I look it up
    });

    // Create scenario - Buy Girlie T-shirt
    it("Buy Girlie T-shirt", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Girlie
      HomePage.searchField.type("Girlie{enter}");
      // Add to basket "Girlie"
      HomePage.addToBasketButton.click();
      // Click on "Your Basket" button
      HomePage.basketButton.click();
      // Create page object - BasketPage
      // Click on "Checkout" button
      BasketPage.checkoutButton.click();
      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      SelectAddressPage.selectAddress("United Fakedom");
      // Click Continue button
      SelectAddressPage.continueButton.click();
      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      DeliveryMethodPage.standardDelivery.click();
      // Click Continue button
      DeliveryMethodPage.continueButton.click();
      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      PaymentOptionsPage.cardSelection.click();
      // Click Continue button
      PaymentOptionsPage.continueButton.click();
      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrderSummaryPage.orderPayButton.click();
      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"
      OrderCompletionPage.purchesInfo.should("contain.text", "Thank you for your purchase!");
    });


    // Create scenario - Add address
    it("Add address", () => {
    // Click on Account
    HomePage.accountButton.click();
    // Click on Orders & Payment
    HomePage.ordersPaymentsButton.click();
    // Click on My saved addresses
    HomePage.addressButton.click();
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    SavedAddressesPage.newAddressButton.click();
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    const country = "Canada";
    const name = "James Wood";
    const mobile = "1234567890";
    const zipCode = "12345";
    const address = "123 Main St";
    const city = "Toronto";
    const state = "Ontario";
    CreateAddressPage.countryField.type(country);
    CreateAddressPage.nameField.type(name);
    CreateAddressPage.mobileField.type(mobile);
    CreateAddressPage.zipCodeField.type(zipCode);
    CreateAddressPage.addressField.type(address);
    CreateAddressPage.cityField.type(city);
    CreateAddressPage.stateField.type(state);
    // Click Submit button
    CreateAddressPage.submitButton.click();
    // Validate that previously added address is visible
    SavedAddressesPage.addressInfo.should("contain.text", "123 Main St, Toronto, Ontario, 12345");

    });


    // Create scenario - Add payment option
    it.only("Add payment option", () => {
    // Click on Account
    HomePage.accountButton.click();
    // Click on Orders & Payment
    HomePage.ordersPaymentsButton.click();
    // Click on My payment options
    HomePage.paymentOptionsButton.click();
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    SavedPaymentMethodsPage.addCardButton.click();
    // Fill in Name
    const name = "James Wood";
    SavedPaymentMethodsPage.nameField.type(name);
    // Fill in Card Number
    const cardNumber = "1234 5678 9012 3456";
    SavedPaymentMethodsPage.cardNumberField.type(cardNumber);
    // Set expiry month to 7
    SavedPaymentMethodsPage.expirationMonthField.select("7");
    // Set expiry year to 2090
    SavedPaymentMethodsPage.expirationYearField.select("2090"); 
    // Click Submit button
    SavedPaymentMethodsPage.submitButton.click();
    // Validate that the card shows up in the list
    SavedPaymentMethodsPage.cardInfo.should("contain.text", "************3456");
    });
  });
});

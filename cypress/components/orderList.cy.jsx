import OrderList from "../../src/views/pages/orders/OrderList";
import { mount } from 'cypress/react18'

// Cypress.Commands.add('mount', (component, options) => {
//   // Wrap any parent components needed
//   return mount(<OrderList>{component}</OrderList>, options)
//   // return mount(component, options)
// })

  it("Test", () => {
    mount(<OrderList />);
    cy.get("span").should("have.text", "10");
  });

// describe("NewsLetterSubscription.cy.js", () => {
//   describe("NewsLetterSubscription.cy.js", () => {
//     it("Check input field for placeholder", () => {
//       mount(<OrderList />); // mount the component
//       cy.get("input").should(
//         "have.attr",
//         "placeholder",
//         "Subscribe to our newsletter"
//       ); // check the placeholder in the input field
//     });
//     it("test newsletter subscription", () => {
//       mount(<OrderList />); // mount the component
//       cy.get('[data-test="email-input"]').type("test@gmail.com"); // Type email
//       cy.get('[data-test="submit-button"]').click(); // Click on submit button
//       cy.get('[data-test="success-message"]')
//         .should("exist")
//         .contains("Thank you for subscribing to our newsletter"); // Check if success message is displayed
//     });
//   });
// });
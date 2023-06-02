import { slowCypressDown } from "cypress-slow-down";
slowCypressDown(800);

describe("Order Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4002/orders");
  });

  it("Visible table", () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      cy.get("input[name=email]").clear();
      cy.get("input[name=email]").type("super.admin.dev@gmail.com");

      cy.get("input[name=password]").clear();
      cy.get("input[name=password]").type("super.admin.dev@gmail.com");
      cy.get("form").submit();

      cy.get(".__table").should("be.visible");
    }
  });

  // it("validate form submit no data", () => {
  //   cy.get("form").submit();
  //   cy.get("._email_error_report").contains("Email is required");
  //   cy.get("._password_error_report").contains("Password is required");
  // });

  // it("check email for wrong format", () => {
  //   cy.get("input[name=email]").clear();
  //   cy.get("input[name=email]").type(Cypress.env("hostApi"));

  //   cy.get("input[name=password]").clear();
  //   cy.get("input[name=password]").type("nguyenduyet");

  //   cy.get("form").submit();
  //   cy.get("._email_error_report").contains("Please enter a valid email");
  // });

  // it("check email for correct format", () => {
  //   cy.get("input[name=email]").clear();
  //   cy.get("input[name=email]").type("nguyenduyet@gmail.com");

  //   cy.get("input[name=password]").clear();
  //   cy.get("input[name=password]").type("nguyenduyet");

  //   cy.get("form").submit();
  //   cy.get(".Toastify__toast-body").find("div").contains("Unauthorized.");
  // });

  // it("check wrong password input", () => {
  //   cy.get("input[name=email]").clear();
  //   cy.get("input[name=email]").type("nguyenduyet@gmail.com");

  //   cy.get("input[name=password]").clear();
  //   cy.get("input[name=password]").type("1234");

  //   cy.get("form").submit();
  //   cy.get(".Toastify__toast-body")
  //     .find("div")
  //     .contains("Password must be 6 characters long.");
  // });

  // it("successfully submitted login information", () => {
  //   cy.get("input[name=email]").clear();
  //   cy.get("input[name=email]").type("super_admin@gmail.com");

  //   cy.get("input[name=password]").clear();
  //   cy.get("input[name=password]").type("super_admin@gmail.com");
  //   cy.get("form").submit();
  // });
});

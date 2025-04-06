import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("The test cases for contact us page", () => {
  // beforeAll(() => {
  //   console.log("beforeAll");
  // });

  // beforeEach(() => {
  //   console.log("beforeEach");
  // });

  // afterEach(() => {
  //   console.log("afterEach");
  // });

  // afterAll(() => {
  //   console.log("afterAll");
  // });
  it("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact us component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  it("Should load 2 input box inside contact us component", () => {
    render(<Contact />);
    const inputBox = screen.getAllByRole("textbox");
    expect(inputBox.length).toBe(2);
  });
});

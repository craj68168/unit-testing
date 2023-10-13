import Dashboard, { myFuction, myVariable } from "@/app/dashboard";
import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";

describe("Dashboard page", () => {
  it("Should render properly", () => {
    render(<Dashboard />); // ARRANGE
    const ele = screen.getByRole("heading"); //ACTION
    const text = "Hello World";
    expect(ele).toHaveTextContent(text); //ASSERT
  });

  it("Should content a text 'testing' ", () => {
    render(<Dashboard />);
    const ele = screen.getByText(/testing/i); // i means doesnot matter all caps or case sensitive
    expect(ele).toBeInTheDocument();
  });

  it("Should having heading", () => {
    render(<Dashboard />);
    const ele = screen.getByText("This is Testing", {
      selector: "p",
    });
    expect(ele).toBeInTheDocument();
  });

  it("Fuction or variable", () => {
    expect(typeof myFuction).toEqual("function");
  });

  it("Fuction or variable", () => {
    expect(typeof myFuction).toBe("function");
  });

  it("Fuction or variable", () => {
    expect(typeof myVariable).toBe("string");
  });

  test("Check if a variable is undefined", () => {
    const myVariable = undefined;
    expect(myVariable).toBeUndefined();
  });

  test("Check if a variable is defined", () => {
    const myVariable = "some value";
    expect(myVariable).toBeDefined();
  });
});

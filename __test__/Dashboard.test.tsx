import Dashboard, {
  funcBool,
  myFunction as myFunction,
  myVariable,
} from "@/app/dashboard";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Dashboard page", () => {
  it("Should render properly", () => {
    render(<Dashboard />); // ARRANGE
    const ele = screen.getByRole("heading"); //ACTION
    const text = "Hello World";
    expect(ele).toHaveTextContent(text); //ASSERT
  });

  it("Should content a text 'testing' ", () => {
    render(<Dashboard />);
    const ele = screen.getByText(/testing/i); // i means does not matter all caps or case sensitive
    expect(ele).toBeInTheDocument();
  });

  it("Should having heading", () => {
    render(<Dashboard />);
    const ele = screen.getByText("This is Testing", {
      selector: "p",
    });
    expect(ele).toBeInTheDocument();
  });

  it("Function or variable", () => {
    expect(typeof myFunction).toEqual("function");
  });

  it("Function or variable", () => {
    expect(typeof myFunction).toBe("function");
  });

  it("Function or variable", () => {
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

  test("Check if the function returns true", () => {
    const result = funcBool();
    expect(result).toBe(true);
  });

  it("If state has string or boolean", () => {
    const { container } = render(<Dashboard />);
    const component = container.querySelector("myState"); // Replace 'your-selector' with the actual selector to access the state
    expect(component).toBeDefined(); // Ensure that the component or the state element is defined
    const myState = component?.getAttribute("myState"); // Replace 'your-attribute' with the actual attribute containing the state
    // Check if the state is either a string or a boolean
    expect(typeof myState).toMatch(/string|boolean/);
  });
});

import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("should render properly", () => {
  it("should contain the text", () => {
    render(<Home />); // ARRANGE
    const ele = screen.getByRole("heading", {
      //ACTION
      name: /Unit testing/i,
    });
    expect(ele).toBeInTheDocument(); //ASSERT
  });

  it("should contain name 'Raj Chaudhary'", () => {
    render(<Home />);
    const ele = screen.getByText("I forgot my name", {
      selector: "p",
    });
    expect(ele).toBeInTheDocument();
  });
});

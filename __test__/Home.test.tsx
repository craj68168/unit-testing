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

  it("should contain name 'Ready to Work'", () => {
    render(<Home />);
    const ele = screen.getByText("Ready to Work", {
      selector: "p",
    });
    expect(ele).toBeInTheDocument();
  });
});

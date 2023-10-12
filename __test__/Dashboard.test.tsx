import Dashboard from "@/app/dashboard";
import "@testing-library/jest-dom"; 
import { render, screen } from "@testing-library/react";

describe("Dashboard page", () => {
  it("Should render properly", () => {
    render(<Dashboard />); // ARRANGE

    const ele = screen.getByRole("heading"); //ACTION
    const text = "Hello World";

    expect(ele).toHaveTextContent(text); //ASSERT
  });
});

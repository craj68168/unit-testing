import Dashboard from "@/app/dashboard";
import "@testing-library/jest-dom";
import { it } from "node:test";
import { render, screen } from "@testing-library/react";

describe("Dashboard page", () => {
  it("Should render properly", () => {
    render(<Dashboard />);

    const header = screen.getByRole("heading");
    const text = "Hello World";

    expect(header).toHaveTextContent(text);
  });
});

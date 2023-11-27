import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
import user from "@testing-library/user-event";

describe("Counter test", () => {
  test("handlers are called", async () => {
    user.setup();
    const incrementCountMock = jest.fn();
    const decrementCountMock = jest.fn();

    render(
      <Counter
        count={0}
        incrementCount={incrementCountMock}
        decrementCount={decrementCountMock}
      />
    );

    // Simulate user interaction (e.g., clicking a button)
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(incrementCountMock).toHaveBeenCalledTimes(1);
    expect(decrementCountMock).toHaveBeenCalledTimes(1);
  });

  it("should display the count prop and update it when buttons are clicked", () => {
    const incrementCount = jest.fn();
    const decrementCount = jest.fn();

    const { getByTestId, getByText } = render(
      <Counter
        count={5}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
    );

    const countValue = getByTestId("count-value");
    const incrementButton = getByText("Increment");
    const decrementButton = getByText("Decrement");

    expect(countValue).toHaveTextContent("5");

    fireEvent.click(incrementButton);
    expect(incrementCount).toHaveBeenCalled();

    expect(countValue).toHaveTextContent("6");
    fireEvent.click(decrementButton);
    expect(decrementCount).toHaveBeenCalled();
    expect(countValue).toHaveTextContent("5");
  });

  test("renders number value correctly", () => {
    const { getByText } = render(<Counter value={42} />);
    const valueElement = getByText(/42/i);
    expect(valueElement).toBeInTheDocument();
  });

  test("renders string value correctly", () => {
    const { getByText } = render(<Counter value="Hello, World!" />);
    const valueElement = getByText(/Hello, World!/i);
    expect(valueElement).toBeInTheDocument();
  });
});

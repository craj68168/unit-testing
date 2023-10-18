import { render, screen } from "@testing-library/react";
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
});

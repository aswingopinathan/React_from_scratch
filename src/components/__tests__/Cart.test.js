import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../__mocks__/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Mocking fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("should Load Restaurant Menu Component", async () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <Cart />
      </Provider>
    </BrowserRouter>
  );

  // ✅ Wait for async content from fetch to appear
  const accordionHeader = await screen.findByText("Breakfast (21)");
  fireEvent.click(accordionHeader);

  // ✅ Food items rendered after accordion click
  await waitFor(() => {
    expect(screen.getAllByTestId("foodItems").length).toBe(21);
  });

  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

  // ✅ waitFor ensures re-render after adding to cart
  await waitFor(() => {
    expect(screen.getAllByTestId("foodItems").length).toBe(23);
  });

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  await waitFor(() => {
    expect(screen.getAllByTestId("foodItems").length).toBe(21);
  });

  expect(screen.getByText("Cart is empty")).toBeInTheDocument();
});

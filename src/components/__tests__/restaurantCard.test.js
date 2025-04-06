import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import resData from "../__mocks__/resData.json";

it("Should load restaurant card with props", () => {
  render(<RestaurantCard resData={resData} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});

it("Should load restaurant card component with promotes label", () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  render(<RestaurantCardPromoted resData={resData} />);

  const name = screen.getByText("Promoted");

  expect(name).toBeInTheDocument();
});

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { ProductCard } from "../..";

it("should render button component", () => {
  const component = renderer.create(
    <ProductCard
      data={{
        strDrinkThumb: "",
        strInstructions: "",
        strDrink: "",
        strCategory: "",
      }}
      handleFavourite={null}
      add="ADD"
    />
  );
  expect(component).toMatchSnapshot();
});

it("should render button with props", () => {
  render(
    <ProductCard
      data={{
        strDrinkThumb: "",
        strInstructions: "",
        strDrink: "",
        strCategory: "",
      }}
      handleFavourite={null}
      add="ADD"
    />
  );
  const productCard = screen.getByTestId("productCard");
  const productCardButton = screen.getByTestId("productCardButton");
  expect(productCard).toHaveTextContent("ADD");
  expect(productCardButton).toHaveTextContent("ADD");
  expect(productCardButton).not.toHaveTextContent("REMOVE");
});

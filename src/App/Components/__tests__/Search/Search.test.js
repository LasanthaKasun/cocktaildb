import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Search } from "../..";

it("should render button component", () => {
  const component = renderer.create(
    <Search
      title="Search"
      icon={null}
      placeholder="Search"
      value=""
      onChangeText={null}
      onSearchAction={null}
    />
  );
  expect(component).toMatchSnapshot();
});

it("should render button with props", () => {
  render(
    <Search
      title="Search"
      icon={null}
      placeholder="Search"
      value=""
      onChangeText={null}
      onSearchAction={null}
    />
  );
  const search = screen.getByTestId("search");
  expect(search).toHaveTextContent("Search");
});

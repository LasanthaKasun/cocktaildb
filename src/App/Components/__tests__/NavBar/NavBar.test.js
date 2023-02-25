import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { NavBar } from "../..";

it("should render button component", () => {
  const component = renderer.create(<NavBar />);
  expect(component).toMatchSnapshot();
});

it("should render button with props", () => {
  render(<NavBar title="Sample Title"/>);
  const navBar = screen.getByTestId("navBar");
  expect(navBar).toHaveTextContent("Sample Title");
});

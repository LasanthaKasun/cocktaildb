import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Button } from "../..";

it("should render button component", () => {
  const component = renderer.create(<Button />);
  expect(component).toMatchSnapshot();
});

it("should render button with props", () => {
  render(<Button title="Back" icon="null" onClick={null} />);
  const actionBtn = screen.getByTestId("actionBtn");
  expect(actionBtn).toHaveTextContent("Back");
});

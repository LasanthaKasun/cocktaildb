import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import { LoadingSpinner } from "../..";

it("should render button component", () => {
  const component = renderer.create(<LoadingSpinner />);
  expect(component).toMatchSnapshot();
});

import { render, fireEvent } from "@testing-library/react";
import { Button } from "./";

describe("Button component", () => {
  test("should render button with text", () => {
    const { getByText } = render(<Button>Hello</Button>);
    const buttonElement = getByText("Hello");
    expect(buttonElement).toBeInTheDocument();
  });

  test("should render button with default variant 'primary'", () => {
    const { getByText } = render(<Button>Hello</Button>);
    const buttonElement = getByText("Hello");
    expect(buttonElement).toHaveClass("primary");
  });

  test("should render button with specified variant 'secondary'", () => {
    const { getByText } = render(<Button variant="secondary">Hello</Button>);
    const buttonElement = getByText("Hello");
    expect(buttonElement).toHaveClass("secondary");
  });

  test("should disable the button when disabled prop is true", () => {
    const { getByText } = render(<Button disabled>Hello</Button>);
    const buttonElement = getByText("Hello");
    expect(buttonElement).toBeDisabled();
  });

  test("should call onClick function when button is clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
    const buttonElement = getByText("Click me");
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalled();
  });

  test("should render button with type 'submit'", () => {
    const { getByText } = render(<Button type="submit">Submit</Button>);
    const buttonElement = getByText("Submit");
    expect(buttonElement).toHaveAttribute("type", "submit");
  });
});

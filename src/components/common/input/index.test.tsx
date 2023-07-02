import { render, fireEvent } from "@testing-library/react";
import { Input } from ".";

describe("Input component", () => {
  test("should render input element with placeholder", () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter text" />);
    const inputElement = getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
  });

  test("should handle onChange event", () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" onChange={onChange} />
    );
    const inputElement = getByPlaceholderText("Enter text");
    fireEvent.change(inputElement, { target: { value: "Hello" } });
    expect(onChange).toHaveBeenCalledWith(expect.any(Object));
  });

  test("should display label when provided", () => {
    const { getByText } = render(<Input label="Name" />);
    const labelElement = getByText("Name");
    expect(labelElement).toBeInTheDocument();
  });

  test("should display error message when provided", () => {
    const { getByText } = render(<Input errorMessage="Invalid input" />);
    const errorElement = getByText("Invalid input");
    expect(errorElement).toBeInTheDocument();
  });

  test("should disable input when disabled prop is true", () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" disabled />
    );
    const inputElement = getByPlaceholderText("Enter text");
    expect(inputElement).toBeDisabled();
  });

  test("should register input when register prop is provided", () => {
    const registerMock = jest.fn();
    render(
      <Input
        placeholder="Enter text"
        name="inputName"
        register={registerMock}
      />
    );
    expect(registerMock).toHaveBeenCalledWith("inputName", expect.any(Object));
  });
});

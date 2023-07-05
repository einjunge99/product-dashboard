import { render, fireEvent } from "@testing-library/react";
import { Icon } from "./";

describe("Icon component", () => {
  const iconElement = <svg data-testid="svg-icon"></svg>;

  test("should render with provided props", () => {
    const { getByTestId } = render(<Icon icon={iconElement} />);
    const iconComponent = getByTestId("icon");
    const svgIcon = getByTestId("svg-icon");

    expect(iconComponent).toBeInTheDocument();
    expect(svgIcon).toBeInTheDocument();
  });

  test("should call onClick function when clicked", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Icon icon={iconElement} onClick={onClick} />
    );
    const iconComponent = getByTestId("icon");

    fireEvent.click(iconComponent);
    expect(onClick).toHaveBeenCalled();
  });

  test("should not call onClick function when disabled", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Icon icon={iconElement} onClick={onClick} disabled />
    );
    const iconComponent = getByTestId("icon");

    fireEvent.click(iconComponent);
    expect(onClick).not.toHaveBeenCalled();
  });

  test("should apply disabled styles when disabled", () => {
    const { getByTestId } = render(<Icon icon={iconElement} disabled />);
    const iconComponent = getByTestId("icon");

    expect(iconComponent).toHaveClass("disabled");
  });

  test("should render with the provided size", () => {
    const size = "24px";
    const { getByTestId } = render(<Icon icon={iconElement} size={size} />);
    const iconComponent = getByTestId("icon");

    expect(iconComponent).toHaveStyle(`fontSize: ${size}`);
  });

  test("should render with default size when no size is provided", () => {
    const defaultSize = "16px";
    const { getByTestId } = render(<Icon icon={iconElement} />);
    const iconComponent = getByTestId("icon");

    expect(iconComponent).toHaveStyle(`fontSize: ${defaultSize}`);
  });
});

import { render, fireEvent } from "@testing-library/react";
import { Dropdown } from "./";

describe("Dropdown component", () => {
  const options = [5, 10, 15];
  const handleItemsPerPageChange = jest.fn();
  const props = {
    options,
    itemsPerPage: 5,
    handleItemsPerPageChange,
  };

  afterEach(() => {
    handleItemsPerPageChange.mockClear();
  });

  test("should render correctly with provided props", () => {
    const { getByText } = render(<Dropdown {...props} />);
    const selectedItem = getByText(props.itemsPerPage.toString());

    expect(selectedItem).toBeInTheDocument();
  });

  test("should call handleItemsPerPageChange with correct value and close the dropdown when an option is selected", () => {
    const { getByText } = render(<Dropdown {...props} />);
    const selectedItem = getByText(props.itemsPerPage.toString());
    const optionToSelect = options[2];

    fireEvent.click(selectedItem);
    const optionElement = getByText(optionToSelect.toString());
    fireEvent.click(optionElement);

    expect(handleItemsPerPageChange).toHaveBeenCalledWith(optionToSelect);
  });
});

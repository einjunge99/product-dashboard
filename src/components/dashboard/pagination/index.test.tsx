import { render, fireEvent } from "@testing-library/react";
import { Pagination } from "./";

describe("Pagination component", () => {
  const options = [5, 10, 15];
  const handlePageChange = jest.fn();
  const handleItemsPerPageChange = jest.fn();
  const props = {
    currentPage: 1,
    totalPages: 5,
    options,
    itemsPerPage: 5,
    handlePageChange,
    handleItemsPerPageChange,
  };

  afterEach(() => {
    handlePageChange.mockClear();
  });

  test("should render correctly with provided props", () => {
    const { getByTestId } = render(<Pagination {...props} />);
    const prevButton = getByTestId("previous");
    const nextButton = getByTestId("next");

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(getByTestId("dropdown")).toBeInTheDocument();
  });

  test("should disable the previous page button when current page is 1", () => {
    const { getByTestId } = render(<Pagination {...props} />);
    const prevButton = getByTestId("previous");

    fireEvent.click(prevButton);
    expect(handlePageChange).not.toHaveBeenCalled();
  });

  test("should disable the next page button when current page is equal to total pages", () => {
    const { getByTestId } = render(<Pagination {...props} currentPage={5} />);
    const nextButton = getByTestId("next");

    fireEvent.click(nextButton);
    expect(handlePageChange).not.toHaveBeenCalled();
  });

  test("should call handlePageChange with the previous page number when the previous page button is clicked", () => {
    const { getByTestId } = render(<Pagination {...props} currentPage={2} />);
    const prevButton = getByTestId("previous");

    fireEvent.click(prevButton);
    expect(handlePageChange).toHaveBeenCalledWith(1);
  });

  test("should call handlePageChange with the next page number when the next page button is clicked", () => {
    const { getByTestId } = render(<Pagination {...props} currentPage={1} />);
    const nextButton = getByTestId("next");

    fireEvent.click(nextButton);
    expect(handlePageChange).toHaveBeenCalledWith(2);
  });
});

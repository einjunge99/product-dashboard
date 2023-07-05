import { render, fireEvent } from "@testing-library/react";
import { Dashboard } from "./";
import { useDashboardState } from "./state/useDashboardState";

jest.mock("./state/useDashboardState", () => ({
  useDashboardState: jest.fn(),
}));

jest.mock("./table", () => ({
  Table: jest.fn(() => null),
}));

describe("Dashboard component", () => {
  const mockUseDashboardState = {
    loading: false,
    currentItems: [],
    search: {
      searchValue: "",
      handleSearchChange: jest.fn(),
    },
    navigateToProducts: jest.fn(),
    pagination: {
      handlePageChange: jest.fn(),
      handleItemsPerPageChange: jest.fn(),
      currentPage: 1,
      totalPages: 1,
      options: [5, 10, 15],
      resultsLegend: "",
    },
  };

  beforeEach(() => {
    mockUseDashboardState.search.handleSearchChange.mockClear();
    mockUseDashboardState.navigateToProducts.mockClear();
  });

  (useDashboardState as jest.Mock).mockReturnValue(mockUseDashboardState);

  test("should render search input and button", () => {
    const { getByPlaceholderText, getByText } = render(<Dashboard />);
    const searchInput = getByPlaceholderText("Search...");
    const addButton = getByText("Agregar");

    expect(searchInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test("should call handleSearchChange function when search input value changes", () => {
    const { getByPlaceholderText } = render(<Dashboard />);
    const searchInput = getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(
      mockUseDashboardState.search.handleSearchChange
    ).toHaveBeenCalledWith(expect.any(Object));
  });

  test("should call navigateToProducts function when the 'Agregar' button is clicked", () => {
    const { getByText } = render(<Dashboard />);
    const addButton = getByText("Agregar");
    fireEvent.click(addButton);

    expect(mockUseDashboardState.navigateToProducts).toHaveBeenCalled();
  });
});

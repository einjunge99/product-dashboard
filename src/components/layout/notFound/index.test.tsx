import { render, fireEvent } from "@testing-library/react";
import { NotFound } from "./";
import { useNotFoundState } from "./state/useNotFoundState";

jest.mock("./state/useNotFoundState", () => ({
  useNotFoundState: jest.fn(),
}));

describe("NotFound component", () => {
  const mockUseNotFoundState = {
    returnToHome: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useNotFoundState as jest.Mock).mockReturnValue(mockUseNotFoundState);
  });

  test("renders the 404 page not found text", () => {
    const { getByText } = render(<NotFound />);
    const notFoundText = getByText("404 Page Not Found");
    expect(notFoundText).toBeInTheDocument();
  });

  test("calls returnToHome function when the 'Regresar a inicio' button is clicked", () => {
    const { getByText } = render(<NotFound />);
    const returnButton = getByText("Regresar a inicio");
    fireEvent.click(returnButton);
    expect(mockUseNotFoundState.returnToHome).toHaveBeenCalled();
  });
});

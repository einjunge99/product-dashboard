import { render, fireEvent } from "@testing-library/react";
import { NotificationBar } from "./";
import { useNotificationState } from "./state/useNotificationState";

jest.mock("./state/useNotificationState", () => ({
  useNotificationState: jest.fn(),
}));

describe("NotificationBar component", () => {
  const mockUseNotificationState = {
    error: "",
    message: "",
    handleCloseClick: jest.fn(),
  };

  beforeEach(() => {
    mockUseNotificationState.handleCloseClick.mockClear();
  });

  (useNotificationState as jest.Mock).mockReturnValue(mockUseNotificationState);

  test("should render success message when message is provided", () => {
    mockUseNotificationState.message = "Success message";
    const { getByText } = render(<NotificationBar />);
    const successMessageElement = getByText("Success message");
    expect(successMessageElement).toBeInTheDocument();
  });

  test("should render error message when error is provided", () => {
    mockUseNotificationState.error = "Error message";
    const { getByText } = render(<NotificationBar />);
    const errorMessageElement = getByText("Error message");
    expect(errorMessageElement).toBeInTheDocument();
  });

  test("should call handleCloseClick function when 'Cerrar' button is clicked", () => {
    const { getAllByText } = render(<NotificationBar />);
    const closeButton = getAllByText("Cerrar")[0];
    fireEvent.click(closeButton);

    expect(mockUseNotificationState.handleCloseClick).toHaveBeenCalled();
  });
});

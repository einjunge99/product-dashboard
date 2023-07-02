import { render, fireEvent } from "@testing-library/react";
import { Product } from "./";
import { useProductState } from "./state/useProductState";

jest.mock("./state/useProductState", () => ({
  useProductState: jest.fn(),
}));

describe("Product component", () => {
  const mockUseProductState = {
    onSubmit: jest.fn(),
    handleSubmit: jest.fn(),
    register: jest.fn(),
    errors: {},
    isValid: true,
    resetFields: jest.fn(),
    isEditing: false,
  };

  beforeEach(() => {
    mockUseProductState.onSubmit.mockClear();
    mockUseProductState.handleSubmit.mockClear();
    mockUseProductState.register.mockClear();
    mockUseProductState.resetFields.mockClear();
  });

  (useProductState as jest.Mock).mockReturnValue(mockUseProductState);

  test("should render the form with inputs and buttons", () => {
    const { getByLabelText, getByText } = render(<Product />);

    expect(getByLabelText("ID")).toBeInTheDocument();
    expect(getByLabelText("Nombre")).toBeInTheDocument();
    expect(getByLabelText("Descripción")).toBeInTheDocument();
    expect(getByLabelText("Logo")).toBeInTheDocument();
    expect(getByLabelText("Fecha Liberación")).toBeInTheDocument();
    expect(getByLabelText("Fecha Revisión")).toBeInTheDocument();

    expect(getByText("Reiniciar")).toBeInTheDocument();
    expect(getByText("Enviar")).toBeInTheDocument();
  });

  // test("should call handleSubmit function when the form is submitted", () => {
  //   const { getByText } = render(<Product />);
  //   const sendButton = getByText("Enviar");
  //   fireEvent.click(sendButton);

  //   expect(mockUseProductState.handleSubmit).toHaveBeenCalled();
  // });

  // test("should call resetFields function when the 'Reiniciar' button is clicked", () => {
  //   const { getByText } = render(<Product />);
  //   const resetButton = getByText("Reiniciar");
  //   fireEvent.click(resetButton);

  //   expect(mockUseProductState.resetFields).toHaveBeenCalled();
  // });
});

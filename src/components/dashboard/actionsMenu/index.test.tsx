import { render, fireEvent } from "@testing-library/react";
import { ActionsMenu } from "./";

describe("ActionsMenu component", () => {
  const productId = "123";
  const mockHandleMenuClick = jest.fn();
  const mockHandleDelete = jest.fn();
  const mockHandleEdit = jest.fn();

  beforeEach(() => {
    mockHandleMenuClick.mockClear();
    mockHandleDelete.mockClear();
    mockHandleEdit.mockClear();
  });

  test("should call handleMenuClick when menu icon is clicked", () => {
    const { getByTestId } = render(
      <ActionsMenu
        handleMenuClick={mockHandleMenuClick}
        handleDelete={mockHandleDelete}
        handleEdit={mockHandleEdit}
        showMenu={true}
        productId={productId}
      />
    );
    const menuIconElement = getByTestId("icon");
    fireEvent.click(menuIconElement);
    expect(mockHandleMenuClick).toHaveBeenCalledWith(productId);
  });

  test("should show the popup menu when showMenu is true", () => {
    const { getByText } = render(
      <ActionsMenu
        handleMenuClick={mockHandleMenuClick}
        handleDelete={mockHandleDelete}
        handleEdit={mockHandleEdit}
        showMenu={true}
        productId={productId}
      />
    );
    const editOptionElement = getByText("Editar");
    const deleteOptionElement = getByText("Eliminar");
    expect(editOptionElement).toBeInTheDocument();
    expect(deleteOptionElement).toBeInTheDocument();
  });

  test("should not show the popup menu when showMenu is false", () => {
    const { queryByText } = render(
      <ActionsMenu
        handleMenuClick={mockHandleMenuClick}
        handleDelete={mockHandleDelete}
        handleEdit={mockHandleEdit}
        showMenu={false}
        productId={productId}
      />
    );
    const editOptionElement = queryByText("Editar");
    const deleteOptionElement = queryByText("Eliminar");
    expect(editOptionElement).not.toBeInTheDocument();
    expect(deleteOptionElement).not.toBeInTheDocument();
  });

  test("should call handleEdit when 'Editar' option is clicked", () => {
    const { getByText } = render(
      <ActionsMenu
        handleMenuClick={mockHandleMenuClick}
        handleDelete={mockHandleDelete}
        handleEdit={mockHandleEdit}
        showMenu={true}
        productId={productId}
      />
    );
    const editOptionElement = getByText("Editar");
    fireEvent.click(editOptionElement);
    expect(mockHandleEdit).toHaveBeenCalledWith(productId);
  });

  test("should call handleDelete when 'Eliminar' option is clicked", () => {
    const { getByText } = render(
      <ActionsMenu
        handleMenuClick={mockHandleMenuClick}
        handleDelete={mockHandleDelete}
        handleEdit={mockHandleEdit}
        showMenu={true}
        productId={productId}
      />
    );
    const deleteOptionElement = getByText("Eliminar");
    fireEvent.click(deleteOptionElement);
    expect(mockHandleDelete).toHaveBeenCalledWith(productId);
  });
});

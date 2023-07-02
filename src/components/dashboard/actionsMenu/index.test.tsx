import { render, fireEvent } from "@testing-library/react";
import { ActionsMenu } from ".";

describe("ActionsMenu component", () => {
  const mockHandleMenuClick = jest.fn();
  const mockHandleDelete = jest.fn();
  const mockHandleEdit = jest.fn();

  beforeEach(() => {
    mockHandleMenuClick.mockClear();
    mockHandleDelete.mockClear();
    mockHandleEdit.mockClear();
  });

  test("should render menu button", () => {
    const { getByText } = render(
      <ActionsMenu
        handleMenuClick={mockHandleMenuClick}
        handleDelete={mockHandleDelete}
        handleEdit={mockHandleEdit}
        showMenu={false}
        productId="123"
      />
    );
    const menuButton = getByText("...");

    expect(menuButton).toBeInTheDocument();
  });

  test("should call handleMenuClick function when menu button is clicked", () => {
    const { getByText } = render(
      <ActionsMenu
        handleMenuClick={mockHandleMenuClick}
        handleDelete={mockHandleDelete}
        handleEdit={mockHandleEdit}
        showMenu={false}
        productId="123"
      />
    );
    const menuButton = getByText("...");
    fireEvent.click(menuButton);

    expect(mockHandleMenuClick).toHaveBeenCalledWith("123");
  });

  test("should render popup menu when showMenu is true", () => {
    const { getByText } = render(
      <ActionsMenu
        handleMenuClick={mockHandleMenuClick}
        handleDelete={mockHandleDelete}
        handleEdit={mockHandleEdit}
        showMenu={true}
        productId="123"
      />
    );
    const editMenuItem = getByText("Editar");
    const deleteMenuItem = getByText("Eliminar");

    expect(editMenuItem).toBeInTheDocument();
    expect(deleteMenuItem).toBeInTheDocument();
  });

  test("should call handleEdit function when Edit menu item is clicked", () => {
    const { getByText } = render(
      <ActionsMenu
        handleMenuClick={mockHandleMenuClick}
        handleDelete={mockHandleDelete}
        handleEdit={mockHandleEdit}
        showMenu={true}
        productId="123"
      />
    );
    const editMenuItem = getByText("Editar");
    fireEvent.click(editMenuItem);

    expect(mockHandleEdit).toHaveBeenCalledWith("123");
  });

  test("should call handleDelete function when Delete menu item is clicked", () => {
    const { getByText } = render(
      <ActionsMenu
        handleMenuClick={mockHandleMenuClick}
        handleDelete={mockHandleDelete}
        handleEdit={mockHandleEdit}
        showMenu={true}
        productId="123"
      />
    );
    const deleteMenuItem = getByText("Eliminar");
    fireEvent.click(deleteMenuItem);

    expect(mockHandleDelete).toHaveBeenCalledWith("123");
  });
});

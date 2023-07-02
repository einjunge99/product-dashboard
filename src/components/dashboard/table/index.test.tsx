import { render } from "@testing-library/react";
import { Table } from "./";
import { useTableState } from "./state/useTableState";
import { DASHBOARD_COLUMNS } from "../constants";
import { formatDate } from "../../../utils";

jest.mock("../../../utils", () => ({
  formatDate: jest.fn(),
}));
jest.mock("./state/useTableState", () => ({
  useTableState: jest.fn(),
}));

describe("Table component", () => {
  const mockUseTableState = {
    showMenu: {},
    handleMenuClick: jest.fn(),
    handleDelete: jest.fn(),
    handleEdit: jest.fn(),
  };

  beforeEach(() => {
    mockUseTableState.handleMenuClick.mockClear();
    mockUseTableState.handleDelete.mockClear();
    mockUseTableState.handleEdit.mockClear();
  });

  (useTableState as jest.Mock).mockReturnValue(mockUseTableState);

  test("should render table header with correct titles", () => {
    const { getAllByText } = render(
      <Table data={[]} loading={false} isSearching={false} />
    );

    DASHBOARD_COLUMNS.forEach(({ title }) => {
      expect(getAllByText(title)[0]).toBeInTheDocument();
    });
  });

  test("should render loading message when data is null and loading is true", () => {
    const { getByText } = render(
      <Table data={null} loading={true} isSearching={false} />
    );
    const loadingMessage = getByText("Cargando...");

    expect(loadingMessage).toBeInTheDocument();
  });

  test("should render empty message when data is empty and isSearching is false", () => {
    const { getByText } = render(
      <Table data={[]} loading={false} isSearching={false} />
    );
    const emptyMessage = getByText("Cargando...");

    expect(emptyMessage).toBeInTheDocument();
  });

  test("should render not found message when data is empty and isSearching is true", () => {
    const { getByText } = render(
      <Table data={[]} loading={false} isSearching={true} />
    );
    const notFoundMessage = getByText(
      "¡Vaya, parece que no se encontró nada! Por favor, inténtalo nuevamente o verifica tus criterios de búsqueda."
    );

    expect(notFoundMessage).toBeInTheDocument();
  });

  test("should render data rows with correct values when data is available", () => {
    const data = [
      {
        id: "1",
        name: "Product 1",
        logo: "logo-url",
        date_release: "2022-01-01",
        date_revision: "2022-01-02",
        description: "This is my Product 1 description",
      },
      {
        id: "2",
        name: "Product 2",
        logo: "logo-url",
        date_release: "2022-02-01",
        date_revision: "2022-02-02",
        description: "This is my Product 2 description",
      },
    ];
    const { getByText } = render(
      <Table data={data} loading={false} isSearching={false} />
    );

    data.forEach((rowData) => {
      DASHBOARD_COLUMNS.forEach(({ key }) => {
        const value = rowData[key];

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (key === "logo" || key === "actions") {
          return;
        }

        if (key === "date_release" || key === "date_revision") {
          expect(formatDate).toHaveBeenCalledWith(value);
          return;
        }

        expect(getByText(value)).toBeInTheDocument();
      });
    });
  });
});

import { render } from "@testing-library/react";
import { Header } from "./";
import { useHeaderState } from "./state/useHeaderState";

jest.mock("./state/useHeaderState", () => ({
  useHeaderState: jest.fn(),
}));

describe("Header component", () => {
  const mockUseHeaderState = {
    currentPath: "/",
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useHeaderState as jest.Mock).mockReturnValue(mockUseHeaderState);
  });

  test("should render the header without background for non-colored routes", () => {
    mockUseHeaderState.currentPath = "/about";
    const { container } = render(<Header />);
    const header = container.firstChild;
    expect(header).toHaveClass("header");
  });

  test("should render the header with background for colored routes", () => {
    mockUseHeaderState.currentPath = "/";
    const { container } = render(<Header />);
    const header = container.firstChild;
    expect(header).toHaveClass("header withBackground");
  });

  test("should render the logo image", () => {
    const { getByRole } = render(<Header />);
    const logoImage = getByRole("img");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage.getAttribute("src")).toBe("test-file-stub");
  });
});

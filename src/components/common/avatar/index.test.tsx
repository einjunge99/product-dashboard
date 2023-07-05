import { render } from "@testing-library/react";
import { Avatar } from "./";

describe("Avatar component", () => {
  const imageUrl = "https://example.com/avatar.jpg";
  test("should render an image with the provided URL", () => {
    const { getByAltText } = render(<Avatar imageUrl={imageUrl} />);
    const imageElement = getByAltText("avatar");
    expect(imageElement).toHaveAttribute("src", imageUrl);
  });

  test("should render an image with the default 'avatar' alt text", () => {
    const { getByAltText } = render(<Avatar imageUrl={imageUrl} />);
    const imageElement = getByAltText("avatar");
    expect(imageElement).toBeInTheDocument();
  });

  test("should render an image with the specified alt text", () => {
    const altText = "user avatar";
    const { getByAltText } = render(
      <Avatar imageUrl={imageUrl} altText={altText} />
    );
    const imageElement = getByAltText(altText);
    expect(imageElement).toBeInTheDocument();
  });

  test("should render an image with the default size of '35px'", () => {
    const { getByAltText } = render(<Avatar imageUrl={imageUrl} />);
    const imageElement = getByAltText("avatar");
    expect(imageElement).toHaveStyle({ width: "35px", height: "35px" });
  });

  test("should render an image with the specified size", () => {
    const size = "50px";
    const { getByAltText } = render(<Avatar imageUrl={imageUrl} size={size} />);
    const imageElement = getByAltText("avatar");
    expect(imageElement).toHaveStyle({ width: size, height: size });
  });
});

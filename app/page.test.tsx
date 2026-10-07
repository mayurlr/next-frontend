import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "./page";

describe("Home", () => {
  it("renders the starting guidance and primary navigation links", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /to get started, edit the page\.tsx file/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Templates" })).toHaveAttribute(
      "href",
      expect.stringContaining("vercel.com/templates"),
    );
    expect(screen.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org/docs"),
    );
  });
});

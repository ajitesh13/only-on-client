import React from "react";
import { render } from "@testing-library/react";
import OnlyOnClient from "./index";

describe("OnlyOnClient component", () => {
  it("should render its children when mounted", () => {
    const { getByTestId } = render(
      <OnlyOnClient>
        <div data-testid="child">Child Component</div>
      </OnlyOnClient>
    );

    // Assert that the child component is rendered
    expect(getByTestId("child")).toBeInTheDocument();
  });

  /**
   * @jest-environment jsdom
   */
  it("should not render its children before mounting", () => {
    // Arrange: Hide the child component by setting window to undefined
    const originalWindow = global.window;
    delete global.window;

    // Act: Render the component without window
    const { queryByTestId } = render(
      <OnlyOnClient>
        <div data-testid="child">Child Component</div>
      </OnlyOnClient>
    );

    // Assert: Verify that the child component is not rendered
    expect(queryByTestId("child")).not.toBeInTheDocument();

    // Restore the original window object
    global.window = originalWindow;
  });
});

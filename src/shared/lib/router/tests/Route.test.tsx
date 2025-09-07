/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Route from "@/shared/lib/router/components/Route";

describe.only("lorem what", () => {
  test("first", () => {
    const { container, asFragment } = render(
      <Route
        path="/abc"
        element={<div>abc</div>}
      />
    );

    expect(container.firstChild).toBeNull();
    expect(container).toBeEmptyDOMElement();

    const fragment = asFragment();

    expect(fragment).toMatchInlineSnapshot(
      `<DocumentFragment />`
    );
  });
});

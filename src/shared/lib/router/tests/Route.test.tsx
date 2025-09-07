/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Route from "@/shared/lib/router/components/Route";

test("Route component returns null", () => {
  const { container } = render(
    <Route path="/abc" element={<div>abc</div>} />
  );

  expect(container.firstChild).toBeNull();
  expect(container).toBeEmptyDOMElement(); // assert no visible content for the user
});

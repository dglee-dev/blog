/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";

import Route from "@/shared/lib/router/components/Route";
import Routes from "@/shared/lib/router/components/Routes";

type Pathname = `/${string}`;

function setPathname(pathname: Pathname) {
  const originalLocation = window.location;

  jest
    .spyOn(window, "location", "get")
    .mockImplementation(() => ({
      ...originalLocation,
      pathname,
      href: "http://localhost:3000" + pathname,
    }));
}

afterEach(() => {
  jest.restoreAllMocks();
});

test.only("Match Route which has exactly same path with pathname", () => {
  setPathname("/a");

  render(
    <Routes>
      <Route path="/a" element={<div>A</div>} />
      <Route path="/b" element={<div>B</div>} />
    </Routes>
  );
});

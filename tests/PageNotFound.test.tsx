import { shallow } from "enzyme";
import * as React from "react";
import PageNotFound from "../src/components/PageNotFound";

describe("PageNotFound", (): void => {
  it("should render with container CSS class and contain Page Not Found text", (): void => {
    expect(shallow(<PageNotFound />).exists(".container")).toBe(true);
    expect(shallow(<PageNotFound />).text()).toContain("Page Not Found");
  });
});

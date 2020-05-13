import { shallow } from "enzyme";
import * as React from "react";
import Home from "../src/components/Home";

describe("Home", (): void => {
  it("should render with container CSS class and contain tag line text", (): void => {
    expect(shallow(<Home />).exists(".container")).toBe(true);
    expect(shallow(<Home />).text()).toContain("Stay alert. Control the virus. Save lives.");
  });
});

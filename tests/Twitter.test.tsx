import { shallow } from "enzyme";
import * as React from "react";
import Twitter from "../src/components/Twitter";

describe("Twitter", (): void => {
  it("should render with container CSS class and contain tag line text", (): void => {
    expect(shallow(<Twitter />).exists(".main-content")).toBe(true);
    expect(shallow(<Twitter />).text()).toContain("#StayAlertCreate your own “@10DowningStreet” tweet");
  });
});

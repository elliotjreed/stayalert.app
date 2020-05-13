import { shallow } from "enzyme";
import * as React from "react";
import { YellowBox } from "../src/components/YellowBox";

describe("YellowBox", (): void => {
  it("should render with container CSS class and contain tag line text", (): void => {
    let shallowWrapper = shallow(
      <YellowBox contentContainerRef={{ current: {} }} lineOne="Hi" lineTwo="Hello" lineThree="Greetings" />
    );
    expect(shallowWrapper.exists(".yellow-poster-container")).toBe(true);
    expect(shallowWrapper.text()).toContain("Hi");
    expect(shallowWrapper.text()).toContain("Hello");
    expect(shallowWrapper.text()).toContain("Greetings");
  });
});

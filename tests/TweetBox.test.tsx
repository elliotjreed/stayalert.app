import { shallow } from "enzyme";
import * as React from "react";
import { TweetBox } from "../src/components/TweetBox";

describe("YellowBox", (): void => {
  it("should render with container CSS class and contain tag line text", (): void => {
    let shallowWrapper = shallow(<TweetBox contentContainerRef={{ current: {} }} content="Example tweet content" />);
    expect(shallowWrapper.exists(".tweet")).toBe(true);
    expect(shallowWrapper.text()).toContain("Example tweet content");
  });
});

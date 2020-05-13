import { shallow } from "enzyme";
import * as React from "react";
import { Route } from "react-router-dom";
import { Routes } from "../src/components/Routes";

describe("Routes", (): void => {
  it("should render routes", (): void => {
    expect(shallow(<Routes />).find(Route)).toHaveLength(2);
  });
});

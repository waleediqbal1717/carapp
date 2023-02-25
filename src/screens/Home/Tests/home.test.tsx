import React from "react";
import renderer from "react-test-renderer";
import Home from "..";
import { carmanager } from "../../../managers/CarManager";

it("Home Screen Rendered Correctly", async () => {
  const tree = await renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
describe("Funtion to fetch total count of honda cars.", () => {
  it("should return count greater than 0", () => {
    const count = carmanager.getMakeCount("Honda");
    expect(count).toBeGreaterThan(0); // count should be greater then 0
  });
});
describe("Funtion to fetch unnique make (Branc) of available cars.", () => {
  it("should return an array of data greater than 0", () => {
    const result = carmanager.getUniqueMake();
    expect(Array.isArray(result)).toBe(true); // check if result is an array
    expect(result.length).toBeGreaterThan(0); // check if array length is greater than 0
  });
});

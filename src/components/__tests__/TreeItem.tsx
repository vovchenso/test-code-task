import * as React from "react";
import {shallow} from "enzyme";

import TreeItem from "src/components/TreeItem";
import Button from "src/components/Button";
import Spinner from "src/components/Spinner";

const TREE = {
    "name": "TEST_NAME",
    "species_name": "TEST_SPECIES_NAME",
    "image": "TEST_IMAGE"
};

test("TreeItem renders name", () => {
    const component = shallow(<TreeItem tree={TREE} />);
    expect(component.find('test-Name').text()).toEqual("TEST_NAME");
    expect(component.find('test-SpeciesName').text()).toEqual("TEST_SPECIES_NAME");
});

test("TreeItem changes the button text after click", () => {
    const component = shallow(<TreeItem tree={TREE} />);
    const button = component.find(Button);
    expect(button.text()).toEqual("Show image");
    button.simulate('click');

    expect(component.find(Button).text()).toEqual("Hide image");
});

test("TreeItem renders spinner and image on click", () => {
    const component = shallow(<TreeItem tree={TREE} />);
    component.find(Button).simulate('click');
    expect(component.exists(Spinner)).toBe(true);
    setTimeout(() => {
        expect(component.find('test-Img').prop("src")).toEqual("TEST_IMAGE");
    }, 0);
});

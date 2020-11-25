import * as React from "react";
import {shallow} from "enzyme";

import GridLayout from "src/components/GridLayout";

const testGrid = (columns?: number) => {
    test(`GridLayout renders ${columns ?? 'default'} columns`, () => {
        let component = shallow(
            <GridLayout columns={columns}/>
        );
        expect(component.children().length).toEqual(columns ?? 2);

        component = shallow(
            <GridLayout columns={columns}>
                <div/>
            </GridLayout>
        );
        expect(component.children().length).toEqual(columns ?? 2);

        component = shallow(
            <GridLayout columns={columns}>
                <div/>
                <div/>
            </GridLayout>
        );
        expect(component.children().length).toEqual(columns ?? 2);

        component = shallow(
            <GridLayout columns={columns}>
                <div/>
                <div/>
                <div/>
            </GridLayout>
        );
        expect(component.children().length).toEqual(columns ?? 2);

        component = shallow(
            <GridLayout columns={columns}>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </GridLayout>
        );
        expect(component.children().length).toEqual(columns ?? 2);
    });
}

testGrid();
testGrid(1);
testGrid(2);
testGrid(3);

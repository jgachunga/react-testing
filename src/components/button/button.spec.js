/* eslint-disable testing-library/await-async-query */
import React from "react";
import { findByTestAttr, checkProps } from "../../Utils";
import SharedButton from ".";
import { shallow } from "enzyme/build";

describe('Shared button component', () => {
    describe('Checking PropTypes', () => {
        it('Should Not throw a warning', ()=> {
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: () => {
                    
                }
            };
            const propsError = checkProps(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
        })
    })
    describe('Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: () => {
                    
                }
            };
            wrapper = shallow(<SharedButton {...props}/>)
        })

        it('Should render a button', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        })
    })
})
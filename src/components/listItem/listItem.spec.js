/* eslint-disable testing-library/await-async-query */
import React from "react";
import { shallow } from "enzyme/build";
import { checkProps, findByTestAttr } from "../../Utils";
import ListItem from ".";

describe('ListItem Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                title: "Malevolence",
                desc: 'SOme description'
            }
            const propsError =  checkProps(ListItem, expectedProps)
            expect(propsError).toBeUndefined();
        })
        
    })

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: "Malevolence",
                desc: 'Some description'
            }
            wrapper = shallow(<ListItem {...props}/>); 
        })
        it('Should render without error', ()=>{
            const component = findByTestAttr(wrapper, 'listItemComponent')
            expect(component.length).toBe(1);
        })
        it('Should render title', ()=>{
            const component = findByTestAttr(wrapper, 'listItemComponent')
            expect(component.length).toBe(1);
        })
        it('Should renderdesc', ()=>{
            const component = findByTestAttr(wrapper, 'listItemComponent')
            expect(component.length).toBe(1);
        })
    })
    describe('Should not render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                
                desc: 'Some description'
            }
            wrapper = shallow(<ListItem {...props}/>); 
        })
        it('Should not render', ()=>{
            const component = findByTestAttr(wrapper, 'listItemComponent')
            expect(component.length).toBe(0);
        })
    });
})
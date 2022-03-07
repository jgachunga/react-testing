/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { shallow } from 'enzyme';
import Headline from '.';

import { findByTestAttr, checkProps } from '../../Utils';

const setUp = (props = {}) => {
    const component = shallow(<Headline {...props} />);
    return component
}

describe('Headline Component', () => {

    describe('check prop types', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                header : 'Test Header', 
                desc: 'Test Desc',
                tempArr: [{
                    fName : 'Joe',
                    lName : 'Rogan',
                    email : 'joe#rogan.com',
                    age : 24,
                    onlineStatus : true,
                  }]
            };
            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    })

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header : 'Test Header',
                desc : 'Test Desc'
            };
            wrapper = setUp(props)
        })
        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        })
        it('Should render a h1', () => {
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        })
        it('Should render a desc', () => {
            const desc = findByTestAttr(wrapper, 'descWrapper');
            expect(desc.length).toBe(1);
        })
    })

    describe('Have no props', () => {
        let wrapper;
        beforeEach(() => {
            
            wrapper = setUp()
        })
        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        })
    })
})
import React from 'react';
import { shallow } from 'enzyme'
import ProductSelection from './ProductSelection';

it('renders without crashing', () => {
    const wrapper = shallow(<ProductSelection />)
    const component = wrapper.find("[data-test='component-product-selection']")
    expect(component.length).toBe(1)
});

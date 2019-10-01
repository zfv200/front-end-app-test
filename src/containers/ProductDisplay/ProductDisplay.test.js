import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import ProductDisplay from './ProductDisplay';

Enzyme.configure({
    adapter: new EnzymeAdapter()
})

it('renders without crashing', () => {
    const wrapper = shallow(<ProductDisplay />)
    const component = wrapper.find("[data-test='component-product-display']")
    expect(component.length).toBe(1)
});

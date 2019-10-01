import React from 'react';
import { shallow } from 'enzyme'
import Box from './Box';

it('renders without crashing', () => {
    const wrapper = shallow(<Box />)
    const component = wrapper.find("[data-test='component-box']")
    expect(component.length).toBe(1)
});

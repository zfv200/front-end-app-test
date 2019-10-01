import React from 'react';
import { shallow } from 'enzyme'
import FinalizeButton from './FinalizeButton';

it('renders without crashing', () => {
    const wrapper = shallow(<FinalizeButton />)
    const component = wrapper.find("[data-test='component-finalize-button']")
    expect(component.length).toBe(1)
});

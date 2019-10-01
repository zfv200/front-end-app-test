import React from 'react';
import { shallow } from 'enzyme'
import SelectionArea from './SelectionArea';

it('renders without crashing', () => {
    const wrapper = shallow(<SelectionArea />)
    const component = wrapper.find("[data-test='component-selection-area']")
    expect(component.length).toBe(1)
});

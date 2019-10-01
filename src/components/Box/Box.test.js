import React from 'react';
import { shallow, mount } from 'enzyme'
import Box from './Box';
import App from '../../App'

it('renders without crashing', () => {
    const wrapper = shallow(<Box />)
    const component = wrapper.find("[data-test='component-box']")
    expect(component.length).toBe(1)
});

it('updates with the selected product', () => {
    const boxWrapper = shallow(<Box />)
    const appWrapper = shallow(<App />)
})

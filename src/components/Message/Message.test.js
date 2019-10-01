import React from 'react';
import { shallow } from 'enzyme'
import Message from './Message';

const setup = (props={}) => {
    return shallow(<Message {...props}/>)
}

it('renders without crashing', () => {
    const wrapper = setup()
    const component = wrapper.find("[data-test='component-message']")
    expect(component.length).toBe(1)
});

it('renders correct message prop depending on items available', ()=>{
    const wrapper = setup({message: 'Sold out!'})
    const component = wrapper.find("[data-test='component-message']")
    expect(component.text()).toBe('Sold out!')
})
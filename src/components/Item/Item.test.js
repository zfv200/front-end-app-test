import React from 'react';
import { shallow } from 'enzyme'
import Item from './Item';

const defaultProps = {
  id: 1,
  product: "Eggs",
  price: 1.35
}

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<Item {...setupProps}/>)
}

it('renders without crashing', () => {
  const wrapper = shallow(<Item />)
  const component = wrapper.find("[data-test='component-item']")
  expect(component.length).toBe(1)
});

it('renders the name of the item', ()=>{
  //give attribute and find it
})

it('renders the price of the item', ()=>{
  //give attribute and find it
})





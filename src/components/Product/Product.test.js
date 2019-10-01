import React from 'react';
import { shallow } from 'enzyme'
import Product from './Product';

const defaultProps = {
  id: 1,
  product: "Eggs",
  price: 1.35
}

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<Product {...setupProps}/>)
}

it('renders without crashing', () => {
  const wrapper = shallow(<Product />)
  const component = wrapper.find("[data-test='component-product']")
  expect(component.length).toBe(1)
});

it('renders the name of the product', ()=>{
  //give attribute and find it
})

it('renders the price of the product', ()=>{
  //give attribute and find it
})





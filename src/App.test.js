import React from 'react';
import { shallow } from 'enzyme'
import App from './App';
import { testNameToKey } from 'jest-snapshot/build/utils';

// declaring the correct default state for testing purposes
// separate from json response of any api calls
const defaultState = {
  items: [
    {
      id: 1,
      product: "Eggs",
      price: 1.35
    },
    {
      id: 2,
      product: "Milk",
      price: 2.75
    },
    {
      id: 3,
      product: "Bread",
      price: 0.99
    },
    {
      id: 4,
      product: "Apples",
      price: 1.34
    }
  ],
  selectedItem: null
}

// shallowWrapper setup function for most tests
function setup(props={}, state=null){
  const wrapper = shallow(<App />)
  if(state){
    wrapper.setState(state)
  }
  return wrapper
}

it('renders without crashing', () => {
  const wrapper = setup()
  const component = wrapper.find("[data-test='component-app']")
  expect(component.length).toBe(1)
});

it('starts without an item being selected yet', ()=>{
  const wrapper = setup()
  const initialSelectionState = wrapper.state('selectedItem')
  expect(initialSelectionState).toBe(null)
})

it('updates the selected item when user clicks a product', ()=>{
  const wrapper = setup()
  const instance = wrapper.instance()
  instance.handleItemClick(1)
  expect(wrapper.state('selectedItem')).not.toEqual(null)
})

// general api call tests:

it('starts with empty array no items available', () => {

})

it('starts with correct items array if items are available', () => {

})

test('get request to api returns expected json', ()=>{

})

test('first user selection correctly posts to update the api', ()=>{

})

test('subsequent user selection/change of selection correctly posts to api', ()=>{

})

test('user unselecting item correctly posts to api and updates local state of selection back to null', ()=>{

})




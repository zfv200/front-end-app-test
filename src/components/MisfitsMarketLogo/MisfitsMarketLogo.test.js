import React from 'react';
import { shallow } from 'enzyme'
import MisfitsMarketLogo from './MisfitsMarketLogo';

it('renders without crashing', () => {
    const wrapper = shallow(<MisfitsMarketLogo />)
    const component = wrapper.find("[data-test='component-misfits-market-logo']")
    expect(component.length).toBe(1)
});

it('renders an image with the misfits market logo as the source', ()=>{

})


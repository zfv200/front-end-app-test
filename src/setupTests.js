// set up enzyme config:
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

// set up jest-fetch-mock:
global.fetch = require('jest-fetch-mock')

Enzyme.configure({
    adapter: new EnzymeAdapter()
})
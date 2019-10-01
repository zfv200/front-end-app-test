import React from 'react';
import Adapter from './adapter/adapter'
import './App.css';

// component imports:
import ProductSelection from './containers/ProductSelection/ProductSelection'
import SelectionArea from './containers/SelectionArea/SelectionArea'
import MisfitsMarketLogo from './components/MisfitsMarketLogo/MisfitsMarketLogo'

class App extends React.Component {

  state={
    items: [],
    selectedItem: null,
    finalized: false
  }

  componentDidMount(){
    //get request for products
    Adapter.getProducts()
    .then(items=>{
      // const itemsWithImage = items.map(item=>{
      //   debugger
      //   item = Object.assign({}, ...item)
      //   item.image = `/`
      // })
      this.setState({
        items: items
      })
    })
  }

  render(){
    return (
      // would remove these data-test components with a package if this was going to production
      <div className="App" data-test="component-app">
          <MisfitsMarketLogo />
        <div id="selection-container">
          <ProductSelection items={this.state.items}/>
          <SelectionArea />
        </div>
      </div>
    );
  }
}

export default App;

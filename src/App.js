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
      this.setState({
        items: items
      })
    })
  }

  render(){
    return (
      // would remove these data-test components with a package if this was going to production
      <div className="App" data-test="component-app">
        <header className="App-header">
          <MisfitsMarketLogo />
          <ProductSelection items={this.state.items}/>
          <SelectionArea />
        </header>
      </div>
    );
  }
}

export default App;

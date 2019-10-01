import React from 'react';
import Adapter from './adapter/adapter'
import './App.css';

// component imports:
import ProductSelection from './containers/ProductSelection/ProductSelection'

class App extends React.Component {

  state={
    items: [],
    selectedItem: null
  }

  componentDidMount(){
    // dummy data before setting up api calls
    Adapter.getProducts()
    // const items = [
    //       {
    //         id: 1,
    //         product: "Eggs",
    //         price: 1.35
    //       },
    //       {
    //         id: 2,
    //         product: "Milk",
    //         price: 2.75
    //       },
    //       {
    //         id: 3,
    //         product: "Bread",
    //         price: 0.99
    //       },
    //       {
    //         id: 4,
    //         product: "Apples",
    //         price: 1.34
    //       }
    //     ]

  }

  render(){
    return (
      // would remove these data-test components with a package if this was going to production
      <div className="App" data-test="component-app">
        <header className="App-header">
          <ProductSelection />
        </header>
      </div>
    );
  }
}

export default App;

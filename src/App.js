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
    finalized: false,
    message: "",
    error: false
  }

  componentDidMount(){
    //get request for products
    Adapter.getProducts()
    .then(items=>{
      // inject image into item object
      let formattedItems = items.map(item=>{
        let formattedName = item.product.toLowerCase()
        let image = require(`../public/${formattedName}.jpg`)
        item.image = image
        return item
      })
      this.setState({
        items: formattedItems,
        message: this.setMessage(items)
      })
    })
    .catch(err=>err)
  }

  setMessage = (items) => {
    return items.length === 0 ? "Sold out!" : ""
  }

  handleItemClick = (itemId) => {
    if(!this.state.finalized){
      if(this.state.selectedItem && this.state.selectedItem.id === itemId){
        return this.setState({
          selectedItem: null
        })
      }
      let targetItem = this.state.items.filter(item=>item.id===itemId)[0]
      this.setState({
        selectedItem: {...targetItem}
      })
    }
  }

  handleFinalizeClick = () => {
    if(this.state.selectedItem){
      let currentState = this.state.finalized
      this.setState({
        finalized: !currentState
      }, ()=>{
        if(this.state.finalized){
          Adapter.postChoice(this.state.selectedItem.id)
          .catch(err=>{
            this.setState({
              error: true
            })
          })
        }
      })
    }
  }



  render(){
    return (
      // would remove these data-test components with a package if this was going to production
      <div className="App" data-test="component-app">
          <MisfitsMarketLogo />
        <div id="selection-container">
          <ProductSelection 
            finalized={this.state.finalized}
            handleItemClick={this.handleItemClick} 
            items={this.state.items}
          />
          <SelectionArea 
            error={this.state.error}
            message={this.state.message} 
            selectedItem={this.state.selectedItem}
            handleFinalizeClick={this.handleFinalizeClick}
            finalized={this.state.finalized}
          />
        </div>
      </div>
    );
  }
}

export default App;

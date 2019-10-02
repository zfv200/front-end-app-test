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
      // set initial message if items are sold out
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
    // user can only choose another when they 
    // haven't finalized their selection
    if(!this.state.finalized){
      // they can unselect the item 
      if(this.state.selectedItem && this.state.selectedItem.id === itemId){
        return this.setState({
          selectedItem: null
        })
      }
      // otherwise item is selected and re-render occurs to show it in their box
      let targetItem = this.state.items.filter(item=>item.id===itemId)[0]
      this.setState({
        selectedItem: {...targetItem}
      })
    }
  }

  handleFinalizeClick = () => {
    // can only finalize if they've made a selection
    if(this.state.selectedItem){
      let currentState = this.state.finalized
      this.setState({
        finalized: !currentState
      }, ()=>{
        // if they are finalizing at this time, that's when post is fired off to let backend know
        if(this.state.finalized){
          Adapter.postChoice(this.state.selectedItem.id)
          .catch(err=>{
            // if there's any error from the fetch, will update the message to let the user know something's wrong
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

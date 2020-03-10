import React from 'react'
import Form from './form'
import Cart from './cart'

class Grocery extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      groceries: [
        {item: 'Shaved Bonito', qty: 1, inCart: false},
        {item: 'Udon Noodle', qty: 2, inCart: false}
      ]
    }
 
  }

  
  groceryClick = (i) => {
    console.log('clicked' + i)
    const { groceries } = this.state;
    const putInCart = groceries.map((item, index) => {
      if (index == i) {
        return {
          ...item,
          inCart: !item.inCart
        }
      }
        return item
      });
      
    console.log(putInCart)
  }
  
  renderGroceryList = () => {
    return this.state.groceries.map((item, i) => 
    <Cart 
    key={`groceryItem ${i}`} 
    item={item.item}
    qty={item.qty} 
    groceryClick={() => this.groceryClick(i)}
    inCart ={item.inCart}/>
    )} 
      
      

  



  addItem = (newItem, qty) => {
    let newEntry = {item: newItem, qty: qty, inCart: false};
    console.log(newEntry)
    this.setState({
      groceries: [newEntry, ...this.state.groceries]
    })
  }

  

  render() {
  
    return (
      <div>
      <Form addItem={this.addItem}/>
      {this.renderGroceryList()}
      </div>
    
    )};
}

export default Grocery
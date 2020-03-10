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
    this.setState ({
      groceries: putInCart
    });
  }
  
  groceryDelete = (delItem) => {
    console.log('delete');
    const { groceries } = this.state;
    const removed = groceries.filter(item => item !== delItem) 
    return this.setState({
      groceries: removed
    })
  };
  
  renderGroceryList = () => {
    return this.state.groceries.map((item, i) => 
    <React.Fragment key={`groceryItem ${i}`} >
    <div>
    <Cart 
      item={item.item}
      qty={item.qty} 
      groceryClick={() => this.groceryClick(i)}
      inCart ={item.inCart}/>
    </div>
    <div>
      <button >EDIT</button>
      <button onClick={() => this.groceryDelete(item)}>DELETE</button>
    </div>
    </React.Fragment>
    )};
    

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
      {this.editCart}
      </div>
    )};
}

export default Grocery
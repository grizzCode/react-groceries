import React from 'react'
import Form from './form'

class Grocery extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      groceries: [
        {item: 'Shaved Bonito', qty: 1},
        {item: 'Udon Noodle', qty: 2}
      ]
    }
    const styles = {
      need: {cursor: 'pointer', border: '1px solid', borderRadius: '6px'}, 
      have: {color: 'grey', textDecorationLine: 'line-through'}
    }
  }

  groceryClick = (i) => {
    console.log('clicked' + i)
    //pick up here
  }
  
  renderGroceryList = () => {
    return this.state.groceries.map((item, i) => 
      <div key={`id${i}`} onClick={() => this.groceryClick(i)} >
        {item.item} <br/> Qty: {item.qty}<br/><br/>
      </div>
      )
  }



  addItem = (newItem, qty) => {
    let newEntry = {item: newItem, qty: qty};
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
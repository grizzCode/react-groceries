import React from 'react'

const Cart = ({item, qty, inCart, groceryClick}) => (
  <div onClick={groceryClick} style={ inCart ? styles.have : styles.need}>
    <h4>{item}</h4>
    <h5>Qty: {qty}</h5>
  </div>
   
)

const  styles = {
  need: {cursor: 'pointer'}, 
  have: {color: 'grey', textDecorationLine: 'line-through'}
}

export default Cart
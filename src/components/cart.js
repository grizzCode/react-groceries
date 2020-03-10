import React from 'react'

const Cart = ({item, qty, inCart, groceryClick}) => (
  <div onClick={groceryClick} style={ inCart ? styles.need : styles.have}>
    {item}
  </div>
)

const  styles = {
  need: {cursor: 'pointer', border: '1px solid', borderRadius: '6px'}, 
  have: {color: 'grey', textDecorationLine: 'line-through'}
}

export default Cart
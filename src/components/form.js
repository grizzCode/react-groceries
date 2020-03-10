  import React from 'react'

  class Form extends React.Component {
   
   constructor (props) {
    super(props)
    this.state = {
      item: '', 
      qty: 0
    }
   }
    

    handleSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.item, this.state.qty)
  }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
    })
  }

    render = () => {
      return (
      <>
      <div>
      <form onSubmit={this.handleSubmit}>
        <input name='item' onChange={event => this.handleChange(event)} required placeholder='Enter Item'/>
        <input name='qty' onChange={event => this.handleChange(event)} required placeholder='Enter Quantity'/>
        <button type='submit' value='submit'>ADD ITEM</button>
      </form>
      <hr/>
      </div>
      <div>
        
      </div>
      </>
      )}

  }

  export default Form
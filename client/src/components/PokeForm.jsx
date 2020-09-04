import React from 'react';

class PokeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokeName: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      pokeName: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addPokemon(this.state.pokeName, this.props.index)
  }



  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        Enter a Pokemon Name:
        <input type="text" onChange={this.handleChange} />
        <button>POKEBALL!</button>
      </form>
    )
  }
}

export default PokeForm
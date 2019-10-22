import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js', 'ReactJS', 'React Native'
    ]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state.newTech);
    
    //Recriar array do zero
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  }

  handleDelete = (tech) => {
    // Filter vai filtrar todas, exceto aquela passada no parâmetro
    this.setState({ techs: this.state.techs.filter(t => t !== tech)});
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
      <h2>{this.state.newTech}</h2>
      <ul>
        {this.state.techs.map(tech => <TechItem
            key={tech}
            tech={tech}
            //passar função onDelete como propriedade
            onDelete={() => this.handleDelete(tech)}
            />)}
      </ul>
      <input
        type="text"
        onChange={this.handleInputChange}
        value={this.state.newTech}
        />
      <button type="submit">+</button>
      </form>
    )
  }
}

export default TechList;
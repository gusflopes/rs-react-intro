import React from 'react';


// Poderia usar  props.tech, mas usou tech apenas para desestruturar
// Se fosse Class componenet, as propriedades estariam em this.props.tech
function TechItem({ tech, onDelete }) {
  return (
    <li>
    {tech}
    <button
      onClick={onDelete}
      type="button"> - </button>
    </li>
  );
}

export default TechItem;
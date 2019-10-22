import React from 'react';
import propTypes from 'prop-types';


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

TechItem.defaultProps = {
  tech: 'Oculto',
};

TechItem.propTypes ={
  tech: propTypes.string,
  onDelete: propTypes.func.isRequired,
};

export default TechItem;
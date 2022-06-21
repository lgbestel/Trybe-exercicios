import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props;
    return (
      <div className="card">
        <h1>{name}</h1>
        <div>
          <p>{type}</p>
          <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <img src={image} className="card-image" alt="poke"/>
      </div>           
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string
  }),
  image: PropTypes.string
}.isRequired;

export default Pokemon
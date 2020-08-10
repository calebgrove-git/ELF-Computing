import React from 'react';
import Feature from './Feature';

function Features(props) {
  return (
    <form className='main__form'>
      <h2>Customize your laptop</h2>
      <Feature
        features={props.features}
        selected={props.selected}
        updateFeature={props.updateFeature}
        currencyFormat={props.currencyFormat}
      />
    </form>
  );
}
export default Features;

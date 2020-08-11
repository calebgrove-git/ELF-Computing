import React from 'react';
import slugify from 'slugify';
import FEATURES from '../store';
import FeatureItem from './FeatureItem';
export default function Feature(props) {
  const features = Object.keys(FEATURES).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = FEATURES[feature].map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <FeatureItem
          itemHash={itemHash}
          slugify={slugify}
          feature={feature}
          item={item}
          selected={props.selected}
          currencyFormat={props.currencyFormat}
          updateFeature={props.updateFeature}
        />
      );
    });

    return (
      <fieldset className='feature' key={featureHash}>
        <legend className='feature__name'>
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });
  return <>{features}</>;
}

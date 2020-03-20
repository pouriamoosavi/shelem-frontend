import React from 'react';
import PropTypes from 'prop-types';

const PlayingCard = (props) => {
  const { name } = props;
  const src = `../../static/${name}.svg`;
  return (
    <div>
      <img src={src} alt="" />
    </div>
  );
};

PlayingCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PlayingCard;

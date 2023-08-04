import React from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

const Banner = ({text}) => (
  <div className="BannerWrapper">
    {text}
  </div>
);

Banner.propTypes = {
  // bla: PropTypes.string,
};

Banner.defaultProps = {
  // bla: 'test',
};

export default Banner;

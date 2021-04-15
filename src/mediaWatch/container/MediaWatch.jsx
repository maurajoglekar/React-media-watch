import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import MediaWatchRouting from '../views/MediaWatchRouting';
import { NavLink } from "react-router-dom";
import AllIcon from '../assets/04.png';
import MoviesIcon from '../assets/03.png';
import SeriesIcon from '../assets/02.png';


const propTypes = {
  list: PropTypes.array
};
const defaultProps = {
  list: []
};

function MediaWatch({ list }) {
  return (
    <MediaWatchRouting></MediaWatchRouting>
  );
}


MediaWatch.propTypes = propTypes;
MediaWatch.defaultProps = defaultProps; 

const mapStateToProps = ({ mediaItems }) => {
  return {
    list: mediaItems.list
  }
};

export default connect(mapStateToProps, {})(MediaWatch);
import PropTypes from 'prop-types';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MediaItemListNav from './MediaItemListNav';

const propTypes = {};
const defaultProps = {};

function MediaWatchRouting({ match }) {
  return (
    <BrowserRouter>
      <Route exact component={MediaItemListNav} path='/'/>
      <Route component={MediaItemListNav} path='/:medium'/>
    </BrowserRouter>
  );
}

MediaWatchRouting.propTypes = propTypes;
MediaWatchRouting.defaultProps = defaultProps;

export default MediaWatchRouting;

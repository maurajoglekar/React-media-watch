import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MediaItemList from './MediaItemList';

const propTypes = {
  match: PropTypes.object.isRequired
};
const defaultProps = {};

function MediaWatchRouting({ match }) {
  return (
    <Switch>
      <Route exact component={MediaItemList} path={`${match.url}`} />
    </Switch>
  );
}

MediaWatchRouting.propTypes = propTypes;
MediaWatchRouting.defaultProps = defaultProps;

export default MediaWatchRouting;

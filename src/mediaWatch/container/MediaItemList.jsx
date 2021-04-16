import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import MediaItem from "../views/MediaItem"
import {
  getAllMediaItems as getAllMediaItemsAction
} from '../../redux/counter/counterActions';

const propTypes = {
  mediaItems: PropTypes.array,
  getAllMediaItems: PropTypes.function
};
const defaultProps = {
  mediaItems: [],
  getAllMediaItems: () => null
};

function MediaItemList({ mediaItems, getAllMediaItems }) {

  // load the media items
  useEffect(() => {getAllMediaItems();}, [getAllMediaItems]);
  
  return (
    <>
    {mediaItems.map(mediaItem => <MediaItem mediaItem={mediaItem}/>)}
    </>
  );
}


MediaItemList.propTypes = propTypes;
MediaItemList.defaultProps = defaultProps; 

const mapStateToProps = (state) => {
  const { mediaItems } = state;

  return {
    mediaItems: mediaItems && mediaItems.list ? mediaItems.list : []
  }
};

export default connect(mapStateToProps, {
  getAllMediaItems: getAllMediaItemsAction
})(MediaItemList);
import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import addIcon from '../assets/01.png';
import styled from 'styled-components';
import MediaItem from "../views/MediaItem"
import {
  getMediaItemsByMedium as getMediaItemsByMediumAction
} from '../../redux/counter/counterActions';

const propTypes = {
  medium: PropTypes.string,
  mediaItems: PropTypes.array,
  getMediaItemsByMedium: PropTypes.function
};
const defaultProps = {
  medium: '',
  mediaItems: [],
  getMediaItemsByMedium: () => null
};

const StyledMediaItemList = styled.div`
    display: flex;
    height: calc(100% - 200px);
    flex-direction: column;

  header {
    color: #c6c5c3;
  }
  header.medium-movies {
    color: #53ace4;
  }
  header.medium-series {
    color: #45bf94;
  }
  header > h2 {
    font-size: 1.4em;
  }
  header > h2.error {
    color: #d93a3e;
  }
  section {
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
  }
  section > media-item {
    margin: 10px;
  }
  footer {
    text-align: right;
  }
  footer .icon {
    width: 64px;
    height: 64px;
  }
`;

function MediaItemList({ mediaItems, getMediaItemsByMedium, medium }) {

  // load the media items
  useEffect(() => { getMediaItemsByMedium({medium}); }, 
                    [getMediaItemsByMedium, medium]);

  return (
    <StyledMediaItemList>
      <header >
        <h2>{medium}</h2>
      </header>
      {/* category list*/}
      <section>
        {mediaItems.map(mediaItem => <MediaItem mediaItem={mediaItem} />)}
      </section>
      <footer>
        <a>
          <img src={addIcon} />
        </a>
      </footer>
    </StyledMediaItemList>

  );
}


MediaItemList.propTypes = propTypes;
MediaItemList.defaultProps = defaultProps; 

const mapStateToProps = ({mediaItems}, {medium}) => {
  return {
    medium,
    mediaItems: mediaItems && mediaItems.list ? mediaItems.list : []
  }
};

export default connect(mapStateToProps, {
  getMediaItemsByMedium: getMediaItemsByMediumAction
})(MediaItemList);
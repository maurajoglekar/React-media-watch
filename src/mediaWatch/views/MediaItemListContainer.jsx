import React, { useState } from "react";
import PropTypes from 'prop-types';
import addIcon from '../assets/01.png';
import styled from 'styled-components';
import MediaItemList from '../container/MediaItemList';

const StyledMediaItemListContainer = styled.div`
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

const propTypes = {
    medium: PropTypes.string
  };

  const defaultProps = {
      medium: ''
  };

function MediaItemListContainer({ medium }) {

    return (
        <StyledMediaItemListContainer>
            <header >
                <h2>{medium}</h2>
            </header>
            {/* category list*/}
            <section>
                <MediaItemList></MediaItemList>
            </section>
            <footer>
                <a>
                    <img src={addIcon} />
                </a>
            </footer>

        </StyledMediaItemListContainer>
    );
}

MediaItemListContainer.propTypes = propTypes;
MediaItemListContainer.defaultProps = defaultProps; 

export default MediaItemListContainer;
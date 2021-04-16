import React, { useState } from "react";
import PropTypes from 'prop-types';
import addIcon from '../assets/01.png';
import styled from 'styled-components';
import MediaItemList from '../container/MediaItemList';

const StyledMediaItem = styled.div`
display: flex;
flex-direction: column;
width: 140px;
height: 200px;
border: 2px solid;
background-color: #29394b;
padding: 10px;
color: #bdc2c5;
margin: 0 12px 12px 0;

h2 {
  font-size: 1.6em;
  flex: 1;
}
:host(.medium-movies) {
  border-color: #53ace4;
}
:host(.medium-movies) > h2 {
  color: #53ace4;
}
:host(.medium-series) {
  border-color: #45bf94;
}
:host(.medium-series) > h2 {
  color: #45bf94;
}
.tools {
  margin-top: 8px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.favorite {
  width: 24px;
  height: 24px;
  fill: #bdc2c5;
  cursor: pointer;
}
.favorite.is-favorite {
    fill: #37ad79;
}
.favorite.is-favorite-hovering {
    fill: #45bf94;
}
.favorite.is-favorite.is-favorite-hovering {
    fill: #ec4342;
}
.delete {
  display: block;
  background-color: #ec4342;
  padding: 4px;
  font-size: .8em;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
}
.details {
  display: block;
  background-color: #37ad79;
  padding: 4px;
  font-size: .8em;
  border-radius: 4px;
  color: #ffffff;
  text-decoration: none;
}
`;

const propTypes = {
    mediaItem: PropTypes.object
  };

  const defaultProps = {
    mediaItem: {}
  };

function MediaItem({ mediaItem }) {

  return (
    <StyledMediaItem>
      <h2>{mediaItem.name}</h2>
      <div className="label">{mediaItem.category}</div>
      <div>{mediaItem.year}</div>
      <div className="tools">
        <svg className="favorite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"
          />
        </svg>
        <a className="delete">
          remove
  </a>
        <a className="details">
          watch
  </a>
      </div>
    </StyledMediaItem>
  );
}

MediaItem.propTypes = propTypes;
MediaItem.defaultProps = defaultProps; 

export default MediaItem;
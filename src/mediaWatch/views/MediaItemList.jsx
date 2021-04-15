import React, { useState } from "react";
import PropTypes from 'prop-types';
import addIcon from '../assets/01.png';

const propTypes = {
    medium: PropTypes.string
  };

  const defaultProps = {
    medium: ''
  };

function MediaItemList({ medium }) {

    return (
        <>
            <header >
                <h2>{medium}</h2>
            </header>
            {/* category list*/}
            <section>
                {/* list of media item */}
            </section>
            <footer>
                <a>
                    <img src={addIcon}/>
                </a>
            </footer>
        </>
    );
}

MediaItemList.propTypes = propTypes;
MediaItemList.defaultProps = defaultProps; 

export default MediaItemList;
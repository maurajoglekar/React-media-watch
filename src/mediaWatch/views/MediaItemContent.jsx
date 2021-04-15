import React, { useState } from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import AllIcon from '../assets/04.png';
import MoviesIcon from '../assets/03.png';
import SeriesIcon from '../assets/02.png';
import addIcon from '../assets/01.png';

const propTypes = {
    medium: PropTypes.string
  };

  const defaultProps = {
      medium: ''
  };

function MediaItemContent({ medium }) {

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
                    <img src={addIcon} />
                </a>
            </footer>

        </>
    );
}

MediaItemContent.propTypes = propTypes;
MediaItemContent.defaultProps = defaultProps; 

export default MediaItemContent;
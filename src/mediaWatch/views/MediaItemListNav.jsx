import React, { useState } from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import AllIcon from '../assets/04.png';
import MoviesIcon from '../assets/03.png';
import SeriesIcon from '../assets/02.png';
import MediaItemContent from './MediaItemContent';
import addIcon from '../assets/01.png';

const propTypes = {
    match: PropTypes.object.isRequired
};

const defaultProps = {
};

function MediaItemListNav({ match }) {
    const { medium } = match.params;

    return (
        <>
            <nav>
                <NavLink to='/'>
                    <img src={AllIcon} />
                </NavLink>
                <NavLink to='/movies'>
                    <img src={MoviesIcon} />
                </NavLink>
                <NavLink to='/series'>
                    <img src={SeriesIcon} />
                </NavLink>
            </nav>
            <section>
                <header>
                    <h1>Media Watch List</h1>
                    <p class="description">Keeping track of the media I want to watch.</p>
                </header>
                <MediaItemContent medium={medium}></MediaItemContent>
            </section>
        </>
    );
}

MediaItemListNav.propTypes = propTypes;
MediaItemListNav.defaultProps = defaultProps;

export default MediaItemListNav;
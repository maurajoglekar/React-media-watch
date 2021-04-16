import React, { useState } from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import AllIcon from '../assets/04.png';
import MoviesIcon from '../assets/03.png';
import SeriesIcon from '../assets/02.png';
import StyledMediaItemListContainer from './MediaItemListContainer';
import styled from 'styled-components';

const StyledMediaItemListNav = styled.div`
  display: flex;
  min-height: 500px;

  nav {
    width: 68px;
    background-color: #53ace4;
  }
  nav .icon {
    width: 48px;
    height: 48px;
    margin: 10px;
  }
  section {
    width: 100%;
    background-color: #32435b;
  }
  section > header {
    color: #ffffff;
    padding: 10px;
  }
  section > header > h1 {
    font-size: 2em;
  }
  section > header .description {
    font-style: italic;
  }
`;

const propTypes = {
    match: PropTypes.object.isRequired
};

const defaultProps = {
};

function MediaItemListNav({ match }) {
    const { medium } = match.params;

    return (
        <StyledMediaItemListNav>
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
                <StyledMediaItemListContainer medium={medium}></StyledMediaItemListContainer>
            </section>
        </StyledMediaItemListNav>
    );
}

MediaItemListNav.propTypes = propTypes;
MediaItemListNav.defaultProps = defaultProps;

export default MediaItemListNav;
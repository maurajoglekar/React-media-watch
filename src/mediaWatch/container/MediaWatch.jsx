import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import AllIcon from '../assets/04.png';
import MoviesIcon from '../assets/03.png';
import SeriesIcon from '../assets/02.png';
import MediaWatchRouting from '../views/MediaWatchRouting';

const propTypes = {
  list: PropTypes.array
};
const defaultProps = {
  list: []
};

function MediaWatch({ list }) {
  return (
    <>
      <nav>
        <a>
          <img src={AllIcon} />
        </a>
        <a >
          <img src={MoviesIcon} />
        </a>
        <a>
          <img src={SeriesIcon} />
        </a>
      </nav>
      <section>
        <header>
          <h1>Media Watch List</h1>
          <p class="description">Keeping track of the media I want to watch.</p>
          {MediaWatchRouting}
        </header>
      </section>
    </>
  );
}


MediaWatch.propTypes = propTypes;
MediaWatch.defaultProps = defaultProps; 

const mapStateToProps = ({ mediaItems }) => {
  return {
    list: mediaItems.list
  }
};

export default connect(mapStateToProps, {})(MediaWatch);
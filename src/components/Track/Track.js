import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Track.css';

export default class Track extends Component {
    static propTypes = {
        track: PropTypes.shape({
            trackId: PropTypes.number,
            artworkUrl60: PropTypes.string,
            trackName: PropTypes.string,
            collectionName: PropTypes.string,
            trackTimeMillis: PropTypes.number
        }).isRequired
    };

    render() {
        const { track } = this.props;

        return (
            <div className="track">
                <img className="picture" src={track.artworkUrl60} />
                <div className="info">
                    <span className='info-span'>{track.trackName}</span>
                    <span className='info-span'>{track.collectionName}</span>
                    <span className='time'>{moment(track.trackTimeMillis).format('mm:ss')}</span>
                </div>
            </div>
        );
    }
}

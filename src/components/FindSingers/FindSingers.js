import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Track from '../Track/Track';
import './FindSingers.css';

export default class FindSingers extends Component {
    static propTypes = {
        songFilter: PropTypes.string,
        albumFilter: PropTypes.string,
        isRequested: PropTypes.bool.isRequired,
        tracks: PropTypes.arrayOf(PropTypes.shape({
            trackId: PropTypes.number,
            artworkUrl60: PropTypes.string,
            trackName: PropTypes.string,
            collectionName: PropTypes.string,
            trackTimeMillis: PropTypes.number
        }).isRequired)
    };

    static defaultProps = {
        songFilter: '',
        albumFilter: '',
        tracks: []
    };

    render() {
        const { songFilter, albumFilter, isRequested, tracks } = this.props;
        const filteredTracks = tracks.filter((track) =>
            track.trackName.toLowerCase().includes(songFilter.toLowerCase()) &&
            track.collectionName.toLowerCase().includes(albumFilter.toLowerCase()));

        if (!filteredTracks.length) {
            return <div className="nothing">
                {isRequested ? 'Sorry, but nothing found' : 'Please, enter something in field \"Singer\"'}
            </div>
        }

        return (
            <div className="tracks">
                {filteredTracks.map((track) => (<Track key={track.trackId} track={track} />))}
            </div>
        );
    }
}

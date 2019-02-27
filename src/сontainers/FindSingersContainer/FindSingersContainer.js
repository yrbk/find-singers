import React, { Component } from 'react';
import axios from 'axios';
import {groupBy} from 'lodash';
import FindSingers from '../../components/FindSingers/FindSingers';
import Header from '../../components/Header/Header';
import './FindSingersContainer.css';

export default class FindSingersContainer extends Component {
    state = {
        songFilter: '',
        albumFilter: '',
        isRequested: false,
        tracks: [],
        albums: []
    };

    render() {
        return (
            <div className="Container">
                <Header
                    albums={this.state.albums}
                    albumFilter={this.state.albumFilter}
                    onSingerChange={this.handleSearch}
                    onSongChange={this.handleSongChange}
                    onAlbumChange={this.handleAlbumChange}
                />
                <FindSingers
                    isRequested={this.state.isRequested}
                    tracks={this.state.tracks}
                    songFilter={this.state.songFilter}
                    albumFilter={this.state.albumFilter}
                />
            </div>
        );
    }

    handleSearch = (event) => {
        axios.get(`https://itunes.apple.com/search?term=${event.target.value}&media=music&&entity=song&attribute=artistTerm`)
            .then((response) => this.setState({
                tracks: response.data.results || [],
                albums: Object.keys(groupBy(response.data.results, 'collectionName')).map((key) => key),
                isRequested: true
            }))
            .catch((error) => {
                console.log(error)
            })
    };

    handleSongChange = (event) => {
        if (!event || !event.target) {
            return;
        }

        this.setState({ songFilter: event.target.value });
    };

    handleAlbumChange = (dropdownOption) => {
        if (!dropdownOption) {
            return;
        }

        this.setState({ albumFilter: dropdownOption.value });
    }
}
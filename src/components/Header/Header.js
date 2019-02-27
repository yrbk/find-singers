import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown';
import './Header.css';

export default class Header extends Component {
    static propTypes = {
        albumFilter: PropTypes.string,
        albums: PropTypes.arrayOf(PropTypes.string),
        onSingerChange: PropTypes.func.isRequired,
        onSongChange: PropTypes.func.isRequired,
        onAlbumChange: PropTypes.func.isRequired
    };

    static defaultProps = {
        albumFilter: '',
        albums: []
    };

    render() {
        const { albums, albumFilter, onSingerChange, onSongChange, onAlbumChange } = this.props;
        const dropdownOptions = [{label: 'All albums', value: ''}].concat(albums);

        return (
            <div className="header">
                <b className="header-title">{'Search Singers'}</b>
                <div className="fields">
                    <input className="field" placeholder={'Singer...'} onChange={onSingerChange} />
                    <Dropdown
                        options={dropdownOptions}
                        onChange={onAlbumChange}
                        value={albumFilter || 'All albums'}
                    />
                    <input className="field" placeholder={'Find song...'} onChange={onSongChange}/>
                </div>
            </div>
        );
    }
}

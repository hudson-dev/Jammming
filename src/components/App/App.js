import React from "react";
import "./App.css";
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist.js";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [],
			playlistName: "Liked Songs",
			playlistTracks: [
				{
					name: "Way Less Sad",
					artist: "AJR",
					album: "Way Less Sad(Cash Cash Remix)",
					id: "1",
				},
				{
					name: "The Pasenger",
					artist: "Iggy Pop",
					album: "Lust For Life",
					id: "2",
				},
				{
					name: "1940 - AmpLive Remix",
					artist: "The Sumarines, Amp Live",
					album: "Honeysuckle Remixes",
					id: "3",
				},
			],
		};
		this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
	}

	addTrack(track) {
		var playlistTrack = this.state.playlistTracks;
		if (playlistTrack.find((savedTrack) => savedTrack.id === track.id)) {
			return;
		}

		playlistTrack.push(track);
		this.setState({ playlistTracks: playlistTrack });
	}

	removeTrack(track) {
		var playlistTrack = this.state.playlistTracks;
		playlistTrack = playlistTrack.filter(
			(savedTrack) => savedTrack.id !== track.id
		);
		this.setState({ playlistTracks: playlistTrack });
	}

  updatePlaylistName(name) {
    this.setState({ playlistName: name })
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map((track) => track.uri);
  }

  search(term) {
    console.log(term);
  }

	render() {
		return (
			<div>
				<h1>
					Ja<span className="highlight">mmm</span>ing
				</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
					<div className="App-playlist">
						<SearchResults
							searchResults={this.state.searchResults}
							onAdd={this.addTrack}
						/>
						<Playlist
							playlistName={this.state.playlistName}
							playlistTracks={this.state.playlistTracks}
							onRemove={this.removeTrack}
							onNameChange={this.updatePlaylistName}
							onSave={this.savePlaylist}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;

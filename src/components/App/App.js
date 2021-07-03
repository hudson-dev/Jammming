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
					id: "1"
				},
				{
					name: "The Pasenger",
					artist: "Iggy Pop",
					album: "Lust For Life",
					id: "2"
				},
				{
					name: "1940 - AmpLive Remix",
					artist: "The Sumarines, Amp Live",
					album: "Honeysuckle Remixes",
					id: "3"					
				},
			]
		};
		this.addTrack = this.addTrack.bind(this);
	}

	addTrack(track) {
		var playlistTrack = this.state.playlistTracks;
		if(playlistTrack.find(savedTrack => savedTrack.id === track.id)) {
			return;
		}

		playlistTrack.push(track);
		this.setState({playlistTracks: playlistTrack})
	}

	removeTrack(track) {
		var playlistTrack = this.state.playlistTracks;
		playlistTrack = playlistTrack.filter(savedTrack => savedTrack.id !== track.id);
		this.setState({playlistTracks: playlistTrack})
	}

	render() {
		return (
			<div>
				<h1>
					Ja<span className="highlight">mmm</span>ing
				</h1>
				<div className="App">
					{/* <!-- Add a SearchBar component --> */}
					<div className="App-playlist">
						<SearchResults searchResults = {this.state.searchResults} onAdd={this.addTrack}/>
						<Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;

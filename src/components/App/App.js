import React from "react";
import "./App.css";
import SearchBar from '../SearchBar/Searchbar.js';
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist.js";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
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
						{/* <!-- Add a SearchResults component --> */}
						{/* <!-- Add a Playlist component --> */}
					</div>
				</div>
			</div>
		);
	}
}

export default App;

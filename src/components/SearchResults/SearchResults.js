import React from "react";
import TrackList from "../TrackList/TrackList";
import './SearchResults.css';

class SearchResutls extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="SearchResults">
				<h2>Results</h2>
				{/* <!-- Add a TrackList component --> */}
			</div>
		);
	}
}

export default SearchResutls;

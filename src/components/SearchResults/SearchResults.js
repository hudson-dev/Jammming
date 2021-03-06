import React from "react";
import TrackList from "../TrackList/TrackList";
import './SearchResults.css';

class SearchResults extends React.Component {

	// componentDidUpdate() {
	// 	console.log('In SearchResults Component:');
	// 	console.log(this.props.searchResults);
	// }

	render() {
		return (
			<div className="SearchResults">
				<h2>Results:</h2>
				<TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={false}/>
			</div>
		);
	}
}

export default SearchResults;

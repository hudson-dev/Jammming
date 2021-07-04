import React from "react";
import './TrackList.css';
import Track from '../Track/Track.js';

class TrackList extends React.Component {

	// componentDidUpdate() {
	// 	console.log('In TrackList Component:');
	// 	console.log(this.props.tracks);
	// }

	render() {
		return (
			<div className="TrackList">
				{this.props.tracks.map((track) => {
					return <Track key={track.id} track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}></Track>
				})}
			</div>
		);
	}
}

export default TrackList;

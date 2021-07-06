import React from "react";
import "./Track.css";
import Controls from './Controls/Controls.js'

class Track extends React.Component {
	constructor(props) {
		super(props);

		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
		this.playPreview = this.playPreview.bind(this);
		this.pausePreview = this.pausePreview.bind(this);

		this.state = {
			audio: new Audio(this.props.track.preview),
			isPlaying: false,
		};
	}

	renderAction(isRemoval) {
		if (isRemoval) {
			return (
				<button className="Track-action" onClick={this.removeTrack}>
					-
				</button>
			);
		} else {
			return (
				<button className="Track-action" onClick={this.addTrack}>
					+
				</button>
			);
		}
	}

	playPreview() {
		console.log("play");
		this.setState({ isPlaying: true });
		this.state.audio.play();
	}

	pausePreview() {
		console.log("pause");
		this.setState({ isPlaying: false });
		this.state.audio.pause();
	}

	addTrack() {
		this.props.onAdd(this.props.track);
	}

	removeTrack() {
		this.props.onRemove(this.props.track);
	}

	render() {
		return (
			<div className="Track">
				<div className="Track-information">
					<h3>{this.props.track.name}</h3>
					<p>
						{this.props.track.artist} | {this.props.track.album}
					</p>
				</div>
				<button className="Track-action">
					{this.renderAction(this.props.isRemoval)}
					<Controls
						isPlaying={this.state.isPlaying}
						playPreview={this.playPreview}
						pausePreview={this.pausePreview}
					/>
				</button>
			</div>
		);
	}
}

export default Track;

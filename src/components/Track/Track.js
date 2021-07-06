import React from "react";
import "./Track.css";
import Play from "./Controls/Play";
import Pause from "./Controls/Pause";

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
		this.setState({ playing: true });
		this.state.audio.play();
	}

	pausePreview() {
		console.log("pause");
		this.setState({ playing: false });
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
				</button>
				{this.state.isPlaying ? (
					<Pause pausePreview={this.pausePreview} />
				) : (
					<Play playPreview={this.playPreview} />
				)}
			</div>
		);
	}
}

export default Track;

import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

class Play extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<button className="Track-action" onClick={this.props.playPreview}>
				<IconContext.Provider value={{ style: { fontSize: "20px" } }}>
					<div>
						<FaPlayCircle />
					</div>
				</IconContext.Provider>
			</button>
		);
	}
}

export default Play;

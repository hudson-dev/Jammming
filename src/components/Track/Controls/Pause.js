import React from "react";
import { FaPauseCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

class Pause extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<button className="Track-action" onClick={this.props.pausePreview}>
				<IconContext.Provider value={{ style: { fontSize: "20px" } }}>
					<div>
						<FaPauseCircle />
					</div>
				</IconContext.Provider>
			</button>
		);
	}
}

export default Pause;

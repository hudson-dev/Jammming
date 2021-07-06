import React from "react";
import Play from "./Play.js";
import Pause from "./Pause.js";

class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return <div>
            {
                (this.props.isPlaying)
                    ? <Pause pausePreview={this.props.pausePreview}/>
                    : <Play playPreview={this.props.playPreview}/>
            }
        </div>;
    }
}
 
export default Controls;
import React from "react";


const Video = (props) => {
	return (
		<div className="videoBox">
			<video controls autostart='true' autoPlay src={props.sources} title={props.title} type={props.type}></video>
		</div>
	);
};

export default Video;

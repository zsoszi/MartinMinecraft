import React, { useState } from "react";
import { VideoItems } from "./VideoItems";
import Video from "./video";
import "./video.css";

function Videos(props) {
	const [video, setVideo] = useState(false);

	const vClick = () => {
		setVideo(!video);
		console.log(vClick);
	};

	return (
		<div className="videoCont" onChange={vClick}>
			{VideoItems.map((item, index) => {
				return (
					<div className="videoS" key={index}>
						<Video className={item.cName} src={item.sources}  title={item.title} type={item.type}/>
						
					</div>
				);
			})}
		</div>
	);
}

export default Videos;

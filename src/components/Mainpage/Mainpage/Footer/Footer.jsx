import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import music from "../../Media/Vicetone.mp3";
import Micon from "../../../../picture/mine.png";
import Insta from "../../../../picture/insta.png";

library.add(fab, far, fas);

function Footer() {
	return (
		<div className="footerContainer">
			<div className="bg-music">
				<audio id="audio" src={music} preload="auto" controls></audio>
			</div>
			<footer className="footer">
				<a className="mn" href="https://www.minecraft.net/en-us">
					<img className="micon" src={Micon} alt="" />
				</a>
				<a className="fb" href="https://www.facebook.com/">
					<FontAwesomeIcon icon={["fab", "facebook"]} />
				</a>
				<a
					className="pr"
					href="https://hu.pinterest.com/martinszederknyi/_saved/"
				>
					<FontAwesomeIcon icon={["fab", "pinterest"]} />
				</a>
				<a className="ins" href="https://www.instagram.com/">
					<img className="insta" src={Insta} alt="" />
				</a>
				<a className="yo" href="https://www.youtube.com/">
					<FontAwesomeIcon icon={["fab", "youtube"]} />
				</a>
				<a className="tw" href="https://www.twitch.com/">
					<FontAwesomeIcon icon={["fab", "twitch"]} />
				</a>
				<div className="footer-copyright text-center py-3">
					© 2020 Copyright
				</div>
			</footer>
		</div>
	);
}

export default Footer;

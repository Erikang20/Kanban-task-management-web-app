import React, { useState } from "react";
import showIcon from "@assets/icon-show-sidebar.svg";
import hideIcon from "@assets/icon-hide-sidebar.svg";

export const SidebarButton = (props) => {
	const [imgSrc, setImgSrc] = useState(hideIcon);

	const handleClick = () => {
		props.toggleButton();
		setImgSrc(props.isHidden ? showIcon : hideIcon);
	};

	return (
		<div className="SidebarButton">
			<button
				onClick={handleClick}
				// className={props.isHidden ? 'button - show' : 'button - hide'}
				style={
					props.isHidden
						? {
								border: "none",
								borderRadius: "0 45px 45px 0",
								padding: "10px 20px",
								background: "#635FC7",
								transition: "100ms ease-out",
								position: "absolute",
								top: "50%",
							}
						: {
								border: "none",
								borderRadius: "0 45px 45px 0",
								padding: "10px",
								background: "white",
								fontWeight: "700",
								color: "gray",
								transition: "100ms ease-out",
							}
				}
			>
				<img src={imgSrc} />
				{props.isHidden ? "" : "Hide Sidebar"}
			</button>
		</div>
	);
};

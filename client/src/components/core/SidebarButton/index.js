import React, { useState } from "react";
import Image from "next/image";
import showIcon from "@assets/icon-show-sidebar.svg";
import hideIcon from "@assets/icon-hide-sidebar.svg";

export const SidebarButton = (props) => {
	const [imgSrc, setImgSrc] = useState(hideIcon);

	const handleClick = () => {
		props.isHidden ? setImgSrc(hideIcon) : setImgSrc(showIcon);
		props.toggleButton();
	};

	const handleMouseEnter = (e) => {
		if (!props.isHidden) {
			e.target.style.background = "#635fc71a";
		}
		e.target.style.opacity = 0.7;
		e.target.style.color = "#635FC7";
	};

	const handleMouseLeave = (e) => {
		if (!props.isHidden) {
			e.target.style.background = "transparent";
		}
		e.target.style.opacity = 1;
		e.target.style.color = "gray";
	};

	return (
		<div className="SidebarButton">
			<button
				onClick={handleClick}
				// className={props.isHidden ? 'button - show' : 'button - hide'}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				style={
					props.isHidden
						? {
								border: "none",
								borderRadius: "0 45px 45px 0",
								padding: "10px 20px",
								background: "#635FC7",
								transition: "200ms ease-in",
								position: "absolute",
								top: "90%",
							}
						: {
								border: "none",
								borderRadius: "0 45px 45px 0",
								padding: "10px",
								background: "transparent",
								fontWeight: "700",
								fontSize: "16px",
								color: "gray",
								transition: "200ms ease-in",
								display: "flex",
								justifyContent: "space-around",
								alignItems: "center",
								columnGap: "10px",
								marginLeft:"20px",
							}
				}
			>
				<Image src={imgSrc} width="25" height="22" alt="icon" />

				{props.isHidden ? "" : "Hide Sidebar"}
			</button>
		</div>
	);
};

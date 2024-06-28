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
								transition: "500ms ease-in",
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
								transition: "200ms ease-out",
								display: "flex",
								justifyContent: "space-around",
								alignItems: "center",
								columnGap: "10px",
							}
				}
			>
				<Image src={imgSrc} width="26" height="20" alt="icon" />

				{props.isHidden ? "" : "Hide Sidebar"}
			</button>
		</div>
	);
};

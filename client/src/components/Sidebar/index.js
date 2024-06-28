import React, { useState } from "react";
import { SidebarButton } from "@components/core";
import useSidebar from "@General/SidebarButton/useSidebar";

const Sidebar = () => {
	const { isHidden, toggleSidebar } = useSidebar();

	return (
		<div
			className="Sidebar"
			style={
				isHidden
					? {}
					: {
							background: "wheat",
							width: "20%",
							height: "100vh",
							textAlign: "left",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-around",
						}
			}
		>
			{!isHidden && (
				<div>
					<p>👩‍💻 board-1</p>
					<p>🎯 board-2</p>
					{/* other sidebar components */}
				</div>
			)}
			<SidebarButton isHidden={isHidden} toggleButton={toggleSidebar} />
		</div>
	);
};

export default Sidebar;

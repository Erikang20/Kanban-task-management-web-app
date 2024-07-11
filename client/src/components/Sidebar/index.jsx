import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { SidebarButton } from "@components/core";
import styles from "./styles.module.scss";
import darkThemeIcon from "@assets/icon-dark-theme.svg";
import lightThemeIcon from "@assets/icon-light-theme.svg";
import Slider from "@components/Sidebar/slider";
import fluentBoard from "@assets/Shape.svg";
import fluentBoard2 from "@assets/Shapee.svg";
import Header from "@components/Header";

const Sidebar = () => {
	const [isHidden, setIsHidden] = useState(false);
	const [isToggled, setIsToggle] = useState(false);

	const toggleSidebar = () => {
		setIsHidden(!isHidden);
	};

	const sidebarClass = classNames(styles.sidebar, {
		[styles.isDarkMode]: false,
		[styles.isLightMode]: true,
		[styles.isDisplayed]: !isHidden,
	});

	return (
		<>
		
			<Header />
		<div className={sidebarClass}>
			{!isHidden && (
				<>
					{/* <div className={styles.heading}>
						<div className={styles.logo}>
							<Image
								src={logoLight}
								width={150}
								height={30}
								alt="icon"
							/>
						</div>
						<h1 className={styles.headingText}>kanban</h1>
					</div> */}

					<span className={styles.allBoards}>ALL BOARDS</span>

					<div className={styles.linkSection}>

						<a href="#" className={styles.linkContainerA}>
							<Image
								className={styles.icon}
								src={fluentBoard}
								width={50}
								height={20}
								alt="icon"
							/>
							<p className={styles.link}>Platform Launch</p>
						</a>

						<a href="#" className={styles.linkContainerB}>
							<Image
								className={styles.icon}
								src={fluentBoard}
								width={50}
								height={20}
								alt="icon"
							/>
							<p className={styles.link}>Marketing Plan</p>
						</a>

						<a href="#" className={styles.linkContainerC}>
							<Image
								className={styles.icon}
								src={fluentBoard}
								width={50}
								height={20}
								alt="icon"
							/>
							<p className={styles.link}>Roadmap</p>
						</a>

						
						<a href="#" className={styles.newBoardLinkCon}>
							<Image
								className={styles.newBoardLinkIcon}
								src={fluentBoard2}
								width={30}
								height={15}
								alt="icon"
							/>
							<p className={styles.newBoardLink}>+ Create New Board</p>
						</a>
						
						
					</div>
						
					
					<div className={styles.lightDarkModeIconSection}>
						<Image
							className={styles.lightModeIcon}
							src={lightThemeIcon}
							width="20"
							height="18"
							alt="icon"
						/>
						<Slider
							isToggled={isToggled}
							onToggle={() => setIsToggle(!isToggled)}
						/>
						<Image
							className={styles.darkModeIcon}
							src={darkThemeIcon}
							width="18"
							height="18"
							alt="icon"
						/>
					</div>
				</>
			)}

			<SidebarButton isHidden={isHidden} toggleButton={toggleSidebar} className={styles.hidesidebar} />
		
		</div>
		</>
	);
};

export default Sidebar;

'use client';
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

import logoLight from "@assets/logo-light.svg";

const Header = () => {
	return (
		<div className={styles.header}>
            <div className={styles.heading}>
                <div className={styles.logo}>
                    <Image
                        src={logoLight}
                        width={150}
                        height={30}
                        alt="icon"
                    />
                </div>
                <h1 className={styles.headingText}>kanban</h1>
            </div>

            <div className={styles.subheader}>
                <h2>Platform Launch</h2>
                <p>+ Add New Task</p>
            </div>
			

		</div>
	);
};

export default Header;

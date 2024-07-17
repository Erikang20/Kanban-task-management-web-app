import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { ThreeDotsMenu } from "@components/Header/ThreeDotsMenu";
import { Dialog } from "@components/core/Modals/Dialog";

export const Cards = () => {
	const dialogRef = useRef<HTMLDialogElement>(null);

	const onToggle = () => {
		if (!dialogRef.current) {
			return;
		}
		dialogRef.current.hasAttribute("open")
			? dialogRef.current.close()
			: dialogRef.current.showModal();
	};

	const closeModal = () => {
		dialogRef.current?.close();
		close();
	};
	return (
		<div className={styles.cardContainer}>
			<Link className={styles.cardBody} href={"?showModal=y"}>
				<>
					<div>Build UI for onboarding flow</div>
					<div className={styles.dialogContainer}>
						<Dialog
							onClose={closeModal}
							title="I'm the heading"
							toggleDialog={onToggle}
						>
							{
								<>
									<ThreeDotsMenu />
									<div>
										<p>LOREM IPSUM</p>
										<form>Current status</form>
									</div>
								</>
							}
							I'm a card
						</Dialog>
					</div>
				</>
			</Link>
		</div>
	);
};

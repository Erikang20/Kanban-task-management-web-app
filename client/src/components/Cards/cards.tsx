import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import { ThreeDotsMenu } from "@components/Header/ThreeDotsMenu";
import { Dialog } from "@components/core/Modals/Dialog";
import logoDown from "@assets/icon-chevron-down.svg";
import { useRouter } from "next/router";

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
	  const router = useRouter();
		const { pathname, query } = router;

		// Construct the new query parameters
		const newQuery = { ...query, showModal: "y" };

		// Create the href with the current pathname and updated query parameters
		const href = {
			pathname,
			query: newQuery,
		};

	return (
		<div className={styles.cardContainer}>
			<Link className={styles.cardBody} href={href}>
				<>
					<div>Build UI for onboarding flow</div>
					<div className={styles.dialogContainer}>
						<Dialog onClose={closeModal} toggleDialog={onToggle}>
							{
								<div className={styles.cardDialogBody}>
									<div className={styles.cardDialogHeading}>
										<h1>
											Research Pricing points of various
											competitors and trial different
											business models
										</h1>
										<span
											className={
												styles.dropDownBtnContainer
											}
										>
											<ThreeDotsMenu />
										</span>
									</div>
									<div className={styles.cardDialogMainBody}>
										<p>
											We know what we're planning to build
											for version one. Now we need to
											finalize the first pricing model
											we'll use. Keep iterating the
											subtasks until we have a coherent
											proposition.
										</p>
										<p>Subtasks</p>
										<div className={styles.subTasks}>
											<div
												className={
													styles.subTasksChecks
												}
											>
												<input
													type="checkbox"
													checked={true}
												/>
												<label
													className={
														styles.checkboxLabel
													}
												>
													Research competitor pricing
													and business models
												</label>
											</div>

											<div
												className={
													styles.subTasksChecks
												}
											>
												<input
													type="checkbox"
													checked={true}
												/>
												<label
													className={
														styles.checkboxLabel
													}
												>
													Outline a business model
													that works for our solution
												</label>
											</div>

											<div
												className={
													styles.subTasksChecks
												}
											>
												<input type="checkbox" />
												<label
													className={
														styles.checkboxLabel
													}
												>
													Talk to potential customers
													about our proposed solution
													and ask for fair price
													expectancy
												</label>
											</div>
										</div>
										<div className={styles.cardDialogForm}>
											<label
												className={styles.formSubTasks}
											>
												Current Status
											</label>
											<select>
												<Image
													src={logoDown}
													width="20"
													height="10"
													alt="icon"
												/>
												<option value="Doing">
													Doing
												</option>
												<option value="Todo">
													Todo
												</option>
												<option value="Done">
													Done
												</option>
											</select>
										</div>
									</div>
								</div>
							}
						</Dialog>
					</div>
				</>
			</Link>
		</div>
	);
};

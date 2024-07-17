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
						<Dialog onClose={closeModal} toggleDialog={onToggle}>
							{
								<div className={styles.cardDialogBody}>
									<ThreeDotsMenu />
									<div>
										<h1>
											Research Pricing points of various
											competitors and trial different
											business models
										</h1>
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
												<input type="checkbox" />
												<label>
													Research competitor pricing
													and business models
												</label>
											</div>

											<div
												className={
													styles.subTasksChecks
												}
											>
												<input type="checkbox" />
												<label>
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
												<label>
													Talk to potential customers
													about our proposed solution
													and ask for fair price
													expectancy
												</label>
											</div>
										</div>
										<div>
											<form>
												<label>Current Status</label>
												<select>
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
											</form>
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

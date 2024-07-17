import React, { forwardRef } from "react";
import { useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";
import styles from "./styles.module.scss";

type Props = {
	children: React.ReactNode;
	className?: any;
	toggleDialog: () => void;
	onClose: () => void;
};

export const Dialog = forwardRef<HTMLDialogElement, Props>(
	({ children, toggleDialog }, ref) => {
		const searchParams = useSearchParams();
		const dialogRef = useRef<null | HTMLDialogElement>(null);
		const showModal = searchParams.get("showModal");

		useEffect(() => {
			if (showModal === "y") {
				dialogRef.current?.showModal();
			} else {
				dialogRef.current?.close();
			}
		}, [showModal]);

		return (
			<div className={styles.dialogContainer}>
				{showModal === "y" && (
					<dialog
						className={styles.dialogBody}
						ref={dialogRef}
						onClick={(e) => {
							if (e.currentTarget === e.target) {
								toggleDialog();
							}
						}}
					>
						{children}
					</dialog>
				)}
			</div>
		);
	},
);

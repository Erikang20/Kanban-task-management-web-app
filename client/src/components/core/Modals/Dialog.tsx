import React, { forwardRef, useRef, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "./styles.module.scss";

type Props = {
	children: React.ReactNode;
	className?: any;
	toggleDialog: () => void;
	onClose: () => void;
};

export const Dialog = forwardRef<HTMLDialogElement, Props>(
	({ children, toggleDialog, onClose }, ref) => {
		const searchParams = useSearchParams();
		const router = useRouter();
		const dialogRef = useRef<null | HTMLDialogElement>(null);
		const showModal = searchParams.get("showModal");

		useEffect(() => {
			if (showModal === "y") {
				dialogRef.current?.showModal();

				const handleEscape = (event: KeyboardEvent) => {
					if (event.key === "Escape") {
						const currentParams = new URLSearchParams(
							window.location.search,
						);
						currentParams.delete("showModal");

						router.push(
							`${window.location.pathname}?${currentParams.toString()}`,
						);
					}
				};

				window.addEventListener("keydown", handleEscape);

				return () => {
					window.removeEventListener("keydown", handleEscape);
				};
			} else {
				dialogRef.current?.close();
			}
		}, [showModal, router]);

		return (
			<div className={styles.dialogContainer}>
				{showModal === "y" && (
					<dialog
						onClose={onClose}
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

Dialog.displayName = "Dialog";

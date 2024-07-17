import React, { forwardRef } from "react";
import { useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";

type Props = {
	title: string;
	children: React.ReactNode;
	className?: any;
	toggleDialog: () => void;
	onClose: () => void;
};

export const Dialog = forwardRef<HTMLDialogElement, Props>(
	({ children, toggleDialog, className, title }, ref) => {
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
			<div className={className}>
				{showModal === "y" && (
					<dialog
						className={className}
						ref={dialogRef}
						onClick={(e) => {
							if (e.currentTarget === e.target) {
								toggleDialog();
							}
						}}
					>
						<div>{children}</div>
					</dialog>
				)}
			</div>
		);
	},
);

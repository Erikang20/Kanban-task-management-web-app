import styles from "./Button.module.css";


export const Button = ({ children, theme = "light", variant = "primary", type = "button" }) => {
	/**
	 * @theme  light|dark
	 * @param  {} {switch(variant
	 * @param  {return"btn-danger-light";case"secondary":return"btn-secondary-light";default:return"btn-primary"}}switch(variant} {case"danger"
	 * @returns return
	 */
	const handleVariantClasses = () => {
		if (theme === "light") {
			switch (variant) {
				case "danger":
					return "btn-danger-light";
				case "secondary":
					return "btn-secondary-light";

				default:
					return "btn-primary"
			}
		}
		switch (variant) {
			case "danger":
				return "btn-danger-dark";
			case "secondary":
				return "btn-secondary-dark";

			default:
				return "btn-primary"
		}
	}
	return (
		<button className={styles.buttonContainer} type={type}>{children}</button>
	);
}
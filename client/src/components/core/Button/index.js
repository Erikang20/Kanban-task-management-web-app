import styles from "./Button.module.css";


export const Button = ({ children, theme = "light", variant = "primary", type = "button", size = "large", style, onClick }) => {
	/**
	 * @theme  light|dark
	 * @variants  primary|secondary|danger
	 * @size small|large
	 * @style CSSObject
	 */
	const handleVariantClasses = () => {
		if (theme === "light") {
			switch (variant) {
				case "danger":
					return styles.BtnDangerlight;
				case "secondary":
					return styles.BtnSecondaryLight;
				default:
					return styles.BtnPrimary
			}
		}
		switch (variant) {
			case "danger":
				return styles.BtnDangerDark;
			case "secondary":
				return styles.BtnSecondaryDark;
			default:
				return styles.BtnPrimary
		}
	}
	const handleClasses = `${styles.buttonContainer}  ${handleVariantClasses()} ${size === "small" ? styles.BtnSmall : ""}`;
	return (
		<button
			className={handleClasses} type={type} style={style} onClick={onClick}>{children}</button>
	);
}
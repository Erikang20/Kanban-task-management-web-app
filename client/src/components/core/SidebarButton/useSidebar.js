import { useState } from "react";

const useSidebar = () => {
	const [isHidden, setIsHidden] = useState(false);
	const toggleSidebar = () => {
		setIsHidden(!isHidden);
	};

	return { isHidden, toggleSidebar };
};

export default useSidebar;

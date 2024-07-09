import Image from "next/image";
import iconBoard from "@assets/icon-board.svg";

export const BoardIcon = () => {
	return <Image src={iconBoard} width="20" height="20" alt="icon" />;
};

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const lightThemeSideBar = {
	background: "white",
	fontColor: "#828fa3",
};

export const darkThemeSideBar = {
	background: "#3E3F4E",
	fontColor: "#97979",
};

export const lightThemeBoard = {
	background: "#F4F7FD",
	fontColor: "#828fa3",
};

export const darkThemeBoard = {
	background: "#20212C",
	fontColor: "#828FA3",
};

export const lightThemeHeader = {
	background: "white",
	fontColor: "black",
};

export const darkThemeHeader = {
	background: "20212C",
	fontColor: "#828FA3",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.background}
	}`;

import { useState } from "react";
import { createGlobalStyle } from "styled-components";

export const lightThemeSideBar = {
	body: "white",
	fontColor: "#828fa3",
};

export const lightThemeBoard = {
	body: "#F4F7FD",
	fontColor: "#828fa3",
};

export const darkThemeSideBar = {
	body: "#2b2c37",
	fontColor: "#97979",
};

export const darkThemeBoard = {
	body: "#2B2C37",
	fontColor: "#828FA3",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}`;

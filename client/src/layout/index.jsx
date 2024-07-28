"use client";
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Sidebar from "@components/Sidebar";
import { Header } from "@components/Header/header";
import { MainPage } from "@components/Home/mainPage";
import {
	lightThemeSideBar,
	darkThemeSideBar,
	lightThemeBoard,
	darkThemeBoard,
	lightThemeHeader,
	darkThemeHeader,
	GlobalStyles,
} from "@components/Home/theme";

const StyledComponent = styled.div`
	background-color: ${(props) => props.theme.body};
`;

// const StyledMainBodyComponent = styled.div`
// 	background-color: ${(props) => props.theme.body};
// `;

const AppLayout = () => {
	const [theme, setTheme] = useState("light");

	const themeToggler = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<div className="root">
			<ThemeProvider
				theme={theme === "light" ? lightThemeHeader : darkThemeHeader}
			>
				<Header theme={theme} />
			</ThemeProvider>
			<StyledComponent>
				<GlobalStyles />
				<div className="main-body">
					<ThemeProvider
						theme={
							theme === "light"
								? lightThemeSideBar
								: darkThemeSideBar
						}
					>
						<Sidebar theme={theme} toggleTheme={themeToggler} />
						<ThemeProvider
							theme={
								theme === "light"
									? lightThemeBoard
									: darkThemeBoard
							}
						>
							<MainPage theme={theme} />
						</ThemeProvider>
					</ThemeProvider>
				</div>
			</StyledComponent>
		</div>
	);
};
export default AppLayout;

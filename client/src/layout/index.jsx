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
				<GlobalStyles />
				<Header theme={theme} />
			</ThemeProvider>

			<ThemeProvider
				theme={theme === "light" ? lightThemeSideBar : darkThemeSideBar}
			>
				<StyledComponent>
					<GlobalStyles />
					<div className="main-body">
						<Sidebar theme={theme} toggleTheme={themeToggler} />
						<ThemeProvider
							theme={
								theme === "light"
									? lightThemeBoard
									: darkThemeBoard
							}
						>
							<GlobalStyles />
							<MainPage theme={theme} />
						</ThemeProvider>
					</div>
				</StyledComponent>
			</ThemeProvider>
		</div>
	);
};
export default AppLayout;

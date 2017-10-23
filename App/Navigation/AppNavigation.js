import React from "react";
import { StackNavigator } from "react-navigation";
import styles from "./Styles/NavigationStyles";
import NewsPieceDetail from "../Containers/NewsPieceDetail";

// screens identified by the router
import Login from "../Containers/LoginScreen";
import LaunchScreen from "../Containers/LaunchScreen";
import NavigationDrawer from "./NavigationDrawer";

const PrimaryNav = StackNavigator(
	{
		Login: { screen: Login },
		LaunchScreen: { screen: LaunchScreen },
		NavigationDrawer: { screen: NavigationDrawer },
        NewsPieceDetail: { screen: NewsPieceDetail }
	},
	{
		initialRouteName: "NavigationDrawer",
		headerMode: "none",
	}
);

export default PrimaryNav;

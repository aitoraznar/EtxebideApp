import React from "react";
import { DrawerNavigator } from "react-navigation";
import News from "../Containers/News";
import CardExample from "../Containers/CardExample";
import DrawerContent from "../Containers/DrawerContent";

import styles from "./Styles/NavigationStyles";

const NavigationDrawer = DrawerNavigator({
        News: { screen: News },
		//CardExample: { screen: CardExample },
	},
	{
		initialRouteName: "News",
		contentComponent: props => <DrawerContent {...props} />,
	}
);

export default NavigationDrawer;

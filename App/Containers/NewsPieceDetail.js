import React from "react";
import { ScrollView, Text, Image, View } from "react-native";
import { Button, Text as NBText } from "native-base";
import { Images } from "../Themes";

// Styles
//import styles from "./Styles/LaunchScreenStyles";

export default class LaunchScreen extends React.Component {
	render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const { params } = this.props.navigation.state;

		return (
			<View>
				<ScrollView>
					<View>
						<Text>{params.newsPiece.title} - {params.newsPiece.pubDate}</Text>
						<Text>{params.newsPiece.description}</Text>
					</View>
				</ScrollView>
			</View>
		);
	}
}

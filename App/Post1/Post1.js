//
//  Post1
//  CSSS Design-21.09.25
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class Post1 extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	render() {
	
		return <View
				style={styles.post1View}>
				<Image
					source={require("./../../assets/images/-icon-olor.png")}
					style={styles.iconСolorImage}/>
				<Text
					style={styles.postInText}>发布分区：</Text>
				<View
					pointerEvents="box-none"
					style={{
						height: 170,
						marginLeft: 29,
						marginRight: 28,
						marginTop: 72,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<View
						style={styles.foodView}>
						<Image
							source={require("./../../assets/images/group-39.png")}
							style={styles.group39Image}/>
						<Text
							style={styles.foodText}>美食</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.sportView}>
						<Image
							source={require("./../../assets/images/group-2.png")}
							style={styles.group2Image}/>
						<Text
							style={styles.sportText}>运动</Text>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 170,
						marginLeft: 29,
						marginRight: 28,
						marginTop: 22,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<View
						style={styles.rentView}>
						<Image
							source={require("./../../assets/images/icon.png")}
							style={styles.iconFourImage}/>
						<Text
							style={styles.rentText}>租房</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.stubView}>
						<Image
							source={require("./../../assets/images/icon-2.png")}
							style={styles.iconImage}/>
						<Text
							style={styles.analyticsText}>Analytics</Text>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					pointerEvents="box-none"
					style={{
						height: 170,
						marginLeft: 29,
						marginRight: 28,
						marginBottom: 83,
						flexDirection: "row",
						alignItems: "flex-end",
					}}>
					<View
						style={styles.stubThreeView}>
						<Image
							source={require("./../../assets/images/icon-2.png")}
							style={styles.iconThreeImage}/>
						<Text
							style={styles.analyticsThreeText}>Analytics</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.stubTwoView}>
						<Image
							source={require("./../../assets/images/icon-2.png")}
							style={styles.iconTwoImage}/>
						<Text
							style={styles.analyticsTwoText}>Analytics</Text>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	post1View: {
		backgroundColor: "rgb(249, 250, 250)",
		flex: 1,
	},
	iconСolorImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 29,
		height: 26,
		marginLeft: 37,
		marginTop: 82,
	},
	postInText: {
		backgroundColor: "transparent",
		color: "rgb(30, 30, 30)",
		fontSize: 38,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-start",
		marginLeft: 29,
		marginTop: 26,
	},
	foodView: {
		backgroundColor: "white",
		borderRadius: 14,
		shadowColor: "rgba(79, 98, 192, 0.15)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 162,
		height: 170,
		alignItems: "center",
	},
	group39Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 65,
		height: 54,
		marginTop: 31,
	},
	foodText: {
		backgroundColor: "transparent",
		color: "rgb(30, 30, 30)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		marginTop: 19,
	},
	sportView: {
		backgroundColor: "white",
		borderRadius: 14,
		shadowColor: "rgba(0, 0, 0, 0.05)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 162,
		height: 170,
		alignItems: "center",
	},
	group2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 62,
		height: 58,
		marginTop: 31,
	},
	sportText: {
		color: "rgb(30, 30, 30)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		backgroundColor: "transparent",
		marginTop: 15,
	},
	rentView: {
		backgroundColor: "white",
		borderRadius: 14,
		shadowColor: "rgba(0, 0, 0, 0.05)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 162,
		height: 170,
		alignItems: "center",
	},
	iconFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 68,
		height: 54,
		marginTop: 39,
	},
	rentText: {
		color: "rgb(30, 30, 30)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		backgroundColor: "transparent",
		marginTop: 10,
	},
	stubView: {
		backgroundColor: "white",
		borderRadius: 14,
		shadowColor: "rgba(0, 0, 0, 0.05)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 162,
		height: 170,
		alignItems: "center",
	},
	iconImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 35,
		height: 28,
		marginTop: 51,
	},
	analyticsText: {
		color: "rgb(30, 30, 30)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		backgroundColor: "transparent",
		marginTop: 24,
	},
	stubThreeView: {
		backgroundColor: "white",
		borderRadius: 14,
		shadowColor: "rgba(0, 0, 0, 0.05)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 162,
		height: 170,
		alignItems: "center",
	},
	iconThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 35,
		height: 28,
		marginTop: 51,
	},
	analyticsThreeText: {
		color: "rgb(30, 30, 30)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		backgroundColor: "transparent",
		marginTop: 24,
	},
	stubTwoView: {
		backgroundColor: "white",
		borderRadius: 14,
		shadowColor: "rgba(0, 0, 0, 0.05)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 162,
		height: 170,
		alignItems: "center",
	},
	iconTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 35,
		height: 28,
		marginTop: 51,
	},
	analyticsTwoText: {
		backgroundColor: "transparent",
		color: "rgb(30, 30, 30)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		marginTop: 24,
	},
})

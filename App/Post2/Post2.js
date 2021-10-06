//
//  Post2
//  CSSS Design-21.09.25
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class Post2 extends React.Component {

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
				style={styles.post2View}>
				<Image
					source={require("./../../assets/images/-icon-olor.png")}
					style={styles.iconСolorImage}/>
				<View
					style={styles.titlegroupView}>
					<Text
						style={styles.titleText}>标题</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.rectangleView}/>
				</View>
				<View
					style={styles.taggroupView}>
					<Text
						style={styles.tagText}>标签</Text>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							width: 68,
							marginLeft: 10,
							marginTop: 4,
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 68,
								height: 28,
							}}>
							<View
								style={styles.tagFourView}>
								<Text
									style={styles.xxxFiveText}>XXX{"\n"}</Text>
							</View>
							<View
								style={styles.tagFiveView}>
								<Text
									style={styles.xxxSixText}>XXX{"\n"}</Text>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.tagTwoView}>
							<Text
								style={styles.xxxThreeText}>XXX{"\n"}</Text>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.tagView}>
						<Text
							style={styles.xxxTwoText}>XXX{"\n"}</Text>
					</View>
					<View
						style={styles.tagThreeView}>
						<Text
							style={styles.xxxFourText}>XXX{"\n"}</Text>
					</View>
					<View
						style={styles.addtagView}>
						<Text
							style={styles.textText}>+{"\n"}</Text>
					</View>
				</View>
				<View
					style={styles.contentgroupView}>
					<Text
						style={styles.contentText}>正文</Text>
					<View
						style={styles.contenttextView}>
						<Text
							style={styles.xxxText}>XXX{"\n"}</Text>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.postView}>
					<Text
						style={styles.postText}>发布</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	post2View: {
		backgroundColor: "rgb(249, 250, 250)",
		flex: 1,
		alignItems: "flex-start",
	},
	iconСolorImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 29,
		height: 26,
		marginLeft: 34,
		marginTop: 60,
	},
	titlegroupView: {
		backgroundColor: "transparent",
		width: 301,
		height: 33,
		marginLeft: 34,
		marginTop: 76,
		flexDirection: "row",
		alignItems: "center",
	},
	titleText: {
		color: "rgb(30, 30, 30)",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	rectangleView: {
		backgroundColor: "white",
		borderRadius: 14,
		shadowColor: "rgba(79, 98, 192, 0.15)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 220,
		height: 29,
	},
	taggroupView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 345,
		height: 75,
		marginTop: 14,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	tagText: {
		backgroundColor: "transparent",
		color: "rgb(30, 30, 30)",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	tagFourView: {
		backgroundColor: "white",
		borderRadius: 13,
		shadowColor: "rgba(0, 0, 0, 0.05)",
		shadowRadius: 20,
		shadowOpacity: 1,
		position: "absolute",
		left: 4,
		width: 64,
		top: 2,
		height: 26,
		justifyContent: "flex-end",
	},
	xxxFiveText: {
		color: "rgb(30, 30, 30)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		backgroundColor: "transparent",
		marginLeft: 17,
		marginRight: 18,
	},
	tagFiveView: {
		backgroundColor: "white",
		borderRadius: 13,
		shadowColor: "rgba(0, 0, 0, 0.05)",
		shadowRadius: 20,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		width: 64,
		top: 0,
		height: 26,
		justifyContent: "flex-end",
	},
	xxxSixText: {
		backgroundColor: "transparent",
		color: "rgb(30, 30, 30)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		marginLeft: 17,
		marginRight: 18,
	},
	tagTwoView: {
		backgroundColor: "white",
		borderRadius: 13,
		shadowColor: "rgba(0, 0, 0, 0.05)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 64,
		height: 26,
		marginLeft: 4,
		justifyContent: "flex-end",
	},
	xxxThreeText: {
		backgroundColor: "transparent",
		color: "rgb(30, 30, 30)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		marginLeft: 17,
		marginRight: 18,
	},
	tagView: {
		backgroundColor: "white",
		borderRadius: 13,
		shadowColor: "rgba(0, 0, 0, 0.05)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 64,
		height: 26,
		marginRight: 6,
		marginTop: 6,
		justifyContent: "flex-end",
	},
	xxxTwoText: {
		backgroundColor: "transparent",
		color: "rgb(30, 30, 30)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		marginLeft: 17,
		marginRight: 18,
	},
	tagThreeView: {
		backgroundColor: "white",
		borderRadius: 13,
		shadowColor: "rgba(0, 0, 0, 0.05)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 64,
		height: 26,
		marginRight: 31,
		marginTop: 6,
		justifyContent: "flex-end",
	},
	xxxFourText: {
		color: "rgb(30, 30, 30)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		backgroundColor: "transparent",
		marginLeft: 17,
		marginRight: 18,
	},
	addtagView: {
		backgroundColor: "white",
		borderRadius: 13,
		shadowColor: "rgba(0, 0, 0, 0.05)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 34,
		height: 26,
		marginTop: 6,
		justifyContent: "flex-end",
	},
	textText: {
		backgroundColor: "transparent",
		color: "rgb(30, 30, 30)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		marginLeft: 12,
		marginRight: 12,
	},
	contentgroupView: {
		backgroundColor: "transparent",
		width: 334,
		height: 280,
		marginLeft: 34,
		marginTop: 49,
		alignItems: "flex-start",
	},
	contentText: {
		color: "rgb(30, 30, 30)",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	contenttextView: {
		backgroundColor: "white",
		borderRadius: 14,
		shadowColor: "rgba(0, 0, 0, 0.05)",
		shadowRadius: 20,
		shadowOpacity: 1,
		alignSelf: "flex-end",
		width: 286,
		height: 229,
		marginTop: 18,
		alignItems: "flex-start",
	},
	xxxText: {
		color: "rgb(30, 30, 30)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 25,
		backgroundColor: "transparent",
		marginLeft: 48,
		marginTop: 21,
	},
	postView: {
		backgroundColor: "white",
		borderRadius: 14,
		shadowColor: "rgba(0, 0, 0, 0.05)",
		shadowRadius: 20,
		shadowOpacity: 1,
		alignSelf: "flex-end",
		width: 115,
		height: 52,
		marginRight: 145,
		marginBottom: 163,
		justifyContent: "center",
	},
	postText: {
		backgroundColor: "transparent",
		color: "rgb(30, 30, 30)",
		fontSize: 21,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		paddingTop: 5,
		marginLeft: 36,
		marginRight: 36,
	},
})

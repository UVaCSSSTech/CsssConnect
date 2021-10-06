//
//  Home
//  CSSS 10.6
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class Home extends React.Component {

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
				style={styles.homeView}>
				<View
					style={styles.searchgroupView}>
					<View
						style={styles.rectangleView}/>
					<View
						style={{
							flex: 1,
						}}/>
					<Image
						source={require("./../../assets/images/-icon-olor-2.png")}
						style={styles.iconСolorImage}/>
				</View>
				<View
					style={styles.topnavbarView}>
					<Text
						style={styles.sportText}>运动</Text>
					<Text
						style={styles.foodText}>美食</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.rentText}>租房</Text>
					<Text
						style={styles.textText}>。。。</Text>
				</View>
				<View
					style={styles.contentView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 2,
							top: 0,
							bottom: 0,
						}}>
						<View
							style={styles.rectangle4View}>
							<Text
								style={styles.textTwoText}>正文{"\n"}茄子wdnmd 可乐鸡汤法力无边 A1高闪来一个好不好秋梨膏 我起了一枪秒了 发把狙</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.rectangle2View}>
							<Text
								style={styles.textFourText}>正文{"\n"}茄子wdnmd 可乐鸡汤法力无边 A1高闪来一个好不好秋梨膏 我起了一枪秒了 发把狙</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<View
							style={styles.rectangle3View}>
							<Text
								style={styles.textThreeText}>正文{"\n"}茄子wdnmd 可乐鸡汤法力无边 A1高闪来一个好不好秋梨膏 我起了一枪秒了 发把狙</Text>
						</View>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.navbarView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 13,
							height: 94,
						}}>
						<View
							style={styles.barCopyView}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 36,
								right: 45,
								top: 22,
								height: 49,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								style={styles.homegroupView}>
								<View
									pointerEvents="box-none"
									style={{
										height: 24,
									}}>
									<View
										style={styles.fill3View}/>
									<Image
										source={require("./../../assets/images/fill-4.png")}
										style={styles.fill4Image}/>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.homeText}>首页</Text>
							</View>
							<Image
								source={require("./../../assets/images/mesgroup.png")}
								style={styles.mesgroupImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.collgroupView}>
								<View
									pointerEvents="box-none"
									style={{
										height: 24,
									}}>
									<Image
										source={require("./../../assets/images/fill-3-2.png")}
										style={styles.fill3TwoImage}/>
									<Image
										source={require("./../../assets/images/fill-5.png")}
										style={styles.fill5TwoImage}/>
									<Image
										source={require("./../../assets/images/fill-7.png")}
										style={styles.fill7Image}/>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.collText}>收藏</Text>
							</View>
							<View
								style={styles.setgroupView}>
								<Image
									source={require("./../../assets/images/fill-3.png")}
									style={styles.fill3Image}/>
								<Image
									source={require("./../../assets/images/fill-5-2.png")}
									style={styles.fill5Image}/>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.setText}>设置</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.plusView}>
						<Image
							source={require("./../../assets/images/plus-copy.png")}
							style={styles.plusCopyImage}/>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	homeView: {
		backgroundColor: "rgb(249, 250, 250)",
		flex: 1,
		alignItems: "center",
	},
	searchgroupView: {
		backgroundColor: "transparent",
		width: 337,
		height: 37,
		marginTop: 52,
		flexDirection: "row",
		alignItems: "center",
	},
	rectangleView: {
		backgroundColor: "white",
		borderRadius: 14,
		shadowColor: "rgba(79, 98, 192, 0.15)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 278,
		height: 37,
	},
	iconСolorImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 34,
		height: 34,
	},
	topnavbarView: {
		backgroundColor: "transparent",
		width: 361,
		height: 19,
		marginTop: 25,
		flexDirection: "row",
		alignItems: "center",
	},
	sportText: {
		color: "rgb(32, 61, 186)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	foodText: {
		backgroundColor: "transparent",
		color: "rgb(135, 133, 154)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 63,
	},
	rentText: {
		backgroundColor: "transparent",
		color: "rgb(135, 133, 154)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 86,
	},
	textText: {
		color: "rgb(135, 133, 154)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 39,
	},
	contentView: {
		backgroundColor: "transparent",
		width: 365,
		height: 491,
		marginTop: 96,
	},
	rectangle4View: {
		backgroundColor: "white",
		borderRadius: 14,
		shadowColor: "rgba(79, 98, 192, 0.15)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 147,
		marginLeft: 2,
		justifyContent: "center",
		alignItems: "center",
	},
	textTwoText: {
		backgroundColor: "transparent",
		color: "rgb(30, 30, 30)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		width: 310,
	},
	rectangle2View: {
		backgroundColor: "white",
		borderRadius: 14,
		shadowColor: "rgba(79, 98, 192, 0.15)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 147,
		marginRight: 2,
		justifyContent: "center",
		alignItems: "center",
	},
	textFourText: {
		backgroundColor: "transparent",
		color: "rgb(30, 30, 30)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		width: 310,
	},
	rectangle3View: {
		backgroundColor: "white",
		borderRadius: 14,
		shadowColor: "rgba(79, 98, 192, 0.15)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 147,
		marginLeft: 4,
		justifyContent: "center",
		alignItems: "center",
	},
	textThreeText: {
		backgroundColor: "transparent",
		color: "rgb(30, 30, 30)",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		width: 310,
	},
	navbarView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 107,
		marginRight: 1,
		marginBottom: 1,
	},
	barCopyView: {
		backgroundColor: "white",
		shadowColor: "rgba(155, 132, 135, 0.14)",
		shadowRadius: 20,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 94,
	},
	homegroupView: {
		backgroundColor: "transparent",
		width: 22,
		height: 48,
	},
	fill3View: {
		backgroundColor: "rgb(35, 31, 32)",
		position: "absolute",
		left: 9,
		right: 8,
		top: 15,
		height: 8,
	},
	fill4Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 24,
	},
	homeText: {
		backgroundColor: "transparent",
		color: "rgb(135, 133, 154)",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	mesgroupImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 31,
		height: 46,
		marginLeft: 56,
	},
	collgroupView: {
		backgroundColor: "transparent",
		width: 24,
		height: 49,
		marginRight: 64,
	},
	fill3TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 13,
		top: 7,
		height: 17,
	},
	fill5TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 1,
		right: 0,
		top: 0,
		height: 10,
	},
	fill7Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 13,
		right: 0,
		top: 7,
		height: 17,
	},
	collText: {
		backgroundColor: "transparent",
		color: "rgb(32, 61, 186)",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 2,
	},
	setgroupView: {
		backgroundColor: "transparent",
		width: 22,
		height: 49,
	},
	fill3Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 11,
		marginLeft: 6,
		marginRight: 5,
	},
	fill5Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 11,
		marginLeft: 2,
		marginRight: 1,
		marginTop: 2,
	},
	setText: {
		backgroundColor: "transparent",
		color: "rgb(135, 133, 154)",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	plusView: {
		backgroundColor: "rgb(32, 61, 186)",
		borderRadius: 29,
		borderWidth: 3,
		borderColor: "rgb(230, 233, 255)",
		borderStyle: "solid",
		position: "absolute",
		alignSelf: "center",
		width: 58,
		top: 0,
		height: 58,
		justifyContent: "center",
		alignItems: "center",
	},
	plusCopyImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 17,
		height: 17,
	},
})

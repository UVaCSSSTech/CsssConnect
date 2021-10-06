//
//  Setting
//  CSSS Design-21.09.25
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class Setting extends React.Component {

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
				style={styles.settingView}>
				<View
					pointerEvents="box-none"
					style={{
						height: 89,
						marginLeft: 26,
						marginRight: 36,
						marginTop: 23,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<Image
						source={require("./../../assets/images/rectangle.png")}
						style={styles.rectangleImage}/>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.useridText}>XXX您好</Text>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "flex-start",
						width: 221,
						height: 37,
						marginLeft: 28,
						marginTop: 29,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<View
						style={styles.collectionsgroupView}>
						<Text
							style={styles.collectionstextText}>收藏</Text>
					</View>
					<View
						style={styles.historygroupView}>
						<Text
							style={styles.historytextText}>历史记录</Text>
					</View>
				</View>
				<View
					style={styles.divgroupView}>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							width: 81,
						}}>
						<Text
							style={styles.divText}>类别{"\n"}</Text>
						<View
							style={styles.foodgroupView}>
							<Text
								style={styles.foodtextText}>饮食</Text>
						</View>
					</View>
					<View
						style={styles.entgroupView}>
						<Text
							style={styles.enttextText}>娱乐</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.housegroupView}>
						<Text
							style={styles.housetextText}>住宿</Text>
					</View>
					<View
						style={styles.actgroupView}>
						<Text
							style={styles.acttextText}>活动</Text>
					</View>
				</View>
				<View
					style={styles.pgroupView}>
					<View
						style={styles.p1View}>
						<Image
							source={require("./../../assets/images/bitmap-copy.png")}
							style={styles.bitmapCopyImage}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 53,
								height: 42,
								marginLeft: 10,
								marginTop: 11,
							}}>
							<Text
								style={styles.tacobellText}>Tacobell</Text>
							<Text
								style={styles.ratesText}>24 点评</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 104,
								height: 39,
								marginRight: 18,
								marginTop: 14,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<View
									style={styles.rectangleCopyView}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 27,
									width: 63,
									top: 6,
									height: 26,
									flexDirection: "row",
									justifyContent: "flex-end",
									alignItems: "center",
								}}>
								<Image
									source={require("./../../assets/images/bitmap.png")}
									style={styles.bitmapImage}/>
								<Text
									style={styles.textText}>$20</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.p2View}>
						<Image
							source={require("./../../assets/images/bitmap-copy.png")}
							style={styles.bitmapCopyTwoImage}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 53,
								height: 42,
								marginLeft: 10,
								marginTop: 11,
							}}>
							<Text
								style={styles.tacobellTwoText}>Tacobell</Text>
							<Text
								style={styles.ratesTwoText}>24 点评</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 104,
								height: 39,
								marginRight: 18,
								marginTop: 14,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<View
									style={styles.rectangleCopyTwoView}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 27,
									width: 63,
									top: 6,
									height: 26,
									flexDirection: "row",
									justifyContent: "flex-end",
									alignItems: "center",
								}}>
								<Image
									source={require("./../../assets/images/bitmap.png")}
									style={styles.bitmapTwoImage}/>
								<Text
									style={styles.textTwoText}>$20</Text>
							</View>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.p3View}>
						<Image
							source={require("./../../assets/images/bitmap-copy.png")}
							style={styles.bitmapCopyThreeImage}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 53,
								height: 42,
								marginLeft: 10,
								marginTop: 11,
							}}>
							<Text
								style={styles.tacobellThreeText}>Tacobell</Text>
							<Text
								style={styles.ratesThreeText}>24 点评</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 104,
								height: 39,
								marginRight: 18,
								marginTop: 14,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<View
									style={styles.rectangleCopyThreeView}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 27,
									width: 63,
									top: 6,
									height: 26,
									flexDirection: "row",
									justifyContent: "flex-end",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("./../../assets/images/bitmap.png")}
									style={styles.bitmapThreeImage}/>
								<Text
									style={styles.textThreeText}>$20</Text>
							</View>
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
	settingView: {
		backgroundColor: "rgb(249, 250, 250)",
		flex: 1,
	},
	rectangleImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 74,
		height: 74,
	},
	useridText: {
		color: "rgb(30, 30, 30)",
		fontSize: 21,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 60,
	},
	collectionsgroupView: {
		backgroundColor: "rgb(230, 233, 255)",
		borderRadius: 6,
		width: 104,
		height: 36,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	collectionstextText: {
		backgroundColor: "transparent",
		color: "rgb(64, 68, 252)",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 35,
	},
	historygroupView: {
		backgroundColor: "rgb(230, 233, 255)",
		borderRadius: 6,
		width: 104,
		height: 36,
		marginLeft: 13,
		marginTop: 1,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	historytextText: {
		backgroundColor: "transparent",
		color: "rgb(64, 68, 252)",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginRight: 23,
	},
	divgroupView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 361,
		height: 69,
		marginTop: 23,
		flexDirection: "row",
		alignItems: "flex-end",
	},
	divText: {
		color: "rgb(30, 30, 30)",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: 0,
	},
	foodgroupView: {
		backgroundColor: "rgb(230, 233, 255)",
		borderRadius: 6,
		position: "absolute",
		left: 1,
		width: 80,
		bottom: 0,
		height: 29,
		justifyContent: "center",
		alignItems: "center",
	},
	foodtextText: {
		color: "rgb(64, 68, 252)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	entgroupView: {
		backgroundColor: "rgb(230, 233, 255)",
		borderRadius: 6,
		width: 80,
		height: 29,
		marginLeft: 15,
		marginBottom: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	enttextText: {
		color: "rgb(64, 68, 252)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	housegroupView: {
		backgroundColor: "rgb(230, 233, 255)",
		borderRadius: 6,
		width: 80,
		height: 29,
		marginRight: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	housetextText: {
		color: "rgb(64, 68, 252)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	actgroupView: {
		backgroundColor: "rgb(230, 233, 255)",
		borderRadius: 6,
		width: 80,
		height: 29,
		justifyContent: "center",
		alignItems: "center",
	},
	acttextText: {
		backgroundColor: "transparent",
		color: "rgb(64, 68, 252)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	pgroupView: {
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 364,
		height: 233,
		marginRight: 21,
		marginTop: 33,
	},
	p1View: {
		backgroundColor: "white",
		borderRadius: 10,
		shadowColor: "rgba(0, 0, 0, 0.05)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 65,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	bitmapCopyImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 45,
		height: 45,
		marginLeft: 10,
	},
	tacobellText: {
		backgroundColor: "transparent",
		color: "rgb(34, 34, 34)",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 25,
		letterSpacing: 0.18,
		position: "absolute",
		left: 0,
		top: 0,
	},
	ratesText: {
		backgroundColor: "transparent",
		color: "rgba(0, 0, 0, 0.5)",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 25,
		letterSpacing: 0.16,
		position: "absolute",
		left: 0,
		top: 17,
	},
	rectangleCopyView: {
		backgroundColor: "transparent",
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "rgb(222, 222, 222)",
		borderStyle: "solid",
		width: 104,
		height: 39,
	},
	bitmapImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-start",
		width: 25,
		height: 23,
		marginRight: 12,
		marginTop: 3,
	},
	textText: {
		color: "rgb(34, 34, 34)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 25,
		letterSpacing: 0.2,
		backgroundColor: "transparent",
	},
	p2View: {
		backgroundColor: "white",
		borderRadius: 10,
		shadowColor: "rgba(0, 0, 0, 0.05)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 65,
		marginTop: 15,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	bitmapCopyTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "center",
		width: 45,
		height: 45,
		marginLeft: 10,
	},
	tacobellTwoText: {
		color: "rgb(34, 34, 34)",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 25,
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: 0,
	},
	ratesTwoText: {
		backgroundColor: "transparent",
		color: "rgba(0, 0, 0, 0.5)",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 25,
		letterSpacing: 0.16,
		position: "absolute",
		left: 0,
		top: 17,
	},
	rectangleCopyTwoView: {
		backgroundColor: "transparent",
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "rgb(222, 222, 222)",
		borderStyle: "solid",
		width: 104,
		height: 39,
	},
	bitmapTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 25,
		height: 23,
		marginRight: 12,
		marginTop: 3,
	},
	textTwoText: {
		color: "rgb(34, 34, 34)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 25,
		letterSpacing: 0.2,
		backgroundColor: "transparent",
	},
	p3View: {
		backgroundColor: "white",
		borderRadius: 10,
		shadowColor: "rgba(0, 0, 0, 0.05)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 65,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	bitmapCopyThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "center",
		width: 45,
		height: 45,
		marginLeft: 10,
	},
	tacobellThreeText: {
		backgroundColor: "transparent",
		color: "rgb(34, 34, 34)",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 25,
		letterSpacing: 0.18,
		position: "absolute",
		left: 0,
		top: 0,
	},
	ratesThreeText: {
		backgroundColor: "transparent",
		color: "rgba(0, 0, 0, 0.5)",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 25,
		letterSpacing: 0.16,
		position: "absolute",
		left: 0,
		top: 17,
	},
	rectangleCopyThreeView: {
		backgroundColor: "transparent",
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "rgb(222, 222, 222)",
		borderStyle: "solid",
		width: 104,
		height: 39,
	},
	bitmapThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 25,
		height: 23,
		marginRight: 12,
		marginTop: 3,
	},
	textThreeText: {
		backgroundColor: "transparent",
		color: "rgb(34, 34, 34)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 25,
		letterSpacing: 0.2,
		alignSelf: "center",
	},
	navbarView: {
		backgroundColor: "transparent",
		height: 107,
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
		backgroundColor: "transparent",
		resizeMode: "center",
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
		backgroundColor: "transparent",
		resizeMode: "center",
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
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 0,
		right: 13,
		top: 7,
		height: 17,
	},
	fill5TwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 1,
		right: 0,
		top: 0,
		height: 10,
	},
	fill7Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
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
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 11,
		marginLeft: 6,
		marginRight: 5,
	},
	fill5Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
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

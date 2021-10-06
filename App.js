//
//  App.js
//  CSSS Design-21.09.25
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import * as Font from "expo-font"
import Home from "./App/Home/Home"
import Messages from "./App/Messages/Messages"
import Post1 from "./App/Post1/Post1"
import Post2 from "./App/Post2/Post2"
import React from "react"
import Setting from "./App/Setting/Setting"
import { AppLoading, DangerZone } from "expo"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fontsReady: false,
        }
    }

    componentDidMount() {
    
        this.initProjectFonts()
    }

    async initProjectFonts() {
    
        await Font.loadAsync({
            "PingFangSC-Regular": require("./assets/fonts/PingFang.ttf"),
            "Helvetica": require("./assets/fonts/Helvetica.ttf"),
        })
        this.setState({
            fontsReady: true,
        })
    }

    render() {
        return(
        <NavigationContainer>
      				<Stack.Navigator initialRouteName="Home">
						<Stack.Screen name="Home" component={Home}/>
        				<Stack.Screen name="Messages" component={Messages} />
        				<Stack.Screen name="Setting" component={Setting} />
      				</Stack.Navigator>
    			</NavigationContainer>
        );
    }
}


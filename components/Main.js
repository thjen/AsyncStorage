import React, {Component} from "react";
import {View, Text, TouchableOpacity, AsyncStorage} from "react-native";

export default class Main extends Component {
    
    onSave = async() => {
        //console.log("save");  
        try {
            await AsyncStorage.setItem("@myKey:key", "Q thJen");
        } catch (error) {
            console.log(error);
        }
    }

    onGet = async() => {
        //console.log("get");
        try {
            var value = await AsyncStorage.getItem("@myKey:key");
            console.log(value);
        } catch (error) {
            console.log(error);
        }
    }
    
    render() {
        return (
            <View 
                style = {{flex: 1, backgroundColor: "black", alignItems: "center", justifyContent: "center"}}>
                <TouchableOpacity
                    style = {{borderWidth: 1, borderColor: "yellow", width: 200, padding: 30}}
                    onPress = {() => {this.onSave()}}>
                    <Text style = {{color: "yellow"}}>Save</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style = {{borderWidth: 1, borderColor: "yellow", width: 200, padding: 30}}
                    onPress = {() => {this.onGet()}}>
                    <Text style = {{color: "yellow"}}>Get</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
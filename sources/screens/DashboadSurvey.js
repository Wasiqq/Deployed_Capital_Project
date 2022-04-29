import { Text, View,TouchableOpacity  } from 'react-native'
import React, { Component} from 'react';
import TextInputs from '../reuseable/SurveyTextInput'
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import COLORS from '../assests/Colors/COLORS';
import Helper from '../utilis/Helper';
const helper = new Helper();
export default class DashboadSurvey extends Component {
    constructor() {
        super();
        this.state = {
            ans1: '',
            ans2: '',
            ans3: '',
            ans4: '',
            ans5: '',
            ans6: '',
            value: '',
            checkbox: false

        }
    }
    render() {
        const windowWidth = Dimensions.get('window').width;
        return (
            <View style={{ flex: 1,}}>
                <View style={{ marginHorizontal: 25 }}>
                    <Text style={{ color: '#1A1A1A', fontSize: 14, fontWeight: "bold", fontFamily: 'Open Sans', }}>Survey</Text>
                    <View style={{ backgroundColor: '#F4F8FF', borderRadius: 6.51125, marginTop: 15, width: 345 }}>
                        <Text style={{ color: 'black', marginLeft: 15,marginTop:10 }} >Push Ups in 1 minute</Text>
                        <View>
                            <TextInputs
                                placeholder={"Write your answer"}
                                value={this.state.ans1}
                                onChangeText={(text) => this.setState({ ans1: text })}
                            />
                        </View>
                        <Text style={{ color: 'black', marginLeft: 15,marginTop:16 }} >Pull Ups</Text>
                        <View>
                            <TextInputs
                                placeholder={"Write your answer"}
                                value={this.state.ans2}
                                onChangeText={(text) => this.setState({ ans2: text })}
                            />
                        </View>
                        <Text style={{ color: 'black', marginLeft: 15,marginTop:16 }} >Squats</Text>
                        <View>
                            <TextInputs
                                placeholder={"Write your answer"}
                                value={this.state.ans3}
                                onChangeText={(text) => this.setState({ ans3: text })}
                            />
                        </View>
                        <Text style={{ color: 'black', marginLeft: 15,marginTop:16 }} >1 mint Run</Text>
                        <View>
                            <TextInputs
                                placeholder={"Write your answer"}
                                value={this.state.ans4}
                                onChangeText={(text) => this.setState({ ans4: text })}
                            />
                        </View>
                        <Text style={{ color: 'black', marginLeft: 15,marginTop:16 }} >Situps in 1 mint</Text>
                        <View>
                            <TextInputs
                                placeholder={"Write your answer"}
                                value={this.state.ans5}
                                onChangeText={(text) => this.setState({ ans5: text })}
                            />
                        </View>
                        <Text style={{ color: 'black', marginLeft: 15,marginTop:16 }} >Sit and Reach</Text>
                        <View>
                            <TextInputs
                                
                                placeholder={"Write your answer"}
                                value={this.state.ans6}
                                
                                onChangeText={(text) => this.setState({ ans6: text })}
                            />
                        </View>
                        

                        <View style={{ justifyContent: 'center', alignItems: 'center', color: "#017EFA", margin: 10 }}>
                            <TouchableOpacity style={{ paddingHorizontal: 30, paddingVertical: 8, backgroundColor: '#017EFA', borderRadius: 6.51125, margin: 10 }}
                            onPress={this._Submithandel}
                            >
                                <Text>
                                    Submit 
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    _Submithandel = async()=>{
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
 
      var curentdate =(year+'-'+'0'+month+'-'+date);
      
      var session= {TodayDate:curentdate,ans1:this.state.ans1,ans2:this.state.ans2,ans3:this.state.ans3,ans4:this.state.ans4,ans5:this.state.ans5,ans6:this.state.ans6}
      await AsyncStorage.setItem('@session',JSON.stringify(session))
      this.setState({ans1:'',ans2:''})
      if(session){
        helper.showToast('Workout Added Successfully ', COLORS.primary)
        return
      }
    else{
        helper.showToast('Workout Not Added Successfully ', COLORS.primary)
        return
    }
      
      // if(userinfo.username===this.state.username && userinfo.password===this.state.password){

      
        //   this.setState({username:'',password:''})
        //   this.props.navigation.navigate("Dashboard");
        // }
        // else{
        //   alert('Username or Password is incorrect');
        // }
      }
}

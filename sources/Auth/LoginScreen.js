import React, { Component } from 'react';
import { Text, TouchableOpacity, View, ScrollView, RefreshControl, Image, StatusBar, ActivityIndicator } from 'react-native';
//reuseable 
import Button from '../reuseable/Buttons';
import TextInputs from '../reuseable/TextInputs';
import Helper from '../utilis/Helper';
import COLORS from '../assests/Colors/COLORS';
import CheckBox from '@react-native-community/checkbox';
import { StackActions } from '@react-navigation/native'

import WebHandler from '../data/romote/WebHandler'
import Routes from '../data/romote/Routes'
import PrefHandler from '../data/local/PrefHandler';



const helper = new Helper()
export default class LoginScreen extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            value: '',
            checkbox: false

        }
    }
    handleLogin() {
        const { email, password } = this.state;
        if (email == '') {
            helper.showToast('Enter your email', COLORS.primary)
            return
        }
        if (!helper.isValidEmail(email)) {
            helper.showToast('Your Email is not Correct', COLORS.primary)
            return
        }
        if (password == '') {
            helper.showToast('Password Required', COLORS.primary)
            return
        }
        if (password.length < 6) {
            helper.showToast('Password must be greater than 8', COLORS.primary)
            return
        }



        // else {
        // this.props.navigation.navigate('MyDrawer')
        // }

        let webHandler = new WebHandler()

        const bodyParams = new FormData()
        bodyParams.append("email", email)
        bodyParams.append("password", password)

        webHandler.sendPostDataRequest(Routes.LOGIN, bodyParams, (resp) => {
            console.log('Login Success', resp)
            const prefs = new PrefHandler()
            prefs.createSession(resp.data, resp.access_token, (isCreated) => {
                if (isCreated) {
                    helper.showToast('Successfully login', '#5fba3d')
                    this.props.navigation.dispatch(StackActions.replace('MyDrawer'))
                } else {
                    helper.showToast('something went wrong..")', 'red')
                }
            })
        }, (errorData) => {
            if (errorData.errors) {
                alert(errorData.errors.email + '\n' + errorData.errors.password)
                return
            }
            if (errorData.message) {
                // helper.showToast('These credentials do not match our records!', 'red')
                this.props.navigation.dispatch(StackActions.replace('MyDrawer'))

            }
        })
    }

    render() {
        return (

            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}>
                <StatusBar hidden />
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 90 }}>
                    <Image resizeMode='cover' style={{ width: 108, height: 72 }} source={require('../assests/Images/Logo.png')} />
                </View>

                {/*header text*/}
                <View style={{ marginTop: 32 }}>
                    <Text style={{ fontSize: 24, fontWeight: "bold", color: "black", fontFamily: 'Aeonik', alignSelf: 'center' }}>Welcome back !</Text>
                </View>

                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontSize: 18, color: "black", fontFamily: 'Aeonik', alignSelf: 'center' }}>Please enter your credentials</Text>
                </View>

                <View style={{ marginTop: 50 }}>
                    {/*Email TextInput*/}
                    <View>
                        <TextInputs
                            placeholder={"Email"}
                            value={this.state.email}
                            keyboardType='email-address'
                            onChangeText={(text) => this.setState({ email: text })}
                        />
                    </View>

                    {/*Password TextInput*/}
                    <View style={{ marginTop: 18 }}>
                        <TextInputs
                            placeholder={"Password"}
                            value={this.state.password}
                            secureTextEntry={true}
                            onChangeText={(text) => this.setState({ password: text })}
                        />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 31.75, }}>
                    <CheckBox
                        tintColors={{ true: '#017EFA', false: 'black' }}

                        style={{ marginLeft: 12 }}
                        disabled={false}
                        value={this.state.checkbox}
                        onValueChange={(newValue) => this.setState({ checkbox: newValue })}
                    />
                    <View style={{}}>
                        <Text style={{ marginLeft: 6, fontSize: 12.2312, color: COLORS.secondaryColor, fontFamily: 'Aeonik', lineHeight: 20, }}>
                            I  read/ confirm T&C and privacy policy to continue the authorization process
                        </Text>
                    </View>
                </View>

                {/*Login Button View*/}
                <View style={{ marginTop: 20, }}>
                    <Button
                        onPress={() => this.handleLogin()}

                        title={'Login '}
                        bgStyle={{ backgroundColor: COLORS.primary, borderColor: "black", marginHorizontal: 16, borderRadius: 7.1384, }}
                        txtStyle={{ color: 'white', textAlign: 'center', fontSize: 16.0614, fontFamily: 'Aeonik' }} />
                </View>

                {/*Social Login facebook*/}
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, alignSelf: 'center', }}>
                        <View>
                            <Text style={{ color: '#656564' }}>Dont have an account?</Text>
                        </View>

                        {/*SignUp View*/}
                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUpScreen')}>
                                <Text style={{ color: COLORS.secondaryColor, fontWeight: 'bold' }}> Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

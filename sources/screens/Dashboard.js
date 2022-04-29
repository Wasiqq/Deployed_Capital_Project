     import { Text, View, TouchableOpacity, Image, ScrollView,StyleSheet, FlatList, Dimensions } from 'react-native'
     import React, { Component } from 'react'
     import AsyncStorage from '@react-native-async-storage/async-storage';
     import { DrawerActions } from '@react-navigation/native';
     import SurveyTextInput from '../reuseable/SurveyTextInput';
     import DashboadSurvey from './DashboadSurvey';
     import COLORS from '../assests/Colors/COLORS';
     import Helper from '../utilis/Helper';
     import DataTable, { COL_TYPES } from 'react-native-datatable-component';
     import { Table, TableWrapper, Row,Rows } from 'react-native-table-component';
     import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
     const helper = new Helper();
     export default class Dashboard extends Component {
     
          componentDidMount() {
               
             }
     constructor(props) {
          super(props);
          this.state = {
               dateSelected: '',
               task1:'',
               task2:'',
               task3:'',
               task4:'',
               task5:'',
               task6:'',

               
          }
     }
     
     render() {
          const state = this.state;
          return (
               <ScrollView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 23, margin: 10 }}>
                         <Image resizeMode='contain' style={{ width: 90, height: 60 }} source={require('../assests/Images/Logo.png')} />
                         <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                         <Image style={{ width: 24, height: 24, top: 14, right: 10 }} source={require('../assests/Images/openDrawer.png')} />
                         </TouchableOpacity>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: 10, marginTop: 40 }}>

                         <View>
                         <Text style={{ color: '#1A1A1A', fontSize: 14, fontWeight: "bold", fontFamily: 'Open Sans', }}>Import Contacts</Text>
                         <View style={{ backgroundColor: '#F4F8FF', borderRadius: 6.10063, width: 160, marginTop: 15 }}>
                              <View style={{ margin: 7, flexDirection: 'row', }}>

                                   <Image style={{ width: 22, height: 22 }} source={require('../assests/Images/importC1.png')} />
                                   <Text style={{ color: 'black', marginLeft: 10 }}>Jonson Roy</Text>

                              </View>
                              <View style={{ margin: 7, flexDirection: 'row', }}>

                                   <Image style={{ width: 22, height: 22 }} source={require('../assests/Images/importC2.png')} />
                                   <Text style={{ color: 'black', marginLeft: 10 }}>David</Text>

                              </View>
                              <View style={{ margin: 7, flexDirection: 'row', }}>

                                   <Image style={{ width: 22, height: 22 }} source={require('../assests/Images/importC3.png')} />
                                   <Text style={{ color: 'black', marginLeft: 10 }}>Jackson Jack</Text>

                              </View>
                              <View style={{ margin: 7, flexDirection: 'row', }}>

                                   <Image style={{ width: 22, height: 22 }} source={require('../assests/Images/importC4.png')} />
                                   <Text style={{ color: 'black', marginLeft: 10 }}>Toni Kross</Text>

                              </View>


                              <View style={{ justifyContent: 'center', alignItems: 'center', color: "#017EFA", margin: 10 }}>
                                   <TouchableOpacity>
                                        <Text style={{ color: "#017EFA", }} >
                                             see more
                                        </Text>
                                   </TouchableOpacity>

                                   <TouchableOpacity style={{ paddingHorizontal: 30, paddingVertical: 5, backgroundColor: '#017EFA', borderRadius: 13.2758, margin: 10 }}>
                                        <Text>
                                             Import
                                        </Text>
                                   </TouchableOpacity>
                              </View>
                         </View>



                         </View>


                         <View>
                         <Text style={{ color: '#1A1A1A', fontSize: 14, fontWeight: "bold", fontFamily: 'Open Sans', }}>Friends</Text>
                         <View style={{ backgroundColor: '#F4F8FF', borderRadius: 6.10063, width: 160, height: 230, marginTop: 15 }}>
                              <View style={{ margin: 7, flexDirection: 'row', }}>

                                   <Image style={{ width: 22, height: 22 }} source={require('../assests/Images/importC1.png')} />
                                   <Text style={{ color: 'black', marginLeft: 10 }}>Jonson Roy</Text>

                              </View>
                              <View style={{ margin: 7, flexDirection: 'row', }}>

                                   <Image style={{ width: 22, height: 22 }} source={require('../assests/Images/importC2.png')} />
                                   <Text style={{ color: 'black', marginLeft: 10 }}>David</Text>

                              </View>
                              <View style={{ margin: 7, flexDirection: 'row', }}>

                                   <Image style={{ width: 22, height: 22 }} source={require('../assests/Images/importC3.png')} />
                                   <Text style={{ color: 'black', marginLeft: 10 }}>Jackson Jack</Text>

                              </View>
                              <View style={{ margin: 7, flexDirection: 'row', }}>

                                   <Image style={{ width: 22, height: 22 }} source={require('../assests/Images/importC4.png')} />
                                   <Text style={{ color: 'black', marginLeft: 10 }}>Toni Kross</Text>

                              </View>


                              <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', color: "#017EFA", marginTop: 12 }}>
                                   <Text style={{ color: "#017EFA", }} >
                                        see list
                                   </Text>
                              </TouchableOpacity>
                         </View>



                         </View>

                    </View>

                    <View>
                         <DashboadSurvey />
                    </View>
                    
                              <View style={{ flex:1,marginHorizontal:20,marginVertical:15 , }}>
                              <Text style={{ color: '#1A1A1A', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', margin: 10 }}>Calendar</Text>
                              <Calendar
                              style={{borderRadius:6.51125,marginHorizontal:5}}
                              
      
  // Initially visible month. Default = now
  current={'2022-4-28'}
  
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2010-5-10'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2030-5-30'}
  // Handler which gets executed on day press. Default = undefined
  // onDayPress={day => {
  //   console.log('selected day', day);
  // }}
  markedDates={this.state.dateSelected}
  
  onDayPress={(day) => {
    this.setState({
    dateSelected:day.dateString
    },() => {
    console.log(this.state.dateSelected)
    this._Check();
    })
    }}
    
  
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={day => {
    console.log('selected day', day);
  }}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'MMMM'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={month => {
    console.log('month changed', month);
  }}
  // Hide month navigation arrows. Default = false
  // hideArrows={true}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  // renderArrow={direction => <Arrow />}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  // disableMonthChange={true}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
  firstDay={1}
  // Hide day names. Default = false
  // hideDayNames={true}
  // Show week numbers to the left. Default = false
  showWeekNumbers={true}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={subtractMonth => subtractMonth()}
  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
  // Disable left arrow. Default = false
  // disableArrowLeft={true}
  // Disable right arrow. Default = false
  // disableArrowRight={true}
  // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
  disableAllTouchEventsForDisabledDays={false}
  // Replace default month and year title with custom one. the function receive a date as parameter
  
  // Enable the option to swipe between months. Default = false
  enableSwipeMonths={true}
  
  theme={{ 
    monthTextColor:'black',
    calendarBackground: '#F4F8FF',
    selectedDayBackgroundColor:'#0A194E',
    


   }}

/>
                              </View>

                              <View style={{marginHorizontal:5}}>
                              <Text style={{ color: '#1A1A1A', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', marginHorizontal: 27,marginVertical:10 }}>My Performance</Text>
                            <View style={{flex:1,marginHorizontal:22,backgroundColor:'#F4F8FF',height:40,borderRadius:6.51125,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:5}}>
                            <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              color:'black',
              
       }}>
          Push Ups
          </Text>
                              <Text
            style={{
              
              fontSize:14,
              textAlign:'right',
              color:'black',
              
            }}>
            {this.state.task1}
          </Text>
                            </View>
                            <View style={{flex:1,marginVertical:5,marginHorizontal:22,backgroundColor:'#F4F8FF',height:40,borderRadius:6.51125,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:5}}>
                            <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              color:'black',
              
       }}>
          Pull Ups
          </Text>
                              <Text
            style={{
              
              fontSize:14,
              textAlign:'right',
              color:'black',
              
            }}>
            {this.state.task2}
          </Text>
                            </View>
                            <View style={{flex:1,marginVertical:1,marginHorizontal:22,backgroundColor:'#F4F8FF',height:40,borderRadius:6.51125,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:5}}>
                            <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              color:'black',
              
       }}>
          Squats
          </Text>
                              <Text
            style={{
              
              fontSize:14,
              textAlign:'right',
              color:'black',
              
            }}>
            {this.state.task3}
          </Text>
                            </View>
                             
                            <View style={{flex:1,marginVertical:5,marginHorizontal:22,backgroundColor:'#F4F8FF',height:40,borderRadius:6.51125,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:5}}>
                            <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              color:'black',
              
       }}>
          1 Mint Run
          </Text>
                              <Text
            style={{
              
              fontSize:14,
              textAlign:'right',
              color:'black',
              
            }}>
            {this.state.task4}
          </Text>
                            </View>
                             
                            <View style={{flex:1,marginVertical:1,marginHorizontal:22,backgroundColor:'#F4F8FF',height:40,borderRadius:6.51125,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:5}}>
                            <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              color:'black',
              
       }}>
          Sit Ups in 1 Mint
          </Text>
                              <Text
            style={{
              
              fontSize:14,
              textAlign:'right',
              color:'black',
              
            }}>
            {this.state.task5}
          </Text>
                            </View>
                             
                            <View style={{flex:1,marginVertical:5,marginHorizontal:22,backgroundColor:'#F4F8FF',height:40,borderRadius:6.51125,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:5}}>
                            <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              color:'black',
              
       }}>
          Sit and Reach
          </Text>
                              <Text
            style={{
              
              fontSize:14,
              textAlign:'right',
              color:'black',
              
            }}>
            {this.state.task6}
          </Text>
                            </View>
                             </View>
     
                             



               </ScrollView>
          )
     }
     _Check = async () => {
          
         
            const session = await AsyncStorage.getItem('@session');
            if (session) {
              var ses = JSON.parse(session);
              

              if(this.state.dateSelected==ses.TodayDate){
            this.setState({task1:ses.ans1,task2:ses.ans2,task3:ses.ans3,task4:ses.ans4,task5:ses.ans5,task6:ses.ans6,});
              }
              else{
               helper.showToast('Kindly Add Workout For This Date '+this.state.dateSelected, COLORS.primary)
               return
              }
            } else {
              helper.showToast('Not any Workout Found ', COLORS.primary)
              return
            }
          
        }
     }
     
     const styles = StyleSheet.create({
     container: { height:500,width:345,  paddingTop: 10, paddingHorizontal:10, backgroundColor: '#F4F8FF' ,borderRadius: 6.10063},
     header: { height: 50, backgroundColor: '#F4F8FF' },
     text: { textAlign: 'center', fontWeight: '100',color:'black' },
     dataWrapper: { marginTop: -1 },
     row: { height: 70, backgroundColor: 'white' }
     });
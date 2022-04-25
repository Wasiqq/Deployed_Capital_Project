     import { Text, View, TouchableOpacity, Image, ScrollView,StyleSheet, FlatList, Dimensions } from 'react-native'
     import React, { Component } from 'react'
     
     import { DrawerActions } from '@react-navigation/native';
     import SurveyTextInput from '../reuseable/SurveyTextInput';
     import DashboadSurvey from './DashboadSurvey';
     import DataTable, { COL_TYPES } from 'react-native-datatable-component';
     import { Table, TableWrapper, Row,Rows } from 'react-native-table-component';
     import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
     export default class Dashboard extends Component {
     
     data = {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
               {
                    data: [20, 45, 28, 80, 99, 43]
               }
          ]
     };
     constructor(props) {
          super(props);
          this.state = {
               dateSelected: '',
               tableHead: [
                    'Company Name',
                    "Market Cap",
                    "%YTDGains",
                    "StockPrice",
                    "WeekpriceRange",
                    "My Investment",
                    "Total Investment",
                    
               ],
               widthArr: [130, 94, 90, 100, 120, 80, 80],
               
               tableData: [
               [
                    "3M (MMM)",
                    "$102.37 billion",
                    "1.63%",
                    "177.64",
                    "163.38\n$208.95",
                    " - ",
                    "700",],
               [
                    "Abbott Labs (ABT)",
                    "$249.33 billion",
                    "28.78%",
                    "$141.00",
                    "$105.36 \n$142.60",
                    " - ",
                    " - ",],
               [
                    "AbbVie (ABBV)",
                    "$240.31 billion",
                    "26.86%",
                    "$135.93",
                    "$101.81\n $136.83",
                    " - ",
                    " - ",],
               [
                    "ABIOMED (ABMD)",
                    "$16.47 billion",
                    "11.68%",
                    "$362.06",
                    "$261.27 \n $387.40",
                    " - ",
                    " - ",],
               [
                    "Accenture (ACN)",
                    "$261.75 billion",
                    "58.43%",
                    "$413.83",
                    "$241.73 \n $417.37",
                    " - ",
                    " - ",],

          ]
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
                              
      
  // Initially visible month. Default = now
  current={'2012-03-01'}
  
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2010-05-10'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2022-05-30'}
  // Handler which gets executed on day press. Default = undefined
  // onDayPress={day => {
  //   console.log('selected day', day);
  // }}
  markedDates={this.state.dateSelected}
  
  onDayPress={(day) => {
    this.setState({
    dateSelected:{[day.dateString]:{selected: true, selectedColor: 'black'}}
    },() => {
    console.log(this.state.dateSelected)
    })
    }}
    
  
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={day => {
    console.log('selected day', day);
  }}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MM'}
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


   }}

/>
                              </View>

                    




               </ScrollView>
          )
     }
     }
     const styles = StyleSheet.create({
     container: { height:500,width:345,  paddingTop: 10, paddingHorizontal:10, backgroundColor: '#F4F8FF' ,borderRadius: 6.10063},
     header: { height: 50, backgroundColor: '#F4F8FF' },
     text: { textAlign: 'center', fontWeight: '100',color:'black' },
     dataWrapper: { marginTop: -1 },
     row: { height: 70, backgroundColor: 'white' }
     });
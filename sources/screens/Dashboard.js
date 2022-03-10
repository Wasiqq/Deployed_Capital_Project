     import { Text, View, TouchableOpacity, Image, ScrollView,StyleSheet, FlatList, Dimensions } from 'react-native'
     import React, { Component } from 'react'
     import { DrawerActions } from '@react-navigation/native';
     import SurveyTextInput from '../reuseable/SurveyTextInput';
     import DashboadSurvey from './DashboadSurvey';
     import stocks from '../assests/StocksArray/Stocks'
     import DataTable, { COL_TYPES } from 'react-native-datatable-component';
     import { Table, TableWrapper, Row,Rows } from 'react-native-table-component';
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
                    <View style={{marginHorizontal:22  }}>
                    <Text style={{ color: '#1A1A1A', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', margin: 10 }}>Stocks</Text>
                    <View style={styles.container}>
               <ScrollView horizontal={true}>
                    <View>
                         
                    <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9',borderRadius: 6.10063,}}>
                         <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text} />
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                         <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9',borderRadius: 6.10063,}}>
                         { 
                         <Rows data={state.tableData} widthArr={state.widthArr}  style={styles.row} textStyle={styles.text} />
                         }
                         </Table>
                    </ScrollView>
                    </View>
               </ScrollView>
               <View style={{ justifyContent: 'center', alignItems: 'center', color: "#017EFA", margin: 10 }}>
                              <TouchableOpacity style={{ paddingHorizontal: 30, paddingVertical: 8, backgroundColor: '#017EFA', borderRadius: 6.51125, margin: 10 }}
                              onPress={() => this.props.navigation.navigate('Table')}
                              >
                                   <Text>
                                        Stock List 
                                   </Text>
                              </TouchableOpacity>
                         </View>
               </View>
                    </View>
                              <View style={{ flex:1,marginHorizontal:20,marginVertical:15 , }}>
                              <Text style={{ color: '#1A1A1A', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', margin: 10 }}>A Total Comissions</Text>
                              <View style={{backgroundColor:'#F4F8FF',borderRadius: 6.51125, }}>
                              
                              <View style={{ flexDirection:'row',height:159,width:340,backgroundColor:'#F4F8FF' ,borderRadius: 6.51125,justifyContent:'space-between',}}>
                              <View style={{ flexDirection:'column-reverse',justifyContent:'space-between', marginHorizontal:10,marginVertical:22}}>
                                   <Text style={{ fontFamily:'Open Sans',fontSize:12 ,fontWeight:'400',color:'#373737'}}>1k</Text>
                                   <Text style={{ fontFamily:'Open Sans',fontSize:12 ,fontWeight:'400',color:'#373737'}}></Text>
                                   <Text style={{ fontFamily:'Open Sans',fontSize:12 ,fontWeight:'400',color:'#373737'}}>2k</Text>
                                   <Text style={{ fontFamily:'Open Sans',fontSize:12 ,fontWeight:'400',color:'#373737'}}></Text>
                                   <Text style={{ fontFamily:'Open Sans',fontSize:12 ,fontWeight:'400',color:'#373737'}}>3.58k</Text>
                                   <Text style={{ fontFamily:'Open Sans',fontSize:12 ,fontWeight:'400',color:'#373737'}}></Text>
                                   <Text style={{ fontFamily:'Open Sans',fontSize:12 ,fontWeight:'400',color:'#373737'}}>4k</Text>
                              </View>
                              <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                              <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Jan</Text>
                              <View style={{ backgroundColor:'#51CBFF',height:40,width:17,marginTop:95 }}></View>
                              </View>
                              <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                              <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Feb</Text>
                              <View style={{ backgroundColor:'#51CBFF',height:65,width:17,marginTop:70 }}></View>
                              </View>
                              <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                              <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Mar</Text>
                              <View style={{ backgroundColor:'#51CBFF',height:48,width:17,marginTop:87 }}></View>
                              </View>
                              <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                              <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Apr</Text>
                              <View style={{ backgroundColor:'#51CBFF',height:70,width:17,marginTop:65 }}></View>
                              </View>
                              <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                              <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>May</Text>
                              <View style={{ backgroundColor:'#51CBFF',height:20,width:17,marginTop:115 }}></View>
                              </View>
                              <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                              <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Jun</Text>
                              <View style={{ backgroundColor:'#51CBFF',height:64,width:17,marginTop:71 }}></View>
                              </View>
                              <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                              <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Jul</Text>
                              <View style={{ backgroundColor:'#51CBFF',height:51,width:17,marginTop:83 }}></View>
                              </View> 
                              <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                              <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Aug</Text>
                              <View style={{ backgroundColor:'#51CBFF',height:37,width:17,marginTop:97 }}></View>
                              </View>
                              <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                              <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Sep</Text>
                              <View style={{ backgroundColor:'#51CBFF',height:20,width:17,marginTop:115 }}></View>
                              </View>
                              <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                              <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Oct</Text>
                              <View style={{ backgroundColor:'#51CBFF',height:38,width:17,marginTop:97 }}></View>
                              </View>
                              <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                              <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Nov</Text>
                              <View style={{ backgroundColor:'#51CBFF',height:60,width:17,marginTop:75 }}></View>
                              </View>
                              <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                              <Text style={{ fontFamily:'Open Sans',fontSize:10 ,fontWeight:'400',color:'#373737'}}>Dec</Text>
                              <View style={{ backgroundColor:'#51CBFF',height:73,width:17,marginTop:61 }}></View>
                              </View>
                              <View style={{ flexDirection:'column-reverse',justifyContent:'space-between'}}>
                              
                              <View style={{ backgroundColor:'#F4F8FF',height:73,width:8,marginTop:61 }}></View>
                              </View>



                              </View>
                              <View style={{ alignItems:'center',backgroundColor:'#F4F8FF' }}>
                              <View style={{ height:1,backgroundColor: '#CBCBCB',width:320,marginHorizontal:15 ,marginVertical:6}}></View>
                              
                              <Text style={{ fontFamily:'Open Sans',fontSize:14 ,fontWeight:'600',color:'#9E9D9D'}}>Total Comissions</Text>
                              <Text style={{ fontFamily:'Open Sans',fontSize:18 ,fontWeight:'700',color:'#1A1A1A'}}>$3,000</Text>
                              </View>
                              </View>
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
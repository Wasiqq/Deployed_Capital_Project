import React, { Component } from 'react';
import { StyleSheet, View, ScrollView ,Dimensions } from 'react-native';
import { Table, TableWrapper, Row,Rows } from 'react-native-table-component';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class TableData extends Component {
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
       [
            "Activision Blizzard (ATVI)",
           "$52.57 billion",
            "\n27.31%",
            "$67.49",
            "$56.40\n$104.53",
            " - ",
            " - ",],
       [
            "Adobe (ADBE)",
           "$271.46 billion",
            "14.08%",
            "$570.53",
            "$420.78\n$699.54",
            " - ",
            " - ",],
    ]
    }
  }

  render() {
    const state = this.state;
    

    return (
            <View style={styles.container}>
              <ScrollView horizontal={true}>
                <View> 
                  <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9',borderRadius: 6.10063,}}>
                    <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text} />
                  </Table>
                  <ScrollView style={styles.dataWrapper}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9',borderRadius: 6.10063}}>
                      {
                        
                        <Rows data={state.tableData} widthArr={state.widthArr}  style={styles.row} textStyle={styles.text} />
                      }
                    </Table>
                  </ScrollView>
                </View>
              </ScrollView>
            </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { height:windowHeight,width:windowWidth, padding: 16, paddingTop: 30, backgroundColor: '#F4F8FF' ,borderRadius: 6.10063},
  header: { height: 50, backgroundColor: '#F4F8FF' },
  text: { textAlign: 'center', fontWeight: '100',color:'black'  },
  dataWrapper: { marginTop: -1 },
  row: { height: 70, backgroundColor: 'white' }
});
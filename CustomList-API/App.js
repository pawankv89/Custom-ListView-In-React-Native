/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ActivityIndicator, FlatList, Platform, StyleSheet, Text, View} from 'react-native';
import CustomListview from './components/CustomListview';

type Props = {};
export default class App extends Component<Props>{

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      dataSource: []
    }
  }
  
  componentDidMount(){
    return fetch('https://randomuser.me/api/?&results=20')
      .then((response) => response.json())
      .then((responseJson) => {
  
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){
  
        });
      })
      .catch((error) =>{
        //console.error(error);
        this.setState({ error, loading: false, dataSource: [] }); 
      });
  }
  

  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (

      /* FlatList Demo */
      <View style={styles.container}>
      <CustomListview
        itemList={this.state.dataSource}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    marginTop:45,
    marginBottom:20
  },
});



# Custom ListView In React Native

=========

## Custom ListView with Hard Coded Json and Fetch Result by API In React Native.

------------
Added Some screens here.

![](https://github.com/pawankv89/Custom-ListView-In-React-Native/blob/master/images/screen_1.png)
![](https://github.com/pawankv89/Custom-ListView-In-React-Native/blob/master/images/screen_2.png)


## Usage
------------

#### In this example, we will showing custom ListView with API and Json.

#### Create Row Cell [ CustomRow ] File


```javascript

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
container: {
flex: 1,
flexDirection: 'row',
padding: 10,
marginLeft:16,
marginRight:16,
marginTop: 8,
marginBottom: 8,
borderRadius: 5,
backgroundColor: '#FFF',
elevation: 2,
},
title: {
fontSize: 16,
color: '#000',
},
container_text: {
flex: 1,
flexDirection: 'column',
marginLeft: 12,
justifyContent: 'center',
},
description: {
fontSize: 11,
fontStyle: 'italic',
},
photo: {
height: 50,
width: 50,
},
});

const CustomRow = ({ title, description, image_url }) => (
<View style={styles.container}>
<Image source={{ uri: image_url }} style={styles.photo} />
<View style={styles.container_text}>
<Text style={styles.title}>
{title}
</Text>
<Text style={styles.description}>
{description}
</Text>
</View>

</View>
);

export default CustomRow;

```

####  Create Row List [ CustomListview.js ] File

```javascript

import React from 'react';
import { View, ListView, FlatList, StyleSheet, Text } from 'react-native';
import CustomRow from './CustomRow';

const styles = StyleSheet.create({
container: {
flex: 1,
},
});


const CustomListview = ({ itemList }) => (

<View style={styles.container}>
<FlatList
data={itemList.results}
renderItem={({ item }) => <CustomRow
title={<Text>{item.name.title} {item.name.first} {item.name.last}</Text>}
description={item.email}
image_url={item.picture.large}
/>}
/>

</View>
);

export default CustomListview;

```

#### Load Row List [ App.js ] File using API

```javascript

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


```

#### Load Row List [ App.js ] File with Hard Coded Json 

```javascript

/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React, {Component} from 'react';
import {FlatList, Platform, StyleSheet, Text, View} from 'react-native';
import CustomListview from './components/CustomListview';

export default class App extends Component {

/* Return object for populate the list */
getData() {

return {
"results": [
{
"gender": "male",
"name": {
"title": "mr",
"first": "filippo",
"last": "jost"
},
"location": {
"street": "birkenweg 103",
"city": "cottbus/chosebuz",
"state": "saarland",
"postcode": 37797,
"coordinates": {
"latitude": "-39.5433",
"longitude": "-164.8614"
},
"timezone": {
"offset": "-1:00",
"description": "Azores, Cape Verde Islands"
}
},
"email": "filippo.jost@example.com",
"login": {
"uuid": "466122b4-cd5b-4b11-856d-d6e5e6c45937",
"username": "greenswan831",
"password": "france",
"salt": "Y2wRRfga",
"md5": "02910945143c81e5cdde59a3e60e5750",
"sha1": "cccac68b811ef79c49bf4775a99df9a0e46004c3",
"sha256": "64e82ae648a82d1c32bfc7870bb03df8149b9bad821376da205fd72ba8e7e3ef"
},
"dob": {
"date": "1965-09-19T01:44:05Z",
"age": 53
},
"registered": {
"date": "2017-06-04T13:11:50Z",
"age": 2
},
"phone": "0947-2351451",
"cell": "0179-8179428",
"id": {
"name": "",
"value": null
},
"picture": {
"large": "https://randomuser.me/api/portraits/men/34.jpg",
"medium": "https://randomuser.me/api/portraits/med/men/34.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/men/34.jpg"
},
"nat": "DE"
}
],
"info": {
"seed": "327af306044dd127",
"results": 20,
"page": 1,
"version": "1.2"
}
}
}

render() {
return (

/* FlatList Demo */
<View style={styles.container}>
<CustomListview
itemList={this.getData()}
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

```

`
Terminal Commands 
`
Open Project
`
cd ProjectName
`

To Run the React Native App

Open the terminal again and jump into your project using.

`cd ProjectName
`
To run the project on an Android Virtual Device or on real debugging device
`
react-native run-android
`
or on the iOS Simulator by running

`react-native run-ios (macOS only).
`

### Video Demo
[![Video Demo](https://img.youtube.com/vi/RO71dU-IHpc/0.jpg)](https://youtu.be/RO71dU-IHpc)


## License

This code is distributed under the terms and conditions of the [MIT license](LICENSE).

## Change-log

A brief summary of each this release can be found in the [CHANGELOG](CHANGELOG.mdown). 

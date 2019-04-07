
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

//Navigation Imports
import { createStackNavigator, createAppContainer } from 'react-navigation';
//Details Screen View Settings
class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Details Screen'
  }
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherMsg = navigation.getParam('otherMsg', 'This is the default Msg');

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>Item ID: {JSON.stringify(itemId)}</Text>
        <Text>Other Message: {JSON.stringify(otherMsg)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />

      </View>
    );
  }
}
//Home Screen View Settings
class HomeScreen extends Component {
  staticNavigationOptions = {
    title: 'Home Screen'
  }
  render() {

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {
            itemId: 12,
            otherMsg: "Sent to Detail"
          })}
        />

      </View>

    );
  }
}

//Creation of the Stack Navigator
const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
},
  {
    initialRouteName: "Home"
  });

//Exporting while creating the App Container
// export default createAppContainer(AppNavigator);
const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  render() {
    return <AppContainer />
  }
}
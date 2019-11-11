import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';

class TabNavigasi extends Component {
  state = {location: 'Home'};
  render() {
    if (this.state.location === 'Home') {
      return (
        <View>
          <Text>Ini Home Page</Text>
          <Button
            title="Profile"
            onPress={() => this.setState({location: 'Profile'})}
          />
          <Button title="Post Photo" />
        </View>
      );
    } else if (this.state.location === 'Profile') {
      return (
        <View>
          <Text>Ini Profile Page</Text>
          <Button title="Home" />
          <Button title="Post Photo" />
        </View>
      );
    } else if (this.state.location === 'PostPhoto') {
      return (
        <View>
          <Text>Ini Post Photo Page</Text>
          <Button title="Home" />
          <Button title="Profile" />
        </View>
      );
    }
  }
}

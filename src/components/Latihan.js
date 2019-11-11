import React, {Component} from 'react';
import {View, Platform, Image} from 'react-native';
import {Icon, Header} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
} from 'native-base';

class Latihan extends Component {
  render() {
    return (
      <View>
        <Header
          placement="left"
          leftComponent={{icon: 'menu', color: 'black'}}
          centerComponent={{text: 'MY TITLE', style: {color: 'black'}}}
          rightComponent={{icon: 'home', color: 'black'}}
          containerStyle={{
            backgroundColor: '#fff',
            justifyContent: 'space-around',
            marginTop: Platform.OS === 'ios' ? 0 : -25,
          }}
        />
        <Icon
          reverse
          name="md-american-football"
          type="ionicon"
          color="#517fa4"
          size={50}
        />
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://6.viki.io/image/a11230e2d98d4a73825a4c10c8c6feb0.jpg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1',
                }}
              />
              <Body>
                <Text>NativeBase</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri: 'http://kissfmmedan.com/wp-content/uploads/2019/02/IU.png',
              }}
              style={{height: 300, width: null, flex: 1}}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon type="ionicon" name="md-thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon type="ionicon" name="md-chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
      </View>
    );
  }
}

export default Latihan;

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Icon, Button} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {connect} from 'react-redux';
import {StackActions, NavigationActions} from 'react-navigation';
import {onUserRegister} from '../actions';

class RegisterForm extends Component {
  state = {
    passHidden: true,
    conPassHidden: true,
    email: '',
    username: '',
    password: '',
    conPassword: '',
  };

  componentDidUpdate() {
    if (
      this.props.user &&
      this.state.email !== '' &&
      this.state.username !== '' &&
      this.state.password !== '' &&
      this.state.conPassword !== ''
    ) {
      this.setState({email: '', username: '', password: '', conPassword: ''});
      // this.props.navigation.navigate('DrawerMain');
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'DrawerMain'})],
      });
      this.props.navigation.dispatch(resetAction);
    }
  }

  onBtnRegisterPress = () => {
    if (!this.props.loading) {
      this.props.onUserRegister({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        conPassword: this.state.conPassword,
      });
    }
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <Animatable.Text animation={'fadeInDown'} duration={2000}>
          <Text h3>Welcome</Text>
        </Animatable.Text>
        <View style={styles.inputStyle}>
          <Input
            placeholder="Email"
            leftIcon={<Icon name="email" size={24} color="black" />}
            value={this.state.email}
            onChangeText={text => this.setState({email: text})}
          />
          <Input
            placeholder="Username"
            leftIcon={<Icon name="account-box" size={24} color="black" />}
            value={this.state.username}
            onChangeText={text => this.setState({username: text})}
          />
          <Input
            placeholder="Password"
            leftIcon={<Icon name="lock" size={24} color="black" />}
            rightIcon={
              <Icon
                name={this.state.passHidden ? 'visibility-off' : 'visibility'}
                size={24}
                color={this.state.passHidden ? '#bfc3c9' : 'black'}
                onPress={() =>
                  this.setState({passHidden: !this.state.passHidden})
                }
              />
            }
            secureTextEntry={this.state.passHidden}
            value={this.state.password}
            onChangeText={text => this.setState({password: text})}
          />
          <Input
            placeholder="Confirm Password"
            leftIcon={<Icon name="lock" size={24} color="black" />}
            rightIcon={
              <Icon
                name={
                  this.state.conPassHidden ? 'visibility-off' : 'visibility'
                }
                size={24}
                color={this.state.conPassHidden ? '#bfc3c9' : 'black'}
                onPress={() =>
                  this.setState({conPassHidden: !this.state.conPassHidden})
                }
              />
            }
            secureTextEntry={this.state.conPassHidden}
            value={this.state.conPassword}
            onChangeText={text => this.setState({conPassword: text})}
          />
        </View>
        <Text style={{color: 'red'}}>{this.props.error}</Text>
        <Button
          title="Register"
          containerStyle={{width: '95%', marginBottom: 10}}
          buttonStyle={{backgroundColor: 'black'}}
          onPress={this.onBtnRegisterPress}
          loading={this.props.loading}
        />
        <Button
          title="Back to Login"
          containerStyle={{width: '95%'}}
          buttonStyle={{borderColor: 'black', borderWidth: 1}}
          titleStyle={{color: 'black'}}
          type="outline"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  inputStyle: {
    marginTop: 50,
    marginBottom: 100,
    width: '100%',
  },
});

const mapStateToProps = ({auth}) => {
  return {
    error: auth.errorRegister,
    loading: auth.loadingRegister,
    user: auth.user,
  };
};

export default connect(
  mapStateToProps,
  {onUserRegister},
)(RegisterForm);

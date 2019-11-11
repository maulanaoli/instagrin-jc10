import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import OneSignal from 'react-native-onesignal';
import AppInit from './AppInit';
import reducers from './src/reducers';

class App extends Component {
  constructor(properties) {
    super(properties);
    OneSignal.init("263fd06c-ed2f-4a78-8a67-7e599b037456");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }
  
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
        <AppInit />
      </Provider>
    )
  }
}

export default App;
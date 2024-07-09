import React from 'react';
import {SafeAreaView, TextInput} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextInput
        secureTextEntry
        style={{
          fontSize: 60,
          fontFamily: 'Montserrat-Bold',
          width: 200,
          backgroundColor: 'blue',
        }}
      />
    </SafeAreaView>
  );
}

export default App;

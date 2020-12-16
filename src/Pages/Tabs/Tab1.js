import * as React from 'react';
import { Text, View, TextInput } from 'react-native';



function Tab1() {

    const [value, onChangeText] = React.useState('');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tab1!</Text>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%' }}
        onChangeText={text => onChangeText(text)}
        value={value}
        />
    </View>
  );
}

export default Tab1;
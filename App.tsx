import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const countVowels = (name) => {
  return name.replace(/[^aeiouAEIOU]/g, '').length;
};

const countConsonants = (name) => {
  return name.replace(/[aeiouAEIOU]/g, '').length;
};

const calculateNameLength = (name) => {
  return name.length;
};

const App = () => {
  const [userName, setUserName] = useState('');
  const [numVowels, setNumVowels] = useState(0);
  const [numConsonants, setNumConsonants] = useState(0);
  const [nameLength, setNameLength] = useState(0);

  const handleCalculate = () => {
    const name = userName;
    const vowels = countVowels(name);
    const consonants = countConsonants(name);
    const length = calculateNameLength(name);

    setNumVowels(vowels);
    setNumConsonants(consonants);
    setNameLength(length);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Enter your name:</Text>
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 10,
        }}
        onChangeText={text => setUserName(text)}
        value={userName}
      />
      <Button
        title="Calculate"
        onPress={handleCalculate}
      />
      <Text style={{ marginTop: 20 }}>
        Vowels: {numVowels}
      </Text>
      <Text>
        Consonants: {numConsonants}
      </Text>
      <Text>
        Name Length: {nameLength}
      </Text>
    </View>
  );
};

export default App;


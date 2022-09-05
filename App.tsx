/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useCallback, type PropsWithChildren} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const handleOpenImagePicker = useCallback(async () => {
    const resultImage = await launchImageLibrary({
      mediaType: 'photo',
    });

    console.log(resultImage);
  }, []);

  const handleOpenCamera = useCallback(async () => {
    const result = await launchCamera({
      mediaType: 'photo',
    });
  }, []);

  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.button} onPress={handleOpenImagePicker}>
        <Text style={styles.buttonLabel}>Pick Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {marginTop: 20}]}
        onPress={handleOpenCamera}>
        <Text style={styles.buttonLabel}>Open camera</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  button: {
    padding: 15,
    backgroundColor: 'orange',
    borderRadius: 5,
  },
  buttonLabel: {
    fontSize: 20,
  },
});

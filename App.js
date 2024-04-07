import React from 'react';
import { StyleSheet } from "react-native";
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { GluestackUIProvider } from "@gluestack-ui/themed";
import Navigation from './src/navigation';
import { config } from "@gluestack-ui/config";

const App=()=> {
  return(
    <SafeAreaProvider style={styles.container}>
      <GluestackUIProvider  config={config}>

        <Navigation/>

      </GluestackUIProvider>
    </SafeAreaProvider>
  ); 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default App;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarIOSItem } from 'react-native';

import { Divider, VStack } from "@gluestack-ui/themed";

import { Text, StatusBar, Pressable, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from "../components/Header"
import AlbumScreen from '../screen/AlbumScreen';
import DetailScreen from '../screen/DetailScreen';
import SettingsScreen from '../screen/SettingsScreen';
import MyTheme from '../Theme/index';


const Stack = createNativeStackNavigator();
const Tab =createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyTab/>
    </NavigationContainer>
  );
}
const MyTab=()=>{
  return(
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle: { height: 60 }, // 设置选项卡栏的行高为 60
        tabBarLabelStyle: { marginBottom: 5 }, // 调整标签文本的底部间距
        tabBarIconStyle: { marginBottom: 2 } // 调整图标的底部间距
      }}
    >
      <Tab.Screen
        name="HomeStack" 
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          headerShown: false,
          title: "Wishlist",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 50
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="My Books"
        component={MyBooks}
        options={{
          headerShown: false,
          title: "My Books",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 50
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={30} />
          ),
        }}
      />
    
    </Tab.Navigator>
  );
}
const HomeStack=()=>{
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={AlbumScreen}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
    
  );
}
const Wishlist = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <Header />
        
        <Text style={{ textAlign: "center", lineHeight: 100 }}>
          Wishlist
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}
const MyBooks = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <Header />
        
        <Text style={{ textAlign: "center", lineHeight: 100 }}>
          MyBooks
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Navigation;
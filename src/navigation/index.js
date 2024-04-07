import React from 'react';
import { NavigationContainer ,useTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { Divider, VStack } from "@gluestack-ui/themed";

import { Text, StatusBar, Pressable, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from "../components/Header"
import AlbumScreen from '../screen/AlbumScreen';
import DetailScreen from '../screen/DetailScreen';
import AccountScreen from '../screen/AccountScreen';
import SettingsScreen from '../screen/SettingsScreen';
import MyTheme from '../Theme/index';


const Stack = createNativeStackNavigator();
const Tab =createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer/>
    </NavigationContainer>
  );
}
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}
      contentContainerStyle={{ paddingTop: 0 }}
    >
      <VStack pl={20} pt={130}>
        <MaterialCommunityIcons name="account-circle" size={50} />
        <Text style={{ fontFamily: "Roboto", fontSize: 24, fontWeight: "bold" }}>May</Text>
      </VStack>
      <Divider my="$2" />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const MyDrawer = () => {
  const { colors } = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        // drawerActiveBackgroundColor: colors.primary100,
        // drawerActiveTintColor: colors.primary700,
        // drawerInactiveTintColor: colors.light500,
        drawerStyle: { width: 250 },
        drawerLabelStyle: { fontSize: 18, fontWeight: '400' },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeStack"
        component={MyTab}
        options={{
          headerShown: true,
          drawerLabel: "Home",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: true,
          drawerLabel: "Account",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingsScreen}
        options={{
          headerShown: false,
          drawerLabel: "Setting",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={24} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
//


const MyTab=()=>{
  const{colors}=useTheme;
  return(
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        // tabBarActiveTintColor: colors.primary700, // 使用主题中的活动颜色
        // tabBarInactiveTintColor: colors.light400, // 使用主题中的非活动颜色
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
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 80
          },
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
const Wishlist = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <Header />
        <MaterialCommunityIcons
          name={'menu'}
          size={20}
          onPress={() => navigation.openDrawer()}
          style={{ marginRight: 20, position: "relative", top: -40, left: 18 }}
        />
        <Text style={{ textAlign: "center", lineHeight: 100 }}>
          Wishlist
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}
const MyBooks = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <Header />
        <MaterialCommunityIcons
          name={'menu'}
          size={20}
          onPress={() => navigation.openDrawer()}
          style={{ marginRight: 20, position: "relative", top: -40, left: 18 }}
        />
        <Text style={{ textAlign: "center", lineHeight: 100 }}>
          MyBooks
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


export default Navigation;
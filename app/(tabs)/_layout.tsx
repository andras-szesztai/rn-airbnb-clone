import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { ComponentProps } from "react";

import Colors from "@/constants/Colors";

const renderIonTabBarIcon =
  (iconName: ComponentProps<typeof Ionicons>["name"]) =>
  ({ color, size }: { color: string; size: number }) => (
    <Ionicons name={iconName} color={color} size={size} />
  );

const renderFontAwesomeTabBarIcon =
  (iconName: ComponentProps<typeof FontAwesome5>["name"]) =>
  ({ color, size }: { color: string; size: number }) => (
    <FontAwesome5 name={iconName} color={color} size={size} />
  );

const renderMaterialCommunityTabBarIcon =
  (iconName: ComponentProps<typeof MaterialCommunityIcons>["name"]) =>
  ({ color, size }: { color: string; size: number }) => (
    <MaterialCommunityIcons name={iconName} color={color} size={size} />
  );

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: "mon-bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: renderIonTabBarIcon("search"),
        }}
      />
      <Tabs.Screen
        name="wishlists"
        options={{
          tabBarLabel: "Wishlists",
          tabBarIcon: renderIonTabBarIcon("heart-outline"),
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          tabBarLabel: "Trips",
          tabBarIcon: renderFontAwesomeTabBarIcon("airbnb"),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: renderMaterialCommunityTabBarIcon("message-outline"),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: renderIonTabBarIcon("person-circle-outline"),
        }}
      />
    </Tabs>
  );
};

export default Layout;

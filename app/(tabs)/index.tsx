import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function Page() {
  return (
    <View>
      <Link href="/(modals)/login">Login</Link>
      <Link href="/(modals)/booking">Booking</Link>
      <Link href="/listing/122">Listing</Link>
    </View>
  );
}

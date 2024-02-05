import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

import { ExploreHeader } from "@/components/ExploreHeader/ExploreHeader";
import { Listings } from "@/components/Listings/Listings";

export default function Page() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          header: () => (
            <ExploreHeader
              onCategoryChanged={(category: string) => {
                console.log(category);
              }}
            />
          ),
        }}
      />
      <Listings />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

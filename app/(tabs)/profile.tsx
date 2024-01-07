import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import React from "react";
import { View, Button, Text } from "react-native";

export default function Page() {
  const { signOut, isSignedIn } = useAuth();
  console.log(isSignedIn);

  return (
    <View>
      <Button
        title="Log out"
        onPress={() => {
          signOut();
        }}
      />
      {!isSignedIn && (
        <Link
          href="/(modals)/login"
          onPress={() => {
            signOut();
          }}
        >
          <Text>Sign in</Text>
        </Link>
      )}
    </View>
  );
}

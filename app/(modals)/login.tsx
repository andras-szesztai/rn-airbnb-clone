import { useOAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";

enum Strategy {
  Apple = "oauth_apple",
  Google = "oauth_google",
  Facebook = "oauth_facebook",
}

export default function Page() {
  useWarmUpBrowser(); // Android

  const router = useRouter();

  const { startOAuthFlow: appleAuth } = useOAuth({
    strategy: Strategy.Apple,
  });
  const { startOAuthFlow: googleAuth } = useOAuth({
    strategy: Strategy.Google,
  });

  const { startOAuthFlow: facebookAuth } = useOAuth({
    strategy: Strategy.Facebook,
  });

  const onSelectAuth = async (strategy: Strategy) => {
    const selectedAuth = {
      [Strategy.Apple]: appleAuth,
      [Strategy.Google]: googleAuth,
      [Strategy.Facebook]: facebookAuth,
    }[strategy];

    try {
      const { createdSessionId, setActive } = await selectedAuth();
      if (createdSessionId) {
        await setActive?.({
          session: createdSessionId,
        });
        router.back();
      }
    } catch (error) {
      console.error("OAth error", error);
    }
  };

  return (
    <View style={[defaultStyles.container, styles.container]}>
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        placeholderTextColor={Colors.grey}
        style={[defaultStyles.inputField, styles.input]}
      />
      <TouchableOpacity style={defaultStyles.button}>
        <Text style={defaultStyles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.separatorView}>
        <View style={styles.separator} />
        <Text style={styles.separatorText}>or</Text>
        <View style={styles.separator} />
      </View>
      <View style={styles.outlineButtonsContainer}>
        <TouchableOpacity style={styles.outlineButton}>
          <Ionicons
            name="call-outline"
            size={24}
            style={defaultStyles.buttonIcon}
          />
          <Text style={styles.outlineButtonText}>Continue with Phone</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.outlineButton}
          onPress={() => onSelectAuth(Strategy.Apple)}
        >
          <Ionicons
            name="md-logo-apple"
            size={24}
            style={defaultStyles.buttonIcon}
          />
          <Text style={styles.outlineButtonText}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.outlineButton}
          onPress={() => onSelectAuth(Strategy.Google)}
        >
          <Ionicons
            name="md-logo-google"
            size={24}
            style={defaultStyles.buttonIcon}
          />
          <Text style={styles.outlineButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.outlineButton}
          onPress={() => onSelectAuth(Strategy.Facebook)}
        >
          <Ionicons
            name="md-logo-facebook"
            size={24}
            style={defaultStyles.buttonIcon}
          />
          <Text style={styles.outlineButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 26,
  },
  input: {
    marginBottom: 30,
  },
  separatorView: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
    gap: 10,
    alignItems: "center",
  },
  separator: {
    borderBottomColor: Colors.dark,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 1,
  },
  separatorText: {
    color: Colors.grey,
    marginHorizontal: 10,
    fontFamily: "mon-sb",
    transform: [{ translateY: -2 }],
  },
  outlineButtonsContainer: {
    gap: 20,
  },
  outlineButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  outlineButtonText: {
    color: Colors.dark,
    fontFamily: "mon-sb",
    fontSize: 16,
  },
});

import { SafeAreaView, SafeAreaViewComponent, StyleSheet } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ViewImageScreen></ViewImageScreen>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

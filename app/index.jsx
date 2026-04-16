import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
     className="bg-cyan-500 h-54"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-white h-54 text-3xl">Hello world in expo </Text>
    </View>
  );
}

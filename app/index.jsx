import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import dinetimelogo from "../assets/images/dinetimelogo.png";
import framelogo from "../assets/images/Frame.png";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className={`bg-[#2b2b2b]`}>
      
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 mt-5 flex justify-center items-center">
          <Image source={dinetimelogo} style={{ width: 300, height: 300 }} />
          <View className="w-3/4">
            <TouchableOpacity
              onPress={() => router.push("/signup")}
              className="p-2 my-2 bg-[#f49b33] text-black rounded-lg"
            >
              <Text className="text-xl font-semibold text-center">Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/home")}
              className="p-2 my-2 bg-[#2b2b2b] border border-[#f49b33] rounded-lg max-w-fit"
            >
              <Text className="text-xl font-semibold text-[#f49b33] text-center">
                Gest User
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <View className="flex-row items-center justify-center my-4">
              <View className="flex-1 h-[1px] bg-[#f49b33] mx-2" />
              <Text className="text-white text-base font-semibold">OR</Text>
              <View className="flex-1 h-[1px] bg-[#f49b33] mx-2" />
            </View>

            <TouchableOpacity
              className="flex flex-row justify-center items-center"
              onPress={() => router.push("/signin")}
            >
              <Text className="text-white font-semibold">Already a User? </Text>
              <Text className="text-xl font-semibold text-[#f49b33] text-center">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-1">
          <Image source={framelogo} className="w-full h-full" resizeMode="contain" />
        </View>
      <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />
      </ScrollView>
    </SafeAreaView>
  );
}

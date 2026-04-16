import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import dinetimelogo from "../../assets/images/dinetimelogo.png";
import framelogo from "../../assets/images/Frame.png";
import validationSchema from "../../utils/authSchema";

const Signup = () => {
  const router=useRouter();
  return (
    <SafeAreaView className={`bg-[#2b2b2b]`}>
      <ScrollView contentContainerStyle={{height:"100%" }}>
        <View className="m-2 mt-5 flex justify-center items-center">
          <Image source={dinetimelogo} style={{ width: 300, height: 200 }} />
          <Text className="text-lg text-center text-white font-bold mb-5">
            Lets get you started
          </Text>
       

        <View className="w-5/6">
          <Formik
            initialValues={{ email: "", password: "", name: "" }}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleBlur,handleSubmit, values, errors, touched }) => (
              <View className="w-full">
                <Text className="text-[#f49b33] mt-4 mb-2">Email</Text>
                <TextInput
                  className="h-10 border border-white  text-white rounded px-2"
                  keyboardType="email-address"
                  onChange={handleChange("email")}
                  value={values.email}
                  onBlur={handleBlur("email")}
                />
                {touched.email && errors.email && (
                  <Text className="text-red-500">{errors.email}</Text>
                )}

                <Text className="text-[#f49b33] mt-4 mb-2">Password</Text>
                <TextInput
                  className="h-10 border border-white  text-white rounded px-2"
                  secureTextEntry
                  onChange={handleChange("password")}
                  value={values.password}
                  onBlur={handleBlur("password")}
                />
                {touched.password && errors.password && (
                  <Text className="text-red-500">{errors.password}</Text>
                )}     

                <TouchableOpacity
              onPress={handleSubmit}
              className="p-2 mt-16 bg-[#f49b33] text-black rounded-lg"
            >
              <Text className="text-xl font-semibold text-center">Sign In</Text>
            </TouchableOpacity>

              </View>
            )}
            
          </Formik>
          <View>
            <TouchableOpacity
              className="flex flex-row justify-center items-center mt-5"
              onPress={() => router.push("/signup")}
            >
              <Text className="text-white font-semibold">Not a User? </Text>
              <Text className="text-xl font-semibold text-[#f49b33] text-center underline p-2">
                Sign Up
              </Text>
            </TouchableOpacity>
            <View className="flex-row items-center justify-center ">
              <View className="flex-1 h-[1px] bg-[#f49b33] mx-10" />
              <Text className="text-white text-base font-semibold">OR</Text>
              <View className="flex-1 h-[1px] bg-[#f49b33] mx-10" />
            </View>
             <TouchableOpacity
              className="flex flex-row justify-center items-center mb-5"
              onPress={() => router.push("/home")}
            >
              <Text className="text-white font-semibold">be a? </Text>
              <Text className="text-xl font-semibold text-[#f49b33] text-center underline p-2">
                {" "} Guest User
              </Text>
            </TouchableOpacity>
          </View>
        </View>
</View>
        <View className="w-full items-center mt-5">
  <Image
    source={framelogo}
    style={{ width: "100%", height: 200 }}
    resizeMode="contain"
  />
</View>
         
        <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

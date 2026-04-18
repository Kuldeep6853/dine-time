import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import {collection, getDocs, query} from "firebase/firestore";
import { BlurView } from "expo-blur";
import dinetimelogo from "../../assets/images/dinetimelogo.png";
import homebanner from "../../assets/images/homeBanner.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { db } from "../../config/firebaseConfig";
// import { restaurants } from "../../store/restaurants";

const Home = () => {
  
  const [restaurants, setRestaurants] = useState([]);



  const renderItem = ({ item }) => (
    <TouchableOpacity className="bg-[#5f5f5f] rounded-lg shadow-md mx-3 p-4 max-h-64 max-w-xs flex justify-center ">
      <Image 
        resizeMode="cover"
        source={{
          uri: item?.image, 
        }}
        className="h-28 mt-2 mb-1 rounded-lg"
      />
      <Text className="text-white text-lg font-bold mb-2">{item?.name}</Text>
      <Text className="text-white text-base mb-2">{item?.address}</Text>
      <Text className="text-white text-base mb-2">Open: {item?.opening} - Close: {item?.closing}</Text>
    </TouchableOpacity>
  );

  const getRestaurants = async () => {
    try {
      const q=query(collection(db,'restaurants'));
      const res=await getDocs(q);

      res.forEach((item)=>{
        setRestaurants((prev)=>[...prev,item.data()]);
      })
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <SafeAreaView style={[{ backgroundColor: "#2b2b2b" },Platform.OS === "android" && { paddingBottom: 1 }]} className="flex-1">
      <View className=" flex items-center my-3">
        <View className="bg-[#5f5f5f] w-11/12 rounded-lg shadow-lg justify-between items-center flex flex-row p-2">
          <View className="flex flex-row">
            <Text className="text-white text-base px-2 h-10 pt-[4px] align-middle font-semibold">
              Welcome to {""}
            </Text>
            <Image
              source={dinetimelogo}
              resizeMode="cover"
              className="w-20 h-12"
            />
          </View>
        </View>
      </View>
      <ScrollView stickyHeaderIndices={[0]}>
        <ImageBackground
          source={homebanner}
          resizeMode="cover"
          className="mb-4 w-full bg-[#2b2b2b] h-60 items-center justify-center"
        >
          <BlurView
            intensity={100}
            tint="dark"
            className="w-full p-4 shadow-lg"
          >
            <Text className="text-center text-4xl font-semibold text-white">
              Dine with your loved ones
            </Text>
          </BlurView>
        </ImageBackground>

        {/* cards */}
        <View className="p-4 bg-[#2b2b2b] flex-row items-center">
          <Text className="text-white text-3xl font-semibold">
            Special Discount %
          </Text>
        </View>

        {Array.isArray(restaurants) && restaurants.length > 0 ? (    
          <FlatList
            data={restaurants}
            renderItem={renderItem}
            horizontal
            contentContainerStyle={{ padding: 16 }}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          />
      ) : (
        <ActivityIndicator animating color="#fb9b33" />
      )}

      <View className="p-4 bg-[#2b2b2b] flex-row items-center">
          <Text className="text-[#fb9b33] text-3xl font-semibold">
            Our Restaurants
          </Text>
        </View>

        {Array.isArray(restaurants) && restaurants.length > 0 ? (    
          <FlatList
            data={restaurants}
            renderItem={renderItem}
            horizontal
            contentContainerStyle={{ padding: 16 }}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          />
      ) : (
        <ActivityIndicator animating color="#fb9b33" />
      )}

      
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default Home;

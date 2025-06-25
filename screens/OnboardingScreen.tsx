import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { tw } from 'nativewind';

const interests = [
  { key: 'foodie', label: '🍔 Foodie Deals', icon: 'coffee' },
  { key: 'music', label: '🎵 Live Music', icon: 'music' },
  { key: 'arts', label: '🎭 Arts & Theater', icon: 'aperture' },
  { key: 'fitness', label: '💪 Fitness', icon: 'activity' },
  { key: 'travel', label: '✈️ Travel', icon: 'map-pin' },
  { key: 'shopping', label: '🛍️ Shopping', icon: 'shopping-bag' },
];

export default function OnboardingScreen() {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1 bg-[#F7F7FA] px-6 pt-16`}> 
      <Text style={tw`text-[28px] font-bold text-[#1D1D1F] mb-2`}>What makes a great experience?</Text>
      <Text style={tw`text-base text-[#8A8A8E] mb-8`}>Pick one to start personalizing your benefits.</Text>
      <FlatList
        data={interests}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 20 }}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`bg-white border border-[#E5E5EA] rounded-xl p-6 flex-1 m-1 items-center shadow-sm`}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('HomeScreen' as never)}
          >
            <Feather name={item.icon as any} size={32} color="#6A5AF9" style={tw`mb-2`} />
            <Text style={tw`text-base font-medium text-[#1D1D1F]`}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
} 
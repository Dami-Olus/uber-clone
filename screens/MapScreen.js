import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from "tailwind-react-native-classnames"
import Map from '../components/Map'
import NavigationCard from '../components/NavigationCard'
import MapView from 'react-native-maps'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RideOptionsCard from '../components/RideOptionsCard'


const MapScreen = () => {
  const Stack = createNativeStackNavigator()
  
  return (
    <View>
      <Text>Here is the Map stuff...</Text>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen 
          name="NavigationCard"
          component={NavigationCard}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen 
          name="RideOptionsCard"
          component={RideOptionsCard}
          options={{
            headerShown: false,
          }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})

import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Modal } from 'react-native';
import WeatherCard from '../components/WeatherCard'
import AddCityModal from '../components/AddCityModal'
import RoundButton from '../components/RoundButton'
import { useLinkProps, useNavigation} from '@react-navigation/native';

export default function App() {

  const [cities, setCities] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const modalHandler = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const addCityHandler = (city) => {
    setCities([...cities, { city: city, id: Math.random().toString() }])
    closeModal()
  }

  // const removeCardHandler = (id) => {
  //   setCities(cities.filter(x => x.id !== id))
  // }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <AddCityModal visible={modalVisible} closeModal={closeModal} addCity={addCityHandler} />
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {cities.map((item, id) => <WeatherCard navigation={navigation} key={item.id} title={item.city} />)}
        <RoundButton add={modalHandler} />
        {/* <Button title='Vai a city' onPress={() => navigation.navigate('City', { cityName: 'Roma', value: 'my value' })} /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    alignItems: 'center',
    flexGrow: 1,
    marginTop: 20
  }
});

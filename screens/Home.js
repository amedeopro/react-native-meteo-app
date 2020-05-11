import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { StyleSheet, Text, View, ScrollView, Button, Modal } from 'react-native';
import WeatherCard from '../components/WeatherCard'
import AddCityModal from '../components/AddCityModal'
import RoundButton from '../components/RoundButton'
import { useLinkProps, useNavigation} from '@react-navigation/native';

export default function App() {

  


  // useEffect(() => {
  //   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Milano&appid=${APIKEY}&lang=it`)
  //   .then(response => {
  //     console.warn(response.data)
  //   })
  // }, [])

  const [cities, setCities] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const APIKEY = '46e5086156886012889d5851df8cbff9';

  const modalHandler = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const addCityHandler = (city) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&lang=it&units=metric`)
    .then(response => {
      setCities([...cities, response.data ])
      console.log(response.data)
      closeModal()
    })
    .catch(error => {
        return error;
    })

  }

  // const removeCardHandler = (id) => {
  //   setCities(cities.filter(x => x.id !== id))
  // }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <AddCityModal visible={modalVisible} closeModal={closeModal} addCity={addCityHandler} />
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {cities.map((item, id) => <WeatherCard navigation={navigation} key={item.id} data-name={item.name} data={item}/>)}
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

import React from 'react';
import { Text, TouchableOpacity, SafeAreaView } from 'react-native';

import TopBar from '../components/TopBar';

const Details = ({ navigation }) => {  

  return (
    <SafeAreaView>
      <TopBar navigation={navigation}  title='Details'/>
      <Text>Oi Details</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
      >
        <Text>Voltar</Text>
      </TouchableOpacity>

   

    </SafeAreaView>
  )
}

export default Details;
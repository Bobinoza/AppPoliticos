import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import TopBar from './TopBar';

function DeputadoScreen({ route, navigation }) {
  const { deputado } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <TopBar navigation={navigation} title='DEPUTADO' />
      <View style={styles.container}>
        <Image style={styles.foto} source={{ uri: deputado.foto }} />
        <Text style={styles.name}>Nome: {deputado.nome}</Text>
        <Text style={styles.sigEstEmail}>Sigla: {deputado.siglaPartido}</Text>
        <Text style={styles.sigEstEmail}>Estado: {deputado.siglaUf}</Text>
        <Text style={styles.sigEstEmail}>Email: {deputado.email}</Text>
      </View>
    </SafeAreaView>
  );
}

export default DeputadoScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  topBar: {
    backgroundColor: '#2C3B47'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 40
  },
  btn: {
    backgroundColor: '#fff',
    padding: 10
  }
})
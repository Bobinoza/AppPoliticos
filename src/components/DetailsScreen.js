import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function DetailsScreen({ route, navigation }) {
  const { deputado } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Nome: {deputado.nome}</Text>
      <Text>Sigla: {deputado.siglaPartido}</Text>
      <Text>Email: {deputado.email}</Text>
      <Image style={styles.foto}  source={{ uri: deputado.foto }} />
    </View>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  foto: {
    width: 90,
    height: 90,
    borderRadius: 50,
  }
})
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Partidos = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dadosabertos.camara.leg.br/api/v2/partidos')
      .then((response) => response.json())
      .then((json) => setData(json.dados))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id.toString()}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: index % 2 === 0 ? '#A6B0BA' : '#56626D' }]}>
            <Text style={styles.partyName}>Nome do partido: {item.nome}</Text>
            <Text style={styles.partySymbol}>Sigla do partido: {item.sigla}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default Partidos;

const styles = StyleSheet.create({
  itemContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5
  },
  partyName: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: '#fff',
  },
  partySymbol: {
    fontSize: 16,
    color: '#fff',
  },
});
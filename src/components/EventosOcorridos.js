import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const EventosOcorridos = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetch("https://dadosabertos.camara.leg.br/api/v2/eventos")
      .then((response) => response.json())
      .then((data) => {
        const eventosData = data.dados.map((evento) => ({
          id: evento.id,
          dataHoraInicio: evento.dataHoraInicio,
          descricaoTipo: evento.descricaoTipo,
          descricao: evento.descricao,

        }));
        setEventos(eventosData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderEventos = ({ item }) => {
    return (
      <View style={{ backgroundColor: '#c2c2c2', margin: 10, padding: 15, borderRadius: 5}}>
        <Text>Data e hora: {item.dataHoraInicio}</Text>
        <Text>Descrição: {item.descricaoTipo}</Text>
        <Text>Descrição completa: {item.descricao}</Text>
      </View>
    )
  }

  return (
    <FlatList 
      data={eventos}
      renderItem={renderEventos}
      keyExtractor={(item) => item.id}
    />
  );
};

export default EventosOcorridos;

// const styles = StyleSheet.create({
//   itemContainer: {
//     paddingTop: 10,
//     paddingBottom: 10,
//     paddingLeft: 5,
//     paddingRight: 5
//   },
//   partyName: {
//     fontSize: 16,
//     // fontWeight: 'bold',
//     color: '#fff',
//   },
//   partySymbol: {
//     fontSize: 16,
//     color: '#fff',
//   },
// });
import React, { useState, useEffect } from "react";

import {
  View, Text, Image, FlatList,
  TouchableOpacity, StyleSheet, TextInput,
  SafeAreaView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons'

// Dados da primeira FlatList
const buttons = [
  { id: "1", title: "Deputados" },
  { id: "2", title: "Senadores" },
  { id: "3", title: "Presidentes da República" },
];
// Filtra ignorando acentos nos nomes
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export default function HomeScreen({ navigation }) {
  const [deputados, setDeputados] = useState([]);
  const [filtro, setFiltro] = useState(''); // Novo estado para o texto do filtro

  useEffect(() => {
    fetch("https://dadosabertos.camara.leg.br/api/v2/deputados")
      .then((response) => response.json())
      .then((data) => {
        const deputadosData = data.dados.map((deputado) => ({
          id: deputado.id,
          nome: deputado.nome,
          foto: deputado.urlFoto,
          siglaPartido: deputado.siglaPartido,
          email: deputado.email
        }));
        setDeputados(deputadosData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderDeputado = ({ item }) => {
    return (
      <TouchableOpacity style={styles.deputadoContainer} onPress={() => navigation.navigate('DetailsScreen', { deputado: item })}>
        <View style={styles.dinossauroAzul}>
          <View style={styles.iconContainer}>
            <Icon2 name="add-circle-outline" size={20} color="#94864D" />
          </View>
          <Image style={styles.foto} source={{ uri: item.foto }} />
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.siglaPartido}>{item.siglaPartido}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // Estado para armazenar o id do botão selecionado
  const [selectedId, setSelectedId] = useState('1');

  // Função para filtrar os dados da segunda FlatList
  const filterContents = (id) => {
    return contents.filter((item) => item.id === id);
  };

  // Função para renderizar cada item da primeira FlatList
  const renderButton = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        style={[styles.botao, selectedId === item.id && styles.botaoSelecionado]}
      >
        <Text style={[styles.btnText, selectedId === item.id && styles.btnTextSelecionado]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  // Função para renderizar cada item da segunda FlatList
  const renderContent = ({ item, index }) => {
    return (
      <View>
        <Text style={styles.texto}>{item.content}</Text>
      </View>
    )
  };

  return (
    <SafeAreaView>
      <View style={styles.wrapperListas}>
        <FlatList
          data={buttons}
          renderItem={renderButton}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          horizontal={true}
          style={styles.listaBotoes}
        />
        {selectedId === "1" && (
          <>
            <View style={styles.inputSection}>
              <Icon style={styles.inputIcon} name="search" size={20} color="" />
              <TextInput
                style={styles.input}
                placeholder="Filtrar por nome..."
                placeholderTextColor="#fff"
                selectionColor="#94864D"
                value={filtro}
                onChangeText={setFiltro}
              />
            </View>
            <FlatList
              style={styles.listaPoliticos}
              contentContainerStyle={styles.listaPoliticosContainer}
              data={deputados.filter(deputado => removeAccents(deputado.nome.toLowerCase()).includes(removeAccents(filtro.toLowerCase())))} // Aplicando o filtro
              renderItem={renderDeputado}
              keyExtractor={(item) => item.id}
              numColumns={3}
            />
          </>
        )}
        {selectedId === "2" && (
          <Text>Esta é a lista de senadores (ainda não implementada).</Text>
        )}
        {selectedId === "3" && (
          <Text>Esta é a lista de presidentes da república (ainda não implementada).</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#56626D', // Cor de fundo do botão
    padding: 10,
    margin: 5,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
  },
  btnTextSelecionado: {
    color: '#222'
  },
  botaoSelecionado: {
    backgroundColor: '#fff', // Cor de fundo do botão quando selecionado
  },
  listaBotoes: {
    backgroundColor: '#2C3B47',
    padding: 10,
  },
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#56626D',
  },
  inputIcon: {
    padding: 10,
    color: '#fff',
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#fff'
  },
  deputadoContainer: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperListas: {
    backgroundColor: '#fff'
  },
  listaPoliticos: {

  },
  listaPoliticosContainer: {

  },
  foto: {
    width: 90,
    height: 90,
    borderRadius: 5,
    alignSelf: 'center'
  },
  nome: {
    fontWeight: '500',
    textAlign: 'center',
    color: '#222',
    marginTop: 4,
    marginBottom: 2
  },
  siglaPartido: {
    fontWeight: '300',
    color: '#b0b0b0',
    textAlign: 'center'
  },
  dinossauroAzul: {

  },
  iconContainer: {
    alignSelf: 'flex-end',
}
});


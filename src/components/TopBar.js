import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'


function TopBar({ navigation, title }) {
  return (
    <View style={styles.topBar}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ width: 45, padding: 10 }}
      >
        <Icon name='arrow-back-outline' size={22} color='#fff' />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </View>
  )
}

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#2C3B47',
    flexDirection: 'row',
    alignItems: 'center', // Centraliza verticalmente os filhos
  },
  titleContainer: {
    flex: 1, // Toma todo o espaço disponível
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 600
  }
});
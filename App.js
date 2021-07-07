import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <View style={styles.topo} />

        <View style={styles.img} />
        <View style={styles.tituloImg} />

        <View style={styles.descricaoImg}>
          <View style={styles.parte1} />
          <View style={styles.parte2} />
        </View>

        <View style={styles.separador} />

        <View style={styles.containerImg}>
          <View style={styles.img} />
          <View style={styles.img} />
          <View style={styles.img} />
          <View style={styles.img} />
          <View style={styles.img} />
          <View style={styles.img} />
        </View>
        
        <View style={styles.footer} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topo: {
    height: 25,
    backgroundColor: '#50E3C2',
  },
  img: {
    height: 100,
    width: 100,
    backgroundColor: '#F5A623',
    alignSelf: 'center',
    marginTop: 36,
  },
  tituloImg: {
    height: 30,
    width: '40%',
    alignSelf: 'center',
    backgroundColor: '#F5A623',
    marginTop: 22,
  },
  descricaoImg: {
    height: 78,
    marginTop: 45,
    flexDirection: 'row',
  },
  parte1: {
    width: '50%',
    backgroundColor: '#9013FE',
  },
  parte2: {
    width: '50%',
    backgroundColor: '#4A90E2',
  },
  separador: {
    backgroundColor: '#50E3C2',
    height: 13,
  },
  containerImg: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  footer: {
    height: 60,
    backgroundColor: '#4A90E2',
  },
});

export default App;

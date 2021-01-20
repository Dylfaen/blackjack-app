import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Header from './components/Header'
import Navbar from './components/Navbar'
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

export default function App() {


  const cartes = [
    {
      id: "13P"
    },
    {
      id: "2C"
    },
    {
      id: "7Q"
    }
  ]



  const pages = [
    Page1,
    Page2,
    Page3
  ]

  const [idPage, setIdPage] = useState("page2");

  let body = pages.find(function(page) {
    return page.id === idPage
  })

  return (
    <View style={styles.container}>
      <Header title="Blackjack app" />
      <Navbar pages={pages} setIdPage={setIdPage}/>
      <View style={styles.body}>
        <body.component/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'red',
  }
});

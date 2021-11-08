import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import Style from '../stylessheets';

const {HomeStyle} = Style;

function HomePages() {
  const data = [
    {
      id: 1,
      nama: 'Muhammad Dzikrullah Farhan',
      nim: '21120119140134',
      kelompok: '20',
    },
    {
      id: 2,
      nama: 'Zais Handika Murdhani',
      nim: '21120115130071',
      kelompok: '20',
    },
    {
      id: 3,
      nama: 'Nurhaidah',
      nim: '21120119120003',
      kelompok: '20',
    },
    {
      id: 4,
      nama: 'Muhammad Firmansyah',
      nim: '21120119130102',
      kelompok: '20',
    },
  ];

  const ListItemNama = dataPassing => {
    return (
      <View
        style={
          dataPassing.dataNama.id % 2 === 1 
            ? HomeStyle.itemListContainerGanjil
            : HomeStyle.itemListContainerGenap
        }>
        <View
          style={
            dataPassing.dataNama.id % 2 === 1 
              ? HomeStyle.itemListGarisGanjil
              : HomeStyle.itemListGarisGenap}></View>
       
        <View style={HomeStyle.itemListContent}>
        <Text
            style={
              dataPassing.dataNama.id % 2 === 1
                ? HomeStyle.itemListTXTGanjil
                : HomeStyle.itemListTXTGenap
            }
          >
            {'Nama : ' + dataPassing.dataNama.nama}
          </Text>
          <Text
            style={
              dataPassing.dataNama.id % 2 === 1
                ? HomeStyle.itemListTXTGanjil
                : HomeStyle.itemListTXTGenap
            }
          >
            {'NIM : ' + dataPassing.dataNama.nim}
          </Text>
          <Text
            style={
              dataPassing.dataNama.id % 2 === 1
                ? HomeStyle.itemListTXTGanjil
                : HomeStyle.itemListTXTGenap
            }
          >
            {'Kelompok : ' + dataPassing.dataNama.kelompok}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={HomeStyle.container}>
      <View style={HomeStyle.headerContainer}>
        <Image
          source={{
            uri: 'https://bit.ly/39BPh9p',
          }}
          style={HomeStyle.headerImage}
        />
        <Text style={HomeStyle.headerTXT}>
          PRAKTIKUM MDP MODUL 4 KELOMPOK 20
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        legacyImplementation={false}
        data={data}
        renderItem={({item}) => <ListItemNama dataNama={item} />}
        keyExtractor={item => item.id}
        style={HomeStyle.flatlist}
      />
    </View>
  );
} 

export default HomePages;

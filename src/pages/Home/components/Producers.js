import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import Card from "./Card";
import useProducers from "../../../hooks/useProducers";

export default function Producers({ top: Top }) {
  const [title, list] = useProducers();

  const Header = () => {
    return <>
      <Top />
      <Text style={styles.title}>{title}</Text>
    </>;
  };

  return <FlatList
    data={list}
    renderItem={({ item }) => <Card {...item} />}
    ListHeaderComponent={Header}
    keyExtractor={({ name }) => name}
  ></FlatList>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646'
  },

});
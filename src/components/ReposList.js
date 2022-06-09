import React from 'react'
import { Text, FlatList, StyleSheet, View } from 'react-native';
import RepoItem from './RepoItem';

export default function ReposList({ repos }) {
  return (
    <View>
      {repos.length ? <Text style={style.repositoriesText}>Repositories</Text> : null}
      <FlatList data={repos} renderItem={({ item, index }) => {
        return <RepoItem repo={item} />
      }} />
    </View>
  )
}

const style = StyleSheet.create({
  repositoriesText: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 20,
  },
})


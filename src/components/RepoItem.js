import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Text, StyleSheet, View } from 'react-native';
import Link from '../components/Link'
export default function RepoItem({ repo }) {
  console.log(repo);
  const navigator = useNavigation()

  return (
    <TouchableOpacity style={style.wrapper} onPress={() => {
      navigator.navigate('Repo', { repo })
    }}>
      <Text style={style.repoText}>{repo.name}</Text>
      <Text style={style.languageText | 'no Language'}>{repo.language}</Text>
      <Text>Publish: {repo.pushed_at}</Text>
      <Link url={repo.svn_url} >Go Github</Link>
      <View style={style.underLine} />
    </TouchableOpacity>
  )
}


const style = StyleSheet.create({
  wrapper: {
    marginVertical: 10,
  },
  repoText: {
    fontWeight: "bold",
    fontSize: 20,
    // marginVertical: 10,
  },
  languageText: {
    color: 'blue',
    fontWeight: "bold",
  },
  underLine: {
    height: 1,
    backgroundColor: "#bbb"
  },
})


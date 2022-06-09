import React from 'react'
import { Text, View } from 'react-native';
import RepoItem from '../components/RepoItem';

export default function RepoScreen(props) {
  const { repo } = props.route.params;
  console.log('screen' + repo);

  return (
    <View>
      <RepoItem repo={repo} />
      <Text>other stuff</Text>
    </View>
  )
}


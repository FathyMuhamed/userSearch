import React from 'react'
import { View, StyleSheet, SafeAreaView, Text } from 'react-native'
import User from './../components/User';

export default function UserScreen(props) {
  const { user } = props.route.params;
  return (
    <SafeAreaView style={style.wrapper}>
      <View style={style.innerWrapper}>
        {user && <User user={user} />}
        <Text>other stuff</Text>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  wrapper: { flex: 1, padding: 10 },
  innerWrapper: { padding: 20 },
})
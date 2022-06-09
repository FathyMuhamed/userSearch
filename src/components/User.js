import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View, StyleSheet, Image } from 'react-native';

function User({ user }) {
	const navigator = useNavigation()
	return (
		<TouchableOpacity style={style.wrapper} onPress={() => {
			navigator.navigate('User', { user })
		}} >
			<Image source={{ uri: user.avatar_url }}
				style={style.image} />
			<View>
				<Text style={style.nameText}>{user.login}</Text>
				<Text>Followers: {user.followers}</Text>
				<Text>Following: {user.following}</Text>
			</View>
		</TouchableOpacity>
	)
}

const style = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: "#bbb",
		borderRadius: 20,
		padding: 10,
	},
	nameText: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	image: {
		width: 100,
		height: 100,
		borderWidth: 1,
		borderColor: "white",
		borderRadius: 50,
		marginEnd: 10,
	},
})


export default User
import React, { useState } from 'react'
import { TextInput, StyleSheet, Button, View, ActivityIndicator } from 'react-native';

function Form({ setUser, setRepos }) {
	const [isLoading, setIsLoading] = useState(false)
	const [input, setInput] = useState('')

	const fetchUserData = async () => {
		setIsLoading(true);
		try {
			const resUser = await fetch(`https://api.github.com/users/${input}`);
			const user = await resUser.json()
			const resRepos = await fetch(`https://api.github.com/users/${input}/repos`);
			const userRepos = await resRepos.json()
			setUser(user);
			setRepos(userRepos);

			setIsLoading(false);
		} catch (err) {
			console.log({ err });
		}

	}


	return <View >
		<TextInput
			style={style.input}
			value={input}
			placeholder="Enter UserName..."
			onChangeText={(val) => {
				setInput(val)
			}}
		/>
		<View style={style.button}>
			<Button title='Done'
				onPress={() => {
					if (input) {
						fetchUserData()
					}
				}} />
		</View>
		{isLoading ? <ActivityIndicator /> : null}
	</View>
}


const style = StyleSheet.create({
	input: {
		borderWidth: 1,
		borderColor: "#bbb",
		borderRadius: 20,
		padding: 10,
	},
	button: { margin: 10 },
})

export default Form;
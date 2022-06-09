import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import Form from './../components/Form';
import User from './../components/User';
import ReposList from './../components/ReposList';
const Home = () => {
	const [user, setUser] = useState(null)
	const [repos, setRepos] = useState([])

	return <SafeAreaView style={style.wrapper}>
		<View style={style.innerWrapper}>
			<Form setUser={setUser} setRepos={setRepos} />
			{user && <User user={user} />}
			<ReposList repos={repos} />
		</View>
	</SafeAreaView>

}

const style = StyleSheet.create({
	wrapper: { flex: 1, padding: 10 },
	innerWrapper: { padding: 20 },
})
export default Home;

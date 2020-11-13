import React, { useState } from 'react';
import { StyleSheet, StatusBar, Text, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export default function App() {
	const [sonuc, setSonuc] = useState('');
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#fff" barStyle="dark-content" />

			<View style={styles.sonuc}>
				<Text style={styles.sonucc}>{sonuc}</Text>
			</View>
			<View style={styles.tuslar}>
				<View style={{ flexDirection: 'row' }}>
					<Text
						style={styles.ustbuton}
						onPress={() => {
							setSonuc('');
						}}
					>
						C
					</Text>
					<Text
						style={styles.ustbuton}
						onPress={() => {
							setSonuc('LEBLEBİ');
						}}
					>
						J
					</Text>
					<Text
						style={styles.ustbuton}
						onPress={() => {
							setSonuc(sonuc + '%');
						}}
					>
						%
					</Text>
					<Text
						style={styles.sagbuton}
						onPress={() => {
							setSonuc(sonuc + '/');
						}}
					>
						/
					</Text>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<Text
						style={styles.butonlar}
						onPress={() => {
							setSonuc(sonuc + 7);
						}}
					>
						7
					</Text>
					<Text
						style={styles.butonlar}
						onPress={() => {
							setSonuc(sonuc + 8);
						}}
					>
						8
					</Text>
					<Text
						style={styles.butonlar}
						onPress={() => {
							setSonuc(sonuc + 9);
						}}
					>
						9
					</Text>
					<Text
						style={styles.sagbuton}
						onPress={() => {
							setSonuc(sonuc + '+');
						}}
					>
						+
					</Text>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<Text
						style={styles.butonlar}
						onPress={() => {
							setSonuc(sonuc + 4);
						}}
					>
						4
					</Text>
					<Text
						style={styles.butonlar}
						onPress={() => {
							setSonuc(sonuc + 5);
						}}
					>
						5
					</Text>
					<Text
						style={styles.butonlar}
						onPress={() => {
							setSonuc(sonuc + 6);
						}}
					>
						6
					</Text>
					<Text
						style={styles.sagbuton}
						onPress={() => {
							setSonuc(sonuc + '-');
						}}
					>
						-
					</Text>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<Text
						style={styles.butonlar}
						onPress={() => {
							setSonuc(sonuc + 1);
						}}
					>
						1
					</Text>
					<Text
						style={styles.butonlar}
						onPress={() => {
							setSonuc(sonuc + 2);
						}}
					>
						2
					</Text>
					<Text
						style={styles.butonlar}
						onPress={() => {
							setSonuc(sonuc + 3);
						}}
					>
						3
					</Text>
					<Text
						style={styles.sagbuton}
						onPress={() => {
							setSonuc(sonuc + '*');
						}}
					>
						*
					</Text>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<Text
						style={styles.sifir}
						onPress={() => {
							setSonuc(sonuc + 0);
						}}
					>
						0
					</Text>
					<Text
						style={styles.altbuton}
						onPress={() => {
							setSonuc(sonuc + '.');
						}}
					>
						,
					</Text>

					<Text
						style={styles.sagbuton}
						onPress={() => {
							if (sonuc[0] == '%') {
								return;
							}
							if (sonuc[0] == '+') {
								return;
							}

							if (sonuc[0] == '/') {
								return;
							}
							if (sonuc[0] == '*') {
								return;
							}
							if (sonuc[0] == 'L') {
								return;
							}
							if (sonuc.length == 1) {
								return;
							} else {
								setSonuc(eval(sonuc));
							}
						}}
					>
						=
					</Text>
				</View>
				<View>
					<Text style={styles.thy}>Teşekkür Ederim</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		height: height,
		width: width,
	},
	sonuc: {
		flex: 1,
		backgroundColor: '#000',
		width: width,
	},
	sonucc: {
		paddingTop: height / 3.8,
		paddingRight: 20,
		textAlign: 'right',
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 40,
	},
	tuslar: {
		flex: 2,
		flexDirection: 'column',
		backgroundColor: '#fff',
		width: width,
	},
	butonlar: {
		width: width / 4,
		height: width / 4,
		textAlign: 'center',
		padding: 30,
		fontSize: 30,
		borderWidth: 0.5,
		borderColor: '#000',
	},
	sifir: {
		width: width / 2,
		height: width / 4,
		textAlign: 'left',
		padding: 30,
		fontSize: 30,
		backgroundColor: '#ddd',
		borderWidth: 0.5,
		borderColor: '#000',
	},
	sagbuton: {
		width: width / 4,
		height: width / 4,
		textAlign: 'center',
		padding: 30,
		backgroundColor: '#F08B19',
		color: '#fff',
		fontSize: 40,
		borderWidth: 0.5,
		borderColor: '#000',
	},
	ustbuton: {
		width: width / 4,
		height: width / 4,
		textAlign: 'center',
		backgroundColor: '#ddd',
		padding: 30,
		fontSize: 30,
		borderWidth: 0.5,
		borderColor: '#000',
	},
	altbuton: {
		width: width / 4,
		height: width / 4,
		textAlign: 'center',
		backgroundColor: '#ddd',
		padding: 30,
		fontSize: 30,
		borderWidth: 0.5,
		borderColor: '#000',
	},
	thy: {
		fontSize: 20,
		padding: 10,
		backgroundColor: '#000',
		width: width,
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
		textShadowColor: '#fff',
	},
});

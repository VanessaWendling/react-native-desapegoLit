import * as React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView
} from 'react-native';
const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={
                            () => navigation.navigate("Cadastro")}>
                        <Text>Cadastro de livros</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={
                            () => navigation.navigate('Lista')
                        }>
                        <Text>Lista de livros</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={
                            () => navigation.navigate('Atualizar')
                        }>
                        <Text>Atualização de livros</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={
                            () => navigation.navigate('Deletar')
                        }>
                        <Text>Deletar livros</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={
                            () => navigation.navigate('MostrarId')
                        }>
                        <Text>Mostrar por Id</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={
                            () => navigation.navigate('MostrarNome')
                        }>
                        <Text>Mostrar por Nome</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={
                            () => navigation.navigate('Sobre')
                        }>
                        <Text>Sobre</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        marginTop: 16,
    },
});
export default HomeScreen;
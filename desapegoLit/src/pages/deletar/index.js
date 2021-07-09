import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, TouchableHighlight } from 'react-native'
import { deletarProduto } from '../../data/produto/produto_db'
import inputStyle from './styles'

const Deletar = () => {
    const [id, setId] = useState(null)

    function delProduto() {
        deletarProduto(id)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                    <Text
                        style={inputStyle.text}>
                        Cadastro
                    </Text>

                    <Text
                        style={inputStyle.textzinho}>
                        Digite as seguintes informações:
                    </Text>
                    <TextInput
                        style={inputStyle.input}
                        onChangeText={id => setId(id)}
                        value={id}
                        keyboardType="numeric"
                        placeholder="id"
                    />
                    <TouchableHighlight
                        style={inputStyle.button}
                        onPress={delProduto}>
                        <Text style={inputStyle.textzinho}>Cadastrar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Deletar;
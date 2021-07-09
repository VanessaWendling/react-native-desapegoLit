import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, TouchableHighlight } from 'react-native'
import { buscarProdutoId } from '../../data/produto/produto_db'
import inputStyle from './styles'

const MostrarId = () => {
    const [id, setId] = useState(null)
    const [produto, setProduto] = useState([])

    function buscarId() {
        setProduto(buscarProdutoId(id));
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
                        onPress={buscarId}>
                        <Text style={inputStyle.textzinho}>Buscar</Text>
                    </TouchableHighlight>
                    <TextInput
                        style={inputStyle.input}
                        value={produto.produto_nome}
                    />
                    <TextInput
                        style={inputStyle.input}
                        value={produto.produto_descricao}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}
export default MostrarId;
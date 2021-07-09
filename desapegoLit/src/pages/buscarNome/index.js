import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, TouchableHighlight } from 'react-native'
import { buscarProdutoNome } from '../../data/produto/produto_db'
import inputStyle from './styles'

const MostrarId = () => {
    const [nome, setNome] = useState(null)
    const [produto, setProduto] = useState([])

    function buscarNome() {
        setProduto(buscarProdutoNome(nome));
        console.log(produto);
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
                        onChangeText={nome => setNome(nome)}
                        value={nome}
                        placeholder="nome"
                    />
                    <Text>{produto.produto_nome}</Text>
                    <TouchableHighlight
                        style={inputStyle.button}
                        onPress={buscarNome}>
                        <Text style={inputStyle.textzinho}>Buscar</Text>
                    </TouchableHighlight>
                    <Text>{produto.produto_nome}</Text>
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
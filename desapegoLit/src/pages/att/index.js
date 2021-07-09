import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableHighlight } from 'react-native'
import { atualizarProduto } from '../../data/produto/produto_db'
import inputStyle from './styles'

const Atualizar = () => {
    const [id, setId] = useState(null)
    const [nome, setNome] = useState(null);
    const [descricao, setDescricao] = useState(null);
    const [preco, setPreco] = useState(null);

    function attProduto() {
        atualizarProduto(id, nome, descricao, preco)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
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
                        <TextInput
                            style={inputStyle.input}
                            onChangeText={nome => setNome(nome)}
                            value={nome}
                            placeholder="nome"
                        />
                        <TextInput
                            style={inputStyle.inputLines}
                            onChangeText={descricao => setDescricao(descricao)}
                            value={descricao}
                            placeholder="descrição"
                            multiline={true}
                            numberOfLines={4}
                        />
                        <TextInput
                            style={inputStyle.input}
                            onChangeText={preco => setPreco(preco)}
                            value={preco}
                            keyboardType="numeric"
                            placeholder="preço"
                        />
                    </View>
                    <TouchableHighlight
                        style={inputStyle.button}
                        onPress={attProduto}>
                        <Text style={inputStyle.textzinho}>Cadastrar</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default Atualizar;
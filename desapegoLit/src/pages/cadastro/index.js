import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import inputStyle from "./styles"
import { adicionarProdutos } from '../../data/produto/produto_db';

const Cadastro = () => {
    const [nome, setNome] = useState(null);
    const [descricao, setDescricao] = useState(null);
    const [preco, setPreco] = useState(null);

    function salvarProduto() {
        adicionarProdutos(nome, descricao, preco);
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
                        onPress={salvarProduto}>
                        <Text style={inputStyle.textzinho}>Cadastrar</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Cadastro;
import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList } from 'react-native';
import { listarProdutos } from '../../data/produto/produto_db';
const ListagemProdutos = () => {
    const [produtos, setProdutos] = useState(listarProdutos());
    return (
        <SafeAreaView>
            <FlatList
                data={produtos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item: produto, index }) => { //array - para cada linha de produtos, ele imprime 1 prod
                    return (
                        <View style={styles.viewContainer}>
                            <Text>{produto.produto_id}</Text>
                            <Text>{produto.produto_nome}</Text>
                            <Text>{produto.produto_descricao}</Text>
                            <Text>{produto.produto_preco}</Text>
                        </View>
                    )
                }}
            />
        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    ViewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})
export default ListagemProdutos;
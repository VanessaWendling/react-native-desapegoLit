import React from 'react'
import { Title, View, ScrollView, SafeAreaView, Text } from 'react-native';

const Sobre = () => {

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
                        <Text>
                            Sobre a DEV ;)
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )

}
export default Sobre;
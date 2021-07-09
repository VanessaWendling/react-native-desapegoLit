import 'react-native-gesture-handler';

import * as React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './pages/home';
import ListaScreen from './pages/lista';
import CadastroScreen from './pages/cadastro'
import SobreScreen from './pages/sobre';
import AttScreen from './pages/att';
import DelScreen from './pages/deletar';
import MostrarIdScreen from './pages/buscarId';
import MostrarNomeScreen from './pages/buscarNome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerBackTitle: "Voltar",
                headerStyle: { backgroundColor: '#f54a00' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' }
            }}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'desapego.lit' }} />
            <Stack.Screen
                name="Cadastro"
                component={CadastroScreen}
                options={{ title: 'Cadastro Page' }} />
            <Stack.Screen
                name="Lista"
                component={ListaScreen}
                options={{ title: 'Lista Page' }} />
            <Stack.Screen
                name="Atualizar"
                component={AttScreen}
                options={{ title: 'Update Page' }} />
            <Stack.Screen
                name="Deletar"
                component={DelScreen}
                options={{ title: 'Delete Page' }} />
            <Stack.Screen
                name="MostrarId"
                component={MostrarIdScreen}
                options={{ title: 'Mostrar Id' }} />
            <Stack.Screen
                name="MostrarNome"
                component={MostrarNomeScreen}
                options={{ title: 'Mostrar Nome' }} />
            <Stack.Screen
                name="Sobre"
                component={SobreScreen}
                options={{ title: 'Sobre a dev' }} />
        </Stack.Navigator>
    );

}
function App() {
    return (
        <NavigationContainer>
            {/* essa parte fica no final da tela */}
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#f54a00',
                }}>
                <Tab.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{
                        tabBarLabel: "início",
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="home"
                                color={color}
                                size={size}
                            />
                        ),
                    }} />

                <Tab.Screen
                    name="Sobre"
                    component={SobreScreen}
                    options={{
                        tabBarLabel: "det",
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="home"
                                color={color}
                                size={size}
                            />
                        ),
                    }} />
            </Tab.Navigator >
        </NavigationContainer >
    );
}
export default App;
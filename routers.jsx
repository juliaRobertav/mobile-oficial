import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from "@expo/vector-icons"

import Home from "./pages/home"
import Cadastro from "./pages/cadastro"
import Login from "./pages/login"
import Conta from "./pages/conta"



const Pilha = createStackNavigator()
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'black',
                    paddingBottom: 1,
                    paddingTop: 1,
                    borderTopColor: 'transparent'
                },
                tabBarActiveTintColor: '#f0f',
                tabBarInactiveTintColor: '#555'
            }}

        >

            <Tab.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                    headerShown:false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="file" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Conta"
                component={Conta}
                options={{
                    headerShown:false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="file" size={size} color={color} />
                    )
                }}
            />

           
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown:false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="folder-plus" size={size} color={color} />
                    )
                }} />

            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown:false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="edit" size={size} color={color} />
                    )
                }}
            />
            
           
        </Tab.Navigator>
    );
}



export default function Routers() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>

                <Pilha.Screen
                    name="MyTabs"
                    component={MyTabs}
                    options={{ headerShown: false }}
                />

            

                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Conta"
                    component={Conta}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                
                

            </Pilha.Navigator>
        </NavigationContainer>
    )
}
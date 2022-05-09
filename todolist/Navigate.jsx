import React from 'react';
import Todo from "./components/Todo/Todo";
import Info from "./components/Info/Info";
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Main from "./components/Main/Main";

function Navigate() {
    const Drawer = createDrawerNavigator()

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Main" component={Main} options={{title:'Главная'}}/>
                <Drawer.Screen name="Todo" component={Todo} options={{title:'Список задач'}}/>
                <Drawer.Screen name="Info" component={Info} options={{title:'Инфо'}}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Navigate;
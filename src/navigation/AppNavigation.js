import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IndexStack from "./IndexStack";
import DetailsStack from "./DetailStack";
import { Icon } from "react-native-elements";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

//const Drawer = createDrawerNavigator();

export default function AppNavigation() {
  return (
    // <Drawer.Navigator>
    //   <Drawer.Screen
    //     name="index"
    //     component={IndexScreen}
    //     options={{ title: "Inicio" }}
    //   />

    //   <Drawer.Screen
    //     name="details"
    //     component={DetailsScreen}
    //     options={{ title: "Detalles" }}
    //   />

    //   <Drawer.Screen
    //     name="info"
    //     component={InformationScreen}
    //     options={{ title: "Información" }}
    //   />
    // </Drawer.Navigator>
    <Tab.Navigator screenOptions={({route})=>({
      headerShown:false,
      tabBarActiveTintColor:"red",
      tabBarInactiveTintColor:"green",
      //tabBarIcon:()=> showIcons()
      tabBarIcon:({color, size})=> showIcons(route,color,size)
      })}>
      <Tab.Screen
        name="index"
        component={IndexStack}
        options={{ title: "Inicio"}}
      />

      <Tab.Screen
        name="details"
        component={DetailsStack}
        options={{ title: "Detalles" }}
      />

      <Tab.Screen
        name="perfil1"
        component={ProfileStack}
        options={{ title: "profile"}}
      />
    </Tab.Navigator>
  );
}
function showIcons(route, color, size){
  let icono;
  if(route.name=="index"){
    icono="home-circle"
  }
  if(route.name=="details"){
    icono="details"
  }
  if(route.name=="profile"){
    icono="account-outline"
  }
  return(
    <Icon type="material-community"
    name={icono}
    color={color}
    size={size}
    />
  )
}

// const Tab = createBottomTabNavigator();


// const Stack = createNativeStackNavigator();

// export default function AppNavigation() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="index"
//         component={IndexScreen}
//         options={{ title: "Inicio" }}
//       />

//       <Stack.Screen
//         name="details"
//         component={DetailsScreen}
//         options={{ title: "Detalles" }}
//       />

//       <Stack.Screen
//         name="info"
//         component={InformationScreen}
//         options={{ title: "Información" }}
//       />
//     </Stack.Navigator>
//   );
// }


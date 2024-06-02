import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import HomeStack from './HomeStack';
import UserProfile from './UserProfile';

const BottomTabNavigator = createMaterialBottomTabNavigator();

function AppStack(){
    return <BottomTabNavigator.Navigator 
        initialRouteName="HomeStack"
        screenOptions={{headerShown: false}}
    >
        <BottomTabNavigator.Screen name="HomeStack" component={HomeStack} />
        <BottomTabNavigator.Screen name="UserProfile" component={UserProfile} />
    </BottomTabNavigator.Navigator>
}

export default AppStack;
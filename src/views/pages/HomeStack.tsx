import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Home } from './Home';
import { CameraView } from './CameraView';

const Stack = createNativeStackNavigator();

function HomeStack(props){
    return <Stack.Navigator 
        {...props} 
        initialRouteName='Home' 
        screenOptions={{headerShown: false}}
    >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='CameraView' component={CameraView} />            
    </Stack.Navigator>
}

export default HomeStack;
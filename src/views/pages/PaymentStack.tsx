import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Payment from './Payment';
import CardPayment from './CardPayment';

const Stack = createNativeStackNavigator();

function PaymentStack(props) {
    return <Stack.Navigator 
        {...props} 
        initialRouteName='Payment' 
        screenOptions={{headerShown: false}}
    >
        <Stack.Screen name='Payment' component={Payment} />
        <Stack.Screen name='CardPayment' component={CardPayment} />            
    </Stack.Navigator>
}

export default PaymentStack;
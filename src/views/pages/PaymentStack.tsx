import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Payment from './Payment';
import CardPayment from './CardPayment';
import ButtonCustomTabs from './ButtonCustomTabs';

const Stack = createNativeStackNavigator();

function PaymentStack(props) {
    return <Stack.Navigator 
        {...props} 
        initialRouteName='Payment' 
        screenOptions={{headerShown: false}}
    >
        <Stack.Screen name='Payment' component={Payment} />
        <Stack.Screen name='ButtonCustomTabs' component={ButtonCustomTabs} />            
    </Stack.Navigator>
}

export default PaymentStack;
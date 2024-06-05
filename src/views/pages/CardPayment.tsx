import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { RadioButton, Text, TextInput } from "react-native-paper";
// SDK do Mercado Pago
import { MercadoPagoConfig } from 'mercadopago';
// Adicione as credenciais
const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });

function CardPayment(props) {

    const [cardNumber,setCardNumber] = useState(null);

    

    return <View>
        <TextInput keyboardType='numeric' value={cardNumber} onChange={setCardNumber}>
    </View>
}

const styles = StyleSheet.create({
    radioOption:{
        flexDirection:'row',
        margin:10,
        verticalAlign:'middle'
    },
    textRadioButton:{
        height:'100%',
        verticalAlign:'middle'
    }
})

export default CardPayment;
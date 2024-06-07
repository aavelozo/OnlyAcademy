import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button, RadioButton, Text, Title } from "react-native-paper";
import { useToast } from "react-native-toast-notifications";
import {
	Linking
} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
    
const payments = {
    free:{value:0},
    montly:{value:25,link:'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848fde7fc1018ff0ce6d0c0659'},
    yearly:{value:200,link:'https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=86392512-8d3736d4-ee0d-4682-9d6e-6531701591c5'}
}

function Payment(props) {

    const [payment,setPayment] = useState(null);
    const toast = useToast();

    

    function handlePaymentChanged(newPaymentValue) {
        let newPayment = payments[Object.keys(payments).filter(el=>payments[el].value == newPaymentValue)[0]];
        setPayment(newPayment);
        if (props.setPayment) {
            props.setPayment(newPayment);
        }
    }

    const openUrl = async (url) => {
        try {
            console.log(`opening ${url}`);
            if (await InAppBrowser.isAvailable()) {
                console.log('opening in InAppBrowser');
                InAppBrowser.open(url, {
                    // iOS Properties
                    dismissButtonStyle: 'cancel',
                    preferredBarTintColor: '#453AA4',
                    preferredControlTintColor: 'white',
                    readerMode: false,
                    animated: true,
                    modalEnabled: true,
                    // Android Properties
                    showTitle: true,
                    toolbarColor: '#6200EE',
                    secondaryToolbarColor: 'black',
                    enableUrlBarHiding: true,
                    enableDefaultShare: true,
                    forceCloseOnRedirection: false, // Animation
                    animations: {
                        startEnter: 'slide_in_right',
                        startExit: 'slide_out_left',
                        endEnter: 'slide_in_left',
                        endExit: 'slide_out_right',
                    },
                });
            } else {
                console.log('opening as Link');
                Linking.openURL(url);
            }
        } catch (e) {
            console.log(e);
            Alert.alert(e);
        }
	};

    function handleNext(){
        try {
            if (typeof payment != 'undefined' && payment != undefined && payment != null) {
                switch(payment.value) {
                    case payments.free.value:
                        props.navigation.navigate("AppStack");
                        break;
                    default :
                        openUrl(payment.link);
                }                
            } else {
                toast.show("select one");
            }
        } catch (e) {
            console.log(e);
            Alert.alert(e.message);
        }
    }


    

    return <View>
        <Title>Payment method</Title>
        <RadioButton.Group onValueChange={handlePaymentChanged} value={payment?.value}>
            {Object.keys(payments).map(
                key=><RadioButton.Item key={key} label={`${key} (${payments[key].value.toLocaleString("pt-BR",{style:'currency', currency:'BRL',maximumFractionDigits: 2,minimumFractionDigits: 2})})`} value={payments[key].value} />            
            )}            
        </RadioButton.Group>
        <Button onPress={handleNext}>Next</Button>
    </View>
}

export default Payment;
import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button, RadioButton, Text, Title } from "react-native-paper";
import { Toast, useToast } from "react-native-toast-notifications";
import {
	Linking
} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { useNavigation } from "@react-navigation/native";
    
const payments = {
    free:{value:0},
    montly:{value:25,link:'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848fde7fa4018ff48d7c73074c'},
    yearly:{value:200,link:"https://sandbox.mercadopago.com.br/checkout/v1/redirect?pref_id=86392512-22aa9eb0-23b8-4187-9bbf-459d402ffcbd"}
}

function Payment(props) {

    const [payment,setPayment] = useState(null);
    const toast = useToast();
    const navigation = useNavigation();

    useEffect(() => {
		Linking.addEventListener('url', event => {
            console.log('linking url changed',event.url);
			const {
				url
			} = event;
			if (url !== null && url.includes('onlyacademy://')) {
                if (url.includes('checkout/failure')) {
                    InAppBrowser.close();
                    Alert.alert("Error","Error on payment process");
                } else if (url.includes('checkout/pending')) {
                    InAppBrowser.close();
                    Alert.alert("Error","Payment pending");
                } else {
                    navigation.navigate('AppStack');
                    Toast.show("Payment aproved");
                }							
			}
		});
	}, []);

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
            /*if (await InAppBrowser.isAvailable()) {
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
                }).then(result=>{
                    console.log('then',result);
                }).catch(error=>{
                    console.log('catch',error);
                });                
            } else {*/
                console.log('opening as Link');
                Linking.openURL(url).then(result=>{
                    console.log('then',result);
                }).catch(error=>{
                    console.log('catch',error);
                });  
            //}
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
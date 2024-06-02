import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, RadioButton, Text } from "react-native-paper";
import { useToast } from "react-native-toast-notifications";

function Payment(props) {

    const [value,setValue] = useState(null);
    const toast = useToast();

    function handleValueChanged(newValue) {
        setValue(newValue);
        if (props.setPayment) {
            props.setPayment(newValue);
        }
    }

    function handleNext(){
        if (value) {
            props.navigation.navigate("AppStack");
        } else {
            toast.show("select one");
        }
    }

    return <View>
        <RadioButton.Group onValueChange={handleValueChanged} value={value}>
            <RadioButton.Item label="Free"value="free" />            
            <RadioButton.Item label="Monthly"value="monthly" />
            <RadioButton.Item label="Yearly"value="yearly" />
        </RadioButton.Group>
        <Button onPress={handleNext}>Next</Button>
    </View>
}

export default Payment;
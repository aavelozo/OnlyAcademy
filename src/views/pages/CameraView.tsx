import { StyleSheet } from "react-native"
import { Text } from "react-native-paper";
import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera"

function CameraView(props){
    const device = useCameraDevice('back');
    const { hasPermission, requestPermission } = useCameraPermission();
    if (!hasPermission) {
        requestPermission();
    }
    if (device == null) return <Text>No Device</Text>
    return (
        hasPermission
        ? <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
        />
        : <Text>No Permission</Text>
    )
}

export {CameraView}
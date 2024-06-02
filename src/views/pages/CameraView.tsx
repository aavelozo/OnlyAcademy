import { StyleSheet } from "react-native"
import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera"

function CameraView(){
    const device = useCameraDevice('back');
    const { hasPermission } = useCameraPermission();
    if (!hasPermission) return <></>
    if (device == null) return <></>
    return <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
    />
}

export {CameraView}
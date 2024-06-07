import {
	Button,
	Linking
} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';

const url = 'https://sandbox.mercadopago.com.br/checkout/v1/redirect?pref_id=86392512-5cb55db3-b7cd-4ecb-845f-71484d4a61d6';

const ButtonCustomTabs = () => {
	const openUrl = async (url) => {
		if (await InAppBrowser.isAvailable()) {
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
			Linking.openURL(url);
		}
	};
	return ( < Button title = "Press Me"
		onPress = {
			() =>
			openUrl(url)
		}
		/> );
};
export default ButtonCustomTabs;
import { FlatList, ImageBackground, StyleSheet, View } from "react-native"
import { Avatar, FAB, Text, useTheme } from "react-native-paper";

const images = [
    require('../assets/images/user.png'),
    require('../assets/images/user.png'),
    require('../assets/images/user.png'),
    require('../assets/images/user.png'),
    require('../assets/images/user.png'),
    require('../assets/images/user.png')
];

function Home() {
    const theme = useTheme();

    return <View style={styles.container}>
        <View 
            style={styles.background}        
        >     
            <View>
                <FAB 
                    icon="camera"
                    style={styles.fab}
                    color={theme.colors.onBackground}
                />
                <Text style={{fontSize:18,fontWeight:'bold',color:'black',textAlign:'center',marginTop:30}}>Explore</Text>
                <FAB 
                    icon="bell-badge"
                    style={[styles.fab,{right:0,left:null}]}
                />
            </View> 
            <FlatList
                data={images.map((el,index)=>index)}
                style={{marginTop:30}}
                horizontal={true}
                renderItem={({ item }) => {
                    //console.log(item);
                    return  <View>
                        <View
                            style={styles.avatarBorder}
                        >
                            <Avatar.Image
                                style={styles.avatar} 
                                size={70} 
                                source={images[item]} 
                            />
                        </View>
                    </View>
                }}
            /> 
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },  
    background: {
        flex: 1,
        justifyContent: 'flex-start',
    },  
    surface: {        
        width: '100%',
        height:'100%',
        //alignItems: 'center',
        //justifyContent: 'center',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    avatarBorder:{
        width:80,
        height:80,
        borderRadius:45,
        margin:5,
        borderWidth:2,
        borderColor:'blue',
        alignSelf:'center',
        alignContent:'center',
        justifyContent:'center'
    },
    avatar:{
        width:70,
        height:70,
        borderRadius:35,
        //padding:5,
        //backgroundColor:'white',
        alignSelf:'center'
    },
    cardTitleStyle:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20
    },
    fab: {
        position: 'absolute',
        margin: 16,
        left: 0,
        top: 0,
        borderRadius:50
    },
    buttonStyle: {
        justifyContent:'center',
        borderRadius:30,
        padding:5,
        paddingLeft:20,
        paddingRight:20
    },
    buttonLabelStyle:{
        fontSize:16
    },
    tabTitleStyle:{
        fontSize:12,
        color:'black'
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
    boldText:{
        fontSize:25,
        fontWeight:'bold',
        color:'black'
    }
});

export {Home}
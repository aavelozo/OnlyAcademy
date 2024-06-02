import { Tab, TabView } from "@rneui/themed";
import { useEffect, useState } from "react";
import { FlatList, ImageBackground,Image, StyleSheet, Text, View } from "react-native";
import { ActivityIndicator, Avatar, Button, Card, FAB, Surface } from "react-native-paper";

const images = [
    require('../assets/images/1.png'),
    require('../assets/images/2.png'),
    require('../assets/images/3.png'),
    require('../assets/images/4.png'),
    require('../assets/images/5.png'),
    require('../assets/images/6.png')
];
function UserProfile(){    
    const [userName,setUserName] = useState('@Catherine13');
    const [userText,setUserText] = useState('My name is Catherine. I like dancing in the rain and travelling all around the world.');
    const [followers,setFollowers] = useState('1k');
    const [following,setFollowing] = useState('342');
    const [index,setIndex] = useState(0);
    


    return <View style={styles.container}>
    <ImageBackground 
        source={require('../assets/images/fundo.jpeg')} 
        resizeMode="cover" 
        style={styles.backgroundImage}
    >        
        <FAB 
            icon="arrow-left"
            style={styles.fab}
        />
        <FAB 
            icon="email"
            style={[styles.fab,{right:0,left:null}]}
        />
        <Surface 
            style={[styles.surface,{backgroundColor:'#E6EEFA',marginTop:150}]} 
            elevation={4}>
            <Avatar.Image 
                style={styles.avatar}
                size={90} 
                source={require('../assets/images/user.png')} 
            />
            <View 
                style={{
                    marginTop:-55,
                    paddingLeft:20,
                    paddingRight:20,
                    width:'100%',
                    padding:5,                    
                    justifyContent:'space-between',
                    //flex:1,
                    flexDirection:'row',
                    //backgroundColor:'blue'
                }}
            >
                <Card.Title
                    title={followers}
                    subtitle="Followers"
                    titleStyle={styles.cardTitleStyle}              
                    subtitleStyle={{
                        textAlign:'center'
                    }}             
                    style={{
                        width:100
                    }}
                /> 
                <Card.Title
                    title={following}
                    subtitle="Following"
                    titleStyle={styles.cardTitleStyle}       
                    subtitleStyle={{
                        textAlign:'center'
                    }}             
                    style={{
                        width:100
                    }}
                />              
            </View>
            <View style={{marginTop:-10}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'center'}}>{userName}</Text>
                <Text style={{padding:20,paddingTop:5,paddingLeft:30,paddingRight:30,fontSize:20,textAlign:'center',letterSpacing:-1,lineHeight:30}}>{userText}</Text>
            </View>
            <View 
                style={{
                    marginTop:-5,
                    paddingLeft:40,
                    paddingRight:40,
                    width:'100%',
                    justifyContent:'space-between',
                    flexDirection:'row'
                }}
            >
                <Button                    
                    mode="contained"
                    buttonColor="#5790DF"
                    labelStyle={styles.buttonLabelStyle}
                    style={styles.buttonStyle}
                >
                    Follow
                </Button>
                <Button
                    mode="contained"
                    buttonColor="#FFFFFF"
                    textColor="#000000"
                    labelStyle={styles.buttonLabelStyle}
                    style={styles.buttonStyle}
                >
                    Message
                </Button>
            </View>

            <Tab
                value={index}
                onChange={(e) => setIndex(e)}
                indicatorStyle={{
                    backgroundColor: 'grey',
                    height: 3,
                }}
                style={{
                    width:'75%',
                    alignSelf:'center'
                }}
                >
                <Tab.Item
                    title="All"
                    titleStyle={styles.tabTitleStyle}
                />
                <Tab.Item
                    title="Photos"
                    titleStyle={styles.tabTitleStyle}
                />
                <Tab.Item
                    title="Videos"
                    titleStyle={styles.tabTitleStyle}
                />
            </Tab>
            <Surface 
                style={[styles.surface,{
                    backgroundColor:'#FFFFFF',
                    overflow: "hidden",
                    marginTop:0}]}
                elevation={3}
            >                
                <TabView value={index} onChange={setIndex} animationType="spring" >
                    <TabView.Item>                        
                        <FlatList
                            data={images.map((el,index)=>index)}
                            style={{height:350,flexGrow: 0}}
                            numColumns={2}
                            //keyExtractor={(e) => e}
                            renderItem={({ item }) => {
                                console.log(item);
                                return <Image                            
                                    source={images[item]}                                
                                    style={{
                                        width:'47%',
                                        aspectRatio:1,
                                        margin:5
                                    }}
                                />
                            }}
                        />
                    </TabView.Item>
                    <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
                        <Text>Photos</Text>
                    </TabView.Item>
                    <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
                        <Text>Videos</Text>
                    </TabView.Item>
                </TabView>
            </Surface>
        </Surface>
    </ImageBackground>
  </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },  
    backgroundImage: {
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
    avatar:{
        marginTop:-50,
        width:100,
        height:100,
        borderRadius:50,
        padding:5,
        backgroundColor:'white',
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

export default UserProfile;
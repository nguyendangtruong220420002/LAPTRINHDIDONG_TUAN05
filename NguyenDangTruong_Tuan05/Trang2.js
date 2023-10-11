import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button, CheckBox} from 'react-native';
import {LinearGradient} from "expo-linear-gradient"
import React,{useState} from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Trang2 =()=> {
    
    const stack = createNativeStackNavigator();
    function Password ({navigator }){
        const [Dai,setDai] = useState(8);
        const [Thuong,setThuong] = useState(false);
        const [Hoa,setHoa] = useState(false);
        const [So,setSo] = useState(false);
        const [KyTu,setKyTu] = useState(false);
        const [generatedPassword, setGeneratedPassword] = useState('');

        const generatePassword = () => {
            let charset = '';
            
    if (Thuong) {
        charset += 'abcdefghijklmnopqrstuvwxyz';
      }
      if (Hoa) {
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      }
      if (So) {
        charset += '0123456789';
      }
      if(KyTu){
        charset+='!@#$%^&*()_+';
      }
  
      let password = '';
      for (let i = 0; i < Dai; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
        }
        setPassword(password);
    }


    return ( 
    <LinearGradient 
    colors={["#3B3B98","#C4C4C4"]}
    style={styles.mau}>
    <View style={styles.container}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Password Generator" component={PasswordGenerator} />
      </Tab.Navigator>
    </NavigationContainer>
        <Text style={styles.text1}>PASSWORD GENERATOR</Text>
        <TextInput style={styles.textinput}
       ></TextInput>
        <View style={styles.textchek}>
            <Text style={styles.text2}>Password length</Text>
            <TextInput style={styles.textinput2}
             placeholder='length'
             value={Dai.toString()}
             onChangeText={(text)=> setDai(parseInt(text))}
            ></TextInput>
        </View>
        <View style={styles.textchek}>
            <Text style={styles.text2}>Include lower case letters</Text>
            <CheckBox style={styles.checkbox}
                value ={Thuong}
                onValueChange={(value)=>setThuong(value)}
            ></CheckBox>
        </View>
        <View style={styles.textchek}>
            <Text style={styles.text2}>Include upcase letters</Text>
            <CheckBox style={styles.checkbox}
                value ={Hoa}
                onValueChange={(value)=>setHoa(value)}
            ></CheckBox>
        </View>
        <View style={styles.textchek}>
            <Text style={styles.text2}>Include number</Text>
            <CheckBox style={styles.checkbox}
                checked size={100}
                value ={So}
                onValueChange={setSo}
            ></CheckBox>
         </View>
         <View style={styles.textchek}>
            <Text style={styles.text2}>Include special symbol</Text>
            <CheckBox style={styles.checkbox}
                KyTusize={100}
                value ={KyTu}
                onValueChange={setKyTu}
            ></CheckBox>
        </View>
        <View style={styles.button}>
            <Button title='GENERATE PASSWORD' 
            style={styles.button1}
            color={"#3B3B98"}
            onPress={generatePassword}
            >  
            </Button>
        </View>
        

    </View>
    </LinearGradient>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#23235B",
        width:360,
        height:630,
        marginTop :20,
        marginLeft:15,
        borderRadius:10, 
        
    },
    mau:{
        width:400,
        height:670,
    },
    text1:{
        fontSize:35,
        fontWeight:"bold",
        color:"#FFFFFF",
        marginLeft:70,
        marginTop:40,
    },
    text2:{
        fontWeight:"bold",
        color:"#FFFFFF",
        fontSize:20,
        marginTop:5,
    },
    textinput:{
        backgroundColor:"#151537",
        borderRadius:2,
        width:350,
        height:50,
        marginTop:40,
        marginLeft:5,
        fontSize:25,
        color:"#FFFFFF",

    },
    textinput2:{
        backgroundColor:"#FFFFFF",
        borderRadius:5,
        width:90,
        height:40,
        fontSize:25,
        
    },
    checkbox:{
        width:35,
        height:35,
    },
    textchek:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        marginTop:25,
        marginLeft:20,
        width:330,
    },
   button:{
    width:300,
    paddingTop:30,
    paddingLeft:60
   },
   
});
export default Trang2;
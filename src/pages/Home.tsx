import { Button, StyleSheet, Text, View } from "react-native"
//navigations
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import{RootStackParamList } from '../App'
type Homeprops=NativeStackScreenProps<RootStackParamList,'Home'>
const Home=({navigation}:Homeprops)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.smallText}>Home Screen</Text>
            <Button 
            title='GO to details screen'
            onPress={()=>navigation.replace('Details',{productID:'86'})}
            />    
        </View>

    )

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    smallText:{
        color:'black'

    }
})
export default Home;
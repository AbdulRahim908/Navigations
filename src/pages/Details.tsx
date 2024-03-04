import { Button, StyleSheet, Text, View } from "react-native"
//navigations
import {NativeStackScreenProps,NativeStackNavigationProp} from '@react-navigation/native-stack';
import{RootStackParamList } from '../App'
import{useNavigation} from '@react-navigation/native'
type DetailsProps=NativeStackScreenProps<RootStackParamList,'Details'>

const Details=({route}:DetailsProps)=>{
    const {productID}=route.params
    const navigation=useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    return(
        <View>
            <Text>Details:{productID}</Text>
            <Button
            title="go to home"
            onPress={()=>navigation.navigate('Home')}
            // onPress={()=>navigation.goBack()}
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
export default Details;
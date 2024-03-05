import { Button, StyleSheet, Text, View ,FlatList, Pressable} from "react-native"
//navigations
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import{RootStackParamList } from '../App'
import ProductItem from "../components/productitem";
import Separator from "../components/separator";
//data
import { PRODUCTS_LIST } from "../data/constants";

type Homeprops=NativeStackScreenProps<RootStackParamList,'Home'>
const Home=({navigation}:Homeprops)=>{
    return(
        <View style={styles.container}>
            <FlatList
             data={PRODUCTS_LIST}
             keyExtractor={item=>item.id}
             ItemSeparatorComponent={Separator}
             renderItem={({item})=>(
                <Pressable
                onPress={()=>{
                    navigation.navigate('Details',{product:item })
                }}
                >
                  <ProductItem 
                  product={item}/>
                </Pressable>
             )}/>
        </View>

    )

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:12,
        backgroundColor:'white'
    }

})
export default Home;
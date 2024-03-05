import React from 'react'
import { Text, View ,StyleSheet} from 'react-native'
const Separator=()=>{
    return(
        <View style={styles.separator}>
            
        </View>
    )
};
const styles= StyleSheet.create({
    separator:{
        height:0.8,
        backgroundColor:'black'
    }
})
export default Separator ;

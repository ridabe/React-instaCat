import React, {useState} from "react";
import {
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  Image
  } from "react-native";

const Photo = ({file, count})=>{
  const [like,setLike] = useState(count);
    //Criar uma função pelo ECs6
    const increment = ()=>{
      setLike(like + 1);
    }
    const zerar = ()=>{
      setLike(0);
    }
  return(
     <View style = {styles.container}>
        
        <Image style={styles.image} source={file} />
        <TouchableOpacity onPress={increment}>
          {like} Like
        </TouchableOpacity>
        <TouchableOpacity onPress={zerar}>
          Zerar
        </TouchableOpacity>       
      </View>    
  )
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      alignItems:"center",
      justifyContent:"center",
    },
    text:{
      fontSize:22,      
    },
    image:{
      height: 180,
      width: 180,
    }
})
export default Photo;
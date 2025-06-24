import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

// Entry Point Of The App

const placeHolderImage = require("../../assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage]= useState<string | undefined>(undefined)
  const pickImageAsync = async ()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if(!result.canceled){
      setSelectedImage(result.assets[0].uri)
      console.log(result)
    }else{
      alert("You didn't select any image.")
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={ selectedImage || placeHolderImage}/>
      </View>          
      <View style={styles.footerContainer}>
        <Button
        onPress={pickImageAsync}
        label="Choose A Photo" theme="primary"/>
        <Button label="Use This Photo"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center"
  },
  imageContainer:{
    flex: 1
  },
  footerContainer:{
    flex: 1 / 3,
    alignItems: "center"
  }
});

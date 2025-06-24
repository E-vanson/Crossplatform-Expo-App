import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

// Entry Point Of The App

const placeHolderImage = require("../../assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={placeHolderImage}/>
      </View>          
      <View style={styles.footerContainer}>
        <Button label="Choose A Photo" theme="primary"/>
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

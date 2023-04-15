import React, { useState } from "react";
import { View, ImageBackground, Text, TouchableOpacity} from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { City, Filters, CardItem } from "../components";
import styles from "../assets/styles";
import DEMO from "../assets/data/demo";

export default function Home() {
  let stack : any = {
    bloodType: "A+",
    age: "18-24",
    occupation: "N/A",
    distance: "closest (10 miles)",
    height: "N/A",
  };
  
  const [swiper, setSwiper] = useState<CardStack | null>(null);
  return (
    <ImageBackground
      source={require("/Users/bsidesdfw/Desktop/tinder-expo/assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Filters stack={stack}/>
        </View>

        <CardStack
          loop
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={(newSwiper): void => setSwiper(newSwiper)}>
          {DEMO.filter((item) => {
            for(let key in stack) {
              if(stack[key] != 'N/A')
                if(key == 'bloodType') {
                  if(stack[key] == item.bloodType) return null;
                }
                if(key == 'age') {
                  let temp : string[] = stack[key].split(" ");
                  let temp1 : Number[] = temp.map(emp => parseInt(emp));
                  let actAge : Number = parseInt(item.age == undefined ? "1" : item.age);
                  if(actAge > temp1[0] && actAge < temp1[1]) return null;
                }
            }
            return item;
          }).map((item) => (
            <Card key={item.id} >
              <CardItem
                hasActions={true}
                image={item.image}
                name={item.name}
                description={item.description+ " " +item.bloodType+"  " + stack.bloodType +  " " + item.age}
                matches={item.match}
              />
            </Card>
          ))}
        </CardStack>
      </View>
    </ImageBackground>
  );
};
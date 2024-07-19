import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper'
import { styles } from './styles';
import { slides }  from './slides';

export default function OnBoarding() {

  return (
    <View style={{flex:1}}>
        <Swiper
            paginationStyle={{
                position:"absolute",
                bottom: '20%',
        }}
        dotStyle={{borderWidth:1,borderBottomWidth:2}}
        activeDotColor='#B0E3CF'
        activeDotStyle={{width:20, height:8, borderWidth:1, borderBottomWidth:2}}
        >
            {slides.map((i)=>{
                return(
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{i.title}</Text>
                        <Image source = {i.image} />
                        <Text style={styles.context}>{i.context}</Text>
                    </View>
                )
            })}
        </Swiper>
        <View style ={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.getStartedText}>Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontSize:18,color:'grey'}}>Skip</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
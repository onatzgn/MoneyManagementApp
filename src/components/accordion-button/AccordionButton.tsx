import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, Image } from 'react-native';
import { styles } from './AccordionButton.style';
import Icons from '@assets/Icons';

export const AccordionButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const widthAnim = useRef(new Animated.Value(50)).current;
    const buttonTranslate = useRef(new Animated.Value(0)).current;

    const toggleOpen = () => {
        if (isOpen) {
            Animated.parallel([
                Animated.timing(widthAnim, {
                    toValue: 60,
                    duration: 300,
                    useNativeDriver: false,
                }),
                Animated.timing(buttonTranslate, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        } else {
            Animated.parallel([
                Animated.timing(widthAnim, {
                    toValue: 200,
                    duration: 300,
                    useNativeDriver: false,
                }),
                Animated.timing(buttonTranslate, {
                    toValue: -140,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        }
        setIsOpen(!isOpen);
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.buttonContainer, { width: widthAnim }]}>
                <TouchableOpacity style={styles.roundButton} onPress={toggleOpen}>
                <Image
                            source={Icons.moneyReceive}
                            resizeMode="contain"
                            style={styles.icon}
                            tintColor={'black'}
                        />
                </TouchableOpacity>
                {isOpen && (
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder="Gir" keyboardType="numeric" selectionHandleColor={'black'}/>
                        <TouchableOpacity style={styles.saveButton} onPress={toggleOpen}>
                        <Image
                            source={Icons.moneySave}
                            resizeMode="contain"
                            style={{width:30, height:40}}
                        />
                        </TouchableOpacity>
                    </View>
                )}
            </Animated.View>
        </View>
    );
};

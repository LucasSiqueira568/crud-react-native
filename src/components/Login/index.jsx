import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Text, Image, TextInput, TouchableOpacity, Animated } from "react-native"

import styles from "./style"
export default function App() {
    
    
    const [offeset] = useState(new Animated.ValueXY({ x: 0, y: 80 }))
    const [opacity] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.parallel([
            Animated.spring(offeset.y, {
                toValue: 0,
                speed: 4,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
            })
        ]).start()

    }, [])


    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    style={{
                        width: 140,
                        height: 155,
                    }}
                    source={require('./assets/user.png')}
                />
            </View>
            <Animated.View style={[
                styles.containerForm,
                {
                    transform: [
                        { translateY: offeset.y }

                    ]
                }
            ]}>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail..."
                    autoCorrect={false}
                    onChangeText={() => { }}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha..."
                    autoCorrect={false}
                    onChangeText={() => { }}
                />
                <TouchableOpacity style={styles.btnSubmit}>
                    <Text style={styles.submitText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.registerText}>Criar conta gratuitamente</Text>
                </TouchableOpacity>
            </Animated.View>
        </KeyboardAvoidingView>
    )
}
import React, { useState } from 'react'
import MainAppbar from '../components/MainAppbar'
import { StyleSheet, View } from 'react-native'
import {Button, TextInput } from 'react-native-paper';

export default function Login(){
    const [formData, setFormData] = useState({userName: '', password:  ''})
    const [showError, setShowError] = useState(false)

    const validateAndSubmit = () => {
        setShowError(true)
        if (formData.userName.lenght > 0 && formData.password.length > 8) {
            setFormData({userName: '',password: ''})
            setShowError(false)
        }
    }

    return (
        <>
        <MainAppbar title="Login" />
        <View style={styles.container}>
            <TextInput 
            label="Username" 
            style={styles.input_field}
            value={formData.userName}
            onChangeText={text => setFormData({... formData,userName: text})}
            error={formData.userName.lenght===0 && showError}
            />
            <TextInput 
            label="Password" style={styles.input_field} 
            keyboardType='visible-password' 
            value={formData.password}
            onChangeText={text => setFormData({...formData,password: text})}
            error={formData.password.lenght < 8 && showError}
            />
            <Button mode="contained" style={styles.button} onPress={validateAndSubmit}>Submit</Button>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 24
    },
    Input_field: {
        backgroundColor: '#fcfcfc',
        margin: (16,8,0,8)
    },
    button: {
        margin: (16,8,0,8)
    }

});
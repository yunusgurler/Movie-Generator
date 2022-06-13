import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider'
import { TouchableOpacity } from 'react-native-web'

const home = () => {
    return (


        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <Slider
                    style={styles.sliderYear}
                    minimumValue={1970}
                    maximumValue={2022}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000" />

                <Slider
                    style={styles.sliderIMDB}
                    minimumValue={1970}
                    maximumValue={2022}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000" />
                <TouchableOpacity style={styles.button}>GO</TouchableOpacity>
            </View>

        </View>

    )
}

export default home

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2d3436',
        width: '100%',
        height: '100%',

    },
    inputContainer: {
        flex: 1,

        alignItems: 'center'
    },
    sliderIMDB: {
        position: 'absolute',
        width: '60%',
        top: '60%',
    },
    sliderYear: {
        position: 'absolute',
        width: '60%',
        top: '48%',
    },
    button: {
        top: '70%',
    }
})
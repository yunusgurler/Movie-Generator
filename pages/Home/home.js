import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Slider from '@react-native-community/slider'
import { TouchableOpacity } from 'react-native-web'


const home = () => {


    const [sliderYearValue, setSliderYearValue] = useState(1970);
    const [sliderIMDBValue, setSliderIMDBValue] = useState(0);


    return (


        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>THE APP</Text>

                
                <Text style={styles.sliderYearValue}>Year: {sliderYearValue}</Text>
                <Slider
                    style={styles.sliderYear}
                    minimumValue={1970}
                    maximumValue={2022}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    step={1}
                    value={sliderYearValue}
                    onValueChange={(sliderYearValue) => setSliderYearValue(sliderYearValue)}
                    thumbTintColor={'#FFA500'}
                />


                <Text style={styles.sliderIMDBValue}>IMDB: {sliderIMDBValue}</Text>
                <Slider
                    style={styles.sliderIMDB}
                    minimumValue={0}
                    maximumValue={10}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    step={0.2}
                    value={sliderIMDBValue}
                    onValueChange={(sliderIMDBValue) => setSliderIMDBValue(sliderIMDBValue)}
                    thumbTintColor={'#FFA500'}
                />
                <TouchableOpacity style={styles.button}><Text>GO!</Text></TouchableOpacity>

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
        width: '55%',
        top: '60%',
    },
    sliderYear: {
        position: 'absolute',
        width: '55%',
        top: '48%',
    },
    button: {
        top: '70%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        height: '5%',
        backgroundColor: '#FFA500',
        borderRadius: 100,
    },
    sliderYearValue: {
        position: 'absolute',
        top: '45%',
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
    },
    sliderIMDBValue: {
        position: 'absolute',
        top: '57%',
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
    },
    title: {
        color: 'white',
        position: 'absolute',
        top: '15%',
        fontSize: 36,
        fontFamily: 'Myriad Pro'
    }


})
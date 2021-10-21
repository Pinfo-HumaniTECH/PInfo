import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button, TouchableHighlight } from 'react-native';

function ProfileScreen(props) {
    return (
        <SafeAreaView 
            style={{
                backgroundColor: "#fff",
                flex: 1,
                fontFamily: "Arial",
            }}>
                <View style={{
                    backgroundColor: "white",
                    flex: .2,
                    justifyContent: 'center',            
                }}>
                    <Text style={styles.subheaderTitle}> Profile </Text>
                </View>
                <View>
                    <Text style={{textAlign: 'center'}}> John Doe </Text>
                </View>
                <View style={{textAlign: 'center',}}>
                    <Text style={styles.regularText}> San Francisco, California </Text>
                </View>
                <View style = {{flex: .25}}> 
                    <TouchableHighlight>
                        <View style={styles.clickableButton}>
                            <Text style={styles.regularText, {color: 'white', textAlign: 'center'}} > Book an Appointment </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <Text style={styles.regularText}> Last Appointment: November 3, 2000 </Text>
                <View style={styles.roundedRectangle}>
                    <Text style={styles.subheaderTitle}> My Current Medications </Text>
                </View>
                <View style={styles.roundedRectangle}>
                    <Text style={styles.subheaderTitle}> My Physicians </Text>
                </View>
                <View style={styles.roundedRectangle}>
                    <Text style={styles.subheaderTitle}> My Old Medications </Text>
                </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    roundedRectangle: {
        backgroundColor: "#F1F9FF",
        flex: 1,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40, 
        borderRadius: 25,   
    },
    subheaderTitle: {
        color: "#3476EB", 
        fontWeight: "bold", 
        textAlign: "center", 
        paddingTop: 10, 
        fontSize: 18 
    },
    regularText: {
        color: "#3476EB", 
        textAlign: "center", 
        // paddingTop: 10, 
        fontSize: 14 
    },
    clickableButton: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 25, 
        backgroundColor: 'blue',
        marginLeft: 40,
        marginRight: 40
    }
  });

export default ProfileScreen;
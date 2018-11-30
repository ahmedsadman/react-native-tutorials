// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}; 

// Styling
const styles = {
    viewStyle: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        padding: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        elevation: 4, // should be used for android
        shadowOpactiy: 0.2,
        position: 'relative'
    },

    textStyle: {
        fontSize: 30
    }
};

// Make the component available to other parts of the app
export default Header;

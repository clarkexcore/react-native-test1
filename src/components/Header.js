import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerTitle}</Text>
        </View>
    );

const styles = {
    textStyle: {
        fontSize: 25,
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
};

export default Header; 

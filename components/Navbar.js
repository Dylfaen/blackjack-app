import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function Navbar(props) {

    let buttons = props.pages.map(function (page) {
        return <Button title={page.title} onPress={function () {
            props.setIdPage(page.id)
        }} />
    });

    return <View style={styles.navbar}>
        {buttons}
    </View>
}

const styles = StyleSheet.create({
    navbar: {
        height: 40,
        width: '100%',
        backgroundColor: "#0055FF",
        flexDirection: 'row',
        justifyContent: "space-around"
    }
})
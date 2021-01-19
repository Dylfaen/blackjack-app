import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

export default function Page1() {

    const tableau = [
        "Table ",
        "Table 2",
        "Table 3",
        "Table 4",
    ];

    const textes = tableau.map(function (element) {
        console.log("iteration table", element)

        return <Text>{element}</Text>

    })

    console.log("textes", textes)

    return <View>
        {textes}
    </View>
}
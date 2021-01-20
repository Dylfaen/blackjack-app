import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

function Page1() {

    const tableau = [
        "Table 1",
        "Table 2",
        "Table 3",
    ];

    const textes = tableau.map(function (element) {

        return <Text>{element}</Text>

    })

    console.log("textes", textes)

    return <View>
        <Text>Page1</Text>
        {textes}
    </View>
}

export default {
    id: "page1",
    title: "Page 1",
    component: Page1
}
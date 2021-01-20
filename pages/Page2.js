import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native'

function Page2() {


    const [texte, setTexte] = useState("");

    return <View>
        <Text>Page 2</Text>
        <Text>
            {texte}
        </Text>
        <TextInput style={styles.input} value={texte} onChangeText={setTexte}/>
    </View>
}


const styles = StyleSheet.create({
    input: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: 'black'
    }
})


export default {
    id: "page2",
    title: "Page 2",
    component: Page2
}
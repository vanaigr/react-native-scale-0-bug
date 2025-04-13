import { AppRegistry } from 'react-native';
import { name as appName } from './app.json'
import React from 'react'
import { View, Text, TouchableWithoutFeedback, TextInput } from 'react-native'

function App() {
    const [value, setValue] = React.useState('0.9')
    const [scale, setScale] = React.useState(0.9)

    return <View>
        <View style={{ backgroundColor: 'green', marginTop: 50 }}>
            <View style={{ height: 200, transform: [{ scaleY: 0 }] }}>
                <TouchableWithoutFeedback onPress={() => console.log('1 clicked')}>
                    <View style={{ flex: 1, backgroundColor: 'red' }}>
                        <Text>View 1</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
        <View style={{ backgroundColor: 'blue', marginTop: 50 }}>
            <View style={{ height: 200, transform: [{ scaleY: scale }] }}>
                <TouchableWithoutFeedback onPress={() => console.log('2 clicked')}>
                    <View style={{ flex: 1, backgroundColor: 'red' }}>
                        <Text>View 2</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
        <View>
            <Text>Scale:</Text>
            <TextInput value={value} onChangeText={it => {
                setValue(it)
                const p = parseFloat(it)
                if(isFinite(p)) setScale(p)
            }}/>
        </View>
    </View>
}

AppRegistry.registerComponent(appName, () => App);


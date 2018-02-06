import * as React from 'react'
import {Provider} from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import store from './redux/store'

import Container1 from './components/container1'

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Container1/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

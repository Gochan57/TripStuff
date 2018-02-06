import * as React from 'react'
import {
    Button,
    Text,
    View
} from 'react-native'
import {bindActionCreators} from 'redux'

import * as Model from '../models'
import * as Actions from '../redux/actions'
import {
    connect,
    Dispatch
} from 'react-redux';

export interface Container1Props {
}

export interface DispatchProps {
    someAction1: () => void,
    someAction2: () => void,
}

interface StateProps {
    field: boolean
}

interface State {

}

class Container1 extends React.Component<Container1Props & DispatchProps & StateProps, State> {
    constructor (props: Container1Props & DispatchProps & StateProps) {
        super(props)
        this.state = {}
        console.log('props:', props)
    }

    render () {
        return (
            <View>
                <Text>{'field: ' + this.props.field}</Text>
                <Button
                    onPress={() => {this.props.someAction1()}}
                    title={'True'}/>
                <Button
                    onPress={() => {this.props.someAction2()}}
                    title={'False'}/>
            </View>
        )
    }
}

const mapStateToProps = (state: Model.AppState, ownProps: Container1Props): StateProps => {
    return {
        field: state.reducer1.field
    }
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
    someAction1: () => dispatch(Actions.someAction1()),
    someAction2: () => dispatch(Actions.someAction2())
})

export default connect(mapStateToProps, mapDispatchToProps)(Container1)

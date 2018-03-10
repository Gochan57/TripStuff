import * as React from 'react'
import {
    View
} from 'react-native'
import CheckBox from 'react-native-checkbox'
import * as Model from '../models'
import * as Actions from '../redux/actions'
import {
    Dispatch
} from 'redux'
import {
    connect,
} from 'react-redux';

export interface TripPropertiesProps {
}

export interface DispatchProps {
    initApp: () => void
}

interface StateProps {
    packs: Model.StuffPack[]
}

class TripPropertiesContainer extends React.Component<TripPropertiesProps & DispatchProps & StateProps, void> {
    constructor (props: TripPropertiesProps & DispatchProps & StateProps) {
        super(props)
    }

    componentWillMount () {
        this.props.initApp()
    }

    renderProperty (pack: Model.StuffPack) {
        return (
            <CheckBox
                label={pack.rus}
                checked={pack.selected}
                onChange={(checked) => {
                    this.props.toggleTripProperty(pack.group)
                }}
            />
        )
    }

    render () {
        return (
            <View>
                {this.props.packs.map(pack => this.renderProperty(pack))}
            </View>
        )
    }
}

const mapStateToProps = (state: Model.AppState) => {
    return {
        packs: state.packs
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        initApp: () => dispatch(Actions.initApp),
    }
}

export const TripProperties = connect(mapStateToProps, mapDispatchToProps)(TripPropertiesContainer)

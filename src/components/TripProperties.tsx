import * as React from 'react'
import {
    View
} from 'react-native'
import CheckBox from 'react-native-checkbox'
import * as Model from '../models'
import * as Actions from '../redux/actions'
import {
    connect,
} from 'react-redux';

export interface TripPropertiesProps {
}

export interface DispatchProps {
    toggleTripProperty: (group: string) => void
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
                key={pack.group}
                label={pack.rus}
                checked={pack.selected}
                onChange={(checked: boolean) => {
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
        packs: state.stuff.packs
    }
}

export const TripProperties = connect(mapStateToProps, {...Actions})(TripPropertiesContainer)

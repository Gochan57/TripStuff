import * as React from 'react'
import {
    View
} from 'react-native'
import CheckBox from 'react-native-checkbox'
import * as Model from '../models'
import * as Actions from '../redux/actions'
import {
    connect,
    Dispatch
} from 'react-redux';
import {TripProperty} from '../models/state';

export interface TripPropertiesProps {
}

export interface DispatchProps {
    toggleTripProperty: (property: TripProperty) => void,
}

interface StateProps {
    tripProperties: TripProperty[]
}

interface State {

}

class TripProperties extends React.Component<TripPropertiesProps & DispatchProps & StateProps, State> {
    constructor (props: TripPropertiesProps & DispatchProps & StateProps) {
        super(props)
        this.state = {}
        console.log('props:', props)
    }

    propertyLabel = {
        airplane: 'самолет',
        sea: 'море',
        skiing: 'горнолыжка',
    }

    renderProperty (property: TripProperty) {
        console.log('label', this.propertyLabel[property])
        console.log('checked', !!this.props.tripProperties.find(p => p === property))
        return (
            <CheckBox
                label={this.propertyLabel[property]}
                checked={!!this.props.tripProperties.find(p => p === property)}
                onChange={(checked) => {this.props.toggleTripProperty(property)}}
            />
        )
    }

    render () {
        const tripProperties: TripProperty[] = ['airplane', 'sea', 'skiing']
        return (
            <View>
                {tripProperties.map(property => this.renderProperty(property))}
            </View>
        )
    }
}

const mapStateToProps = (state: Model.AppState, ownProps: TripPropertiesProps): StateProps => {
    return {
        tripProperties: state.state.tripProperties
    }
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
    toggleTripProperty: (property: TripProperty) => dispatch(Actions.toggleTripProperty(property)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TripProperties)

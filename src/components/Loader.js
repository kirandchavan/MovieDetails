import React from 'react'
import { ActivityIndicator } from 'react-native'
import AppStyles from '../themes/AppStyles'

const Loader = () => {
    return (
        <ActivityIndicator
            color="#8BA88E"
            size="large"
            style={AppStyles.loaderStyle}
        />
    )
}

export default Loader;

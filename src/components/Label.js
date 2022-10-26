import React from 'react'
import { Text } from 'react-native'

const Label = ({
    label, labelStyle, onPress,
    numberOfLines, ellipsizeMode
}) => {
    return (
        <Text
            onPress={onPress}
            style={labelStyle}
            numberOfLines={numberOfLines}
            ellipsizeMode={ellipsizeMode}
        >{label}</Text>
    );
};

export default Label
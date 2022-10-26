import React, { forwardRef } from 'react'
import { TextInput, Text } from 'react-native'
import AppStyles from '../themes/AppStyles'

const Input = forwardRef((props, ref) => {
    return (
        <>
            <TextInput
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderTextColor}
                value={props.value}
                onChangeText={props.onChangeText}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                ref={ref}
                secureTextEntry={props.secureTextEntry}
                autoCorrect={props.autoCorrect}
                autoCapitalize={props.autoCapitalize}
                keyboardType={props.keyboardType}
                returnKeyLabel={props.returnKeyLabel}
                returnKeyType={props.returnKeyType}
                underlineColorAndroid='transparent'
                onSubmitEditing={props.onSubmitEditing}
                editable={props.editable}
                maxLength={props.maxLength}
                style={props.inputStyle}
                multiline={props.multiline}
            />
            {props.errorMessage && <Text style={AppStyles.errorMessage}>{props.errorMessage}</Text>}
        </>
    )
})

export default Input

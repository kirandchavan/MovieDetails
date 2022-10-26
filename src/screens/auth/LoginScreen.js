import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Layouts from '../../themes/Layouts'
import CustomStatusBar from '../../components/CustomStatusBar'
import Colors from '../../themes/Colors'
import Input from '../../components/Input'
import { buttonTitles, labels, placeholders } from '../../constants/TextConstants'
import AppStyles from '../../themes/AppStyles'
import Metrics from '../../themes/Metrics'
import AppButton from '../../components/AppButton'
import AppFontSizes from '../../themes/AppFontSizes'
import firestore from '@react-native-firebase/firestore';
import { retrieveUserSession, storeUserSession, validateEmail } from '../../utils/GlobalFunctions'
import { useNavigation } from '@react-navigation/native'
import Label from '../../components/Label'

/**
    * Please note the credentials are already stored and we are accessing the details from collection.
    * we will validate email and password with db
    * client side this will be stored securely
    * 
    * we can control this logic in splash screen
    */


const LoginScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    const passwordInput = useRef();

    useEffect(() => {
        getUserDetails()
    }, [])

    const getUserDetails = async () => {
        const userDetails = await retrieveUserSession()
        if (userDetails) {
            navigation.replace('Dashboard')
        }
    }

    /**
     * validate email password
     */
    const onLogin = async () => {
        const user = await firestore().collection('Users').doc('testApp').get()
        if (validateEmail(email) && password === user.data().password) {
            storeUserSession(user.data())
            navigation.replace('Dashboard')
        } else {
            setLoginError(labels.LOGINERROR)
        }
    }

    const onEmailChange = (email) => {
        setEmail(email)
        setLoginError('')
    }

    const onPasswordChange = (password) => {
        setPassword(password)
        setLoginError('')
    }

    return (
        <View style={[Layouts.flexContainer]}>
            <CustomStatusBar statusBarColor={Colors.WHITE} barStyle='dark-content' />
            <View style={[Layouts.centerContainer, Metrics.mh24]}>
                <Input
                    placeholder={placeholders.EMAIL}
                    value={email}
                    onChangeText={(text) => onEmailChange(text)}
                    multiline={false}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    autoCapitalize={'none'}
                    keyboardType={'email-address'}
                    returnKeyLabel="next"
                    returnKeyType="next"
                    ref={passwordInput}
                    onSubmitEditing={() => { passwordInput.current.focus() }}
                    inputStyle={[AppStyles.input, Metrics.plr20]}
                />
                <Input
                    placeholder={placeholders.EMAIL}
                    value={password}
                    onChangeText={(text) => onPasswordChange(text)}
                    returnKeyType="done"
                    keyboardType="default"
                    secureTextEntry={true}
                    multiline={false}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    underlineColorAndroid="transparent"
                    ref={passwordInput}
                    onSubmitEditing={onLogin}
                    inputStyle={[AppStyles.input, Metrics.plr20, Metrics.mt24]}
                />

                <Label labelStyle={[AppFontSizes.mulishRegularF12, Metrics.mt16, { color: Colors.ERROR }]} label={loginError} />

                <AppButton
                    title={buttonTitles.LOGIN}
                    showLoader={false}
                    styles={AppStyles.loginBtn}
                    textStyle={[AppFontSizes.mulishRegularF14, { color: Colors.WHITE }]}
                    onPress={onLogin}
                />

            </View>
        </View>
    )
}

export default LoginScreen
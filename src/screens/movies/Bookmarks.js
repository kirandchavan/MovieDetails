import { View, Text } from 'react-native'
import React from 'react'
import CustomStatusBar from '../../components/CustomStatusBar'
import Colors from '../../themes/Colors'
import Headers from '../../components/Header'
import { headerName } from '../../constants/TextConstants'
import Layouts from '../../themes/Layouts'
import Metrics from '../../themes/Metrics'
import AppButton from '../../components/AppButton'
import AppStyles from '../../themes/AppStyles'
import AppFontSizes from '../../themes/AppFontSizes'
import { useNavigation } from '@react-navigation/native'
import { removeUserSession } from '../../utils/GlobalFunctions'

const Bookmarks = () => {
    const navigation = useNavigation()

    const onLogout = async () => {
        await removeUserSession();
        navigation.replace('LoginScreen')
    }

    return (
        <View style={[Layouts.flexContainer]}>
            <CustomStatusBar statusBarColor={Colors.WHITE} barStyle='dark-content' />
            <Headers label={headerName.LOGOUT} />
            <View style={[Metrics.mh24, Metrics.mt24]}>
                <AppButton
                    title={headerName.LOGOUT}
                    showLoader={false}
                    styles={AppStyles.loginBtn}
                    textStyle={[AppFontSizes.mulishRegularF14, { color: Colors.WHITE }]}
                    onPress={onLogout}
                />
            </View>
        </View>
    )
}

export default Bookmarks

import React from 'react'
import { ScrollView, View } from 'react-native'
import CustomStatusBar from '../../components/CustomStatusBar'
import Headers from '../../components/Header'
import Colors from '../../themes/Colors'
import Layouts from '../../themes/Layouts'
import AssetImages from '../../constants/ImageConstants'
import { headerName } from '../../constants/TextConstants'
import Metrics from '../../themes/Metrics'
import CarousalCards from '../sharedComponents/CarousalCards'

const DashboardScreen = () => {
    return (
        <View style={[Layouts.flexContainer]}>
            <CustomStatusBar statusBarColor={Colors.WHITE} barStyle='dark-content' />
            <Headers
                label={headerName.DASHBOARD_HEADER}
                leftIcon={AssetImages.menu}
                rightIcon={AssetImages.notification}
            />
            <ScrollView key={'test'}>
                <View style={[Metrics.mt16]}>
                    <CarousalCards />
                </View>
            </ScrollView>
        </View>
    )
}

export default DashboardScreen;

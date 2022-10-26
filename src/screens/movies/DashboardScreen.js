import React, { useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import CustomStatusBar from '../../components/CustomStatusBar'
import Headers from '../../components/Header'
import Colors from '../../themes/Colors'
import Layouts from '../../themes/Layouts'
import AssetImages from '../../constants/ImageConstants'
import { headerName } from '../../constants/TextConstants'
import Metrics from '../../themes/Metrics'
import CarousalCards from '../sharedComponents/CarousalCards'

import * as action from '../movies/redux/MoviesActions'
import { connect } from 'react-redux'

const DashboardScreen = ({ trandingMovies, getTraindingMovies, popularMovies, getPopularMovies }) => {

    useEffect(() => {
        async function callAPIs() {
            getTraindingMovies()
            getPopularMovies()
        }
        callAPIs()
    }, [])

    return (
        <View style={[Layouts.flexContainer]}>
            <CustomStatusBar statusBarColor={Colors.WHITE} barStyle='dark-content' />
            <Headers
                label={headerName.DASHBOARD_HEADER}
                leftIcon={AssetImages.menu}
                onLeftIconPress={() => console.log("Drawer icon pressed")}
                onRightIconPress={() => console.log("notification icon pressed")}
                rightIcon={AssetImages.notification}
            />
            <ScrollView key={'test'}>
                <View style={[Metrics.mt16]}>
                    <CarousalCards data={trandingMovies} popular={popularMovies} />
                </View>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = ({ moviesReducer }) => {
    const { trandingMoviesLoading, trandingMoviesError, trandingMovies, popularMovies } = moviesReducer;
    return { trandingMoviesLoading, trandingMoviesError, trandingMovies, popularMovies }
}

const mapActionsToProps = (dispatch) => ({
    getTraindingMovies: (params) => { dispatch(action.getTraindingMovies(params)) },
    getPopularMovies: (params) => { dispatch(action.getPopularMovies(params)) }
})

export default connect(mapStateToProps, mapActionsToProps)(DashboardScreen)

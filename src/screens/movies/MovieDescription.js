import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native'
import CustomStatusBar from '../../components/CustomStatusBar'
import AssetImages from '../../constants/ImageConstants'
import AppStyles from '../../themes/AppStyles'
import Colors from '../../themes/Colors'
import Layouts from '../../themes/Layouts'
import DescriptionCard from '../sharedComponents/DescriptionCard'

import * as action from '../movies/redux/MoviesActions'
import { connect } from 'react-redux'
import ImagePath from '../../utils/ImagePath'
import Metrics from '../../themes/Metrics'

const height = Dimensions.get('window').height

const MovieDescription = ({ route, getCastOfMovie, casts, getMovieDetails, movieDetail }) => {
    const navigation = useNavigation()

    useEffect(() => {
        async function callAPIs() {
            getMovieDetails({ movieId: route.params.movieId })
            getCastOfMovie({ movieId: route.params.movieId })
        }
        callAPIs()
    }, [])

    return (
        <View style={[Layouts.flexContainer]}>
            <CustomStatusBar statusBarColor={Colors.WHITE} barStyle='dark-content' noHeightRequired={true} />
            <ImageBackground source={ImagePath(movieDetail.poster_path)} resizeMode="cover" style={{ flex: 1, width: '100%' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 50, left: 20, zIndex: 1 }} hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}>
                    <Image source={AssetImages.whiteBack} style={AppStyles.backIconHeader} />
                </TouchableOpacity>
                <View style={[Metrics.blr10, Layouts.flexFill, { backgroundColor: 'white', marginTop: height * 0.33 }]}>
                    <DescriptionCard casts={casts} movieDetail={movieDetail} />
                </View>
            </ImageBackground>
        </View>
    )
}

const mapStateToProps = ({ moviesReducer }) => {
    const { castsLoading, castsError, casts, movieDetail } = moviesReducer;
    return { castsLoading, castsError, casts, movieDetail }
}

const mapActionsToProps = (dispatch) => ({
    getMovieDetails: (params) => { dispatch(action.getMovieDetails(params)) },
    getCastOfMovie: (params) => { dispatch(action.getCastOfMovie(params)) }
})

export default connect(mapStateToProps, mapActionsToProps)(MovieDescription)

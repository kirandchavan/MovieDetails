import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, Image, Pressable, StyleSheet, ActivityIndicator, RefreshControl } from 'react-native'
import CustomStatusBar from '../../components/CustomStatusBar'
import Headers from '../../components/Header'
import Input from '../../components/Input'
import Label from '../../components/Label'
import AssetImages from '../../constants/ImageConstants'
import { headerName, placeholders, subHeadings } from '../../constants/TextConstants'
import AppFontSizes from '../../themes/AppFontSizes'
import AppStyles from '../../themes/AppStyles'
import Colors from '../../themes/Colors'
import Layouts from '../../themes/Layouts'
import Metrics from '../../themes/Metrics'
import ListCard from '../sharedComponents/ListCard'
import { debounce } from "lodash";

import * as action from '../movies/redux/MoviesActions'
import { connect, useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const SearchMovies = ({ }) => {
    const { popularMovies } = useSelector(state => state.moviesReducer);
    const { searchData } = useSelector(state => state.moviesReducer);
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const [loader, setLoader] = useState(false)
    const [isRefresh, setIsRefresh] = useState(false)
    const [page, setPage] = useState(0);
    const [isEmpty, setIsEmpty] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation()

    const debounceSearching = useCallback(debounce(callSearchAPI, 500), []);

    function callSearchAPI(params) {
        dispatch(action.searchMovieName({ search: params }))
        setIsRefresh(false)
    }

    const clearSearch = () => {
        setSearch('')
    }

    const onTextChange = (text) => {
        setSearch(text)
        debounceSearching(text);
    }

    const renderTrandingMovies = (item, index) => {
        return (
            <Pressable onPress={() => navigation.navigate('MovieDescription', { movieId: item.id })} key={index}
                style={[AppStyles.searchBorder, { borderBottomWidth: index === popularMovies.length - 1 ? 0 : StyleSheet.hairlineWidth }]}>
                <Label label={item.title} labelStyle={[AppFontSizes.mulishRegularF14]} numberOfLines={2} />
            </Pressable>
        )
    }

    const onRefresh = async () => {
        setIsRefresh(true)
        dispatch(action.getPopularMovies())
        setIsRefresh(false)
    }

    return (
        <View style={[Layouts.flexContainer]}>
            <CustomStatusBar statusBarColor={Colors.WHITE} barStyle='dark-content' />
            <Headers label={headerName.TRANDING_MOVIES} />
            <View style={[Layouts.flexContainer]}>
                <View style={[Metrics.mh24, Layouts.row,]}>
                    <Pressable style={{ position: 'absolute', left: 10, top: 10, }}>
                        <Image source={AssetImages.search} style={AppStyles.searchIcons} />
                    </Pressable>
                    <Input
                        placeholder={placeholders.SEARCH}
                        value={search}
                        onChangeText={(text) => onTextChange(text)}
                        accessibilityRole="search"
                        returnKeyType="search"
                        keyboardType="default"
                        multiline={false}
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        inputStyle={AppStyles.input}
                    />
                    {search.length > 0 && <Pressable onPress={clearSearch} style={{ position: 'absolute', right: 10, top: 10, }}>
                        <Image source={AssetImages.close} style={AppStyles.searchIcons} />
                    </Pressable>}
                </View>
                <View style={[Metrics.mt16, Metrics.mh24]}>
                    {!search && <Label
                        label={subHeadings.TRANDING}
                        labelStyle={[AppFontSizes.mulishBoldTitleF14, AppStyles.titleText]}
                        numberOfLines={2}
                    />}

                    <View style={[Metrics.mt6, Metrics.mb50]}>
                        <View style={{ marginBottom: 15 }}>
                            <ListCard
                                data={search.length > 0 ? searchData : popularMovies}
                                extraData={search.length > 0 ? searchData : popularMovies}
                                renderItem={renderTrandingMovies}
                                isHorizontal={false}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                // onEndReached={onScrollHandler} // due to time constraint not added (pagination logic)
                                refreshControl={
                                    <RefreshControl
                                        refreshing={isRefresh}
                                        onRefresh={onRefresh}
                                    />
                                }
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

// const mapStateToProps = ({ moviesReducer }) => {
//     const { popularMovies } = moviesReducer;
//     return { popularMovies }
// }

// const mapActionsToProps = (dispatch) => ({
//     searchMovieName: (params) => { dispatch(action.searchMovieName(params)) },
// })

// export default connect(mapStateToProps, mapActionsToProps)(SearchMovies)

export default SearchMovies
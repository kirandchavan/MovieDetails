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

const SearchMovies = ({ }) => {
    const { popularMovies } = useSelector(state => state.moviesReducer);
    const { searchData } = useSelector(state => state.moviesReducer);
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const [loader, setLoader] = useState(false)
    const [isRefresh, setIsRefresh] = useState(false)
    const [page, setPage] = useState(0);
    const [isEmpty, setIsEmpty] = useState(false)

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
        debounceSearching(search);
    }

    const renderTrandingMovies = (item, index) => {
        return (
            <Pressable onPress={() => { alert("progress") }} style={{
                padding: 15,
                paddingLeft: 0,
                borderBottomWidth: index === popularMovies.length - 1 ? 0 : StyleSheet.hairlineWidth,
                borderBottomColor: Colors.BORDER
            }}>
                <Label
                    label={item.title}
                    labelStyle={[AppFontSizes.mulishRegularF14]}
                    numberOfLines={2}
                />
            </Pressable>
        )

    }

    const onRefresh = async () => {
        setIsRefresh(true)
        dispatch(action.getPopularMovies())
        setIsRefresh(false)
    }

    const renderLoader = () => {
        return (
            <View style={Metrics.mt15}>
                {loader && <ActivityIndicator size={'small'} color={Colors.BLACK} style={Layouts.selfCenter} />}
            </View>
        )
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
                    <Label
                        label={subHeadings.TRANDING}
                        labelStyle={[AppFontSizes.mulishBoldTitleF14, AppStyles.titleText]}
                        numberOfLines={2}
                    />

                    <View style={[Metrics.mt6, Metrics.mb50]}>
                        <View style={{ marginBottom: 15 }}>
                            <ListCard
                                data={search.length > 0 ? searchData : popularMovies}
                                extraData={search.length > 0 ? searchData : popularMovies}
                                renderItem={renderTrandingMovies}
                                isHorizontal={false}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                // ListEmptyComponent={renderEmptyComponent}
                                // onEndReached={onScrollHandler} // due to time constraint not added (pagination logic)
                                onEndThreshold={0}
                                ListFooterComponent={renderLoader}
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

const results = [
    {
        "adult": false,
        "backdrop_path": "/qxeqKcVBWnQxUp1w6fwWcxZEA6m.jpg",
        "id": 436270,
        "title": "Black Adam",
        "original_language": "en",
        "original_title": "Black Adam",
        "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
        "poster_path": "/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
        "media_type": "movie",
        "genre_ids": [
            28,
            12,
            14
        ],
        "popularity": 6041.545,
        "release_date": "2022-10-19",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 431
    },
    {
        "adult": false,
        "backdrop_path": "/4O9kFXsBjlxtgzXWHfgMS9CjhbN.jpg",
        "id": 619730,
        "title": "Don't Worry Darling",
        "original_language": "en",
        "original_title": "Don't Worry Darling",
        "overview": "Alice and Jack are lucky to be living in the idealized community of Victory, the experimental company town housing the men who work for the top-secret Victory Project and their families. But when cracks in their idyllic life begin to appear, exposing flashes of something much more sinister lurking beneath the attractive façade, Alice can’t help questioning exactly what they’re doing in Victory, and why.",
        "poster_path": "/9BXYLjXtSipBp2GfAlsri4i8hPC.jpg",
        "media_type": "movie",
        "genre_ids": [
            53,
            9648,
            18,
            878
        ],
        "popularity": 256.333,
        "release_date": "2022-09-21",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 499
    },
    {
        "adult": false,
        "backdrop_path": "/c8V4NFf9YsrRmqGHXBAQFrbVHXW.jpg",
        "id": 800939,
        "title": "Ticket to Paradise",
        "original_language": "en",
        "original_title": "Ticket to Paradise",
        "overview": "A divorced couple teams up and travels to Bali to stop their daughter from making the same mistake they think they made 25 years ago.",
        "poster_path": "/ay76PwinexdVZt7WpRK5udacTm3.jpg",
        "media_type": "movie",
        "genre_ids": [
            35,
            10749
        ],
        "popularity": 232.212,
        "release_date": "2022-09-08",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 115
    },
    {
        "adult": false,
        "backdrop_path": "/tSxbUnrnWlR5dQvUgqMI7sACmFD.jpg",
        "id": 779782,
        "title": "The School for Good and Evil",
        "original_language": "en",
        "original_title": "The School for Good and Evil",
        "overview": "Best friends Sophie and Agatha navigate an enchanted school for young heroes and villains — and find themselves on opposing sides of the battle between good and evil.",
        "poster_path": "/6oZeEu1GDILdwezmZ5e2xWISf1C.jpg",
        "media_type": "movie",
        "genre_ids": [
            14,
            28,
            18
        ],
        "popularity": 496.895,
        "release_date": "2022-10-19",
        "video": false,
        "vote_average": 7.444,
        "vote_count": 288
    },
    {
        "adult": false,
        "backdrop_path": "/xmAqPRZvEDY0NoGmP4SUnn1YARE.jpg",
        "id": 663712,
        "title": "Terrifier 2",
        "original_language": "en",
        "original_title": "Terrifier 2",
        "overview": "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
        "poster_path": "/nzGU9YcZYbusvIMAZzx13X38jey.jpg",
        "media_type": "movie",
        "genre_ids": [
            27,
            53
        ],
        "popularity": 2357.513,
        "release_date": "2022-10-06",
        "video": false,
        "vote_average": 7.802,
        "vote_count": 63
    },
    {
        "adult": false,
        "backdrop_path": "/mifoXrO18fyEBPYn9UqNduunod9.jpg",
        "id": 869025,
        "title": "Raymond & Ray",
        "original_language": "en",
        "original_title": "Raymond & Ray",
        "overview": "Half brothers Raymond and Ray reunite when their estranged father dies—and discover that his final wish was for them to dig his grave. Together, they process who they’ve become as men, both because of their father and in spite of him.",
        "poster_path": "/fdKZmSQHD17JjGUYkluhpttgJRi.jpg",
        "media_type": "movie",
        "genre_ids": [
            18,
            35
        ],
        "popularity": 69.168,
        "release_date": "2022-10-14",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 37
    },
    {
        "adult": false,
        "backdrop_path": "/rl7Jw8PjhSIjArOlDNv0JQPL1ZV.jpg",
        "id": 851644,
        "title": "20th Century Girl",
        "original_language": "ko",
        "original_title": "20세기 소녀",
        "overview": "Yeon-du asks her best friend Bora to collect all the information she can about Baek Hyun-jin while she is away in the U.S. for heart surgery. Bora decides to get close to Baek's best friend, Pung Woon-ho first. However, Bora's clumsy plan unfolds in an unexpected direction. In 1999, a year before the new century, Bora, who turns seventeen, falls into the fever of first love.",
        "poster_path": "/od22ftNnyag0TTxcnJhlsu3aLoU.jpg",
        "media_type": "movie",
        "genre_ids": [
            10749,
            18
        ],
        "popularity": 42.69,
        "release_date": "2022-10-06",
        "video": false,
        "vote_average": 8.71,
        "vote_count": 81
    },
    {
        "adult": false,
        "backdrop_path": "/oxUG1YVKDXz8GqC57LuhZHLVscf.jpg",
        "id": 949423,
        "title": "Pearl",
        "original_language": "en",
        "original_title": "Pearl",
        "overview": "Trapped on her family’s isolated farm, Pearl must tend to her ailing father under the bitter and overbearing watch of her devout mother. Lusting for a glamorous life like she’s seen in the movies, Pearl’s ambitions, temptations and repressions collide.",
        "poster_path": "/inxOR04CQXFVIKvn6cNu99d9Rg9.jpg",
        "media_type": "movie",
        "genre_ids": [
            27,
            53,
            18
        ],
        "popularity": 161.816,
        "release_date": "2022-09-16",
        "video": false,
        "vote_average": 7.036,
        "vote_count": 69
    },
    {
        "adult": false,
        "backdrop_path": "/zt6sKnx9dEiRCb7oVMlfmmMGJMO.jpg",
        "id": 718930,
        "title": "Bullet Train",
        "original_language": "en",
        "original_title": "Bullet Train",
        "overview": "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
        "poster_path": "/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
        "media_type": "movie",
        "genre_ids": [
            28,
            35,
            53
        ],
        "popularity": 2412.858,
        "release_date": "2022-07-03",
        "video": false,
        "vote_average": 7.529,
        "vote_count": 1972
    },
    {
        "adult": false,
        "backdrop_path": "/u6WzMRpTkGzIlfsPNtDfIBfEy9z.jpg",
        "id": 848791,
        "title": "The Stranger",
        "original_language": "en",
        "original_title": "The Stranger",
        "overview": "Two strangers strike up a conversation on a long journey. One is a suspect in an unsolved missing person’s case and the other an undercover operative on his trail. Their uneasy friendship becomes the core of this tightly wrought thriller, which is based on the true story of one of the largest investigations and undercover operations in Australia.",
        "poster_path": "/ydbm5Ad1nyZq7eywWsw82Wxdsgg.jpg",
        "media_type": "movie",
        "genre_ids": [
            80,
            18,
            9648,
            53
        ],
        "popularity": 64.204,
        "release_date": "2022-10-06",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 44
    },
    {
        "adult": false,
        "backdrop_path": "/p9jmVtmm29dCHDHBFrOR6WNNaeO.jpg",
        "id": 640146,
        "title": "Ant-Man and the Wasp: Quantumania",
        "original_language": "en",
        "original_title": "Ant-Man and the Wasp: Quantumania",
        "overview": "Superhero duo Scott Lang and Hope Van Dyne, together with Hope’s parents Hank Pym and Janet Van Dyne, find themselves exploring the Quantum Realm, interacting with strange new creatures, and embarking on an adventure that will push them beyond the limits of what they thought was possible.",
        "poster_path": "/2uxNnsL4tCK2c4d9FuiCoea4ku7.jpg",
        "media_type": "movie",
        "genre_ids": [
            12,
            878,
            35
        ],
        "popularity": 32.913,
        "release_date": "2023-02-15",
        "video": false,
        "vote_average": 0.0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/oS5q8psMCW0OjlvsGmM5GDboCHR.jpg",
        "id": 714888,
        "title": "Argentina, 1985",
        "original_language": "es",
        "original_title": "Argentina, 1985",
        "overview": "Argentina, 1985 is inspired by the true story of Julio Strassera, Luis Moreno Ocampo and their young legal team of unlikely heroes in their David-vs-Goliath battle in which, under constant threat, they dared to prosecute Argentina’s bloodiest military dictatorship against all odds and in a race against time to bring justice to the victims of the Military Junta.",
        "poster_path": "/nmh7vD2eDVRqFJoCpEzVcfGcPPf.jpg",
        "media_type": "movie",
        "genre_ids": [
            18,
            36
        ],
        "popularity": 724.951,
        "release_date": "2022-09-29",
        "video": false,
        "vote_average": 8.222,
        "vote_count": 63
    },
    {
        "adult": false,
        "backdrop_path": "/aTovumsNlDjof7YVoU5nW2RHaYn.jpg",
        "id": 616820,
        "title": "Halloween Ends",
        "original_language": "en",
        "original_title": "Halloween Ends",
        "overview": "Four years after the events of Halloween in 2018, Laurie has decided to liberate herself from fear and rage and embrace life. But when a young man is accused of killing a boy he was babysitting, it ignites a cascade of violence and terror that will force Laurie to finally confront the evil she can’t control, once and for all.",
        "poster_path": "/3uDwqxbr0j34rJVJMOW6o8Upw5W.jpg",
        "media_type": "movie",
        "genre_ids": [
            27,
            53
        ],
        "popularity": 3957.709,
        "release_date": "2022-10-12",
        "video": false,
        "vote_average": 6.648,
        "vote_count": 636
    },
    {
        "adult": false,
        "backdrop_path": "/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
        "id": 361743,
        "title": "Top Gun: Maverick",
        "original_language": "en",
        "original_title": "Top Gun: Maverick",
        "overview": "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
        "poster_path": "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
        "media_type": "movie",
        "genre_ids": [
            28,
            18
        ],
        "popularity": 1064.73,
        "release_date": "2022-05-24",
        "video": false,
        "vote_average": 8.351,
        "vote_count": 4420
    },
    {
        "adult": false,
        "backdrop_path": "/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
        "id": 634649,
        "title": "Spider-Man: No Way Home",
        "original_language": "en",
        "original_title": "Spider-Man: No Way Home",
        "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        "poster_path": "/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
        "media_type": "movie",
        "genre_ids": [
            28,
            12,
            878
        ],
        "popularity": 952.858,
        "release_date": "2021-12-15",
        "video": false,
        "vote_average": 8.031,
        "vote_count": 15590
    },
    {
        "adult": false,
        "backdrop_path": "/54x6WfreK5gIr6VlXpQYB7u7e1b.jpg",
        "id": 960875,
        "title": "The Chalk Line",
        "original_language": "es",
        "original_title": "Jaula",
        "overview": "After a couple finds a traumatized child of unknown origins, wife Paula must decipher the girl's strange behaviors to unlock her identity and dark past.",
        "poster_path": "/nOmLxwOnUFL5NQSCSY9cwtXFR1m.jpg",
        "media_type": "movie",
        "genre_ids": [
            27,
            53
        ],
        "popularity": 6.825,
        "release_date": "2022-09-09",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 4
    },
    {
        "adult": false,
        "backdrop_path": "/7R1gR2t4JL6raEOuZvbP3y0yl8r.jpg",
        "id": 1024535,
        "title": "Matriarch",
        "original_language": "en",
        "original_title": "Matriarch",
        "overview": "Afflicted with a mysterious disease after surviving an overdose, a woman returns to her childhood home to confront her personal demons but instead discovers a real one.",
        "poster_path": "/77r50i4ya2VLhhMvQpBZIPa9V9B.jpg",
        "media_type": "movie",
        "genre_ids": [
            27
        ],
        "popularity": 53.482,
        "release_date": "2022-10-11",
        "video": false,
        "vote_average": 5.0,
        "vote_count": 11
    },
    {
        "adult": false,
        "backdrop_path": "/naNXYdBzTEb1KwOdi1RbBkM9Zv1.jpg",
        "id": 420634,
        "title": "Terrifier",
        "original_language": "en",
        "original_title": "Terrifier",
        "overview": "On Halloween night, a young woman finds herself as the obsession of a sadistic murderer known as Art the Clown.",
        "poster_path": "/6PQqC4SbY910VvyVad6mvsboILU.jpg",
        "media_type": "movie",
        "genre_ids": [
            27,
            53
        ],
        "popularity": 1524.631,
        "release_date": "2016-10-15",
        "video": false,
        "vote_average": 6.497,
        "vote_count": 703
    },
    {
        "adult": false,
        "backdrop_path": "/xVbppM1xgbskOKgOuV8fbWBWHtt.jpg",
        "id": 762504,
        "title": "Nope",
        "original_language": "en",
        "original_title": "Nope",
        "overview": "Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.",
        "poster_path": "/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg",
        "media_type": "movie",
        "genre_ids": [
            27,
            9648,
            878,
            53
        ],
        "popularity": 576.838,
        "release_date": "2022-07-20",
        "video": false,
        "vote_average": 7.006,
        "vote_count": 1834
    }
]

// const mapStateToProps = ({ moviesReducer }) => {
//     const { popularMovies } = moviesReducer;
//     return { popularMovies }
// }

// const mapActionsToProps = (dispatch) => ({
//     searchMovieName: (params) => { dispatch(action.searchMovieName(params)) },
// })

// export default connect(mapStateToProps, mapActionsToProps)(SearchMovies)

export default SearchMovies
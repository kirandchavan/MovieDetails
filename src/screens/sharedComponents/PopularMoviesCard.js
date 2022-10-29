import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import ImagePath from '../../utils/ImagePath';
import Metrics from '../../themes/Metrics';
import TitleCard from './TitleCard';
import Colors from '../../themes/Colors';
import Layouts from '../../themes/Layouts';
import CategoriesCard from './CategoriesCard';
import { useNavigation } from '@react-navigation/native';

const PopularMoviesCard = ({ item, index }) => {
    const navigation = useNavigation()

    const renderCategory = (item, index) => {
        return (
            <CategoriesCard item={item} sliderWidth={0.6} itemKey={index} />
        )
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate('MovieDescription', { movieId: item.id })}
            key={'d'} activeOpacity={0.8} style={[Layouts.flexDirectionRow, { width: 100 }]}>
            <View style={styles.container} key={'e'}>
                <Image
                    source={ImagePath(item.poster_path)}
                    style={[{ borderRadius: 8, width: 85, height: 128, }]}
                    resizeMode={'contain'}
                />
            </View>
            <View style={Metrics.mt16} key={'f'}>
                <View style={Metrics.ml16} key={'g'}>
                    <TitleCard
                        title={item.title}
                        avgRating={item.vote_average}
                    />
                </View>
                {renderCategory(item, index)}
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginTop: 17,
    },
})

export default PopularMoviesCard
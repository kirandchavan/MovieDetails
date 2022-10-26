import React from 'react';
import { FlatList } from 'react-native';

const ListCard = ({ data,
    key,
    numColumns,
    isHorizontal,
    refreshing,
    onRefresh,
    showsVerticalScrollIndicator,
    showsHorizontalScrollIndicator,
    ListFooterComponent,
    ListEmptyComponent,
    renderItem,
    contentContainerStyle,
    onEndReached,
    onEndThreshold,
    refreshControl
}) => (
    <FlatList
        data={data}
        key={key}
        extraData={data}
        numColumns={numColumns}
        horizontal={isHorizontal}
        refreshing={refreshing}
        onRefresh={onRefresh}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        ListEmptyComponent={ListEmptyComponent}
        ListFooterComponent={ListFooterComponent}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => renderItem(item, index)}
        contentContainerStyle={contentContainerStyle}
        onEndReached={onEndReached}
        onEndThreshold={onEndThreshold}
        refreshControl={refreshControl}
    />
);

export default ListCard;

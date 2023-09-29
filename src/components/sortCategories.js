import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { sortCategoryData } from '../constant';

const SortCategoryData = () => {
  const [activeSort, setActiveSort] = useState('Popular');

  return (
    <View className='flex-row justify-around items-center mx-4 bg-neutral-100 rounded-full p-2 px-4 space-x-2'>
      {sortCategoryData.map((sort, index) => {
        let isActive = sort == activeSort;
        let activeButtonClass = isActive ? 'bg-white shadow' : '';

        return (
          <TouchableOpacity
            key={index}
            onPress={() => setActiveSort(sort)}
            className={`p-3 px-4 rounded-full flex ${activeButtonClass}`}
          >
            <Text>{sort}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SortCategoryData;

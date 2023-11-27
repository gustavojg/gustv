import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {getWeekDaysAroundToday, isCurrentDay} from '../../utils/dateUtils';
import {styles} from './styles';

type DayItem = {
  day: string;
  date: string;
};

const days = getWeekDaysAroundToday();

const DaySelector: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  useEffect(() => {
    days.some(item => {
      const date = item.date.split('.');
      const isToday = isCurrentDay(Number(date[0]), Number(date[1]));
      if (isToday) {
        setSelectedDay(item.day);
        return true;
      }
      return false;
    });
  }, [days]);

  const renderItem = ({item, index}: {item: DayItem; index: number}) => {
    const isSelected = item.day === selectedDay;
    return (
      <TouchableOpacity
        style={[styles.dayItem, isSelected ? styles.selectedDay : null]}
        onPress={() => setSelectedDay(item.day)}>
        <Text style={styles.dayText}>{item.day}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={getWeekDaysAroundToday()}
        renderItem={renderItem}
        keyExtractor={item => item.day}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default DaySelector;

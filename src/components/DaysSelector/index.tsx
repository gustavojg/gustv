import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {getWeekDaysAroundToday, isCurrentDay} from '../../utils/dateUtils';
import {styles} from './styles';
import HeaderButton from '../HeaderButton';
import {CURRENT_PROGRAM_BG_COLOR} from '../../constants';

type DayItem = {
  day: string;
  date: string;
};

interface DaySelectorProps {
  onPress: any;
}

const DaySelector: React.FC<DaySelectorProps> = ({onPress}) => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [favSelected, setFavSelected] = useState<boolean>(false);

  useEffect(() => {
    const days = getWeekDaysAroundToday();
    days.some(item => {
      const date = item.date.split('.');
      const isToday = isCurrentDay(Number(date[0]), Number(date[1]));
      if (isToday) {
        setSelectedDay(item.day);
        return true;
      }
      return false;
    });
  }, []);

  const renderItem = ({item}: {item: DayItem}) => {
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
      <View style={styles.favButton}>
        <HeaderButton
          icon="star"
          onPress={() => {
            onPress();
            setFavSelected(!favSelected);
          }}
          color={favSelected ? 'white' : CURRENT_PROGRAM_BG_COLOR}
        />
      </View>
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

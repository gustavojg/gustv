import React from 'react';
import {
  ScrollView,
  View,
  FlatList,
  ListRenderItem,
  Text,
  ListRenderItemInfo,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ProgramRow} from '../ProgramRow';
import {Channel} from '../../models/ChannelModel';
import {styles} from './styles';
import TimeIndicator from '../TimeIndicator';
import ChannelsList from '../ChannelsList';
import CurrentTime from '../CurrentTime';
import {TIME_WIDTH_UNIT} from '../../constants';
import DaySelector from '../DaysSelector';
import useChannelGuide from './ChannelGuideHook';
import {ImageKeys, images} from '../../constants/images';

interface ChannelGuideProps {
  channels: Channel[];
}

const renderItem: ListRenderItem<Channel> = ({item}) => {
  return (
    <View style={styles.programContainer}>
      <View>
        <ProgramRow
          schedules={item.schedules}
          timeUnitWidth={TIME_WIDTH_UNIT}
        />
      </View>
    </View>
  );
};

const renderFixedItem = ({item}: ListRenderItemInfo<Channel>) => (
  <View style={styles.channelContainer}>
    <Image source={images[item.id as ImageKeys]} style={styles.logo} />
  </View>
);

export const ChannelGuide: React.FC<ChannelGuideProps> = ({channels}) => {
  const {
    currentTimeIndicatorPosition,
    fixedListRef,
    scrollViewRef,
    scrollListRef,
    buttonRef,
    isAutoScrolling,
    handleManualScroll,
    handleContentSizeChange,
    onScroll,
    enableAutoScroll,
  } = useChannelGuide();

  return (
    <View style={styles.mainContainer}>
      <DaySelector />
      <View style={styles.container}>
        <View style={styles.fixedColumn}>
          <FlatList
            ref={fixedListRef}
            data={channels}
            renderItem={renderFixedItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>
        <ScrollView
          horizontal
          onScrollEndDrag={handleManualScroll}
          onScrollBeginDrag={handleManualScroll}
          ref={scrollViewRef}
          scrollEventThrottle={16}
          onContentSizeChange={width => {
            handleContentSizeChange(width);
          }}
          style={styles.horizontalScrollView}>
          <ChannelsList data={channels} />
          <View style={styles.horrizontalContainer}>
            <CurrentTime
              currentTimeIndicatorPosition={currentTimeIndicatorPosition}
            />
            <TimeIndicator />
            <FlatList
              ref={scrollListRef}
              data={channels}
              onScroll={onScroll}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              scrollEventThrottle={16}
            />
          </View>
        </ScrollView>
      </View>
      {!isAutoScrolling && (
        <TouchableOpacity
          ref={buttonRef}
          onPress={enableAutoScroll}
          style={styles.button}>
          <Text style={styles.text}>NOW</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

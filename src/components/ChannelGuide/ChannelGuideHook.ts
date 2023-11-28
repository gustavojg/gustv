import {useEffect, useRef, useState} from 'react';
import {Dimensions, FlatList, ScrollView} from 'react-native';
import {Channel} from '../../models/ChannelModel';
import {calculateTimeIndicatorPosition} from '../../utils/dateUtils';
import {TouchableOpacity} from 'react-native';

const useChannelGuide = () => {
  const fixedListRef = useRef<FlatList<Channel>>(null);
  const scrollListRef = useRef<FlatList<Channel>>(null);
  const scrollViewRef = useRef<ScrollView>(null);
  const buttonRef = useRef<TouchableOpacity>(null);
  const [contentWidth, setContentWidth] = useState<number>(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean | undefined>(
    true,
  );
  const [currentTimeIndicatorPosition, setCurrentTimeIndicatorPosition] =
    useState(0);

  useEffect(() => {
    if (contentWidth > 0) {
      setCurrentTimeIndicatorPosition(
        calculateTimeIndicatorPosition(contentWidth),
      );
      isAutoScrolling && scrollToCurrentTime(contentWidth);

      const interval = setInterval(() => {
        setCurrentTimeIndicatorPosition(
          calculateTimeIndicatorPosition(contentWidth),
        );
        if (isAutoScrolling) {
          scrollToCurrentTime(contentWidth);
        }
      }, 5000);
      if (!isAutoScrolling) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
  }, [isAutoScrolling, contentWidth]);

  const handleContentSizeChange = (width: number) => {
    setContentWidth(width);
  };

  const enableAutoScroll = () => {
    setIsAutoScrolling(true);
  };

  const handleManualScroll = () => {
    setIsAutoScrolling(false);
  };

  const onScroll = (event: any) => {
    fixedListRef.current?.scrollToOffset({
      offset: event.nativeEvent.contentOffset.y,
      animated: false,
    });
  };

  const scrollToCurrentTime = (cw: number) => {
    scrollViewRef.current?.scrollTo({
      x:
        calculateTimeIndicatorPosition(cw) - Dimensions.get('window').width / 3,
      animated: true,
    });
  };

  return {
    currentTimeIndicatorPosition,
    fixedListRef,
    scrollViewRef,
    scrollListRef,
    buttonRef,
    isAutoScrolling,
    setCurrentTimeIndicatorPosition,
    handleManualScroll,
    handleContentSizeChange,
    scrollToCurrentTime,
    enableAutoScroll,
    onScroll,
  };
};

export default useChannelGuide;

import React from 'react';
import {View, FlatList, ListRenderItem} from 'react-native';
import {Channel} from '../../models/ChannelModel';
import {styles} from './styles';

interface ChannelsListProps {
  data: Channel[];
}

export const ChannelsList: React.FC<ChannelsListProps> = ({data}) => {
  const renderItem: ListRenderItem<Channel> = () => (
    <View style={styles.channelContainer} />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={styles.list}
    />
  );
};

export default ChannelsList;

import {ChannelsData} from '../models/ChannelModel';

export const fetchChannels = async (): Promise<ChannelsData> => {
  const response = await fetch('http://192.168.1.107:1337/epg');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

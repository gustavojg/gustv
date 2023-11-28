import Config from 'react-native-config';
import {ChannelsData} from '../models/ChannelModel';
import {Programme} from '../models/ProgrammeModel';

const apiUrl = Config.API_URL;

export const fetchChannels = async (): Promise<ChannelsData> => {
  const response = await fetch(`${apiUrl}/epg`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

export const fetchProgrammeInfo = async (id: string): Promise<Programme> => {
  const response = await fetch(`${apiUrl}/program/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

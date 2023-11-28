import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import {Channel, ChannelsData, FavChannel} from '../models/ChannelModel';
import {Programme} from '../models/ProgrammeModel';
import {
  fetchChannels,
  fetchFavChannels,
  fetchProgrammeInfo,
} from '../services/channelService';

interface ChannelContextProps {
  channels: Channel[];
  favChannelsData: Channel[];
  isLoading: boolean;
  error: string | null;
  favChannels: FavChannel[];
  isFavLoading: boolean;
  errorFav: string | null;
  programmeInfo: Programme | null;
  programmeLoading: boolean;
  programmeError: string | null;
  fetchProgramme: (id: string) => void;
}

interface ChannelProviderProps {
  children: ReactNode;
}

export const ChannelContext = createContext<ChannelContextProps>({
  channels: [],
  favChannelsData: [],
  isLoading: false,
  error: null,
  favChannels: [],
  isFavLoading: false,
  errorFav: null,
  programmeInfo: null,
  programmeLoading: false,
  programmeError: null,
  fetchProgramme: () => {},
});

function filterChannels(channels: Channel[], filterIds: FavChannel[]) {
  const idsToFilter = filterIds.map(channel => channel.id);
  return channels.filter(channel => idsToFilter.includes(channel.id));
}

export const ChannelProvider: React.FC<ChannelProviderProps> = ({children}) => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [favChannels, setFavChannels] = useState<Channel[]>([]);
  const [isFavLoading, setIsFavLoading] = useState<boolean>(true);
  const [errorFav, setErrorFav] = useState<string | null>(null);

  const [programmeInfo, setProgrammeInfo] = useState<Programme | null>(null);
  const [programmeLoading, setProgrammeLoading] = useState<boolean>(false);
  const [programmeError, setProgrammeError] = useState<string | null>(null);

  const [favChannelsData, setFavChannelsData] = useState<Channel[]>([]);

  useEffect(() => {
    const loadChannels = async () => {
      try {
        const data: ChannelsData = await fetchChannels();
        setChannels(data.channels);
      } catch (err) {
        setError('Error fetching channels');
      } finally {
        setIsLoading(false);
      }
    };

    const loadFavChannels = async () => {
      try {
        const data: ChannelsData = await fetchFavChannels();
        setFavChannels(data.channels);
      } catch (err) {
        setErrorFav('Error fetching channels');
      } finally {
        setIsFavLoading(false);
      }
    };
    loadFavChannels();
    loadChannels();
  }, []);

  useEffect(() => {
    setFavChannelsData(filterChannels(channels, favChannels));
  }, [channels, favChannels]);

  const fetchProgramme = async (id: string) => {
    setProgrammeLoading(true);
    setProgrammeError(null);

    try {
      const programmeData: Programme = await fetchProgrammeInfo(id);
      setProgrammeInfo(programmeData);
    } catch (err) {
      setProgrammeError('Error fetching programme information');
    } finally {
      setProgrammeLoading(false);
    }
  };

  return (
    <ChannelContext.Provider
      value={{
        channels,
        favChannelsData,
        isLoading,
        error,
        favChannels,
        isFavLoading,
        errorFav,
        programmeInfo,
        programmeLoading,
        programmeError,
        fetchProgramme,
      }}>
      {children}
    </ChannelContext.Provider>
  );
};

export const useChannel = () => useContext(ChannelContext);

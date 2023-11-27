import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import {Channel, ChannelsData} from '../models/ChannelModel';
import {Programme} from '../models/ProgrammeModel';
import {fetchChannels, fetchProgrammeInfo} from '../services/channelService';

interface ChannelContextProps {
  channels: Channel[];
  isLoading: boolean;
  error: string | null;
  fetchProgramme: (id: string) => void;
  programmeInfo: Programme | null;
  programmeLoading: boolean;
  programmeError: string | null;
}

interface ChannelProviderProps {
  children: ReactNode;
}

export const ChannelContext = createContext<ChannelContextProps>({
  channels: [],
  isLoading: false,
  error: null,
  fetchProgramme: () => {},
  programmeInfo: null,
  programmeLoading: false,
  programmeError: null,
});

export const ChannelProvider: React.FC<ChannelProviderProps> = ({children}) => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [programmeInfo, setProgrammeInfo] = useState<Programme | null>(null);
  const [programmeLoading, setProgrammeLoading] = useState<boolean>(false);
  const [programmeError, setProgrammeError] = useState<string | null>(null);

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

    loadChannels();
  }, []);

  // Función para cargar información de un programa en particular
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
        isLoading,
        error,
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
